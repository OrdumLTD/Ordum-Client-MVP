'use client'

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel"; 

import SubmitProposalContext from "@/Components/submitProposal/theproposal";

const SubmitProposal: React.FC = () =>  {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  
  
  
  return (
    <Layout hideSidePanel>
      <div className="flex scrollbar-hide">
        <SubmitPropolsalSidePanel />
        <SubmitProposalContext />
      </div>
    </Layout>
  );
};

export default SubmitProposal;
