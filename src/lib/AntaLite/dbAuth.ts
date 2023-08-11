'use client';

import { CertificateData, PinkContractPromise} from "@phala/sdk";
import type { InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";
import { Dispatch } from "react";
import {ApiPromise} from '@polkadot/api'
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { onSignCertificate } from "../PhalaContract/Utils/phalaCertificate";




// Set New Passcode
export const setPasscode = async(
    passcodeStatus: Dispatch<boolean>,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:PinkContractPromise,
    api: ApiPromise,
    name: String
    
) => {
    // Getting Random Data
    console.log("Getting random Data")
    
    const randomData = await contract.query.getRandom(account.address,{cert: certificate});
    console.log("Random \n")
    console.log(randomData.output.toJSON().valueOf()["ok"]["ok"])
    // Dry Run TXN
    const data = await contract.query.setPasscode(
        account.address,
        {cert: certificate},
        randomData.output.toJSON().valueOf()["ok"],
        name
    );

     // Gas params
     const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };

    const random = randomData.output.toJSON().valueOf()["ok"]["ok"];
    // Call data 
    const txn = contract.tx.setPasscode(
        options,
        random,
        name
    );

    console.log(" Setting up passcode in the contract")
    txn.signAndSend(account.address,{signer},({isFinalized,events}) =>{
        if (isFinalized){
            console.log("Add Proposal on contract finalized")
        }
        events.forEach(async({event:{method, section}})=>{
            if (method === 'ExtrinsicSuccess') {
                console.log(`✅  Success Placed User's Secret to Contract`);
                // Waiting function
                const secretValue = await getPasscode(contract,api,signer,account,certificate);
                if(secretValue.output.toJSON().valueOf()["ok"]["ok"]){
                    console.log("Setting pascode status to True 1st attempt")
                    passcodeStatus(true)
                }else{
                    // Wait for 2 seconds
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    const secretValue = await getPasscode(contract,api,signer,account,certificate);
                    if(secretValue.output.toJSON().valueOf()["ok"]["ok"]){
                        console.log("Setting pascode status to True 2nd attempt")
                        passcodeStatus(true)
                    }else{
                        console.log("Setting pascode status Unexpected error")
                        passcodeStatus(false)
                    }
                }
                
                
            }
        })
    })

     
}


// Getting the stored passcode per user's address
export const getPasscode = async(
    contract:PinkContractPromise,
    api:ApiPromise,
    signer: Signer,
    account:InjectedAccountWithMeta,
    Certificate?: CertificateData,
    
):Promise<ContractCallOutcome>=>{
    console.log("Getting the stored passcode")
    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const data = await contract.query.getPasscode(account.address, {cert:Certificate});

        return data
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const data = await contract.query.getPasscode(account.address, {cert:certificate});
        
       return data
    }
}


// Generating random number
// const getRandom = async(
//     contract:ContractPromise,
//     api:ApiPromise,
//     signer: Signer,
//     account:InjectedAccountWithMeta,
//     Certificate?: CertificateData,
    
// ):Promise<ContractCallOutcome> =>{

//     // Check if Certificate is there, If not then sign the Cert
//     if(Certificate){
//         const data = await contract.query.getRandom( Certificate as any,{});
        
//         return data
//     }else{
//         // Sign the new Certificate and it will update the cache
//         const certificate = await onSignCertificate(api,signer,account);
//         const data = await contract.query.getRandom( certificate as any,{});
        
//        return data
//     }
// }