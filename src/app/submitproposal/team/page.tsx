'use client'

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel"; 
import SubmitPropolsalTeam from "@/Components/submitProposal/team";

const submitProposalTeam = () => {

  return (
    <Layout hideSidePanel>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalTeam />
      </div>
    </Layout>
  );
};

export default submitProposalTeam;
