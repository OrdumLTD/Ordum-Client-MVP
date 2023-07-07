// import { PropolsalContextProvider } from "@/store/submitPropolsal";

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";

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
