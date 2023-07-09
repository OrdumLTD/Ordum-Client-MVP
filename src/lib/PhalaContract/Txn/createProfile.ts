'use client'

import { CertificateData} from "@phala/sdk";
import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
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
    accountId:AccountId,
    description: string,
    allowedAccounts: Array<AccountId>|null,
    categories: Array<Categories>,
    members: Array<[AccountId,MemberRole]>|null,
    role: UserRole
    
) =>{

    // Query txn
    const data = await contract.query.createApplicantProfile(
        certificate as any,
        {},
        name,
        accountId,
        description,
        allowedAccounts,
        categories,
        members,
        role
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
        allowedAccounts,
        categories,
        members,
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



// Grant Issuer Function 

export const createIssuerProfile = async(
    contract: ContractPromise,
    signer: Signer,
    account: InjectedAccountWithMeta,
    certificate: CertificateData,
    // Pure params
    name: string,
    chain: Chains,
    categories: Array<Categories>,
    description: string,
    mission: string,
    members: Array<[AccountId,MemberRole]> |null,
    allowedAccounts:Array<AccountId>,
    role: UserRole
) =>{

    
    // Query txn
    const data = await contract.query.createIssuerProfile(
        certificate as any,
        {},
        name,
        chain,
        categories,
        description,
        mission,
        members,
        allowedAccounts,
        role
    )
    
    // Gas params
    const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };
    // Txn data
    const txnData = contract.tx.createIssuerProfile(
        options,
        name,
        chain,
        categories,
        description,
        mission,
        members,
        allowedAccounts,
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
        };
        // Events
        events?.map(event =>{
            console.log(event.toHuman())
        })
    })
    
}