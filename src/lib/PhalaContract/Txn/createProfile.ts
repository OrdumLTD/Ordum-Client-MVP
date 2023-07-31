'use client'

import { CertificateData} from "@phala/sdk";
import type { InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import { Categories,Chains,AccountId, MemberRole, UserRole} from "../Types/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";


export const createApplicantProfile = async(
    profileCreationStatus:(v:boolean)=>void,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:ContractPromise,
    //Pure params
    name: string,
    accountId: AccountId | null,
    description: string,
    mission: string,
    categories: Array<Categories> | null,
    chain: Array<Chains>,
    members: Array<[AccountId, MemberRole]> | null,
    links: Array<string> | null
    
) =>{

    // Query txn
    const data = await contract.query.createApplicantProfile(
        certificate as any,
        {},
        name,
        accountId,
        description,
        mission,
        categories,
        chain,
        members,
        links,
        
    )
    
    // Gas params
    const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };
    // Txn data
    const txnData = contract.tx.createApplicantProfile(
        options,
        name,
        accountId,
        description,
        mission,
        categories,
        chain,
        members,
        links,
        
    );

   
    // Sign and Send
    
    txnData.signAndSend(account.address,{signer},({isInBlock,events,isCompleted,isFinalized})=>{
        if(isInBlock){
            console.log("In Block")
        }else if(isCompleted){
            console.log("Completed")
        }else if(isFinalized){
            console.log("Finalized Applicant Profile Creation")
            profileCreationStatus(true)
        };
        // Events
        events?.map(event =>{
            console.log(event.toHuman())
        })
    })
    
}




export const createIndividualProfile = async(
    profileCreationStatus:(v:boolean)=>void,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:ContractPromise,
    //Pure params
    name: string,
    description: string,
    categories: Array<Categories> | null,
    chain: Array<Chains>,
    links: Array<string> | null,
    role: UserRole

) =>{

    // Query txn
    const data = await contract.query.createIndividualProfile(
        certificate as any,
        {},
        name,
        description,
        categories,
        chain,     
        links,
        role
    )
    
    // Gas params
    const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };
    // Txn data
    const txnData = contract.tx.createIndividualProfile(
        options,
        name,
        description,
        categories,
        chain,
        links,
        role
    );

   
    // Sign and Send
    
    txnData.signAndSend(account.address,{signer},({isInBlock,events,isCompleted,isFinalized})=>{
        if(isInBlock){
            console.log("In Block")
        }else if(isCompleted){
            console.log("Completed")
        }else if(isFinalized){
            console.log("Finalized Applicant Profile Creation")
            profileCreationStatus(true)
        };
        // Events
        events?.map(event =>{
            console.log(event.toHuman())
        })
    })
    
}

