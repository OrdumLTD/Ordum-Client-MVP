"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";

type Props = {
  name: String;
  description: string | undefined;
  id: any;

  remove: (id: any) => void;
  className?: string;
};

const MilestoneBasic: React.FC<Props> = (props) => {
  return (
    <div
      className={
        "flex flex-col border border-white rounded-md w-full px-1.5 py-1  backdrop-blur-sm bg-white/30 " +
        props.className
      }
    >
      <div className="mt-2 flex flex-col gap-2">
        <div><span className="font-semibold">Name:</span>  <span className="font-bold text-xl">{props.name}</span></div>
        <div>
          <span className="font-bold">Description:</span> {props.description}
        </div>
      </div>

      <div className="mt-4 mb-2 self-center mr-2 flex gap-4">
        <button className="p-2 rounded-xl bg-ordum-blue underline">Edit</button>
        <button className="p-2 rounded-xl bg-ordum-purple underline">
          Remove
        </button>
      </div>
    </div>
  );
};

export default MilestoneBasic;
