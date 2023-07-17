"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";
import { useState } from "react";
import Task from "@/Components/task/Task";

type Props = {
  className?: string;

  addMilestone: (milestone: any) => void;
};

const MilestoneCreate: React.FC<Props> = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tasks, setTasks] = useState<any>([]);

  const addTask = (task: any) => {
    setTasks([...tasks, task]);
  };

  {console.log(tasks)}

  return (
    <div className={"max-w-[33rem] " + props.className}>
      <div>List Of Tasks</div>

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
        className="mt-2 w-full text-gray-500 text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
       rounded py-2 pl-2 pr-4 focus:outline-none resize-none
        "
        placeholder="Describe your deliverable, feel free to break it down in points. "
      />

      <label className="mt-4 text-xl flex">
        <span>Milestone Deadline</span>
      </label>
      <input
        className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="When do you think you'll be done with all tasks"
        type="text"
      />
      <Task addTask={addTask}/>
    </div>
  );
};

export default MilestoneCreate;
