"use client";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";
import Layout from "@/Components/ui/Layout";

import { usePolkassemblyContext } from "@/Context/PolkassembyContext";
import React, { FC } from "react";

const MediumSpender: FC = () => {
  const polkassemblyCtx = usePolkassemblyContext();

  console.log(polkassemblyCtx.propsals);

  const mediumSpenderProposals = polkassemblyCtx?.propsals?.filter(
    (post) => post?.origin === "MediumSpender"
  );

  return (
    <Layout title={"Explore | Kusama Treasury | Medium Spender"} grant>
      <div className="mx-4 flex flex-col">
        <h1 className="text-3xl">Medium Spender</h1>
        <span className="mt-5">Number of proposals: {mediumSpenderProposals ? mediumSpenderProposals.length : "0"} </span>
        <div className="mt-10">
          {mediumSpenderProposals?.length > 0 ? (
            <ul>
              {mediumSpenderProposals?.map((proposal, index) => {
                return (
                  <li key={index} className="my-2">
                    <ProposalPreview title={proposal.title} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing here yet ...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MediumSpender;
