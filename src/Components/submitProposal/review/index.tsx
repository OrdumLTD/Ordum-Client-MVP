import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { InjectedAccountWithMeta , InjectedExtension} from "@polkadot/extension-inject/types";
import SubmitPropolsalContext from "@/Context/submitPropolsal";
import OrdumPreview from "@/Components/preview";

import '@polkadot/api-augment/kusama';

type Props = {
  className?: string;
};

const SubmitPropolsalPreview: React.FC<Props> = (props) => {
  const [wallet, setWallet] = useState<InjectedExtension>();
  const [hash, setHash] = useState<string>();

  const submitCtx = useContext(SubmitPropolsalContext);

  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };


  // callBack fn
  const fetchIndex = (index:number) =>[
    submitCtx.setProposalIndex(index)
  ]

  // Preimage test
  // const submit = async () => {
  //   console.log(WalletCtx.wallet)
  //   if(WalletCtx.wallet){
  //     setWallet(WalletCtx.wallet)
  //   }
  //   if(submitCtx.tldr.fundingAmount && submitCtx.tldr.recieveDate){

  //     await PreimageAndReferendum(
  //       fetchIndex,
  //       WalletCtx.wallet,
  //       WalletCtx.selectedAccount,
  //       submitCtx.tldr.fundingAmount,
  //       submitCtx.tldr.account,
  //       chainAPI,
  //       submitCtx?.tldr.recieveDate
  //       )
  //   }else{
  //     console.log("Missing some field")
  //   }
   
  // };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        Preview
        {/* Context */}
        <div className="mt-10 ">
          <OrdumPreview
            teamName={submitCtx.tldr.teamName}
            propolsalName={submitCtx.tldr.propolsalName}
            date={submitCtx.tldr.recieveDate}
            fundingAmount={submitCtx.tldr.fundingAmount}
            deadline={submitCtx.tldr.deadLine}
            startDate={submitCtx.tldr.startingDate}
            propolsalDescription={submitCtx.tldr.shortDescription}
            problem={submitCtx.tldr.shortDescription}
            solution={submitCtx.context.goal}
            ifYouHaveSeenSimilar={submitCtx.tldr.whyDifferentDescription}
          />
          <h3>Index: {submitCtx?.proposalIndex}</h3>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {/* Buttons and whatnot */}
          <button className="bg-black text-white py-2 md:py-4 px-2 rounded">
            Go Back And Edit
          </button>
          <button
            className="bg-black text-white py-2 md:py-4 rounded"
            onClick={() => {
              // Call functions here
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalPreview;
