"use client";

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";
import Editor from "@/Components/OrdumTextEditor/src/ProposalEditor";
import SubmitProposalContext from "@/Components/submitProposal/theproposal";
import SubmitProposalTextEditor from "@/Components/submitProposal/SubmitProposalTextEditor/page";

const SubmitProposal: React.FC = () => {
  return (
    // <Layout>
    //   <div className="flex scrow">
    //     <SubmitPropolsalSidePanel />
    //     {/* <SubmitProposalTextEditor /> */}
    //     <SubmitProposalContext />
    //   </div>
    // </Layout>
    <div className="bg-white h-screen">
      <Editor />
    </div>
  );
};

export default SubmitProposal;
