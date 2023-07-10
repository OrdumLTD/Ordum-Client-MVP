"use client";

type Props = {
  account: string;
  role: string | undefined;

  className?: string;
};

const TeamMemberBasic: React.FC<Props> = (props) => {
  return (
    <div
      className={
        "border border-white rounded-full w-full px-1.5 py-1  backdrop-blur-sm bg-white/30 " +
        props.className
      }
    >
      <div className="flex justify-between">
        <div className="m-2 flex gap-3">
          <div className="flex gap-1">
            <span className="basis-6/12">Address:</span>
            <span className="font-semibold"> {props.account}</span>
          </div>
          <div className="flex gap-1">
            <span className="">Role:</span>
            <span className="font-semibold"> {props.role}</span>
          </div>
        </div>
        <div className="self-center mr-2 flex gap-4">
          <button className="p-2 rounded-xl bg-ordum-blue underline">
            Edit
          </button>
          <button className="p-2 rounded-xl bg-ordum-blue underline">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberBasic;
