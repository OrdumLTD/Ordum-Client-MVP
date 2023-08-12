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
import { IEventLike, Signer } from "@polkadot/types/types";
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { Dispatch } from "react";
import { getPasscode, setPasscode } from "@/lib/AntaLite/dbAuth";
import { ApiPromise } from "@polkadot/api";

export const createTeamApplicantProfile = async (
  profileCreationStatus: Dispatch<boolean>,
  passcodeStatus: Dispatch<boolean>,
  preSecretFetching: Dispatch<boolean>,
  account: InjectedAccountWithMeta,
  signer: Signer,
  certificate: CertificateData,
  contract: PinkContractPromise,
  api: ApiPromise,
  //Pure params
  name: string,
  accountId: AccountId | null,
  description: string,
  mission: string,
  categories: Array<Categories> | null,
  chain: Array<Chains>,
  members: Array<[AccountId, MemberRole]> | null,
  links: Array<string> | null
) => {
  console.log("Profile Creation Initiates");

  // Query txn
  const data = await contract.query.createApplicantProfile(
    account.address,
    { cert: certificate },
    name,
    accountId,
    description,
    mission,
    categories,
    chain,
    members,
    links
  );

  // Gas params
  const options = {
    gasLimit: (data.gasRequired as any).refTime,
    storageDepositLimit: data.storageDeposit
      ? data.storageDeposit.asCharge
      : null,
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

  // fetch the secret first and make sure its not registered
  const secret = await getPasscode(contract, api, signer, account, certificate);

  if (secret.output.toJSON().valueOf()["ok"]["err"]) {
    console.log("Secret is not registered, Continue");

    txnData.signAndSend(
      account.address,
      { signer },
      async ({ isInBlock, events, isFinalized }) => {
        if (isInBlock) {
          console.log("In Block");
        } else if (isFinalized) {
          console.log("Finalized Applicant Profile Creation");

          // Set the passcode
          await setPasscode(
            passcodeStatus,
            account,
            signer,
            certificate,
            contract,
            api,
            name
          );
        }
        // events.forEach(({event:{method, section}}) =>{
        //     console.log(`Method: ${method} Section: ${section}`)
        // })
        // Events
        events.forEach(({ event: { method, section } }) => {
          if (method === "ExtrinsicSuccess") {
            console.log(`✅  Success Team Applicant Creation`);
            profileCreationStatus(true);
          }
        });
      }
    );
  } else {
    // Return a state error
    console.log("Secret Key is already registered");
    preSecretFetching(true);
  }
};

export const createIndividualProfile = async (
  profileCreationStatus: (v: boolean) => void,
  passcodeStatus: Dispatch<boolean>,
  preSecretFetching: Dispatch<boolean>,
  account: InjectedAccountWithMeta,
  signer: Signer,
  certificate: CertificateData,
  contract: PinkContractPromise,
  api: ApiPromise,
  //Pure params
  name: string,
  description: string,
  categories: Array<Categories> | null,
  chain: Array<Chains>,
  links: Array<string> | null,
  role: UserRole
) => {
  // Query txn
  const data = await contract.query.createIndividualProfile(
    account.address,
    { cert: certificate },
    name,
    description,
    categories,
    chain,
    links,
    role
  );

  // Gas params
  const options = {
    gasLimit: (data.gasRequired as any).refTime,
    storageDepositLimit: data.storageDeposit
      ? data.storageDeposit.asCharge
      : null,
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
  const secret = await getPasscode(contract, api, signer, account, certificate);

  if (secret.output.toJSON().valueOf()["ok"]["err"]) {
    console.log("Secret is not registered, Continue");
    txnData.signAndSend(
        account.address,
        { signer },
        async ({ isInBlock, events, isCompleted, isFinalized }) => {
          if (isInBlock) {
            console.log("In Block");
          } else if (isCompleted) {
            console.log("Completed");
    
            console.log("Finalized Applicant Profile Creation");
    
            profileCreationStatus(true);
    
            // Set the passcode
            await setPasscode(
              passcodeStatus,
              account,
              signer,
              certificate,
              contract,
              api,
              name
            );
          }
          // Events
          events.forEach(({ event: { method, section } }) => {
            if (method === "ExtrinsicSuccess") {
              console.log(`✅  Success Individaul Profile Creation`);
              profileCreationStatus(true);
            }
          });
        }
      );
  } else{
    // Return a state error
    console.log("Secret Key is already registered");
    preSecretFetching(true);
  }


};
