"use client";

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";

import SubmitProposalContext from "@/Components/submitProposal/theproposal";
import SubmitProposalTextEditor from "@/Components/submitProposal/SubmitProposalTextEditor/page";

const SubmitProposal: React.FC = () => {
  return (
    <Layout>
      <div className="flex scrow">
        <SubmitPropolsalSidePanel />
        {/* <SubmitProposalTextEditor /> */}
        <SubmitProposalContext />
      </div>
    </Layout>
  );
};

export default SubmitProposal;
