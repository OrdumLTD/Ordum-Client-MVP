"use client";
import "@polkadot/api-augment/kusama";
import type {
  InjectedAccountWithMeta,
  InjectedExtension,
} from "@polkadot/extension-inject/types";
import { ApiPromise } from "@polkadot/api";
import { useContext } from "react";
import { Signer } from "@polkadot/types/types";
import { AccountId } from "@/lib/PhalaContract/Types/types";

// get the referendum Info

export const getReferendaInfo = async (api: ApiPromise, id: number) => {
  const refInfo = await api.query.referenda.referendumInfoFor(id);
  if (refInfo == null) {
    return null;
  } else {
    return refInfo;
  }
};

// Treasury

export const getTreasuryProposalInfo = async (api: ApiPromise, id: number) => {
  const proposalInfo = await api.query.treasury.proposals(id);
  if (proposalInfo == null) {
    return null;
  } else {
    return proposalInfo;
  }
};
