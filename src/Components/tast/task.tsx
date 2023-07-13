import { useState } from "react";

type Props = {
  className?: string;
};

const Task: React.FC<Props> = (props) => {
  const [costPerHour, setCostPerhour] = useState(0);
  const [numberOfHours, setNumberOfHours] = useState(0);
  const [totalCost, setTotalCost] = useState("");

  const calucalteTotal = (
    costPerHour: number | string,
    totalCost: number | string
  ) => {
    return +costPerHour * +totalCost;
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
        // value={name}
        // onChange={(e) => setName(e.target.value)}
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
        // value={name}
        // onChange={(e) => setName(e.target.value)}
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
        // value={bio}
        // onChange={(e) => setBio(e.target.value)}
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
          value={costPerHour ? costPerHour : undefined}
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
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
        />
      </div>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Task Dedline</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="10/10/25"
        type="text"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Link to deliverable</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Github, Figma, Video ... "
        type="text"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Deliverable name</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Github, Figma, Video ... "
        type="text"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />

      <button className="mt-4 border border-white rounded-full py-4 w-full ">
        + Add link
      </button>
    </div>
  );
};

export default Task;
