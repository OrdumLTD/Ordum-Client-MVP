import { PropolsalContextProvider } from "@/store/submitPropolsal";

import Layout from "@/components/layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";
import SubmitProposalContext from "@/components/submitProposal/context";

const submitProposalContext = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitProposalContext />
      </div>
    </Layout>
  );
};

export default submitProposalContext;
