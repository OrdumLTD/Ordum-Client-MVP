"use client";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";
import Layout from "@/Components/ui/Layout";

import { usePolkassemblyContext } from "@/Context/PolkassembyContext";
import React, { FC } from "react";

const BigSpender: FC = () => {
  const polkassemblyCtx = usePolkassemblyContext();

  console.log(polkassemblyCtx.propsals);

  const bigSpenderProposal = polkassemblyCtx?.propsals?.filter(
    (post) => post?.origin === "BigSpender"
  );

  return (
    <Layout title={"Explore | Kusama Treasury | Big Spender"} grant>
      <div className="mx-4 flex flex-col">
        <h1 className="text-3xl">Big Spender</h1>
        <span className="mt-5">Number of proposals: {bigSpenderProposal ? bigSpenderProposal.length : "0"} </span>
        <div className="mt-10">
          {bigSpenderProposal?.length > 0 ? (
            <ul>
              {bigSpenderProposal?.map((proposal, index) => {
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

export default BigSpender;
