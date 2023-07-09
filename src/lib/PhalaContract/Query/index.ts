'use client'


import { CertificateData} from "@phala/sdk";
import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { Categories,Chains,AccountId, MemberRole, UserRole} from "../Types/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";
import {ApiPromise} from '@polkadot/api'
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { onSignCertificate } from "../Utils/phalaCertificate";


// Certificate handling

// Applicant Profile Query
// Pass the context value directly
export const getApplicant = async(
    contract:ContractPromise,
    api:ApiPromise,
    signer: Signer,
    account:InjectedAccountWithMeta,
    Certificate?: CertificateData,
    
):Promise<ContractCallOutcome> =>{

    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const data = await contract.query.getApplicantProfile( Certificate as any,{});
        
        return data
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const data = await contract.query.getApplicantProfile( certificate as any,{});
        
       return data
    }
}

// Issuer Profile Query
export const getIssuer = async(
    contract:ContractPromise,
    api:ApiPromise,
    signer: Signer,
    account:InjectedAccountWithMeta,
    Certificate?: CertificateData,
    
):Promise<ContractCallOutcome> =>{

    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const returnData = await contract.query.getIssuerProfile( Certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const returnData = await contract.query.getApplicantProfile( certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }
}
