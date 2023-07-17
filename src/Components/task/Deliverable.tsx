"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";

type Props = {
  name: string;
  link: string | undefined;
  id: any;

  remove: (id: any) => void;

  className?: string;
};

const Deliverable: React.FC<Props> = (props) => {
  return (
    <div
      className={
        "border border-white rounded-full px-1.5 py-0.5  backdrop-blur-sm bg-white/30 " +
        props.className
      }
    >
      <div className="flex justify-between">
        <div className="m-2 flex gap-1">
          <div>
            <div ><span className="font-bold">Name</span> {props.name}</div>
            <div ><span className="font-bold">Link</span> {props.link}</div>
          </div>
        </div>
        <div className="self-center mr-2 flex gap-4">
          <button className="p-2 rounded-xl bg-ordum-blue underline">
            Edit
          </button>
          <button
            className="p-2 rounded-xl bg-ordum-blue underline"
            onClick={() => {props.remove(props.id)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deliverable;
