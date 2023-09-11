"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useProposalContext } from "@/Context/submitPropolsal";

type Props = {
  className?: string;
};

// const changePropolsalSubPage = () => {
//   changeStep(1);
//   router.push("/submitproposal/tldr");
// };

const SubmitPropolsalSidePanel: React.FC<Props> = (props) => {
  const { proposalStep, changeToStep } = useProposalContext();
  const router = useRouter();

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    await router.push(route);
  };

  return (
    <div className={"pt-16 " + props.className}>
      <div className="xl:pl-8 grid gap-4">
        <button className="flex">
          <span
            className={
              " mt-0.5 pl-0.5 md:pl-4 text-xs md:text-base xl:text-xl text-gray-400 " +
              (proposalStep === 1 ? "font-bold" : "")
            }
            onClick={() => {
              changePropolsalSubPage(1, "/submitproposal/tldr");
            }}
          >
            1. Tl; DR
          </span>
        </button>
        <button className="flex">
          <span
            className={
              " mt-0.5 pl-0.5 md:pl-4 text-xs md:text-base xl:text-xl text-gray-400 " +
              (proposalStep === 2 ? "font-bold" : "")
            }
            onClick={() => {
              changePropolsalSubPage(2, "/submitproposal/theproposal");
            }}
          >
            2. The Proposal
          </span>
        </button>{" "}
        <button className="flex">
          <span
            className={
              " mt-0.5 pl-0.5 md:pl-4 text-xs md:text-base xl:text-xl text-gray-400 " +
              (proposalStep === 4 ? "font-bold" : "")
            }
            onClick={() => {
              changeToStep(4);
              router.push("/submitproposal/team");
            }}
          >
            3. Team
          </span>
        </button>
        <button className="flex">
          <span
            className={
              " mt-0.5 pl-0.5 md:pl-4 text-xs md:text-base xl:text-xl text-gray-400 " +
              (proposalStep === 5 ? "font-bold" : "")
            }
            onClick={() => {
              changeToStep(5);
              router.push("/submitproposal/milestones");
            }}
          >
            4. Milestones
          </span>
        </button>
        <button className="flex">
          <span
            className={
              " mt-0.5 pl-0.5 md:pl-4 text-xs md:text-base xl:text-xl text-gray-400 " +
              (proposalStep === 6 ? "font-bold" : "")
            }
            onClick={() => {
              changeToStep(6);
              router.push("/submitproposal/review");
            }}
          >
            5. Review
          </span>
        </button>
      </div>
    </div>
  );
};

export default SubmitPropolsalSidePanel;
