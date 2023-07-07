import { createContext, useState } from "react";

const PropolsalContext = createContext({
  //   Propolsal Menu
  propolsalStep: 1,
  proposalIndex:0,
  setProposalIndex: function(index){},
  changeToStep: function (number) {},
  // Propolsal Data TLDR
  tldr: {
    account: "",
    projectType: "",
    teamName: "",
    track: "",
    contact: "",
    propolsalName: "",
    recieveDate: "",
    startingDate: "",
    fundingAmount: 30,
    exchangeRate: 30,
    deadLine: "",
    shortDescription: "",
    whyDifferentDescription: "",
    externalLinks: "",
  },
  context: {
    howDidItComeToMind: "",
    howDoesItHelp: "",
    goal: "",
    whyKSM: "",
  },
  problemSolution: {
    problem: ""
  },
  changeTLDR: function (arg) {},
  changeContext: function (arg) {},
  changeProblemSolution: function (arg) {},
  contextOfthePropolsal: {},
});

export function PropolsalContextProvider(props) {
  const [step, setStep] = useState(1);
  const [proposalIndex, setProposalIndex] = useState(0)
  const [tldr, setTldr] = useState({
    account: "",
    projectType: "Governance",
    teamName: "",
    track: "",
    contact: "",
    propolsalName: "",
    recieveDate: 1, //
    startingDate: "",
    fundingAmount: "",
    exchangeRate: "",
    deadLine: "",
    shortDescription: "",
    whyDifferentDescription: "",
    externalLinks: ""
  });

  const [propolsalContext, setPropolsalContext] = useState({
    howDidItComeToMind: "",
    howDoesItHelp: "",
    goal: "",
    whyKSM: "",
  });

  const [propolsalProblemSolution, setPropolsalProblemSolution] = useState({
    problem: ""
  })

  const changeTLDR = (itemToChange) => {
    setTldr({ ...tldr, ...itemToChange });
  };

  const changeContext = (itemToChange) => {
    setPropolsalContext({ ...propolsalContext, ...itemToChange });
  };

  const changeProblemSolution = (itemToChange) => {
    setPropolsalProblemSolution({ ...propolsalProblemSolution, ...itemToChange });
  };

  function changeStepHandler(num) {
    setStep(num);
  }

  const setPropIndex = (index) =>{
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

  //   const context = {
  //     userLogged: userLoggedIn,
  //     userName: userName,
  //     logInUser: logInUserHandler,
  //     logOutUser: logOutUserHandler,
  //   };

  return (
    <PropolsalContext.Provider value={context}>
      {props.children}
    </PropolsalContext.Provider>
  );
}

export default PropolsalContext;
