"use client";

import MemberBasic from "../Member/MemberBasic";

type Props = {
  members?: Array<{ name: string; role: string }>;

  className?: string;
};

const Team: React.FC<Props> = (props) => {
  return (
    <div className={" " + props.className}>
      <div>Add the team membes and sync their existing profiles</div>
      <div>
        <div className="mt-5 flex flex-col gap-5">
          {props.members?.length !== 0 ? (
            props.members?.map((member) => (
              <MemberBasic
                key={member.name}
                name={member.name}
                role={member.role}
              />
            ))
          ) : (
            <div>There are no members in this project</div>
          )}
        </div>

        <button className="mt-10 border border-white rounded-full w-7/12 py-4 ">
          + Add Member
        </button>
      </div>
    </div>
  );
};

export default Team;
