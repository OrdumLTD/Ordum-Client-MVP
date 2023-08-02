"use client";

import Image from "next/image";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useProposalContext } from "@/Context/submitPropolsal";
import ProposalName from "../ProposalName";
import TextEditorDropdown from "@/Components/TextEditor/TextEditorDropdown";

type Props = {
  className?: string;
};

const SubmitProposalContext: React.FC<Props> = (props) => {
  const { context, changeToStep, changeContext, tldr } = useProposalContext();

  const router = useRouter();

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    router.push(route);
  };

  const handleContextOfProposal = (text: string) => {
    changeContext({ contextOfTheProposal: text });
  };

  const handleKnownBackups = (text: string) => {
    changeContext({ knownBackups: text });
  };

  const handleProblemStatement = (text: string) => {
    changeContext({ problemStatement: text });
  };

  const handleSolution = (text: string) => {
    changeContext({ solution: text });
  };

  const handleKsmImprovements = (text: string) => {
    changeContext({ ksmImprovements: text });
  };

  const handleTargetAudience = (text: string) => {
    changeContext({ targetAudience: text });
  };

  const handleWhyKSM = (text: string) => {
    changeContext({ whyKSM: text });
  };

  const handleSimilarSolution = (text: string) => {
    changeContext({ similarSolution: text });
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        {/* <h2 className="mt-8 text-4xl">{tldr?.teamName}</h2> */}
        <ProposalName />
        <div className="mt-4">
          <div className="border border-black py-5 px-4">
            <h2 className="text-xl">1. Context of the proposal</h2>
            <p className="mt-4 text-gray-400">
              we aim to have as much context as possible to understand how a
              proposal came to the proponent’s mind, Please include here:
            </p>
            <p className="mt-4 ">
              a. Any points discussed in advance in any channel related to the
              proposal and background research for your project.
            </p>
          </div>

          <TextEditorDropdown
            text={context?.contextOfTheProposal}
            changeText={handleContextOfProposal}
            className="text-black mt-5"
          />

          {/* <div className="mt-5">
            <p className="hover:cursor-pointer text-gray-400">
              Click here to type and open text editor.
            </p>
          </div> */}

          {/* Add context handler */}
          {/* <textarea
            value={context?.contextOfTheProposal}
            onChange={(e) =>
              changeContext({ contextOfTheProposal: e.target.value })
            }
            className="mt-2 w-full text-sm bg-inherit placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
          /> */}

          <div className="mt-8 border border-black py-5 px-4">
            <p className="mt-4 ">
              b. Any known backups already behind the solution?
            </p>

            <p className="mt-4 text-gray-400">
              (known token holders, organizations or collectives building on
              Kusama Network or participating in its governance mechanism in any
              way).
            </p>
          </div>

          <TextEditorDropdown
            text={context?.knownBackups}
            changeText={handleKnownBackups}
            className="text-black mt-5"
          />

          <div className="border border-black py-5 px-4 mt-10">
            <h2 className="text-xl">2. Problem Statement</h2>
            <p className="mt-4 text-gray-400">
              What problem is this proposal trying to solve? Make it as granular
              as possible to allow token holders to understand the logic behind
              it.
            </p>
          </div>

          <TextEditorDropdown
            text={context?.problemStatement}
            changeText={handleProblemStatement}
            className="text-black mt-5"
          />

          <div className="mt-10 border border-black py-5 px-4">
            <h2 className="text-xl">3. The Solution</h2>
            <p className="mt-4 text-gray-400">
              What is the goal of the proposal? What does ‘success’ look like?
              Explain what your solution is, after taking into consideration the
              context and the problem. Make sure to consider all points included
              in the problem statement to ensure a complete and balanced
              proposal, and try to be as granular as possible.
            </p>
          </div>

          <TextEditorDropdown
            text={context?.solution}
            changeText={handleSolution}
            className="text-black mt-5"
          />

          <div className="mt-10 border border-black py-5 px-4">
            <h2 className="text-xl">
              a. How does this proposal change the current logic in Kusama?
            </h2>
            <p className="mt-4 text-gray-400">
              If the proposal’s goal is to change the way any of the elements of
              the network work, compare the current state in Kusama and how this
              proposal could change token holders’ experience if approved by the
              Council. Alternatively, if the execution has already taken place
              and you are using this proposal to receive funds from the Treasury
              as payment for a delivered task, compare past and present logic
              and how this proposal has enhanced the network experience.
            </p>
          </div>

          <TextEditorDropdown
            text={context?.ksmImprovements}
            changeText={handleKsmImprovements}
            className="text-black mt-5"
          />

          <div className="mt-10 border border-black py-5 px-4">
            <h2 className="text-xl">b. Who does this solution help?</h2>
            <p className="mt-4 text-gray-400">
              Specify which stakeholder will benefit or is being benefited at
              the moment by the solution, if any.
            </p>
          </div>

          <TextEditorDropdown
            text={context?.targetAudience}
            changeText={handleTargetAudience}
            className="text-black mt-5"
          />

          <div className="mt-10 border border-black py-5 px-4">
            <h2 className="text-xl">4. Why Kusama</h2>
            <p className="mt-4 text-gray-400">
              Why did you choose to build in Kusama? What is it about this
              network that encourages you to submit this proposal?
            </p>
          </div>

          <TextEditorDropdown
            text={context?.whyKSM}
            changeText={handleWhyKSM}
            className="text-black mt-5"
          />

          <div className="mt-10 border border-black py-5 px-4">
            <h2 className="text-xl">
              5. If you have seen similar proposals before: why is yours
              different?
            </h2>
          </div>

          <TextEditorDropdown
            text={context?.similarSolution}
            changeText={handleSimilarSolution}
            className="text-black mt-5"
          />

          {/* Button Row - take one level up */}

          {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}
          <div className="mt-10 mb-20 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4 rounded"
              onClick={() => changePropolsalSubPage(3, "/submitproposal/team")}
            >
              Save and continue
            </button>
            <button
              className="bg-black text-white py-2 md:py-4 rounded"
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

export default SubmitProposalContext;
