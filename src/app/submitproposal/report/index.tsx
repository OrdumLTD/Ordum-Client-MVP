import Layout from "@/components/layout";
import SubmitPropolsalReport from "@/components/submitProposal/report";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";

const submitProposalReport = () => {

  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalReport />
      </div>
    </Layout>
  );
};

export default submitProposalReport;
