"use client";

import Layout from "@/Components/ui/Layout";
import { ClassNames } from "@emotion/react";

type Props = {
  name: String;
  role: string | undefined;
  constact?: string;
  linkToPortfolio?: string;
  bio?: string;
  className?: string
};

const Member: React.FC<Props> = (props) => {
  return (
    <div className={" " + props.className}>
      <div>Member Name: {props.name}</div>
      <div>Member role {props.role}</div>
      <div>List of Tasks (add in later) with team members анд cost</div>
    </div>
  );
};

export default Member;
