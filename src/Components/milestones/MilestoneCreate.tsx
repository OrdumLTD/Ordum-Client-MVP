"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";
import { useState } from "react";

type Props = {
  //   name: String;
  //   description: string | undefined;

  className?: string;
};

const MilestoneCreate: React.FC<Props> = (props) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


  return (
    <div className={"flex flex-col w-[33rem] " + props.className}>
      <div className="mt-4 fotn-bold">List of tasks (soon)</div>

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Milestone Name</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Define your overarcoverarching Milestone; eg. Wallet Integration"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Milestone description</span>
      </label>
      {/* ToDo fix line break for plaeholder */}
      <textarea
        className=" text-gray-500 mt-4 text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[10rem]"
        placeholder="Describe your milestone"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Deadline</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="eg. email, telegram, handle, matrixEmail"
        type="date"
        // value={contact}
        // onChange={(e) => setContact(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span className="text-sm">Link to deliverable</span>
      </label>
      <input
        className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Link to deliverable; eg. drive, figma file, github repo..."
        type="text"
        // value={linkToPortfolio}
        // onChange={(e) => setlinkToPortfolio(e.target.value)}
      />


    </div>
  );
};

export default MilestoneCreate;
