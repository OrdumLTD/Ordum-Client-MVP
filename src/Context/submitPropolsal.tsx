"use client";

import { AccountId, Categories } from "@/lib/PhalaContract/Types/types";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import React, { createContext, useState, ReactNode, useContext } from "react";

// tldr of the proposal
export type tldr = {
  beneficiary: AccountId;
  projectType: Categories[];
  teamName: string;
  track: string;
  contact: string;
  propolsalName: string;
  recieveDate: string;
  startingDate: string;
  fundingAmount: number;
  exchangeRate: number;
  deadLine: string;
  shortDescription: string;
  whyDifferentDescription: string;
  externalLinks: string;
};

// The context of the proposal
export type context = {
  contextOfTheProposal: string;
  knownBackups: string;
  problemStatement: string;
  solution: string;
  ksmImprovements: string;
  targetAudience: string;
  whyKSM: string;
  similarSolution: string;
};

// Teammember 
interface teamMember {
  name: string;
  contact: string;
  portfolio?: string;
  role: string;
  bio: string;
  // NOT STORED 
  email?: string
};

// Adding team members in the proposal
export type teamMembers = {
  teammembers: teamMember[]
};

export type submitContext = {
  proposalStep?: number;
  proposalIndex?: number;
  setProposalIndex: (index: number) => void;
  changeToStep: (number: number) => void;
  tldr?: tldr;
  context?: context;
  readyToSubmit: boolean;
  setReadyToSubmit: (v: boolean) => void;
  changeTLDR: (tldr: tldr) => void;
  changeContext: (changeCtx: any) => void;
};

const defaultState = {
  proposalStep: undefined,
  proposalIndex: undefined,
  setProposalIndex: (index: number) => {
    return;
  },
  changeToStep: (number: number) => {
    return;
  },
  tldr: undefined,
  context: {
    contextOfTheProposal: "",
    knownBackups: "",
    problemStatement: "",
    solution: "",
    ksmImprovements: "",
    targetAudience: "",
    whyKSM: "",
    similarSolution: "",
  },
  readyToSubmit: false,
  setReadyToSubmit: (v: boolean) => {
    return;
  },
  changeTLDR: (tldr: tldr) => {
    return;
  },
  changeContext: (changeCtx: context) => {
    return;
  },
};

type Props = {
  children: ReactNode;
};

const ProposalContext = createContext<submitContext>(defaultState);

export const ProposalContextProvider = ({ children }: Props) => {
  const [step, setStep] = useState<number>(1);
  const [proposalIndex, setProposalIndex] = useState<number>();
  const [tldr, setTldr] = useState<tldr>();
  const [propolsalContext, setPropolsalContext] = useState<context>();
  const [readyToSubmit, setReadyToSubmit] = useState<boolean>(false);

  const changeTLDR = (itemToChange: tldr) => {
    setTldr({ ...tldr, ...itemToChange });
  };

  const changeContext = (itemToChange: any) => {
    setPropolsalContext({ ...propolsalContext, ...itemToChange });
  };

  function changeStepHandler(num: number) {
    setStep(num);
  }

  const setPropIndex = (index: number) => {
    setProposalIndex(index);
  };

  const context = {
    propolsalStep: step,
    proposalIndex,
    setProposalIndex: setPropIndex,
    changeToStep: changeStepHandler,
    tldr: tldr,
    changeTLDR: changeTLDR,
    context: propolsalContext,
    readyToSubmit,
    setReadyToSubmit,
    changeContext,
  };

  return (
    <ProposalContext.Provider value={context}>
      {children}
    </ProposalContext.Provider>
  );
};

export const useProposalContext = () => useContext(ProposalContext);
