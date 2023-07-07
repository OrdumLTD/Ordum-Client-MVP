import Image from "next/image";
import { useContext , useEffect} from "react";
import { useRouter } from "next/router";
import ChainApiContext from "@/store/apiContext";

import SubmitPropolsalContext from "@/store/submitPropolsal";
import WalletContext from "@/store/walletContext";
import Milestone from "./milestone";

type Props = {
  className?: string;
};

const SubmitPropolsalMilestones: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const walletCtx = useContext(WalletContext);
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

// Proposal submission
// APIContext
const apiCTX = useContext(ChainApiContext);
const chainAPI = apiCTX.api;
const fetchChainApi = apiCTX.fetchChainApi;

useEffect(()=>{
  const run = () =>{
    fetchChainApi?.();
  }
  run()
},[])

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h1 className="text-4xl xl:text-6xl font-medium">Submit Proposal</h1>

        <h2 className="mt-8 text-4xl">5. Milestones</h2>

        <p className="mt-2">
          Please provide a list of milestone deliverables. This list should
          closely reflect the list of deliverables agreed by your team to reach
          the solution, along with resources needed for development and
          timelines. If your project includes any technical development, each
          item in the list should include a link to the deliverable itself:
        </p>

        <div className="mt-4">
          <label className="mt-4 text-xl flex">
            <span>Milestone Name</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg 1.1. Research"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Deliverable</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. Report"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Duration</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. 1 months"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Link to deliverable</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. git repo"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Assigned</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Which team memer is responsible for this"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Deadline</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="DD/MM/YY"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Total Cost</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. 10,000usd"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Cost breakbown</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. amount of hours, cost per hour, link to sheet"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>Payment conditions</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Upfront/upon delivery"
            type="text"
          />

          <label className="mt-4 text-xl flex">
            <span>
              Recipient Address(leave blank if the same as applicant).
            </span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Wallet address"
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

          <Milestone />

          {/* Button Row - take one level up */}

          {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}
          <div className="xl:ml-48 2xl:ml-60 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(6, "/submitproposal/preview")
              }
            >
              Priview
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
            <button
              className="bg-gray-400 text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(3, "/submitproposal/team")
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

export default SubmitPropolsalMilestones;
