import { useProposalContext } from "@/Context/submitPropolsal";
import { goBackCotext } from "../../goBackFucntions";

const ViewProposal = () => {
  const { tldr, context } = useProposalContext();
  return (
    // Context
    <div className="mt-8 flex flex-col gap-4 ">
      <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
        <h3 className="font-semibold text-xl">Context</h3>
        <p className="font-semibold text-xl">
          a. Any points discussed in advance in any channel related to the
          proposal and background research for your project.
        </p>
      </div>

      <span className="my-8">
        {context?.contextOfTheProposal ?? goBackCotext()}
      </span>

      {/* WhyKSM */}

      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            b. Any known backups already behind the solution?
          </h3>
        </div>

        <span className="my-8">{context?.knownBackups ?? goBackCotext()}</span>
      </div>

      {/* Problem */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">Problem Statement</h3>
        </div>

        <span className="my-8">
          <p>{context?.problemStatement ?? goBackCotext()}</p>
        </span>
      </div>

      {/* Solution */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">Solution</h3>
        </div>

        <span className="my-8">{context?.solution ?? goBackCotext()}</span>
      </div>

      {/* How does */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            a. How does this proposal change the current logic in Kusama?
          </h3>
        </div>

        <span className="my-8">{context?.ksmImprovements ?? goBackCotext()}</span>
      </div>

      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            b. Who does the solution help?
          </h3>
        </div>

        <span className="my-8">{context?.targetAudience ?? goBackCotext()}</span>
      </div>
    </div>
  );
};

export default ViewProposal;
