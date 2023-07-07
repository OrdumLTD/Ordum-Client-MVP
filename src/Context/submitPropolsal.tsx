import React, {createContext, useState, ReactNode, useContext} from 'react';

export type tldr = {
  account: string,
  projectType: string,
  teamName: string,
  track: string,
  contact: string,
  propolsalName: string,
  recieveDate: string,
  startingDate: string,
  fundingAmount: number,
  exchangeRate: number,
  deadLine: string,
  shortDescription: string,
  whyDifferentDescription: string,
  externalLinks: string,
};

export type context = {
  howDidItComeToMind: string,
  howDoesItHelp: string,
  goal: string,
  whyKSM: string,
}

type problemSolution = {
  problem: string
}

export type submitContext = {

    proposalStep?: number,
    proposalIndex?: number,
    setProposalIndex: (index:number) => void,
    changeToStep: (number:number) => void,
    tldr?: tldr,
    context?: context,
    problemSolution?: problemSolution,
    changeTLDR: (tldr:tldr) => void,
    changeContext: (changeCtx: context) => void,
    changeProblemSolution: (problem: problemSolution) => void

}

const defaultState = {
  proposalStep: undefined,
  proposalIndex: undefined,
  setProposalIndex: (index:number) => {return},
  changeToStep: (number:number) => {return},
  tldr: undefined ,
  context: undefined,
  problemSolution: undefined,
  changeTLDR: (tldr:tldr) => {return},
  changeContext: (changeCtx: context) => {return},
  changeProblemSolution: (problem: problemSolution) => {return}
}

type Props = {
  children: ReactNode;
};

const PropolsalContext = createContext<submitContext>(defaultState);

export const PropolsalContextProvider =({ children }: Props)=> {
  const [step, setStep] = useState<number>(1);
  const [proposalIndex, setProposalIndex] = useState<number>()
  const [tldr, setTldr] = useState<tldr>()
  const [propolsalContext, setPropolsalContext] = useState<context>();
  const [propolsalProblemSolution, setPropolsalProblemSolution] = useState<problemSolution>()

  const changeTLDR = (itemToChange:tldr) => {
    setTldr({ ...tldr, ...itemToChange });
  };

  const changeContext = (itemToChange:context) => {
    setPropolsalContext({ ...propolsalContext, ...itemToChange });
  };

  const changeProblemSolution = (itemToChange:problemSolution) => {
    setPropolsalProblemSolution({ ...propolsalProblemSolution, ...itemToChange });
  };

  function changeStepHandler(num:number) {
    setStep(num);
  }

  const setPropIndex = (index:number) =>{
    setProposalIndex(index)
  }

  const context = {
    propolsalStep: step,
    proposalIndex,
    setProposalIndex: setPropIndex,
    changeToStep: changeStepHandler,
    tldr: tldr,
    changeTLDR: changeTLDR,
    context: propolsalContext,
    problemSolution: propolsalProblemSolution,
    changeProblemSolution: changeProblemSolution,
    changeContext,
  };

  return (
    <PropolsalContext.Provider value={context}>
      {children}
    </PropolsalContext.Provider>
  );
}

export const useProposalContext =()=> useContext(PropolsalContext);
