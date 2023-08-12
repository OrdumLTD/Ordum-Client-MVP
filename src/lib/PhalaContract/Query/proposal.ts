'use client'


import { CertificateData, PinkContractPromise} from "@phala/sdk";
import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { Categories,Chains,AccountId, MemberRole, UserRole} from "../Types/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";
import {ApiPromise} from '@polkadot/api'
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { onSignCertificate } from "../Utils/phalaCertificate";


// Get latest proposal id
const getLatestProposalId = async(
    contract: PinkContractPromise,
    account: InjectedAccountWithMeta,
    certificate: CertificateData,
    api: ApiPromise,
    signer: Signer
):Promise<ContractCallOutcome> => {

    if(certificate){
        const data = await contract.query.fetchLatestProposalId(account.address, {cert:certificate});

        return data
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const data = await contract.query.fetchLatestProposalId(account.address, {cert:certificate});
        
       return data
    }
}


// Get Proposal
const getProposal = async(
    contract: PinkContractPromise,
    account: InjectedAccountWithMeta,
    certificate: CertificateData,
    api: ApiPromise,
    signer: Signer,
    id: number
) => {

    if(certificate){
        const data = await contract.query.fetchProposal(account.address, {cert:certificate},id);

        return data
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const data = await contract.query.fetchMilestone(account.address, {cert:certificate},id);
        
       return data
    }

}


// Get Milestone
const getMilestone = async(
    contract: PinkContractPromise,
    account: InjectedAccountWithMeta,
    certificate: CertificateData,
    api: ApiPromise,
    signer: Signer,
    proposalId: number,
    mileNo: number | null
) => {

    
    
    if(certificate){
        const data = await contract.query.fetchMilestone(account.address, {cert:certificate},proposalId,mileNo);

        return data
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const data = await contract.query.fetchMilestone(account.address, {cert:certificate},proposalId,mileNo);
        
       return data
    }

}
