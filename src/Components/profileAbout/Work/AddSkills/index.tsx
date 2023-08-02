"use client";

import { use, useState } from "react";

import SkllView from "./SkillView";
import Button from "@/Components/ui/buttons/Button";

type Props = {
  skillList?: any[];
  save?: (skills) => void;
  close?: () => void;
};

const AddSkills: React.FC<Props> = (props) => {
  const [skillList, setSkillList] = useState<any[]>([]);

  const [skillName, setSkillname] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [description, setDescription] = useState("");

  const viewSkills = (
    <ul className="mb-5">
      {skillList.map((skill, index) => {
        return (
          <li key={index}>
            <div className="border rounded-full py-1.5 px-3 flex justify-between my-2">
              <div className="flex gap-4">
                <span>
                  <span className="font-semibold">Name:</span> {skill.name}
                </span>
                {/* <span>
                  <span className="font-semibold">Level:</span> {skill.level}
                </span> */}
              </div>
              <div>
                <button
                  className="border border rounded-md px-1 bg-red-300"
                  onClick={() => {
                    const newSkillList = [...skillList];
                    newSkillList.splice(index, 1);
                    setSkillList(newSkillList);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={"max-w-[33rem] w-full text-black "}>
      {skillList.length !== 0 ? viewSkills : null}

      <div className="flex-flex flex-col justify-start mb-2">
        <h2 className="text-3xl mb-5">Add Skills</h2>

        <div className="flex flex-col gap-3">
          <label className="font-semibold">Project Name</label>
       
            <input
              className="text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
              placeholder="Eg. React, Figma, Substarate"
              value={skillName}
              onChange={(e) => {
                //@ts-ignore
                setSkillname(e.target.value);
              }}
              type="text"
            />
     
        </div>

        <div className="mt-5">
          <label className="font-semibold">Describe Project</label>
          <textarea
            className="mt-2 text-gray-500 mt-2 w-full bg-inherit text-sm placeholder:font-italitc placeholder:text-xs placeholder-gray-300 border border-gray-500
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[8rem]"
            placeholder="If you'd care to elaborate "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button
          className="mt-2 w-full rounded-md py-1.5 bg-ordum-blue text-white"
          onClick={() => {
            setSkillList([
              ...skillList,
              {
                name: skillName,
                level: skillLevel,
                description: description,
              },
            ]);
            setSkillLevel("");
            setSkillname("");
            setDescription("");
          }}
        >
          + Add More
        </Button>

        <div className=" mt-5 w-full flex flex-col gap-2">
          <Button primeColor className="text-white" onClick={() =>{
            props.save(skillList);
            props.close();
          }}>
            {" "}
            Save{" "}
          </Button>
          <Button
            secondaryColor
            className="text-white"
            onClick={() => {
              setSkillList([])
              setSkillLevel("");
              setSkillname("");
              setDescription("");
              props.close();
            }}
          >
            {" "}
            Back{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddSkills;
