"use client";

import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";

export default function AccountInfo() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <div className="font-semibold">Profile Type</div>

        <div className="flex gap-1">
          <PersonIcon />
          <span className="text-sm font-light self-center">Applicant</span>
        </div>
        <div className="flex gap-1">
          <GroupsIcon />
          <span className="text-sm font-light self-center">Team</span>
        </div>
      </div>

      <div className=" flex flex-col gap-1">
        <span className="text-sm font-bold">Funding Recieved</span>
        <span className="text-3xl">0.000000</span>
        <div>
          <select
            className="
               block w-24 px-1 md:py-1 border border-slate-300 rounded-md text-sm md:text-base
                shadow-sm placeholder-slate-400
                bg-inherit w-full
              focus:outline-none focus:border-sky-500 bg-gray-300"
          >
            <option value="" className="" disabled hidden>
              USD
            </option>
            <option value="USD">USD</option>
            <option value="KSM">KSM</option>
            <option value="DOT">DOT</option>
          </select>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold">No of application</span>
          <span className="text-3xl">0000000</span>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold">Teams</span>
          <span className="text-xs">Nothig here yet.</span>
          <button className="text-sm underline self-start">View all</button>
        </div>
      </div>
    </div>
  );
}
