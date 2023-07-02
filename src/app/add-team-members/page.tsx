'use client'

import Link from 'next/link'
import React,{useState} from 'react'
import AddTeamMember from './team-member/page';

function AddTeamMemberPage() {

    const [memberCount, setMemberCount] = useState<number>(1);



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
                            <AddTeamMember/>
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
            >
                Create Profile
            </button>
             {/* If the Profile is created render the below UI */}
            {
               <button
               className="mt-2 border border-black w-full py-3 text-lg"
               >
                Go to Profile
               </button>
            }
            <button
                className="mt-4 border bg-gray-400 text-white w-full py-3 text-lg"
            >
                <Link href="/create-team-profile">
                    Back
                </Link>
            </button>
        </div>
    </div>
  )
}

export default AddTeamMemberPage