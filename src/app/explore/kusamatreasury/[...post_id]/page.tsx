"use client";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";

import { useParams } from "next/navigation";

import ReactHtmlParser from "react-html-parser";
import React, { FC, useEffect, useState } from "react";
import Layout from "@/Components/ui/Layout";
import moment from "moment";
import Link from "next/link";

// import { usePolkassemblyContext } from "@/Context/PolkassembyContext";
import { useReferendaContext } from "@/Context/ReferendaContext";

const ViewProposal: FC = () => {
  const params = useParams();
  const [proposal, setPropsal] = useState<any>({});

  const postId = params.post_id[0];
  const referendaCtx = useReferendaContext();

  console.log(referendaCtx.propsals);

  const thisReferenda = referendaCtx?.propsals.find(
    (item) => item.referendum_index == postId,
  );
  const myHeaders = new Headers();
  myHeaders.append("x-network", "kusama");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://api.polkassembly.io/api/v1/posts/on-chain-post?proposalType=referendums_v2&postId=${postId}`,
    //@ts-ignore
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => setPropsal(JSON.parse(result)))
    .catch((error) => console.log("error", error));

  useEffect(() => {}, []);

  return (
    <Layout title={`Explore | Kusama Treasury | Referendum # ${postId} `} grant>
      <div className=" mx-8 flex flex-col">
        <h1 className="text-3xl">{proposal?.title}</h1>
        <div className="mt-8">
          <span className="bold">
            Proposal by {thisReferenda?.account?.display}
          </span>
        </div>
        <div className="mt-8 border-dashed border-2 border-purple-400 ml-4 p-4 w-fit flex flex-row gap-2">
          <div className="bg-gray-500 px-6 py-1 rounded-full">Proposal</div>
          <div className="bg-gray-500 px-6 py-1 rounded-full">Polkassembly</div>
          {/* <div className="bg-gray-500 px-6 py-1 rounded-full">Subsquare</div> */}
          {/* <div className="bg-gray-500 px-6 py-1 rounded-full">Proposal</div> */}
        </div>
        <div className="flex flex-col w-full mt-8 px-4 ">
          <div className="w-full text-purple-400 border-b pb-2 border-gray-400 text-md">
            Metdata
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Proposer </span>
            <span className="basis-1/12 text-sm "> {proposal?.proposer}</span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Submitted </span>
            <span className="basis-1/12 text-sm ">
              {" "}
              {moment(proposal?.created_at).format(" D MMM YYYY")}
            </span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Origin </span>
            <span className="basis-1/12 text-sm ">{proposal?.origin}</span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Ecactment After </span>
            <span className="basis-1/12 text-sm ">
              {" "}
              {proposal?.enactment_after_block}
            </span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Decision Deposit </span>
            <span className="basis-1/12 text-sm ">
              {" "}
              {proposal?.decision_deposit_amount}
            </span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12 text-sm"> Submission Deposit </span>
            <span className="basis-1/12 text-sm ">
              {" "}
              {proposal?.submission_deposit_amount}
            </span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Method </span>
            <span className="basis-1/12 text-sm "> {proposal?.method}</span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Proposal Hash </span>
            <span className="basis-1/12 text-sm "> {proposal?.hash}</span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex items-center">
            <span className="basis-1/12"> Section </span>
            <span className="basis-1/12 text-sm ">
              {proposal?.proposed_call?.section}
            </span>
          </div>
          <div className="mt-6 w-full border-b pb-6 border-gray-400 font-semibold flex ">
            <span className="basis-1/12"> Description </span>
            <span className="basis-11/12 text-sm ">
              {" "}
              {ReactHtmlParser(proposal?.content)}
            </span>
          </div>
          <div className="mt-10 mb-20 border-b pb-4">
            <div className="px-8 flex justify-between">
              <div className="flex gap-4">
                <button>Table</button>
                <button>JSON</button>
              </div>
              <Link
                href={`https://kusama.subscan.io/referenda_v2/${postId}?tab=post`}
                legacyBehavior
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <span className="text-ordum-blue underline font-semibold">
                    {" "}
                    Show in Subscan
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div>{ReactHtmlParser(proposal?.content)}</div> */}
      </div>
    </Layout>
  );
};

export default ViewProposal;
