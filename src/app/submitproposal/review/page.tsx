'use client'

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalPreview from "@/Components/submitProposal/review";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";
import Review from "@/Components/Review";

const submitProposalPreview = () => {

  return (
    <Layout hideSidePanel>
      <div className="flex gap-0">
        <SubmitPropolsalSidePanel className="w-2/12"/>
        {/* <SubmitPropolsalPreview /> */}
        <Review className=""/>
      </div>
    </Layout>
  );
};

export default submitProposalPreview;
