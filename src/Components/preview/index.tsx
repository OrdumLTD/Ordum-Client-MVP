import { useContext } from "react";
import { useRouter } from "next/router";

type Props = {
  className?: string;
  teamName: string;
  propolsalName: string;
  date: string;
  fundingAmount: number;
  govType?: string;
  deadline: string;
  startDate: string;
  propolsalDescription: string;
  problem: string;
  solution: string;
  ifYouHaveSeenSimilar?: string;
};

const OrdumPreview: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <div>
          {props.teamName} | {props.propolsalName}
        </div>
        <div>
          Icon {props.teamName} {props.govType}
        </div>
        <div>Button? Submit button</div>
        <div>
          {Date.parse(props.date)}, {props.fundingAmount} {props.govType} {props.deadline}{" "}
          {props.startDate}
        </div>

        <div> Box of texts</div>
        <div>{props.propolsalDescription}</div>
        <div>{props.problem}</div>
        <div>{props.solution}</div>
        <div>{props.ifYouHaveSeenSimilar}</div>
      </div>
    </div>
  );
};

export default OrdumPreview;
