"use client";

import { useState } from "react";
import MileStoneReview from "./MileStoneReview";
import { useProposalContext } from "@/Context/submitPropolsal";

const Milestones = () => {
  const { milestones } = useProposalContext();
  console.log(milestones);

  const [milestonez, setMilestones] = useState<any>([]);

  const removeMilestone = (id: any) => {
    for (let i = 0; i < milestonez.length; i++) {
      if (milestonez[i]?.id === id) {
        const newArray = [...milestonez];
        newArray.splice(i, 1);
        setMilestones(newArray);
        return;
      }
    }
  };
  return (
    <div>
      <div className="mt-10 flex flex-col gap-8">
        {milestones.map((item, index) => {
          return (
            <li key={index}>
              <MileStoneReview
                name={item.name}
                description={item.description}
                deadline={item.deadline}
                tasks={item.tasks}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Milestones;
