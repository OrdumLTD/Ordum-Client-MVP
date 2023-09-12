"use client";

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";
// import Editor from "@/Components/OrdumTextEditor/src/ProposalEditor";
import SubmitProposalContext from "@/Components/submitProposal/theproposal";
import SubmitProposalTextEditor from "@/Components/submitProposal/SubmitProposalTextEditor/page";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import('@/Components/OrdumTextEditor/src/ProposalEditor'), {ssr: false})

const SubmitProposal: React.FC = () => {
  return (
    // <Layout>
    //   <div className="flex scrow">
    //     <SubmitPropolsalSidePanel />
    //     {/* <SubmitProposalTextEditor /> */}
    //     <SubmitProposalContext />
    //   </div>
    // </Layout>
    <Layout isProposalEditor>
      <div className="bg-white h-screen">
        <Editor />
      </div>
    </Layout>
  );
};

export default SubmitProposal;
