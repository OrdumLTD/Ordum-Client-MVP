"use client";

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalMilestones from "@/Components/submitProposal/milestones";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";

const submitProposalMilestones = () => {
  return (
    <Layout hideSidePanel>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalMilestones />
      </div>
    </Layout>
  );
};

export default submitProposalMilestones;
