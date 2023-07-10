// import { PropolsalContextProvider } from "@/store/submitPropolsal";
'use client'
import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";

const submitProposalIndex = () => {
 return (
    // <PropolsalContextProvider>
      <Layout>
        <div className="">
          <SubmitPropolsalSidePanel />
        </div>
      </Layout>
    // </PropolsalContextProvider>
  );
};

export default submitProposalIndex;
