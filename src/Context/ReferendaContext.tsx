"use client";

import { ReactNode, useState, createContext, useContext } from "react";

type Props = {
  children: ReactNode;
};

export interface Proposal {
  referendum_index: number;
  account: {
    address: string;
    display: string; //name of the proposer
    identity: boolean; // ??
  };
  origins: string; //which spender
}

export interface Proposals extends Array<Proposal> {}

const defaultState = {
  propsals: [],
  addProposals: function (proposals: Proposals) {
    return;
  },
};

const ReferendaContext = createContext(defaultState);

export const ReferendaContextProvider = ({ children }: Props) => {
  const [proposalsList, setProposals] = useState<Proposals>([]);

  const addProposals = (proposals?: Proposals) => {
    console.log("Add proposals");
    const toAdd = [...proposals];
    console.log(toAdd);
    setProposals(toAdd);
  };

  const context = {
    propsals: proposalsList,
    addProposals,
  };

  return (
    <ReferendaContext.Provider value={context}>
      {children}
    </ReferendaContext.Provider>
  );
};

export const useReferendaContext = () => useContext(ReferendaContext);
