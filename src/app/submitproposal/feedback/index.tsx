import Layout from "@/components/layout";
import SubmitPropolsalFeedback from "@/components/submitProposal/feedback";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";

const submitProposalFeedback = () => {
  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalFeedback />
      </div>
    </Layout>
  );
};

export default submitProposalFeedback;
