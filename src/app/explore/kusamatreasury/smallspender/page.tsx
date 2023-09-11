"use client";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";
import Layout from "@/Components/ui/Layout";

import { usePolkassemblyContext } from "@/Context/PolkassembyContext";
import { useReferendaContext } from "@/Context/ReferendaContext";
import React, { FC, useEffect, useState } from "react";

const SmallSpender: FC = () => {
  const polkassemblyCtx = usePolkassemblyContext();
  const referendaCtx = useReferendaContext();

  const [polkassemblyProposals, setPolkassemblyProposals] = useState([]);
  const [subscanProposals, setSubscanProposals] = useState([]);

  const getSmallSpenderFromPolkassembly = () => {
    console.log("calling");
    var myHeaders = new Headers();
    myHeaders.append("x-network", "kusama");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.polkassembly.io/api/v1/listing/on-chain-posts?page=1&proposalType=referendums_v2&listingLimit=1000&trackNo=32&trackStatus=All&sortBy=newest",
      //@ts-ignore
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => setPolkassemblyProposals(JSON.parse(result).posts))
      .catch((error) => console.log("error", error));
  };

  const smallSpenderSubScan = referendaCtx?.propsals?.filter(
    (post) => post?.origins === "small_spender",
  );

  useEffect(() => {
    getSmallSpenderFromPolkassembly();
    setSubscanProposals(smallSpenderSubScan);
  }, []);

  // console.log(polkassemblyProposals);

  // console.log(subscanProposals);

  let matchedProposals = [];

  polkassemblyProposals?.forEach((item) => {
    const match = subscanProposals?.find(
      (item2) => item.post_id === item2.referendum_index,
    );
    if (match) {
      matchedProposals.push({ ...item, ...match });
    }
  });

  console.log(matchedProposals);

  return (
    <Layout title={"Explore | Kusama Treasury | Small Spender"} grant>
      <div className="mx-4 flex flex-col">
        <h1 className="text-3xl">Small Spender</h1>
        <span className="mt-5">
          Number of proposals:{" "}
          {polkassemblyProposals ? polkassemblyProposals.length : "0"}{" "}
        </span>
        <div className="mt-10">
          {matchedProposals?.length > 0 ? (
            <ul>
              {matchedProposals?.map((proposal, index) => {
                return (
                  <li key={index} className="my-2">
                    <ProposalPreview
                      title={proposal.title}
                      proposerAddress={proposal.proposer}
                      proposerDisplay={proposal.account.display}
                      requestedAmount={proposal.requestedAmount}
                      tags={proposal.tags}
                      post_id={proposal.post_id}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Loading proposal ...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SmallSpender;
