"use client";

import { CertificateData, PinkContractPromise } from "@phala/sdk";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import {
  Categories,
  Chains,
  AccountId,
  MemberRole,
  UserRole,
} from "../Types/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";
import { Dispatch } from "react";

// Submit New Proposal
export const submitProposal = async (
  proposalStatus: Dispatch<boolean>,
  account: InjectedAccountWithMeta,
  signer: Signer,
  certificate: CertificateData,
  contract: PinkContractPromise,
  //Params
  chains: Chains,
  refNo: number | null,
  fileCid: string,
  mem: number,
) => {
  // Dry Run TXN
  const data = await contract.query.addProposal(
    account.address,
    { cert: certificate },
    chains,
    refNo,
    fileCid,
    mem,
  );

  // Gas params
  const options = {
    gasLimit: (data.gasRequired as any).refTime,
    storageDepositLimit: data.storageDeposit
      ? data.storageDeposit.asCharge
      : null,
  };

  // Call data
  const txn = contract.tx.addProposal(options, chains, refNo, fileCid, mem);

  txn.signAndSend(account.address, { signer }, ({ isFinalized, events }) => {
    if (isFinalized) {
      console.log("Add Proposal on contract finalized");
    }
    events.forEach(({ event: { method, section } }) => {
      if (method === "ExtrinsicSuccess") {
        console.log(`✅  Success`);
        proposalStatus(true);
      }
    });
  });
};

// Submit Milestone
export const submitMilestone = async (
  milestoneStatus: Dispatch<boolean>,
  account: InjectedAccountWithMeta,
  signer: Signer,
  certificate: CertificateData,
  contract: PinkContractPromise,
  // Params
  proposalId: number,
  fileCid: string,
  mem: number,
) => {
  // Dry Run TXN
  const data = await contract.query.AddMilestone(
    account.address,
    { cert: certificate },
    proposalId,
    fileCid,
    mem,
  );

  // Gas params
  const options = {
    gasLimit: (data.gasRequired as any).refTime,
    storageDepositLimit: data.storageDeposit
      ? data.storageDeposit.asCharge
      : null,
  };

  // Call data
  const txn = contract.tx.AddMilestone(options, proposalId, fileCid, mem);

  txn.signAndSend(account.address, { signer }, ({ isFinalized, events }) => {
    if (isFinalized) {
      console.log(
        `Add Milestone per project ${proposalId} on contract finalized`,
      );
    }
    events.forEach(({ event: { method, section } }) => {
      if (method === "ExtrinsicSuccess") {
        console.log(`✅  Success`);
        milestoneStatus(true);
      }
    });
  });
};

// Edit Milestone
export const editMilestone = async (
  editMilestoneStatus: Dispatch<boolean>,
  account: InjectedAccountWithMeta,
  signer: Signer,
  certificate: CertificateData,
  contract: PinkContractPromise,
  // Params
  projectId: number,
  mileNo: number,
  fileCid: string,
  mem: number,
) => {
  // Dry Run TXN
  const data = await contract.query.editMilestone(
    account.address,
    { cert: certificate },
    projectId,
    mileNo,
    fileCid,
    mem,
  );

  // Gas params
  const options = {
    gasLimit: (data.gasRequired as any).refTime,
    storageDepositLimit: data.storageDeposit
      ? data.storageDeposit.asCharge
      : null,
  };

  // Call data
  const txn = contract.tx.addProposal(options, projectId, mileNo, fileCid, mem);

  txn.signAndSend(account.address, { signer }, ({ isFinalized, events }) => {
    if (isFinalized) {
      console.log(
        `edited Milestone ${mileNo} on Project ${projectId}  on contract finalized`,
      );
    }
    events.forEach(({ event: { method, section } }) => {
      if (method === "ExtrinsicSuccess") {
        console.log(`✅  Success`);
        editMilestoneStatus(true);
      }
    });
  });
};

// Pivot Milestone
const pivotMilestone = async () => {};

// Submit Pivot Milestone
const addPivotilestone = async () => {};
