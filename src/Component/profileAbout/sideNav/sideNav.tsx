'use client'

import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';


export default function SideNav() {
    return (
      <nav className="w-12 md:w-40 ">
        <div className="font-semibold">Profile Type</div>
  
        <div className="mt-2 flex">
            <PersonIcon/>
          <span className="text-sm">Applicant</span>
        </div>
  
        <div className="mt-1 flex">
            <GroupsIcon/>
          <span className="text-sm">Team</span>
        </div>
  
        <div className="mt-4 flex flex-col gap-1">
          <span className="text-sm font-bold">Funding Recieved</span>
          <span className="text-xl">0.000000</span>
          <div>
            <select
              className="
               block w-24 px-1 md:py-1 border border-slate-300 rounded-md text-sm md:text-base shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 bg-gray-300"
            >
              <option value="" className="" disabled  hidden>
                USD
              </option>
              <option value="USD">USD</option>
              <option value="KSM">KSM</option>
              <option value="DOT">DOT</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Certificates</span>
            <span className="text-xs">Nothig here yet.</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">No of delivries</span>
            <span className="text-xs">Nothig here yet.</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">No of application</span>
            <span className="text-xs">Nothig here yet.</span>
          </div>
        </div>
      </nav>
    );
  }
  