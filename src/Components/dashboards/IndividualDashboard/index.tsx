import ActivityPanel from "../AcitivityPanel";

type Props = {
    activeGrants: number;
    nextDeadline?: string | undefined;
    pendingGrants: number;
    className?: string;
  };

const IndividualDashboard: React.FC<Props> = (props) => {
  return (
    <div className={"flex flex-col  " + props.className}>
      <div className="w-full flex flex justify-between gap-20">
        <div
          className="border border-teal-800 py-4 px-28 
        backdrop-blur-md bg-white/20 rounded-lg
        flex flex-col
        "
        >
          <span className="text-[#A0AEC0] ont-semibold">Active Grants</span>
          <span className="self-center">{props.activeGrants ? props.activeGrants : 0}</span>
        </div>
        <div
          className="border border-teal-800 py-4 px-28 
        backdrop-blur-md bg-white/20 rounded-lg
        flex flex-col
        "
        >
          <span className="text-[#A0AEC0] ont-semibold">Next Deadline</span>
          <span className="self-center">{props.nextDeadline ? props.nextDeadline : "N/A"}</span>
        </div>
        <div
          className="border border-teal-800 py-4 px-28 
        backdrop-blur-md bg-white/20 rounded-lg
        flex flex-col
        "
        >
          <span className="text-[#A0AEC0] ont-semibold">Pending Grants</span>
          <span className="self-center">{props.pendingGrants ? props.pendingGrants : 0}</span>
        </div>
      </div>
      <div className="mt-8">
      <ActivityPanel />
      </div>
    </div>
  );
};

export default IndividualDashboard;
