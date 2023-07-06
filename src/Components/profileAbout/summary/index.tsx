'use client'


import SideNav from "../sideNav/sideNav";
import ActiveGrants from "./ActiveGrants";
import ClosedGrants from "./ClosedGrants";
import Bio from "./bio";
import GoverenceActivity from "./governanceActivity";



export default function Summary() {
  return (
    <div className="md:mx-10 md:ml-16 md:mr-32 h-screen flex flex-row">
      <SideNav />
      {/* Content */}
      <div className="pl-0.5 md:pl-16 flex flex-1 flex-col overflow-y-auto paragraph">
        <div className="md:flex justify-between mb-4 md:mb-16">
        <Bio />
        <GoverenceActivity />
        </div>
        <ActiveGrants />
        <div className="my-1 md:my-4" />
        <ClosedGrants />
      </div>
    </div>
  );
}
