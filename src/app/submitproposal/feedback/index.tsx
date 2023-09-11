import Layout from "@/Components/Layout/page";
import SubmitPropolsalFeedback from "@/Components/submitProposal/feedback";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";

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
