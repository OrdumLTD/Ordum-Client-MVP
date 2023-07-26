'use client';

import { CertificateData} from "@phala/sdk";
import type { InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import { Categories,Chains,AccountId, MemberRole, UserRole} from "../Types/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";
import { Dispatch } from "react";


// Submit New Proposal
const submitProposal = async(
    proposalStatus: Dispatch<boolean>,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:ContractPromise,
    //Params
    chains: Chains,
    refNo: number | null,
    fileCid: string,
    mem: number
) => {

    // Dry Run TXN
    const data = await contract.query.addProposal(
        certificate as any,
        {},
        chains,
        refNo,
        fileCid,
        mem
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
        chains,
        refNo,
        fileCid,
        mem
    );

    txn.signAndSend(account.address,{signer},({isFinalized,events}) =>{
        if (isFinalized){
            console.log("Add Proposal on contract finalized")
        }
        events.forEach(({event:{method, section}})=>{
            if (method === 'ExtrinsicSuccess') {
                console.log(`✅  Success`);
                proposalStatus(true)
            }
        })
    })

     
}


// Submit Milestone
const submitMilestone = async(
    milestoneStatus: Dispatch<boolean>,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:ContractPromise,
    // Params
    proposalId: number,
    fileCid: string,
    mem: number
) =>{

    // Dry Run TXN
    const data = await contract.query.AddMilestone(
        certificate as any,
        {},
        proposalId,
        fileCid,
        mem
    );

     // Gas params
     const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };

    // Call data 
    const txn = contract.tx.AddMilestone(
        certificate as any,
        options,
        proposalId,
        fileCid,
        mem
    );

    txn.signAndSend(account.address,{signer},({isFinalized,events}) =>{
        if (isFinalized){
            console.log(`Add Milestone per project ${proposalId} on contract finalized`)
        }
        events.forEach(({event:{method, section}})=>{
            if (method === 'ExtrinsicSuccess') {
                console.log(`✅  Success`);
                milestoneStatus(true)
            }
        })
    })

}


// Edit Milestone
const editMilestone = async(
    editMilestoneStatus: Dispatch<boolean>,
    account:InjectedAccountWithMeta,
    signer: Signer,
    certificate: CertificateData,
    contract:ContractPromise,
    // Params
    projectId: number,
    mileNo: number,
    fileCid: string,
    mem: number
) =>{

    // Dry Run TXN
    const data = await contract.query.editMilestone(
        certificate as any,
        {},
        projectId,
        mileNo,
        fileCid,
        mem
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
        projectId,
        mileNo,
        fileCid,
        mem
    );

    txn.signAndSend(account.address,{signer},({isFinalized,events}) =>{
        if (isFinalized){
            console.log(`edited Milestone ${mileNo} on Project ${projectId}  on contract finalized`)
        }
        events.forEach(({event:{method, section}})=>{
            if (method === 'ExtrinsicSuccess') {
                console.log(`✅  Success`);
                editMilestoneStatus(true)
            }
        })
    })

}


// Pivot Milestone
const pivotMilestone = async() =>{

}


// Submit Pivot Milestone
const addPivotilestone = async() =>{
    
}