'use client'

import Layout from "@/Components/ui/Layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel"; 

import SubmitProposalContext from "@/Components/submitProposal/theproposal";

const submitProposalContext = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  return (
    <Layout>
      <div className="flex scrollbar-hide">
        <SubmitPropolsalSidePanel />
        <SubmitProposalContext />
      </div>
    </Layout>
  );
};

export default submitProposalContext;
