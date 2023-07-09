"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";

type Props = {
  name: String;
  description: string | undefined;

  className?: string;
};

const MilestoneEdit: React.FC<Props> = (props) => {
  return (
    <div className={" " + props.className}>
      <div>Milestone Name: {props.name}</div>
      <div>Milestone description {props.description}</div>
      <div>List of Tasks (add in later) with team members and cost</div>
    </div>
  );
};

export default MilestoneEdit;
