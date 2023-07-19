// This is intented to live in a module
//

"use client";

import { useState } from "react";

import Modal from "@/Components/ui/Modal";
import Button from "@/Components/ui/buttons/Button";

type Props = {
  name?: string;
  role?: string;
  contact?: string;
  linkToPortfolio?: string;
  bio?: string;
  className?: string;

  close?: () => void;

  // ToDo
  handleSumbit?: any;
};

const MemberCreate: React.FC<Props> = (props) => {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [contact, setContact] = useState(props.contact);
  const [linkToPortfolio, setlinkToPortfolio] = useState(props.linkToPortfolio);
  const [bio, setBio] = useState(props.bio);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        borderWhite
        className="py-4 font-semibold mt-8 w-[33rem]"
        onClick={() => setIsOpen(!isOpen)}
      >
        + Add Team Members
      </Button>

      <Modal isOpen={isOpen} handleIsOpen={setIsOpen}>
        <div className={"flex flex-col w-[33rem] " + props.className}>
          <label className="mt-4 text-xl flex">
            <span className="text-sm">Name</span>
          </label>
          <input
            className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Team member name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="mt-4 text-xl flex">
            <span className="text-sm">Contact</span>
          </label>
          <input
            className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="eg. email, telegram, handle, matrixEmail"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <label className="mt-4 text-xl flex">
            <span className="text-sm">Portfolio(if relevent)</span>
          </label>
          <input
            className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. website, github"
            type="text"
            value={linkToPortfolio}
            onChange={(e) => setlinkToPortfolio(e.target.value)}
          />

          <label className="mt-4 text-xl flex">
            <span className="text-sm">Role</span>
          </label>
          <input
            className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. Front End Developer"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <label className="mt-4 text-xl flex">
            <span className="text-sm">Bio</span>
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

          <label className="mt-4 text-xl flex">
            <span className="text-sm">
              Send an Email invitation {`(unsuported yet)`}
            </span>
          </label>
          <input
            className="mt-4 text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="unsuported yet"
            type="text"
            disabled
          />

          <div className="mt-8 flex flex-row justify-around gap-2">
            <button
              className="border border-white rounded-md py-4 w-full bg-ordum-purple"
              onClick={() => {
                props.handleSumbit({
                  name: name,
                  role: role,
                  contact: contact,
                  linkToPortfolio: linkToPortfolio,
                  bio: bio,
                });

                setName("");
                setRole("");
                setContact("");
                setlinkToPortfolio("");
                setBio("");
                setIsOpen(false);
              }}
            >
              Add
            </button>

            <button
              className="border border-white rounded-md py-4 w-full bg-ordum-blue"
              onClick={() => {
                setName("");
                setRole("");
                setContact("");
                setlinkToPortfolio("");
                setBio("");
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MemberCreate;
