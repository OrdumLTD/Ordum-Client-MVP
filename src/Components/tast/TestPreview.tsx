"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";

type Props = {
  name: string;
  type: string | undefined;

  className?: string;
};

const TaskPreview: React.FC<Props> = (props) => {
  return (
    <div className={"border border-white rounded-full w-7/12 px-1.5 py-0.5  backdrop-blur-sm bg-white/30 " + props.className}>
      <div className="flex justify-between">
        <div className="m-2 flex gap-1">
          <div>
            <div className="font-bold text-ordum-grey">{props.type}</div>
            <div className="font-bold">{props.name}</div>
          </div>
        </div>
        <div className="self-center mr-2 flex gap-4">
            <button className="p-2 rounded-xl bg-ordum-blue underline">Edit</button>
            <button className="p-2 rounded-xl bg-ordum-blue underline">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default TaskPreview;
