import Image from "next/image";

import { useContext } from "react";
import { useRouter } from "next/router";

import SubmitPropolsalContext from "@/store/submitPropolsal";

type Props = {
  className?: string;
};

const SubmitPropolsalProblemSolution: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const problemCtx =  submitCtx.problemSolution;
  const changeProblemSolution = submitCtx.changeProblemSolution
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="xl:ml-48 2xl:ml-60  p-10">
      <div className="max-w-[33rem] flex flex-col">

        <h2 className="mt-8 text-2xl xl:text-4xl">3. Problem Solution</h2>

        <div className="mt-4">
          {/* <label className="mt-4 text-xs md:text-sm flex">
            <span>
              Why did you choose to build in Kusama? What is it about this
              network that encourages you to submit this proposal?
            </span>
          </label> */}
          {/* ToDo fix line break for plaeholder */}
          {/* <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black rounded
             py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Make it as granular as possible to allow token holders to understand the logic
             behind it. Break down your problem and solution per points that reference each other."
          /> */}

          <label className="mt-4 text-xs md:text-sm flex">
            <span>
              What is the problem, that you are trying to solve
            </span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black rounded
             py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="What is the poing of life (42?)"
            value={problemCtx.problem}
            onChange={(e) => {
              changeProblemSolution({ problem: e.target.value });
            }}

          />

          <label className="mt-4 text-xl flex">
            <span>What is the solution to the outlined problem? </span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black rounded
             py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Please provide a solution to each problem bullet point. "
          />

          <label className="mt-4 text-xl flex">
            <span>
              How does this proposal change the current logic in Kusama?
            </span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[10rem]"
            placeholder="If the proposal's goal is to change the way any of the elements of the network work, compare the current
             state in Kusama and how this proposal could change token holders' experience if approved by the Council. Alternatively,
              if the execution has already taken place and you are using this proposal to receive funds from the Treasury as payment
               for a delivered task, compare past and present logic and how this proposal has en"
          />

          {/* Button Row - take one level up */}

          <div className="mt-10 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4 rounded"
              onClick={() => changePropolsalSubPage(4, "/submitproposal/team")}
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
              onClick={() =>
                changePropolsalSubPage(2, "/submitproposal/context")
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

export default SubmitPropolsalProblemSolution;
