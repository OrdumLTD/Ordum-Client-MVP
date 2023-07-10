
import Layout from "@/Components/Layout/page";
import SubmitPropolsalProblemSolution from "@/Components/submitProposal/problemSolution";
import SubmitPropolsalSidePanel from "@/Components/submitProposal/sidePanel";

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
