'use client'

// Mongo DB ---> FileContent
// FileContent --> ( FileData & File Size) ---> {D & S}
// ---> StoreFile ( D, S )
// ----> Berlin Gateway Crust
// NOTE: Experiment with folder association storage

import {create} from "ipfs-http-client";
import { AccountId } from "../PhalaContract/Types/types";
import { Signer } from "@polkadot/types/types";
import {stringToHex, u8aToHex} from "@polkadot/util";
import { ApiPromise} from "@polkadot/api";
import { Dispatch } from "react";


const ipfsGateway = 'https://ipfs-gw.decloud.foundation';
// --------------------------------TYPES--------------------------------------
export type ReturnIpfs = {
    cid:any,
    path:any,
    size:number,
    pinData?: Response
}

// ----- Pinning function ----------------


const ipfsPinningService = 'https://pin.crustcode.com/psa';

const pin = async(authHeader: string, cid: string,team_id:string) => {
    if (cid.length !== 46) {
        throw new Error('CID len err');
    }

    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + authHeader,
    };

    const data = {
        cid,
        name:team_id
    };
    
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    };

    const body = await fetch(
        ipfsPinningService + '/pins',
        requestOptions
    )

    return body;
}



// ---------- Place order function ----------
export const placeNewOrder =async (
    placed:Dispatch<boolean>,
    api:ApiPromise,account:string,
    signer:Signer,cid:string,
    size:number,
    team_id:string
    ) => {

    const memo = `Ordum/${team_id}`;
    const txn = api.tx.market.placeStorageOrder(cid, size, 0, memo);

    txn.signAndSend(account,{signer},({events,isFinalized})=>{
        if (isFinalized){
            events.forEach(({event:{method, section}})=>{
                if (method === 'ExtrinsicSuccess') {
                    console.log(`✅  Place storage order success!`);
                    placed(true)
                }
            })
        }
    })
    
}


const placeOrder =async (
    placed: Dispatch<boolean>,
    api:ApiPromise,account:string,
    signer:Signer,cid:string,
    size:number, project_no:number,
    milestone_no:number,team_id:string
    ) => {

    const memo = `Ordum/${team_id}/${project_no}/${milestone_no}`;
    const txn = api.tx.market.placeStorageOrder(cid, size, 0, memo);

    txn.signAndSend(account,{signer},({events,isCompleted,isFinalized})=>{
        if (isFinalized){
            events.forEach(({event:{method, section}})=>{
                if (method === 'ExtrinsicSuccess') {
                    console.log(`✅  Place storage order success!`);
                    placed(true)
                }
            })
        }
    })
}

//----------------------------------------------


// This function should be called after the proposal is onchain and the contract is being updated
// Obtain the folder from the database & project_no from contract & team_id from the contract

export const newFileIpfs = async(
    placed:Dispatch<boolean>,
    api:ApiPromise,
    account:string, signer:Signer,
    file:any,
    team_id:string
    ):Promise<ReturnIpfs> =>{
    
    let returnData:ReturnIpfs = {
        cid:"",
        path:"",
        size:0,
        pinData:undefined
    }; 
    // Signature of the address
    const hexAddr = stringToHex(account);
    const {signature} = await signer.signRaw({data:hexAddr,address:account,type:'payload'});
     // compile the sig to autHeader
    const authHeaderRaw = `sub-${account}:${signature}`;
    const authHeader = Buffer.from(authHeaderRaw).toString('base64');

    const ipfs = create({
        url: ipfsGateway + '/api/v0',
        headers: {
          authorization: 'Basic ' + authHeader
        }
    });
    // Add the folder to ipfs
    const isOnline = ipfs.isOnline();
    if (isOnline) {

        // test encoding the file and store the encoded format (Hex)
        const {cid,size,path} = await ipfs.add({path:`ordum/${team_id}`,content:file});
        returnData.cid = cid;
        returnData.size = size;
        returnData.path = path;

        // ------ Pin the file --------//
        const pinData = await pin(authHeader,cid.toString(),team_id); 
        returnData.pinData = pinData;

        // ------ Place order in Crust -----------
        await placeNewOrder(placed,api,account,signer,cid.toString(),size,team_id);

    }else{
        // connect to another node url function
        throw Error("Ipfs Node is not Online")
    }

    return returnData

}





const uploadFile = async(account:AccountId,signer:Signer,file:any,milestoneNo:number) =>{

    // Signature of the address
    //@ts-ignore
    const {signature} = await signer.signRaw({data:account});
     // compile the sig to autHeader
    const authHeaderRaw = `sub-${account}:${signature}`;
    const authHeader = Buffer.from(authHeaderRaw).toString('base64');

    const ipfs = create({
        url: ipfsGateway + '/api/v0',
        headers: {
          authorization: 'Basic ' + authHeader
        }
    });
    // Add the file to existing folder per user
    const isOnline = ipfs.isOnline();
    if (isOnline) {

    }else{
        throw Error("Ipfs Node is not Online")
    }

}


