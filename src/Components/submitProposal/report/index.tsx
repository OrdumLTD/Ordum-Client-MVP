"use client";

import Image from "next/image";

import { useContext } from "react";
import { useRouter } from "next/router";
import { useProposalContext } from "@/Context/submitPropolsal";

type Props = {
  className?: string;
};

const SubmitPropolsalReport: React.FC<Props> = (props) => {
  const { changeToStep } = useProposalContext();
  const router = useRouter();

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    router.push(route);
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h1 className="text-4xl xl:text-6xl font-medium">Submit Proposal</h1>

        <h2 className="mt-8 text-4xl">6. Report</h2>

        {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}
        <div className="mt-10 flex flex-col gap-4">
          <button
            className="bg-black text-white py-2 md:py-4"
            onClick={() =>
              changePropolsalSubPage(7, "/submitproposal/feedback")
            }
          >
            Save and continue
          </button>
          <button
            className="bg-black text-white py-2 md:py-4"
            onClick={() => changePropolsalSubPage(1, "/profile/about")}
          >
            Save draft and Close
          </button>
          <button
            className="bg-gray-400 text-white py-2 md:py-4"
            onClick={() =>
              changePropolsalSubPage(5, "/submitproposal/milestones")
            }
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalReport;
