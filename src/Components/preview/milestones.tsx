"use client";

import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  className?: string;
  teamName: string;
  propolsalName: string;
  date: string;
  fundingAmount: number;
  govType?: string;
  deadline: string;
  startDate: string;
  propolsalDescription: string;
  problem: string;
  solution: string;
  ifYouHaveSeenSimilar?: string;
};

const MilestonesPreview: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="">
        {/* <div>
          {props.teamName} | {props.propolsalName}
        </div>
        <div>
          Icon {props.teamName} {props.govType}
        </div>
        <div>Button? Submit button</div>
        <div>
          {Date.parse(props.date)}, {props.fundingAmount} {props.govType} {props.deadline}{" "}
          {props.startDate}
        </div> */}

        {/* <div> Box of texts</div>
        <div>{props.propolsalDescription}</div>
        <div>{props.problem}</div>
        <div>{props.solution}</div>
        <div>{props.ifYouHaveSeenSimilar}</div> */}

        <h1 className="font-bold text-4xl">
          Name of prop Name of prop Name of prop{" "}
        </h1>

        <div className="mt-10 flex flex-row gap-2">
          <div className="flex gap-1">
            <span className="text-sm font-bold">Posted by</span>
            <span className="-mt-0.5">Name</span>
          </div>

          <div className="flex gap-1">
            <span className="text-sm font-bold">Beneficiary</span>
            <span>Name</span>
          </div>

          <div className="flex gap-1">
            <span className="text-sm font-bold">Bond</span>
            <span className="-mt-0.5">Name</span>
          </div>

          <div className="flex gap-1">
            <span className="text-sm font-bold">Decision Deposit</span>
            <span className="-mt-0.5">N/A</span>
          </div>
        </div>

        <div className="mt-5 flex flex-row gap-5">
          <Link href="/submitproposal/review">
            <button className="w-[10rem] font-medium text-sm px-5  py-2 rounded-full border border-ordum-blue">
              Summary
            </button>
          </Link>
          <button className="w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue">
            View Proposal
          </button>
          <button className="w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue">
            Team
          </button>
          <Link href="/submitproposal/review-milestones">
            <button className="w-[10rem] font-medium text-sm px-5 py-2 bg-ordum-blue rounded-full border border-ordum-blue">
              Milestones
            </button>
          </Link>
          <button className="w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue">
            Code
          </button>
        </div>

        <div className="mt-8 flex gap-4">
          <div className="flex flex-col">
            <span className="font-bold text-sm">Posted</span>
            <span>00/00/00</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-bold">Start Date</span>
            <span>00/00/00</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-bold">Deadline</span>
            <span>00/00/00</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-bold">Requested Ammount</span>
            <span>XXXXXXXXX KSM</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-bold">Requested Ammount</span>
            <span>XXXXXXXX USD</span>
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
            <span className="underline hover:cursor-pointer">
              Figma designs
            </span>
          </div>
        </div>

        <div className="mt-10">
          <div className="mt-5 border rounded-full px-2 py-4 flex gap-10">
            <div className="mt-3">#1: KILT Intergration</div>
            <div className="flex flex-col ">
              <div>Total Cost</div>
              <div>XXXXXXXXX USD</div>
            </div>
            <div className="flex flex-col ">
              <div>Dead Line</div>
              <div>04/02/25</div>
            </div>
            <button className="border rounded-full px-5 ">Pivot</button>
            <button className="border rounded-full px-5 ">View</button>
          </div>

          <div className="mt-5 border rounded-full px-2 py-4 flex gap-10">
            <div className="mt-3">#2: Smart Contracts</div>
            <div className="flex flex-col ">
              <div>Total Cost</div>
              <div>XXXXXXXXX USD</div>
            </div>
            <div className="flex flex-col ">
              <div>Dead Line</div>
              <div>04/02/25</div>
            </div>
            <button className="border rounded-full px-5 ">Pivot</button>
            <button className="border rounded-full px-5 ">View</button>
          </div>

          <div className="mt-5 border rounded-full px-2 py-4 flex gap-10">
            <div className="mt-3">#3: New Design</div>
            <div className="flex flex-col ">
              <div>Total Cost</div>
              <div>XXXXXXXXX USD</div>
            </div>
            <div className="flex flex-col ">
              <div>Dead Line</div>
              <div>04/02/25</div>
            </div>
            <button className="border rounded-full px-5 ">Pivot</button>
            <button className="border rounded-full px-5 ">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesPreview;
