import Image from "next/image";

import { useContext } from "react";
import { useRouter } from "next/router";

import SubmitPropolsalContext from "@/store/submitPropolsal";

type Props = {
  className?: string;
};

const SubmitPropolsalTeam: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h1 className="text-4xl xl:text-6xl font-medium">Submit Proposal</h1>

        <h2 className="mt-8 text-4xl">4. Team Members</h2>

        <div className="mt-4">
          <label className="mt-4 text-xl flex">
            <span>Name</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Team member name"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Contact</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="eg. email, telegram, handle, matrixEmail"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Portfolio(if relevent)</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. website, github"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Role</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. Front End Developer"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Bio</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[10rem]"
            placeholder="How is their role relevant to the proposal? 
            Professional experience 
            Community engagement or involvement with other projects"
          />

          {/* Button Row - take one level up */}

          {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}
          <div className="mt-10 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() => changePropolsalSubPage(5, "/submitproposal/milestones")}
            >
              Save and continue
            </button>
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() => changePropolsalSubPage(1, "/")}
            >
              Save draft and Close
            </button>
            <button
              className="bg-gray-400 text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(3, "/submitproposal/problem-solution")
              }
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalTeam;
