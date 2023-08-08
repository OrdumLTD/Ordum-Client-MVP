"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/Components/ui/Modal";

// import ChainApiContext from "@/store/apiContext";

// import WalletContext from "@/store/walletContext";
import Milestone from "./milestone";
// import { useProfileContext } from "@/Context/ProfileStore";
import { useProposalContext } from "@/Context/submitPropolsal";
import ProposalName from "../ProposalName";
import MilestoneCreate from "@/Components/milestones/MilestoneCreate";
import MilestoneBasic from "@/Components/milestones/MilestoneBasic";

type Props = {
  className?: string;
};

const SubmitPropolsalMilestones: React.FC<Props> = (props) => {
  const { changeToStep, milestones, changeMilestones } = useProposalContext();
  // const walletCtx = useContext(WalletContext);
  const router = useRouter();

  console.log(milestones);

  const [modalIsOpen, setModalisOpen] = useState(false);
  const [milestoneList, setMilestoneList] = useState<any>(milestones);

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    router.push(route);
  };

  const addMilestone = async (milestone: any) => {
    setMilestoneList([...milestoneList, milestone]);
    changeMilestones([...milestoneList, milestone]);
  };

  // console.log(milestoneList);

  const removeMilestone = (id: any) => {
    for (let i = 0; i < milestoneList.length; i++) {
      if (milestoneList[i]?.id === id) {
        const newArray = [...milestoneList];
        newArray.splice(i, 1);
        setMilestoneList(newArray);
        return;
      }
    }
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="w-[33rem] flex flex-col">
        <ProposalName />

        <ul className="mt-8 flex flex-col gap-4">
          {milestoneList.map((item: any, index) => {
            return (
              <li key={index}>
                {" "}
                <MilestoneBasic
                  name={item.name}
                  description={item.description}
                  id={item.id}
                  key={item.id}
                  remove={removeMilestone}
                />
              </li>
            );
          })}
        </ul>

        {/* <MilestoneBasic
          name={"tem.name"}
          description={
            "aysay dsiosda nd aosndas ondas ndand ajsn dasndjadsnadsndsaj djsajdajs aysay dsiosda nd aosndas ondas ndand ajsn dasndjadsnadsndsaj djsajdajs aysay dsiosda nd aosndas ondas ndand ajsn dasndjadsnadsndsaj djsajdajs "
          }
          id={"12"}
          // key={item.id}
          remove={removeMilestone}
        /> */}

        <MilestoneCreate
          isOpen={modalIsOpen}
          handleIsOpen={setModalisOpen}
          addMilestone={addMilestone}
        />
      </div>

      <div className="mt-10 mb-20 flex flex-col gap-4">
        <button
          className="bg-black text-white py-2 md:py-4"
          onClick={() => setModalisOpen(true)}
        >
          Add Another milestone
        </button>

        <button
          className="bg-black text-white py-2 md:py-4"
          onClick={() => {
            // changeMilestones(milestoneList);
            changePropolsalSubPage(5, "/submitproposal/review");
          }}
        >
          Review
        </button>

        <button
          className="bg-black text-white py-2 md:py-4"
          onClick={() => changePropolsalSubPage(1, "/")}
        >
          Save draft and Close
        </button>
      </div>
    </div>
  );
};

export default SubmitPropolsalMilestones;

{
  /* <div className="mt-10">
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
{/* ToDo fix line break for plaeholder */
}
{
  /*<textarea
  className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
   rounded py-2 pl-2 pr-4 focus:outline-none resize-none
    min-h-[10rem]"
  placeholder="Describe your deliverable, feel free to break it down in points. "
/>

<label className="mt-4 text-xl flex">
  <span>Milestone Deadlin</span>
</label>
<input
  className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
  placeholder="When do you think you'll be done with all tasks"
  type="text"
/>

<Task />

{/* Button Row - take one level up */
}

{
  /* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */
}
{
  /* <div className="mt-10 mb-20 flex flex-col gap-4">
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
</div> */
}
