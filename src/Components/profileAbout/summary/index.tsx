'use client'

import AccountInfo from "./AccountInfo";
import Mission from "./Mission";
import Bio from "./Bio";
// import GoverenceActivity from "./governanceActivity";



export default function Summary() {
  return (
    <div className="md:mx-10 md:ml-16 md:mr-32 h-screen flex flex-row">
      {/* Content */}
      <div className="pl-0.5 md:pl-16 flex flex-1 flex-col overflow-y-auto paragraph">
        <AccountInfo />
        <Bio className="mt-8"/>
        <Mission className="mt-8"/>
      </div>
    </div>
  );
}
