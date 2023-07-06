import SideNav from "../sideNav/sideNav";
import TeamMember from "./teamMember";


export default function Team() {
  return (
    <div className="md:mx-10 md:ml-16 md:mr-32 h-screen flex flex-row">
      <SideNav />
      {/* Content */}
      <div className="pl-0.5 md:pl-16 flex flex-1 flex-col gap-14 overflow-y-auto paragraph">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        {/* ToDo - add necreate perosna profile */}
        <p>Create Personal profile</p>
      </div>
    </div>
  );
}
