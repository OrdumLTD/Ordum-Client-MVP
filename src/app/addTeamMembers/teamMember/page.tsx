"use client";

import { MemberRole } from "@/lib/PhalaContract/Types/types";
import React, { useState } from "react";

function AddTeamMember({ member, setMember, addnewMemberToState, key }: any) {
  const [address, setAddress] = useState();
  const [role, setRole] = useState();

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <input
          type="text"
          placeholder="Confirming team member identity+send invite "
          className="
         w-screen
         mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 text-gray-500
           "
          value={address}
          //@ts-ignore
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          className="
           ml-2 
            mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:outline-none focus:border-sky-500 text-gray-500
              "
          onChange={(e) => {
            setMember({ role: e.target.value });
            //@ts-ignore
            setRole(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Role
          </option>
          <option value={MemberRole.admin}>{MemberRole.admin}</option>
          <option value={MemberRole.regular}>{MemberRole.regular}</option>
        </select>
      </div>
      <button
        className=" mt-5 rounded-full py-2 md:py-2.5 bg-ordum-blue  font-semibold shadow-md shadow-xl hover:shadow-2xl"
        onClick={() => {
          setMember();
          addnewMemberToState({ address: address, role: role });
          //@ts-ignore
          setAddress("");
        }}
      >
        + Add Team Member
      </button>
    </div>
  );
}

export default AddTeamMember;
