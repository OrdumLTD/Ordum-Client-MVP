"use client";

import { useProposalContext } from "@/Context/submitPropolsal";
import Link from "next/link";

const proposalLink = <Link href="/submitproposal/theproposal" className="underline text-blue-200">PLEASE GO BACK AND EDIT</Link>

const ViewProposal = () => {
  const { tldr, context } = useProposalContext();

  return (
    // Context
    <div className="mt-8 flex flex-col gap-4 ">
      <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
        <h3 className="font-semibold text-xl">Context</h3>
        <p className="font-semibold text-xl">
          a. Any points discussed in advance in any channel related to the
          proposal and background research for your project.
        </p>
      </div>

      <span className="my-8">{context?.contextOfTheProposal ?? proposalLink}</span>

      {/* WhyKSM */}

      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            b. Any known backups already behind the solution?
          </h3>
        </div>

        <span className="my-8">
        <span className="my-8">{context?.whyKSM ?? proposalLink}</span>
        </span>
      </div>

      {/* Problem */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">Problem Statement</h3>
        </div>

        <span className="my-8">
        <span className="my-8">{context?.problemStatement ?? proposalLink}</span>
        </span>
      </div>

      {/* Solution */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">Solution</h3>
        </div>

        <span className="my-8">
        <span className="my-8">{context?.solution ?? proposalLink}</span>
        </span>
      </div>

      {/* How does */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            a. How does this proposal change the current logic in Kusama?
          </h3>
        </div>

        <span className="my-8">
        <span className="my-8">{context?.ksmImprovements ?? proposalLink}</span>
        </span>
      </div>

      {/* Who does the solution help? */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            Who does this solution helps?
          </h3>
        </div>

        <span className="my-8">
        <span className="my-8">{context?.targetAudience ?? proposalLink}</span>
        </span>
      </div>

      {/* If you have seen similar proposals before: why is yours different? */}

      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
          If you have seen similar proposals before: why is yours different?
          </h3>
        </div>

        <span className="my-8">
        <span className="my-8">{context?.similarSolution ?? proposalLink}</span>
        </span>
      </div>
    </div>
  );
};

export default ViewProposal;
