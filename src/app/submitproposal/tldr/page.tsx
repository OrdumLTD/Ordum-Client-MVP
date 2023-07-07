import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";
import SubmitProposalTLDR from "@/Components/submitProposal/tldr";

const submitProposalTLDRPage = () => {
  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitProposalTLDR />
      </div>
    </Layout>
  );
};

export default submitProposalTLDRPage;
