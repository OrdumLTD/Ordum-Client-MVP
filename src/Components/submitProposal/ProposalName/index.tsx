"use client";

import { useProposalContext } from "@/Context/submitPropolsal";

const ProposalName = () => {
  const {
    tldr,
    changeTLDR,
    proposalStep,
    changeToStep,
    readyToSubmit,
    setReadyToSubmit,
  } = useProposalContext();
  const tldrCtx = { ...tldr };

  const handleTLDRchange = changeTLDR;
  return (
    <div>
      <input
        placeholder="Name your project"
        className="bg-inherit text-2xl font-semibold"
        value={tldrCtx.teamName}
        onChange={(e) => {
          //@ts-ignore
          handleTLDRchange({ teamName: e.target.value });
        }}
        type="text"
      />{" "}
      <div className="text-sm mt-4 border-t border-tr" />
      <span className="text-sm mt-">Click the title to edit</span>
    </div>
  );
};

export default ProposalName;
