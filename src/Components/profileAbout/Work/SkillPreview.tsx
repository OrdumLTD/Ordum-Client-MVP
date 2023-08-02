"use client";

import { useEffect, useReducer, useState } from "react";

type Props = {
  skills: any[];
  edit?: () => void;
  remove?: (index: number) => void;
};

const SkillPreview: React.FC<Props> = (props) => {
  const [userSkills, setSkills] = useState<any[]>(props.skills);

  useEffect(() => {
    setSkills(props.skills)
  }, [props.skills])


  return (
    <ul className="w-full">
      {userSkills.map((skill, index) => {
        return (
          <li key={index}>
            <div className="mt-4 border w-full flex flex-col p-4">
              <div className="flex justify-between ">
                <div className="flex gap-4">
                  {" "}
                  <div className="font-semibold text-xl">{skill.name}</div>{" "}
                  <div className="mt-0.5">Level: {skill.level}</div>
                </div>
                <div className="flex gap-4">
                  <button className="bg-ordum-blue px-4 rounded">Edit</button>
                  <button
                    className="bg-red-500 px-4 rounded"
                    onClick={() => {
                      props.remove(index);
                
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="mt-4">{skill.description}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillPreview;
