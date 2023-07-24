'use client'

import SideNav from "../sideNav/sideNav";
import OptionsBar from "./optionsBar";




export default function Activity() {
  return (
    <div className="md:mx-10 md:ml-16 md:mr-32 h-screen flex flex-row">
      <SideNav />
      {/* Content */}
      <div className="pl-0.5 md:pl-16 flex flex-1 flex-col gap-14 overflow-y-auto paragraph">
        <div className="flex flex-col gap-5">
          <OptionsBar />
          <div >Nothing here yet</div>
        </div>
      </div>
    </div>
  );
}


