'use client'

import { useContext } from "react";
import { useRouter } from "next/navigation";

import SubmitPropolsalContext from "@/Context/submitPropolsal";

type Props = {
  className?: string;
};

// const changePropolsalSubPage = () => {
//   changeStep(1);
//   router.push("/submitproposal/tldr");
// };

const SubmitPropolsalSidePanel: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const router = useRouter();

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
   await router.push(route);
  };

  const step = submitCtx.propolsalStep;
  const changeStep = submitCtx.changeToStep;

  return (
    <div className={"pt-16 " + props.className}>
      <div className="xl:pl-8 grid gap-4">
        <button className="flex">
          <span
            className={
              " mt-0.5 pl-0.5 md:pl-4 text-xs md:text-base xl:text-xl text-gray-400 " +
              (step === 1 ? "font-bold" : "")
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
              (step === 2 ? "font-bold" : "")
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
              (step === 4 ? "font-bold" : "")
            }
            onClick={() => {
              changeStep(4);
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
              (step === 5 ? "font-bold" : "")
            }
            onClick={() => {
              changeStep(5);
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
              (step === 6 ? "font-bold" : "")
            }
            onClick={() => {
              changeStep(6);
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
