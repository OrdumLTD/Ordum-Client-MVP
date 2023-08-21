"use client";

import Image from "next/image";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useProposalContext } from "@/Context/submitPropolsal";

import Editor from "@/Components/LexicalTextEditor/Editor";

type Props = {
  className?: string;
};

const SubmitProposalTextEditor: React.FC = () => {
  // const { context, changeToStep, changeContext, tldr } = useProposalContext();

  return <Editor />;
};

export default SubmitProposalTextEditor;
