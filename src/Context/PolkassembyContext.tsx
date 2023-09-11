"use client";

import { ReactNode, useState, createContext, useContext } from "react";
// import { createContext } from "vm";

type Props = {
  children: ReactNode;
};

export interface Proposal {
  created_at?: Date;
  description?: string | null;
  hash?: string;
  method?: string;
  origin?: string;
  parent_bounty_index?: string | null;
  post_id?: number;
  proposer?: string;
  spam_users_count?: number;
  status?: string;
  title?: string;
  track_number?: number;
  type?: string;
}

export interface Proposals extends Array<Proposal> {}

//   export type PolskassemblyContextType = {
//     proposals: Proposals;
//     addProposals: (proposals: Proposals) => void;
//   }

const defaultState = {
  propsals: null,
  addProposals: function (proposals: Proposals) {
    return;
  },
};

const PolkassemblyContext = createContext(defaultState);

export const PolskassemblyContextProvider = ({ children }: Props) => {
  const [proposalsList, setProposals] = useState<Proposals>();

  const addProposals = (proposals: Proposals) => setProposals(proposals);

  const context = {
    propsals: proposalsList,
    addProposals,
  };

  return (
    <PolkassemblyContext.Provider value={context}>
      {children}
    </PolkassemblyContext.Provider>
  );
};

export const usePolkassemblyContext = () => useContext(PolkassemblyContext);