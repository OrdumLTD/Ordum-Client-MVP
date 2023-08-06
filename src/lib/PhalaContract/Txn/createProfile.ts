'use client'

import { CertificateData, PinkContractPromise} from "@phala/sdk";
import type { InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import { Categories,Chains,AccountId, MemberRole, UserRole} from "../Types/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { Dispatch } from "react";
import { getPasscode, setPasscode } from "@/lib/AntaLite/dbAuth";
import { ApiPromise } from '@polkadot/api'


export const createTeamApplicantProfile = async(
    profileCreationStatus: Dispatch<boolean>,
    passcodeStatus: Dispatch<boolean>,
    setSecret: Dispatch<ContractCallOutcome>,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:PinkContractPromise,
    api:ApiPromise,
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
    console.log("Profile Creation Initiates")

    // Query txn
    const data = await contract.query.createApplicantProfile(
        account.address,
        {cert:certificate},
        name,
        accountId,
        description,
        mission,
        categories,
        chain,
        members,
        links   
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
        links
        
    );

   
    // Sign and Send
    
    txnData.signAndSend(account.address,{signer},async({isInBlock,events,isCompleted,isFinalized})=>{
        if(isInBlock){
            console.log("In Block")
        }else if(isCompleted){
            console.log("Completed")

            console.log("Finalized Applicant Profile Creation")
            profileCreationStatus(true)

            // Set the passcode
            await setPasscode(passcodeStatus,account,signer,certificate,contract,name);

            // Fetch the secret
            let returnValue = await getPasscode(contract,api,signer,account,certificate);
            console.log("Return Value Secret: "+ returnValue.result.asOk);
            setSecret(returnValue)

        }else if(isFinalized){
            console.log("Finalized Applicant Profile Creation")
            profileCreationStatus(true)

            // Set the passcode
            await setPasscode(passcodeStatus,account,signer,certificate,contract,name);

            // Fetch the secret
            let returnValue = await getPasscode(contract,api,signer,account,certificate);
            console.log("Return Value Secret: "+ returnValue.result.asOk);
            setSecret(returnValue)
        };
        // Events
        events?.map(event =>{
            console.log(event.toHuman())
        })
    })

    
}




export const createIndividualProfile = async(
    profileCreationStatus:(v:boolean)=>void,
    passcodeStatus: Dispatch<boolean>,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:PinkContractPromise,
    api:ApiPromise,
    //Pure params
    name: string,
    description: string,
    categories: Array<Categories> | null,
    chain: Array<Chains>,
    links: Array<string> | null,
    role: UserRole

):Promise<ContractCallOutcome> =>{

    let returnValue: ContractCallOutcome;
    // Query txn
    const data = await contract.query.createIndividualProfile(
        account.address,
        {cert:certificate},
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
    
    txnData.signAndSend(account.address,{signer},async({isInBlock,events,isCompleted,isFinalized})=>{
        if(isInBlock){
            console.log("In Block")
        }else if(isCompleted){
            console.log("Completed")

            console.log("Finalized Applicant Profile Creation")

            profileCreationStatus(true)

              // Set the passcode
              await setPasscode(passcodeStatus,account,signer,certificate,contract,name);

              // Fetch the secret
              returnValue = await getPasscode(contract,api,signer,account,certificate);

        }else if(isFinalized){
            console.log("Finalized Applicant Profile Creation")

            profileCreationStatus(true)

              // Set the passcode
              await setPasscode(passcodeStatus,account,signer,certificate,contract,name);

              // Fetch the secret
              returnValue = await getPasscode(contract,api,signer,account,certificate);
        };
        // Events
        events?.map(event =>{
            console.log(event.toHuman())
        })
    })
    
    return returnValue
}

