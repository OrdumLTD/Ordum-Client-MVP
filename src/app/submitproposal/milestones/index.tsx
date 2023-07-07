
import Layout from "@/components/layout";
import SubmitPropolsalMilestones from "@/components/submitProposal/milestones";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";

const submitProposalMilestones = () => {

  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalMilestones />
      </div>
    </Layout>
  );
};

export default submitProposalMilestones;
