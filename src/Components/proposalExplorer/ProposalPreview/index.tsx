"use client";

import React, { FC } from "react";

interface ProposalPreveiwProps {
  title?: string;
  proposerAddress?: string;
  proposerDisplay?: string;
  post_id?: number;
  requestedAmount?: number | undefined;
  tags?: [any] | undefined;
  origin?: string;
  showOrign?: boolean;
}

const ProposalPreview: FC<ProposalPreveiwProps> = (props) => {
   
  return (
    <div className="w-full border border-grey-300 border-2 rounded py-4 px-16 flex flex-col">
      <div className="w-full flex justify-between">
        <div className="text-lg font-semibold">{props.title}</div>
        <div className="flex gap-20">
        {props.proposerDisplay ?
          <div className="text-sm font-semibold">
            <div>{props.proposerDisplay}</div>
            <div className="text-ordum-grey">Team</div>
          </div> :
            <div className="text-sm font-semibold">
            <div>{props.proposerAddress}</div>
          </div>}
          {props.requestedAmount ? (
            <div className="text-xs">
              <div>{(props.requestedAmount / 1000000000000).toFixed(2)} KSM</div>{" "}
              <div className="text-ordum-grey">Requested</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {props.tags ? (
        <div className="flex flex-row gap-1">
          {props.tags?.map((tag) => (
            <div
              className="rrounder text-xs bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-2 rounded-full"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      ) : (
        "null"
      )}
      {/* <div className="mt-5 w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div> */}

      {/* <div className="mt-5 flex gap-5">
        <button className="rounder text-xs bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-2 rounded-full onhover:cursor-default shadow">Governence</button>
        <button className="rounder text-xs bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-2 rounded-full onhover:cursor-default shadow">dApps</button>
        <button className="rounder text-xs bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-2 rounded-full onhover:cursor-default shadow">Governence</button>
      </div> */}
    </div>
  );
};

export default ProposalPreview;
