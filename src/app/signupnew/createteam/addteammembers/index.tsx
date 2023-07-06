import Link from "next/link";
import Image from "next/image";

import { Mail, GitHub } from "react-feather";
import Discord from "@/assets/svg-icons/discord.svg";
import Twitter from "@/assets/svg-icons/twitter-icon.svg";
import Matrix from "@/assets/svg-icons/matrix.png";
import Website from "@/assets/svg-icons/global.png";
import TeamMember from "./TeamMember";
import { useState } from "react";

const AddTeamMembers = () => {

  const [teamMembers, setTeamMembers] = useState<number>(5);

  function addTeamMember() {
    setTeamMembers(teamMembers + 1);
  }

  // function removeTeamMember(
  //   
  // )


  return (
    <div className="grid place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-contain text-sm md:text-base">
      <div
        className="
       my-10 xl:my-28
       border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid"
      >
        <div className="grid place-items-center text-white">
          <div className="justify-self-start text-2xl md:text-4xl">
            Add Team members
          </div>

          <h3 className="mt-5 md:mt-10 justify-self-start font-medium">
            Team Name
          </h3>

          <p className="paragraph mb-12">
            Add your team and send them wallet invitations. Remember to add your
            own personal wallet if the one you logged in with is a multi sig or
            belongs to an organisation.
          </p>
          <p className="justify-self-start">Member Wallet address</p>
          <ul className="justify-self-start w-full">
            {[...Array(teamMembers)].map((e, i) => (
              <li className="mb-2" key={i}>
                <TeamMember />
              </li>
            ))}
          </ul>
          <button
            onClick={addTeamMember}
            className="mt-2 border border-black w-full py-3 text-lg"
          >
            Add More
          </button>

          <div
            className="mt-5
            w-full
            flex flex-col gap-4"
          >
            <button className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl">
              Save and continue
            </button>
            <button className="rounded-full py-2.5 md:py-3 bg-ordum-purple font-semibold shadow-md shadow-md hover:shadow-2xl">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMembers;
