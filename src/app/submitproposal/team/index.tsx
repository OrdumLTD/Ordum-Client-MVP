import Layout from "@/components/layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";
import SubmitPropolsalTeam from "@/components/submitProposal/team";

const submitProposalTeam = () => {

  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalTeam />
      </div>
    </Layout>
  );
};

export default submitProposalTeam;
