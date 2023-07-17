"use client";

import { use, useEffect, useState } from "react";

'use client'

import { useRouter } from "next/navigation";

import MemberCreate from "@/Components/Member/MemberCreate";
import MemberBasic from "@/Components/Member/MemberBasic";
import ProposalName from "../ProposalName";
import Button from "@/Components/ui/buttons/Button";
import Modal from "@/Components/ui/Modal";

type Props = {
  className?: string;
};

const SubmitPropolsalTeam: React.FC<Props> = (props) => {
  const [teamMembers, setTeamMembers] = useState<[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  // const submitCtx = useContext(SubmitPropolsalContext);
  const router = useRouter();
  // const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    // changeStep(step);
    router.push(route);
  };

  useEffect(() => {
    setTeamMembers(teamMembers);
  }, [teamMembers]);

  const addNewMember = (member: {}) => {
    //@ts-ignore
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10 ">
      <div className="w-[33rem] flex flex-col">
        <ProposalName />
        <h2 className="mt-8 text-4xl">Team Members</h2>
        <div className="mt-8 flex flex-col gap-4 w-[33rem]">
          {teamMembers.length !== 0
            ? teamMembers.map((member) => (
                <MemberBasic
                  key={member.name}
                  name={member.name}
                  role={member.role}
                />
              ))
            : null}
        </div>
        {/* <MemberCreate handleSumbit={addNewMember} /> */}

        {/* <Modal isOpen={modalOpen} handleIsOpen={setModalOpen}> */}
        <MemberCreate handleSumbit={addNewMember} />
        {/* </Modal> */}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <button
          className="bg-black text-white py-2 md:py-4"
          onClick={() =>
            changePropolsalSubPage(4, "/submitproposal/milestones")
          }
        >
          Save and continue
        </button>
        <button
          className="bg-black text-white py-2 md:py-4"
          onClick={() => changePropolsalSubPage(1, "/")}
        >
          Save draft and Close
        </button>
        <button
          className=" bg-gray-400 text-white py-2 md:py-4 "
          onClick={() =>
            changePropolsalSubPage(3, "/submitproposal/problem-solution")
          }
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SubmitPropolsalTeam;
