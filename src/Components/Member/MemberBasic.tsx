"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";

type Props = {
  name: string;
  role: string | undefined;

  className?: string;
};

const MemberBasic: React.FC<Props> = (props) => {
  return (
    <div className={"border border-white rounded-full w-7/12 p-1.5  backdrop-blur-sm bg-white/30 " + props.className}>
      <div className="flex justify-between">
        <div className="m-2 flex gap-3">
          <div className="rounded-full bg-green-500 w-10 h-10 self-center p-1.5">
            Img
          </div>
          <div>
            <div className="font-bold text-sm">{props.role}</div>
            <div className="text-sm">{props.name}</div>
          </div>
        </div>
        <div className="self-center mr-2 flex gap-4">
            <button className="p-2 rounded-xl bg-ordum-purple">Sync</button>
            <button className="p-2 rounded-xl bg-ordum-blue underline">View</button>
            <button className="p-2 rounded-xl bg-ordum-blue underline">Edit</button>
            <button className="p-2 rounded-xl bg-ordum-blue underline">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default MemberBasic;
