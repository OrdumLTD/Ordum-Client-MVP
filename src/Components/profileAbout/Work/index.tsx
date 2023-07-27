"use client";

import { useState } from "react";

import Modal from "@/Components/ui/Modal";
import AddSkills from "./AddSkills";
import SkillPreview from "./SkillPreview"

const Work = () => {
  const [showModal, setShowModal] = useState(false);
  const [skills, setSkills] = useState<any[]>([]);

  const handleIsOpen = () => {
    setShowModal(!showModal);
  };

  const addSkills = (newSkills: any[]) => {
    setSkills([...skills, ...newSkills]);
    console.log("change");
  };

  const removeSkills = (i: number) => {
    let newSkills = [...skills];
    newSkills.splice(i, 1);
    setSkills(newSkills);
  };

  const noSkills = (
    <p>
      Nothing here yet.{" "}
      <button
        className="underline"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Click here
      </button>{" "}
      Add previous work!
    </p>
  );

  const listOfSkills = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <p>
          <button
            className="underline"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add more skills
          </button>{" "}
        </p>
        <SkillPreview skills={skills} remove={removeSkills} />
      </div>
    );
  };

  return (
    <div className="md:mx-10 md:ml-16 md:mr-32 h-screen flex flex-row">
      {/* Content */}
      {skills.length !== 0 ? (
        <div className="flex flex-col gap-2 w-full">
          <p>
            <button
              className="underline"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Add more skills
            </button>{" "}
          </p>
          <SkillPreview skills={skills} remove={removeSkills} />
        </div>
      ) : (
        noSkills
      )}
      <Modal isOpen={showModal} handleIsOpen={handleIsOpen}>
        <AddSkills save={addSkills} close={handleIsOpen} />
      </Modal>
    </div>
  );
};

export default Work;
