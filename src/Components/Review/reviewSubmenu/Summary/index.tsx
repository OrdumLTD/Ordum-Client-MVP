"use client";

import moment from "moment";

import { useProposalContext } from "@/Context/submitPropolsal";
import Link from "next/link";

type Props = {
  isPreview?: boolean;
  // posted: Date;
  // startDate: Date;
  // deadLine: Date;
  // requestedAmmount: number;
  // externalLinks: any[];
  // introduciton: string;
  // problem: string;
  // solution: string;
};

const proposalLink = <Link href="/submitproposal/theproposal" className="underline text-blue-200">PLEASE GO BACK AND EDIT</Link>
const tldrLink = <Link href="/submitproposal/tldr" className="underline text-blue-200">PLEASE GO BACK AND EDIT</Link>

const Summary: React.FC<Props> = (props) => {
  const { tldr, context } = useProposalContext();

  return (
    <div>
      <div className="mt-8 flex gap-4">
        <div className="flex flex-col">
          <span className="font-bold text-sm">Posted</span>
          {!props?.isPreview ? <span>Not yet</span> : <span>00/00/00</span>}
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-bold">Start Date</span>
          <span>{tldr?.startingDate ? (moment(tldr?.startingDate).format("L")) : tldrLink}</span>
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-bold">Deadline</span>
          <span>{tldr?.deadLine ? moment(tldr?.deadLine).format("L") : tldrLink}</span>
        </div>
        {/* <div className="flex flex-col text-sm">
          <span className="font-bold">Requested Ammount</span>
          <span>XXXXXXXXX KSM</span>
        </div> */}
        <div className="flex flex-col text-sm">
          <span className="font-bold">Requested Ammount</span>
          <span>{tldr?.fundingAmount ? (tldr?.fundingAmount + " USD") : tldrLink}</span>
        </div>
      </div>

      <div className="mt-8">
        <span className="text-sm font-bold">External Links</span>
        <div className="flex gap-3 text-base">
          <span className="underline hover:cursor-pointer">Example.com</span>
          <span className="underline hover:cursor-pointer">
            Previos Proposal
          </span>
          <span className="underline hover:cursor-pointer">Github</span>
          <span className="underline hover:cursor-pointer">Figma designs</span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-medium text-xl">Short Descripton</h2>
        <div className="mt-0.5 border-t" />

        <div className="my-4 font-medium text-lg">Introduction</div>
        { context?.contextOfTheProposal ?? proposalLink}
        <div className="my-4 font-medium text-lg">Problem</div>
        {context?.problemStatement ?? proposalLink}
        <div className="my-4 font-medium text-lg">Solution</div>
{context?.solution ?? proposalLink}
        <div className="my-4 font-medium text-lg">Team Credentials</div>
        <p>
          COMING SOON
          Researchers and companies worldwide, including IBM, Google, and
          Microsoft, are actively working on advancing quantum computing
          technologies. They are exploring various qubit implementations, such
          as superconducting circuits, trapped ions, topological qubits, and
          more, aiming to develop robust and scalable quantum systems.
        </p>
      </div>
    </div>
  );
};

export default Summary;
