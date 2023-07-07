import { PropolsalContextProvider } from "@/store/submitPropolsal";

import Layout from "@/components/layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";
import SubmitPropolsalProblemSolution from "@/components/submitProposal/problemSolution";

const submitProposalProblemSolution = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitPropolsalProblemSolution />
      </div>
    </Layout>
  );
};

export default submitProposalProblemSolution;
