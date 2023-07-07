import Image from "next/image";

import { useContext, useState } from "react";
import { useRouter } from "next/router";

import SubmitPropolsalContext from "@/store/submitPropolsal";

type Props = {
  className?: string;
};

const SubmitProposalContext: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const contextCtx = submitCtx.context;
  const handleSubmitCtxChange = submitCtx.changeContext;
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h2 className="mt-8 text-4xl">Name of organizaiton</h2>

        <div className="mt-4">
          {/* <label className="mt-4 text-xs md:text-sm flex">
            <span>
              How did the proposal come to the proponent&apos;s mind? Feel free
              to link any previous conversations from external channels.
            </span>
          </label> */}
          {/* ToDo fix line break for plaeholder */}
          {/* <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Which problems did you encounter? What inspired you to create this proposal and initiate your project? Did you have any discussions with community members so far? What are their opinions on the matter? 
WIP ~ would be good to add example text here from a previous proposal. 


--> enable image upload, and decide on editing tools "
            value={contextCtx.howDidItComeToMind}
            onChange={(e) => {
              handleSubmitCtxChange({ howDidItComeToMind: e.target.value });
            }}
          /> */}

          <div className="border border-black py-5 px-4">
            <h2 className="text-xl">1. Context of the porosal</h2>
            <p className="mt-4 text-gray-400">
              we aim to have as much context as possible to understand how a
              proposal came to the proponent’s mind, Please include here:
            </p>
            <p className="mt-4 ">
              a. Any points discussed in advance in any channel related to the
              proposal and background research for your project.
            </p>
          </div>

          <div className="mt-5">
            <p className="hover:cursor-pointer text-gray-400">
              Click here to type and open text editor.
            </p>
          </div>

          <label className="mt-4 text-xl flex">
            <span>Who does this proposal help?</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Specify which stakeholder will benefit or is being benefited at the moment by the solution, if any. Eg. Builders on Kusama, validators, newcomers, designers...


            --> enable image upload, and decide on editing tools "
            value={contextCtx.howDoesItHelp}
            onChange={(e) => {
              handleSubmitCtxChange({ howDoesItHelp: e.target.value });
            }}
          />
          <label className="mt-4 text-xl flex">
            <span>What is your goal?</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="How does success look like?"
            value={contextCtx.goal}
            onChange={(e) => {
              handleSubmitCtxChange({ goal: e.target.value });
            }}
          />

          <label className="mt-4 text-xl flex">
            <span>Why Kusama</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Why did you choose to build in Kusama? What is it about this network that encourages you to submit this proposal? "
            value={contextCtx.whyKSM}
            onChange={(e) => {
              handleSubmitCtxChange({ whyKSM: e.target.value });
            }}
          />

          <div className="mt-4">
            <div className="flex flex-row gap-10">
              <label className="text-sm flex w-[12rem]">
                <span>Previous Backers</span>
              </label>
              <label className="text-sm flex">
                <span>Contribution</span>
              </label>
            </div>
            <div className=" flex flex-row gap-10">
              <div className="flex flex-col">
                <input
                  className="text-gray-500 w-[12rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none placeholder:text-xs"
                  placeholder="DAO, Comunity, VCs"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="text-gray-500 w-[12rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none placeholder:text-xs"
                  placeholder="eg FUnding, education, etc"
                  type="text"
                />
              </div>

              <button className="-text-sm bg-black text-white border rounded px-4">
                Add
              </button>
            </div>
          </div>

          {/* Button Row - take one level up */}

          {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}
          <div className="mt-10 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4 rounded"
              onClick={() =>
                changePropolsalSubPage(3, "/submitproposal/problem-solution")
              }
            >
              Save and continue
            </button>
            <button
              className="bg-black text-white py-2 md:py-4 rounded"
              onClick={() => changePropolsalSubPage(1, "/")}
            >
              Save draft and Close
            </button>
            <button
              className="bg-gray-400 text-white py-2 md:py-4 rounded"
              onClick={() => changePropolsalSubPage(1, "/submitproposal/tldr")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitProposalContext;
