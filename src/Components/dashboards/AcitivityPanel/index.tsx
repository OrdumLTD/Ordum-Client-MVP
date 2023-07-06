import Image from "next/image";
import OrdumAvatar from "@/assets/svg-icons/ordum-avatar.svg";
import KusamaAvatar from "@/assets/svg-icons/kusama-avatar.svg";

type Props = {};

const ActivityPanel: React.FC<Props> = (props) => {
  return (
    <div
      className="border border-teal-800 py-6 px-3
        backdrop-blur-md bg-white/50 rounded-lg
        flex flex-col
        "
    >
      <div className="mx-8 flex justify-between pb-6 border-b border-b-tiel-200">
        <div className="flex gap-5  ">
          <div className="bg-gradient-to-r from-[#0E1139] to-white px-4 py-2 rounded-lg">
            New Acticity
          </div>
          <div className="py-2 text-ordum-grey">History</div>
        </div>
        <select
          className="
           px-2 py-2 border border-black rounded-md text-sm md:text-base shadow-sm bg-inherit
            focus:outline-none"
        >
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Refused">Refused</option>
        </select>
      </div>

      <div className="mt-5 mx-8 flex flex-col">
        <h1>Hardcoded for the moment!</h1>
        <div className="px-4 py-5  flex justify-between align-center">
          <div className="flex gap-4">
            <Image src={OrdumAvatar} alt="Avatar" />
            <span className="mt-2.5">Ordum</span>
          </div>
          <div className="">
            <div className="w-40 text-center mt-1 bg-[#FF848B] px-4 py-2.5 rounded-full text-black">
              Deadline
            </div>
          </div>
          <div className="  flex flex-col">
            <span className="font-medium text-ordum-grey">
              Ordum Milestone 1
            </span>
            <span className="font-bold">15/04/24</span>
          </div>
          <button className="basis-1/12 bg-[#467EEE] px-2 rounded-full">
            Submit
          </button>
        </div>

        <div className="px-4 py-5 flex justify-between align-center bg-gray-400 rounded-full">
          <div className="flex gap-4">
            <Image src={KusamaAvatar} alt="Avatar" />
            <span className="mt-2.5">Kusama</span>
          </div>
          <div className="">
            <div className="w-40 text-center mt-1 bg-[#E7FFDF] py-2 rounded-full text-black">
              New Propolsal
            </div>
          </div>
          <div className="  flex flex-col">
            <span className="font-medium text-ordum-grey">
              Kusama Milestone 17
            </span>
            <span className="font-bold">11/09/24</span>
          </div>
          <button className="basis-1/12 bg-[#467EEE] px-2 rounded-full">
            View
          </button>
        </div>

        <div className="px-4 py-5  flex justify-between align-center">
          <div className="flex gap-4">
            <Image src={OrdumAvatar} alt="Avatar" />
            <span className="mt-2.5">Ordum</span>
          </div>
          <div className="">
          <div className="w-40 text-center mt-1 bg-[#E7FFDF] py-2 rounded-full text-black">
              New Discussion
            </div>
          </div>
          <div className="  flex flex-col">
            <span className="font-medium text-ordum-grey">
              ReferendaName
            </span>
            <span className="font-bold">@Username</span>
          </div>
          <button className="basis-1/12 bg-[#467EEE] px-2 rounded-full">
            Submit
          </button>
        </div>

        <div className="px-4 py-5 flex justify-between align-center bg-gray-400 rounded-full">
          <div className="flex gap-4">
            <Image src={KusamaAvatar} alt="Avatar" />
            <span className="mt-2.5">Kusama</span>
          </div>
          <div className="">
            <div className="w-40 text-center mt-1 bg-[#CFCFCF] px-4 py-2 rounded-full text-black">
              Pending
            </div>
          </div>
          <div className="  flex flex-col">
            <span className="font-medium text-ordum-grey">
              Off chain rants
            </span>
            <span className="font-bold">Sumbmiter 00/00/00</span>
          </div>
          <button className="basis-1/12 bg-[#467EEE] px-2 rounded-full">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPanel;
