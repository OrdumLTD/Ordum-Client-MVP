
"use client";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";
import Layout from "@/Components/ui/Layout";

import { usePolkassemblyContext } from "@/Context/PolkassembyContext";
import { useReferendaContext } from "@/Context/ReferendaContext";
import React, { FC, useEffect, useState } from "react";

const ViewProposal: FC = () => {


  useEffect(() => {
  }, []);

  return (
    <Layout title={"Explore | Kusama Treasury | View Proposal"} grant>
      <div className="mx-4 flex flex-col">
        <h1 className="text-3xl">View Proposals</h1>

      </div>
    </Layout>
  );
};

export default ViewProposal;
