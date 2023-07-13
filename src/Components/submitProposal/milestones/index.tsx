"use client";

import Image from "next/image";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Task from "@/Components/tast/task";

// import ChainApiContext from "@/store/apiContext";

// import WalletContext from "@/store/walletContext";
import Milestone from "./milestone";
import { useProfileContext } from "@/Context/ProfileStore";
import { useProposalContext } from "@/Context/submitPropolsal";

type Props = {
  className?: string;
};

const SubmitPropolsalMilestones: React.FC<Props> = (props) => {
  const { changeToStep } = useProposalContext();
  // const walletCtx = useContext(WalletContext);
  const router = useRouter();

  // Proposal submission
  // APIContext
  // const apiCTX = useContext(ChainApiContext);
  // const chainAPI = apiCTX.api;
  // const fetchChainApi = apiCTX.fetchChainApi;

  useEffect(() => {
    const run = () => {
      // fetchChainApi?.();
    };
    run();
  }, []);

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    router.push(route);
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h2 className="mt-8 text-4xl font-semibold">Milestones</h2>

        <div className="mt-10">
          <label className="mt-4 text-xl flex">
            <span>Milestone Name</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg 1.1. Research"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Description</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[10rem]"
            placeholder="Describe your deliverable, feel free to break it down in points. "
          />

          <Task />
          
          {/* Button Row - take one level up */}

          {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}
          <div className="mt-10 mb-20 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(5, "/submitproposal/review")
              }
            >
              Review
            </button>
            <button className="bg-black text-white py-2 md:py-4">
              Add Another milestone
            </button>
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() => changePropolsalSubPage(1, "/")}
            >
              Save draft and Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalMilestones;
