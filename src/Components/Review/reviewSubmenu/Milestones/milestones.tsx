import MilestoneBasic from "@/Components/milestones/MilestoneBasic";
import MilestonesPreview from "@/Components/preview/milestones";
import { useState } from "react";

const Milestones = () => {
  const [milestones, setMilestones] = useState<any>([]);

  const removeMilestone = (id: any) => {
    for (let i = 0; i < milestones.length; i++) {
      if (milestones[i]?.id === id) {
        const newArray = [...milestones];
        newArray.splice(i, 1);
        setMilestones(newArray);
        return;
      }
    }
  };
  return (
    <div>
      <div className="mt-10 flex flex-col gap-8">
        <MilestoneBasic
          name={"Kilt Integration"}
          description="Testng"
          id="1235325"
          remove={removeMilestone}
        />
        <MilestoneBasic
          name={"Designing UI"}
          description="Testng"
          id="1225325"
          remove={removeMilestone}
        />
      </div>
    </div>
  );
};

export default Milestones;
