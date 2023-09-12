'use client'

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalPreview from "@/Components/submitProposal/review";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";
// import Review from "@/Components/Review";
import dynamic from "next/dynamic";

const Review = dynamic(() => import('@/Components/Review'), {ssr:false})

const submitProposalPreview = () => {

  return (
    <Layout hideSidePanel>
      <div className="flex gap-0">
        <SubmitPropolsalSidePanel className="w-2/12"/>
        {/* <SubmitPropolsalPreview /> */}
        <Review />
      </div>
    </Layout>
  );
};

export default submitProposalPreview;
