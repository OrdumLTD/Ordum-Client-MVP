'use client'

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalPreview from "@/Components/submitProposal/review/milestones";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";

const submitProposalPreviewMilestones = () => {

  return (
    <Layout hideSidePanel>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalPreview />
      </div>
    </Layout>
  );
};

export default submitProposalPreviewMilestones;
