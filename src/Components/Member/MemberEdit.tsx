"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";
import { useState } from "react";

type Props = {
  name?: string;
  role?: string | undefined;
  contact?: string;
  linkToPortfolio?: string;
  bio?: string;

  className?: string;
};

const MemberEdit: React.FC<Props> = (props) => {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [contact, setContact] = useState(props.contact);
  const [linkToPortfolio, setlinkToPortfolio] = useState(props.linkToPortfolio);
  const [bio, setBio] = useState(props.bio);

  return (
    <div className={"flex flex-col w-[33rem] " + props.className}>
      <label className="mt-4 text-xl flex">
        <span>Name</span>
      </label>
      <input
        className="mt-2 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Team member name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span>Contact</span>
      </label>
      <input
        className="mt-2 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="eg. email, telegram, handle, matrixEmail"
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span>Portfolio(if relevent)</span>
      </label>
      <input
        className="mt-2 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Eg. website, github"
        type="text"
        value={linkToPortfolio}
        onChange={(e) => setlinkToPortfolio(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span>Role</span>
      </label>
      <input
        className="mt-2 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
        placeholder="Eg. Front End Developer"
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <label className="mt-4 text-xl flex">
        <span>Bio</span>
      </label>
      {/* ToDo fix line break for plaeholder */}
      <textarea
        className=" text-gray-500 mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[10rem]"
        placeholder="How is their role relevant to the proposal? 
            Professional experience 
            Community engagement or involvement with other projects"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <div className="mt-8 flex flex-row justify-around gap-2">
        <button className="border border-white rounded-md py-4 w-full bg-ordum-purple">
          Save Changes
        </button>

        <button className="border border-white rounded-md py-4 w-full bg-ordum-blue">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MemberEdit;
