"use client";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";
import Layout from "@/Components/ui/Layout";

import { usePolkassemblyContext } from "@/Context/PolkassembyContext";
import { useReferendaContext } from "@/Context/ReferendaContext";
import React, { FC, useEffect, useState } from "react";

const AllProposals: FC = () => {
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
      "https://api.polkassembly.io/api/v1/listing/on-chain-posts?page=1&proposalType=referendums_v2&listingLimit=1000&trackNo=34&trackStatus=All&sortBy=newest",
      //@ts-ignore
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => setPolkassemblyProposals(JSON.parse(result).posts))
      .catch((error) => console.log("error", error));
  };

  const allSpenderSubScan = referendaCtx?.propsals?.filter(
    (post) =>
      post?.origins === "big_spender" ||
      post?.origins === "medium_spender" ||
      post?.origins === "small_spender",
  );

  useEffect(() => {
    getSmallSpenderFromPolkassembly();
    setSubscanProposals(allSpenderSubScan);
  }, []);

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
    <Layout title={"Explore | Kusama Treasury | All Proposals"} grant>
      <div className="mx-4 flex flex-col">
        <h1 className="text-3xl">All Proposals</h1>
        <span className="mt-5">
          Number of proposals:{" "}
          {subscanProposals ? subscanProposals.length : "0"}{" "}
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
            <p>Loading proposals ...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllProposals;
