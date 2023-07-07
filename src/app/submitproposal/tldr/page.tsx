import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";
import SubmitProposalTLDR from "@/Components/submitProposal/tldr";

const submitProposalTLDRPage = () => {
  return (
    <Layout hideSidePanel>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitProposalTLDR />
      </div>
    </Layout>
  );
};

export default submitProposalTLDRPage;
