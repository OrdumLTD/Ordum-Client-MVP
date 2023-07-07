
import Layout from "@/components/layout";
import SubmitPropolsalPreview from "@/components/submitProposal/preview";
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
