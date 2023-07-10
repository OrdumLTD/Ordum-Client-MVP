import Layout from "@/Components/Layout/page";
import SubmitPropolsalReport from "@/Components/submitProposal/report";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";


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
