'use client'

import Link from 'next/link'
import React,{useState} from 'react'
import AddTeamMember from './teamMember/page';
import { useProfileContext } from '@/Context/ProfileStore';
import { useWalletContext } from '@/Context/WalletStore';
import { usePhalaContractContext } from '@/Context/PhalaContractApiStore';
import { AccountId, MemberRole, UserRole } from "@/lib/PhalaContract/Types/types";
import { createApplicantProfile } from '@/lib/PhalaContract/Txn/createProfile';


export interface Member {
    acc: AccountId,
    role: MemberRole
}

function AddTeamMemberPage() {
    //Context
    const {profileData, setProfile,creationStatus,setCreationStatus} = useProfileContext();
    const {account, signer} = useWalletContext();
    const {contractApi,cache} =  usePhalaContractContext();

    const defaultMember: Member = {
        acc: "",
        role: MemberRole.regular
    }
    const [memberCount, setMemberCount] = useState<number>(1);
    const [membersNRole, setMembersNRole] = useState<Array<[AccountId, MemberRole]>>([]);
    const [members, setMembers] = useState<Member>(defaultMember)

    const addMember = (v: Member) => {
        setMembers({ ...members, ...v })
      }
    
    
    const addTeamMember = () => {
        const memberData: [AccountId, MemberRole] = [members.acc, members.role];
        setMembersNRole((prevData) => [...prevData, memberData])
        setMembers(defaultMember)
        setMemberCount(memberCount + 1);
      };
    
      const saveNDone = async () => {
        //@ts-ignore
        setProfile({ teamMembers: membersNRole })
        await createProfile()
      }

      // Contract Call for Crreating Profile
  const createProfile = async () => {
    const profileCreationStatus =(v:boolean)=>{
        setCreationStatus(v)
    }

    const { teamType, userType } = profileData
    if(account && signer && cache && contractApi){

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
            )
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
 }


  return (
    <div className="font-space-grotesk grid h-screen place-items-center relative mb-20">
        <div className="absolute insext-x-0 top-20 max-w-xl">
            <h1 className="text-4xl font-medium mb-4">Add team members</h1>
            <p className="paragraph mb-12">
                Add your team and send them wallet invitations. Remember to add your
                own personal wallet if the one you logged in with is a multi sig or
                belongs to an organisation. 
            </p>
            <p>Member Wallet address</p>
            <ul>
                {
                    [...Array(memberCount)].map((e,i)=> (
                        <li key={i}>
                            <AddTeamMember member={membersNRole} key={i - 1} setMember={addMember}/>
                        </li>
                    ))
                }
            </ul>
            
            <button
                 className="mt-2 border border-black w-full py-3 text-lg"
            >
                Add More
            </button>
            <button
                className="mt-4 border bg-black text-white w-full py-3 text-lg"
                onClick={() => saveNDone()}
            >
                Create Profile
            </button>
             {/* If the Profile is created render the below UI */}
            {
                creationStatus &&
               <button
               className="mt-2 border border-black w-full py-3 text-lg"
               >
                <Link href="/profile/about">
                    Go to Profile
                </Link>
               </button>
            }
            <button
                className="mt-4 border bg-gray-400 text-white w-full py-3 text-lg"
            >
                <Link href="/createTeamProfile">
                    Back
                </Link>
            </button>
        </div>
    </div>
  )
}

export default AddTeamMemberPage