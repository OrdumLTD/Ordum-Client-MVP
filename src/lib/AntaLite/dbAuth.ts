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
    
) => {

    const randomData = await contract.query.getRandom( certificate as any,{});
    // Dry Run TXN
    const data = await contract.query.setPasscode(
        certificate as any,
        {},
        randomData.result.asOk
    );

     // Gas params
     const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };

    // Call data 
    const txn = contract.tx.addProposal(
        certificate as any,
        options,
        randomData.result.asOk,
       
    );

    txn.signAndSend(account.address,{signer},({isFinalized,events}) =>{
        if (isFinalized){
            console.log("Add Proposal on contract finalized")
        }
        events.forEach(({event:{method, section}})=>{
            if (method === 'ExtrinsicSuccess') {
                console.log(`✅  Success`);
                passcodeStatus(true)
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
    
):Promise<ContractCallOutcome> =>{

    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const data = await contract.query.getPasscode( Certificate as any,{});
        
        return data
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const data = await contract.query.getPasscode( certificate as any,{});
        
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