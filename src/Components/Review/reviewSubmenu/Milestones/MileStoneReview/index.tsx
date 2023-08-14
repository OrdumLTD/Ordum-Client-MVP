"use client";

import Image from "next/image";

import EyeIcon from "@/assets/svg-icons/eye.svg";
import { useState } from "react";
import Link from "next/link";

type Props = {
  name: String;
  description: string | undefined;
  deadline: string;
  id?: any;
  tasks?: any[];

  remove?: (id: any) => void;
  className?: string;
};

const calculateCost = () => {};

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
        <span className="self-center font-bold text-xl ml-4">{props.name}</span>

        <div className="flex gap-8">
          <div className="flex flex-col">
            <span>Total Cost</span>
            <span>xxxxxxxx USD</span>
          </div>
          <div className="flex flex-col">
            <span>Deadline</span>
            <span>{props.deadline}</span>
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
        <div className="mt-10">
          <h3 className="font-semibold bg-ordum-gray">Description</h3>
          <p className="mt-2">{props.description}</p>

          <div className="mt-10 flex gap-5 justify-around">
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

          <ul className="mt-4">
            {props?.tasks.map((item, index) => {
              return (
                <li key={index} className="mt-2 w-full">
                  <div className="border px-4 py-6 flex items-center w-full">
                    <div className="basis-8/12 text-xl">{item?.name}</div>
                    <div className="basis-4/12 w-full flex items-center justify-between">
                      <div className=" flex flex-col">
                        <span className="text-ordum-grey">Cost</span>
                        <span>{item.totalCost} usd</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-ordum-grey">Deadline</span>
                        <span>{item.taskDeadline}</span>
                      </div>
                      <div className="text-sm px-8 py-2 rounded-xl bg-ordum-purple">
                        {item.type}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex">
                    {" "}
                    <div className="basis-2/12 flex flex-col gap-4">
                      <div className="flex flex-col">
                        <span className="text-ordum-grey font-semibold">
                          Deliverables
                        </span>
                        <ul>
                          {item?.deliverables.map((deliverable, index) => {
                            return (
                              <li key={index}>
                                {" "}
                                <Link href={deliverable.link} className="underline text-blue-400">
                                  {deliverable.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        {" "}
                        <span className="text-ordum-grey font-semibold">
                          Assigned
                        </span>
                        <span>Name</span>
                      </div>
                      <div className="flex flex-col">
                        {" "}
                        <span className="text-ordum-grey font-semibold">
                          Task submitted
                        </span>
                        <span>With Link</span>
                      </div>
                      <div className="flex gap-5">
                        {" "}
                        <div className="flex flex-col">
                          {" "}
                          <span className="text-ordum-grey font-semibold">
                            Edits
                          </span>
                          <span className="underline">XX</span>
                        </div>
                        <div className="flex flex-col">
                          {" "}
                          <span className="text-ordum-grey font-semibold">
                            Pivots
                          </span>
                          <span className="underline">XX</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h3 className="text-ordum-grey font-semibold">
                        Description
                      </h3>
                      <p>{item?.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MileStoneReview;
