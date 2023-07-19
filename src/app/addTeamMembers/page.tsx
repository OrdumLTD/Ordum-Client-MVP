"use client";

import Link from "next/link";
import React, { useState } from "react";
import AddTeamMember from "./teamMember/page";
import { useProfileContext } from "@/Context/ProfileStore";
import { useWalletContext } from "@/Context/WalletStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import {
  AccountId,
  MemberRole,
  UserRole,
} from "@/lib/PhalaContract/Types/types";
import { createApplicantProfile } from "@/lib/PhalaContract/Txn/createProfile";
import TeamMemberBasic from "./teamMember/TeamMemberBasic";

export interface Member {
  acc: AccountId;
  role: MemberRole;
}

function AddTeamMemberPage() {
  //Context
  const { profileData, setProfile, creationStatus, setCreationStatus } =
    useProfileContext();
  const { account, signer } = useWalletContext();
  const { contractApi, cache } = usePhalaContractContext();

  const defaultMember: Member = {
    acc: "",
    role: MemberRole.regular,
  };
  const [memberCount, setMemberCount] = useState<number>(1);
  const [membersNRole, setMembersNRole] = useState<
    Array<[AccountId, MemberRole]>
  >([]);
  const [members, setMembers] = useState<Member>(defaultMember);

  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  const addMember = (v: Member) => {
    setMembers({ ...members, ...v });
  };

  const addTeamMember = () => {
    const memberData: [AccountId, MemberRole] = [members.acc, members.role];
    setMembersNRole((prevData) => [...prevData, memberData]);
    setMembers(defaultMember);
    setMemberCount(memberCount + 1);
  };

  const removeMember = (toRemove:string) => {
    teamMembers.forEach( (member) =>{
        if(toRemove === member.address){
            console.log("?")
        }
    })
  }

  const addNewMember = (member: {}) => {
    //@ts-ignore
    setTeamMembers([...teamMembers, member]);
  };

  //   const addNewMember = (newMember: { acc: AccountId; role: MemberRole }) => {};

  const saveNDone = async () => {
    //@ts-ignore
    setProfile({ teamMembers: membersNRole });
    await createProfile();
  };

  // Contract Call for Crreating Profile
  const createProfile = async () => {
    const profileCreationStatus = (v: boolean) => {
      setCreationStatus(v);
    };

    const { teamType, userType } = profileData;
    if (account && signer && cache && contractApi) {
      //1. (Individual && Applicant)
      if (teamType === "Individual" && userType === "Applicant") {
        await createApplicantProfile(
          //utill fn
          profileCreationStatus,
          //---------
          account,
          signer,
          cache,
          contractApi,
          //Params
          profileData.teamName,
          account.address,
          profileData.description,
          profileData.allowedAccounts,
          [],
          //ProfileCtx.profileData.projectType, // Work on this
          profileData.teamMembers,
          [],
          UserRole.individual
        );
      }
      //2. (Individual && Grant Issuer)
      if (teamType === "Individual" && userType === "Grant Issuer") {
      }
      //3. (Organization && Applicant)
      if (teamType === "Organization" && userType === "Applicant") {
      }
      //4. (Organization && Grant Issuer)
      if (teamType === "Organization" && userType === "Grant Issuer") {
      }
    }
  };

  return (
    <div className="grid h-screen place-items-center  bg-[url('/background/grain-cover.png')]  text-white">
      <div className="w-[40rem] p-5 border border-2 border-white backdrop-blur-md rounded-lg">
        <h1 className="text-4xl font-medium mb-4">Add team members</h1>
        <p className="paragraph mb-12">
          Add your team and send them wallet invitations. Remember to add your
          own personal wallet if the one you logged in with is a multi sig or
          belongs to an organisation.
        </p>
        <p>Member Wallet address:</p>

        {/* <ul>
          {[...Array(memberCount)].map((e, i) => (
            <li key={i}>
              <AddTeamMember
                member={membersNRole}
                key={i - 1}
                setMember={addMember}
              />
            </li>
          ))}
        </ul> */}

        <div className="mt-4">
          <ul className="flex flex-col gap-2 mb-4">
            {teamMembers.map((member) => {
              // return <TeamMemberBasic account={member}/>
              return (
                <li key={member.address}>
                  <TeamMemberBasic
                    address={member.address}
                    role={member.role}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <AddTeamMember
          member={membersNRole}
          setMember={addTeamMember}
          addnewMemberToState={addNewMember}
        />

        <div
          className="mt-10
            w-full
            flex flex-col gap-4"
        >
     
          <button
            className="rounded-full py-2.5 md:py-3 bg-ordum-purple  font-semibold shadow-md shadow-md hover:shadow-2xl"
            onClick={() => saveNDone()}
          >
             <Link href="/home/manageteams">Create Profile</Link>
          </button>
          
          {/* If the Profile is created render the below UI */}
          {creationStatus && (
            <button className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl">
              <Link href="/profile/about">Go to Profile</Link>
            </button>
          )}
          <button className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl">
            <Link href="/createTeamProfile">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTeamMemberPage;
