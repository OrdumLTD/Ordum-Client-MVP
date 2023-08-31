import { useProposalContext } from "@/Context/submitPropolsal";
import { goBackCotext } from "../../goBackFucntions";

import Viewer from "@/Components/OrdumTextEditor/src/Viewer"

const ViewProposal = () => {
  const { contextProposal } = useProposalContext();
  return (
    <div className="m-10">
    <Viewer doc={contextProposal} />
  </div>
  );
};

export default ViewProposal;
