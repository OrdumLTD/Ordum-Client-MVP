import { useState } from "react";

import { v4 } from "uuid";

import Deliverable from "./Deliverable";

type Props = {
  name?: string;
  type?: string;
  taskDescription?: string;
  teamMembers?: {
    teamMember?: any;
    cost?: {
      typeOfUnit?: string;
      costPerUnit?: number;
      units?: number;
    }[];
    deliverable?: {
      name?: string;
      link?: string;
    };
  };
  taskDeadline?: string;
  className?: string;

  addTask: (task: any) => void;
};

const Task: React.FC<Props> = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [teamMebmbers, setTeamMembers] = useState<any>([]);
  const [costPerHour, setCostPerhour] = useState(0);
  const [numberOfHours, setNumberOfHours] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [taskDeadLine, setTaskDeadLine] = useState("");
  const [deliverableName, setDeliverableName] = useState("");
  const [deliverableLink, setDeliverableLink] = useState("");
  const [deliverables, setDeliverables] = useState<any>([]);

  const calucalteTotal = (
    costPerHour: number | string,
    totalCost: number | string
  ) => {
    return +costPerHour * +totalCost;
  };

  const removeTask = (id: any) => {
    for (let i = 0; i < deliverables.length; i++) {
      if (deliverables[i]?.id === id) {
        const newArray = [...deliverables];
        newArray.splice(i, 1);
        setDeliverables(newArray);
        return;
      }
    }
  };

  return (
    <div className={"flex flex-col w-[33rem] " + props.className}>
      <label className="mt-4 text-xl flex">
        <span className="text-sm">Task Name</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Define the first task. Eg. UI design "
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="text-xs mt-2">
        Each milestone can consist of one or multiple tasks. For an example, you
        can be working on a digital identity integration. This would require a
        UI design, front end build, possibly smart contracts, storage setup etc.
        You can add each of these as a task within the milestone.{" "}
      </p>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Task Type</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Eg. UI design "
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <p className="text-xs mt-2">
        What kind of task is the team member attending to?{" "}
      </p>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Task Description</span>
      </label>
      {/* ToDo fix line break for plaeholder */}
      <textarea
        className=" text-gray-500 mt-4 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[10rem]"
        placeholder="Please provide a more detailed explanation of the task. "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Assign a team member (commign soon)</span>
      </label>

      <p>Dropdow with team members</p>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Assign a team member (commign soon)</span>
      </label>

      <button className="mt-4 border border-white rounded-full py-4 w-full ">
        + Add member to this task (soon)
      </button>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Cost</span>
      </label>

      <div className="flex justify-between">
        <input
          className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none w-20"
          placeholder="Per hour "
          type="text"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <input
          className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none w-32"
          placeholder="Cost per hour "
          type="number"
          min="0"
          value={costPerHour}
          onChange={(e) => {
            // @ts-ignore - because this is stupid!
            setCostPerhour(e.target.value);
          }}
        />
        <input
          className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none w-28"
          placeholder="№ of hours "
          type="number"
          min="0"
          value={numberOfHours}
          onChange={(e) => {
            // @ts-ignore - because this is stupid!
            setNumberOfHours(e.target.value);
          }}
          // onChange={(e) => setName(e.target.value)}
        />
        <input
          className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
          placeholder="Total cost "
          min="0"
          value={numberOfHours * costPerHour}
          // onChange={(e) => setTotalCost(e.target.value)}
        />
      </div>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Task Deadline</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="10/10/25"
        type="text"
        value={taskDeadLine}
        onChange={(e) => setTaskDeadLine(e.target.value)}
      />

      <ul className="mt-8 flex flex-col gap-4">
        {deliverables.map((item: any) => {
          return (
            <Deliverable
              name={item.name}
              link={item.link}
              id={item.id}
              key={item.id}
              remove={removeTask}
            />
          );
        })}
      </ul>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Link to deliverable</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Github, Figma, Video ... "
        type="text"
        value={deliverableLink}
        onChange={(e) => setDeliverableLink(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Deliverable name</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Dliverable Link "
        type="text"
        value={deliverableName}
        onChange={(e) => setDeliverableName(e.target.value)}
      />

      <button
        className="mt-4 border border-black rounded-full py-1.5 w-full"
        onClick={() => {
          setDeliverables([
            ...deliverables,
            { name: deliverableName, link: deliverableLink, id: v4() },
          ]);
          setDeliverableName("");
          setDeliverableLink("");
        }}
      >
        + Add link
      </button>

      <button
        className="mt-4 border border-black rounded-full fons py-2.5 w-full "
        onClick={() => {
          const total = numberOfHours * costPerHour;
          props.addTask({
            name,
            type,
            description,
            teamMebmbers,
            costPerHour,
            totalCost: total,
            numberOfHours,
            taskDeadLine,
            deliverables,
          });
          setType("");
          setDescription("");
          setCostPerhour(0);
          setNumberOfHours(0);
          setTotalCost(0);
          setTaskDeadLine("");
          setDeliverables([]);
          setTeamMembers([]);
          // setTeamMembers("");
          // const [, ] = useState("");
          // const [, ] = useState();
          // const [, setCostPerhour] = useState(0);
          // const [numberOfHours, ] = useState(0);
          // const [totalCost, ] = useState("");
          // const [taskDeadLine, ] = useState("");
          // const [deliverableName, ] = useState("");
          // const [deliverableLink, setDeliverableLink] = useState("");
          // const [deliverables, ] = useState<any>([]);
        }}
      >
        + Add Task
      </button>

     
    </div>
  );
};

export default Task;
