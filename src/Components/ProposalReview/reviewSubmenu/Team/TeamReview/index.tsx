"use client";

import Image from "next/image";

import EyeIcon from "@/assets/svg-icons/eye.svg";
import { useState } from "react";

type Props = {
  name: String;
  description: string | undefined;
  id: any;

  remove: (id: any) => void;
  className?: string;
};

const MileStoneReview: React.FC<Props> = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <div
        className={
          "flex justify-between border border-white rounded-full w-full px-6 py-3  backdrop-blur-sm bg-white/30 " +
          props.className
        }
      >
        <span className="self-center font-bold text-xl">{props.name}</span>

        <div className="flex gap-8">
          <div className="flex flex-col">
            <span>Total Cost</span>
            <span>xxxxxxxx USD</span>
          </div>
          <div className="flex flex-col">
            <span>Deadline</span>
            <span>00/00/00</span>
          </div>

          {!showOptions ? (
            <button
              className="p-2 rounded-xl bg-ordum-blue flex gap-1"
              onClick={() => {
                setShowOptions(true);
              }}
            >
              <Image src={EyeIcon} alt="View" />
              <span className="self-center">View</span>
            </button>
          ) : (
            <button
              className="p-2 rounded-xl bg-ordum-gray border border-white flex gap-1"
              onClick={() => {
                setShowOptions(false);
              }}
            >
              <Image src={EyeIcon} alt="View" />
              <span className="self-center">Close</span>
            </button>
          )}
        </div>
      </div>

      {showOptions ? (
        <div className="mt-5">
          <h3 className="font-semibold bg-ordum-gray">Description</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="mt-5 flex gap-5 justify-around">
            <button className="w-full rounded-full py-2 px-5 bg-ordum-purple border border-white">
              Submit Milestone
            </button>
            <button className="w-full rounded-full py-2 px-5 bg-ordum-purple border border-white">
              Pivot
            </button>
            <button className="w-full rounded-full py-2 px-5 bg-ordum-blue border border-white">
              Edit Milestone
            </button>
          </div>

          <div className="mt-5">TASKS COMMING SOON</div>
        </div>
      ) : null}
    </div>
  );
};

export default MileStoneReview;
