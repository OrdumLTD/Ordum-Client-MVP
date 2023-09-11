"use client";

import { CertificateData, PinkContractPromise } from "@phala/sdk";
import type {
  InjectedAccountWithMeta,
  InjectedExtension,
} from "@polkadot/extension-inject/types";
import {
  Categories,
  Chains,
  AccountId,
  MemberRole,
  UserRole,
} from "../Types/types";
import { ContractPromise } from "@polkadot/api-contract";
import { Signer } from "@polkadot/types/types";
import { ApiPromise } from "@polkadot/api";
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { onSignCertificate } from "../Utils/phalaCertificate";

// Certificate handling

// Applicant Profile Query
// Pass the context value directly
export const getTeamApplicant = async (
  contract: PinkContractPromise,
  api: ApiPromise,
  signer: Signer,
  account: InjectedAccountWithMeta,
  Certificate: CertificateData | null,
  id: AccountId | null,
): Promise<ContractCallOutcome> => {
  // Check if Certificate is there, If not then sign the Cert
  if (Certificate) {
    const data = await contract.query.getTeamApplicantProfile(
      account.address,
      { cert: Certificate },
      id,
    );

    return data;
  } else {
    // Sign the new Certificate and it will update the cache
    const certificate = await onSignCertificate(api, signer, account);
    const data = await contract.query.getTeamApplicantProfile(
      account.address,
      { cert: certificate },
      id,
    );

    return data;
  }
};

// Get all teams

export const getAllteams = async (
  contract: PinkContractPromise,
  api: ApiPromise,
  signer: Signer,
  account: InjectedAccountWithMeta,
  Certificate?: CertificateData,
): Promise<ContractCallOutcome> => {
  // Check if Certificate is there, If not then sign the Cert
  if (Certificate) {
    const data = await contract.query.getAllApplicantTeams(account.address, {
      cert: Certificate,
    });

    return data;
  } else {
    // Sign the new Certificate and it will update the cache
    const certificate = await onSignCertificate(api, signer, account);
    const data = await contract.query.getAllApplicantTeams(account.address, {
      cert: certificate,
    });

    return data;
  }
};

// Issuer Profile Query
export const getIndividual = async (
  contract: PinkContractPromise,
  api: ApiPromise,
  signer: Signer,
  account: InjectedAccountWithMeta,
  Certificate: CertificateData | null,
  // Params
  id: AccountId | null,
): Promise<ContractCallOutcome> => {
  // Check if Certificate is there, If not then sign the Cert
  if (Certificate) {
    const returnData = await contract.query.getIndividualProfile(
      account.address,
      { cert: Certificate },
      id,
    );
    return returnData;
  } else {
    // Sign the new Certificate and it will update the cache
    const certificate = await onSignCertificate(api, signer, account);
    const returnData = await contract.query.getIndividualProfile(
      account.address,
      { cert: certificate },
      id,
    );
    return returnData;
  }
};

// Get all teams

export const getAllIndividuals = async (
  contract: PinkContractPromise,
  api: ApiPromise,
  signer: Signer,
  account: InjectedAccountWithMeta,
  Certificate?: CertificateData,
): Promise<ContractCallOutcome> => {
  // Check if Certificate is there, If not then sign the Cert
  if (Certificate) {
    const data = await contract.query.getAllIndividuals(account.address, {
      cert: Certificate,
    });

    return data;
  } else {
    // Sign the new Certificate and it will update the cache
    const certificate = await onSignCertificate(api, signer, account);
    const data = await contract.query.getAllIndividuals(account.address, {
      cert: certificate,
    });

    return data;
  }
};
