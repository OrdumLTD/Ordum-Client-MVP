'use client'

import React from 'react'

function AddTeamMember() {
  return (
    <div className="flex">
        <input
         type="text" 
         placeholder="Confirming team member identity+send invite "
         className="
         w-screen
         mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500
           "
        />
        <select
           className="
           ml-2 
            mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:outline-none focus:border-sky-500
              "
        >
            <option value="" disabled selected hidden>Role</option>
            <option value=""></option>
            <option value=""></option>
        </select>
    </div>
  )
}

export default AddTeamMember;