'use client'

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalPreview from "@/Components/submitProposal/review";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";

const submitProposalPreview = () => {

  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalPreview />
      </div>
    </Layout>
  );
};

export default submitProposalPreview;
