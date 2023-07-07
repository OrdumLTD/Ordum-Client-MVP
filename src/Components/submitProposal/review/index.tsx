'use client'

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { InjectedAccountWithMeta , InjectedExtension} from "@polkadot/extension-inject/types";
import OrdumPreview from "@/Components/preview";

import '@polkadot/api-augment/kusama';
import { useProposalContext } from "@/Context/submitPropolsal";

type Props = {
  className?: string;
};

const SubmitPropolsalPreview: React.FC<Props> = (props) => {
  const [wallet, setWallet] = useState<InjectedExtension>();
  const [hash, setHash] = useState<string>();
  const {changeToStep, setProposalIndex,proposalIndex,tldr,context} =  useProposalContext()

  const router = useRouter();

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    router.push(route);
  };


  // callBack fn
  const fetchIndex = (index:number) =>[
    setProposalIndex(index)
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
          //@ts-ignore
            teamName={tldr?.teamName}
            //@ts-ignore
            propolsalName={tldr?.propolsalName}
            //@ts-ignore
            date={tldr?.recieveDate}
            //@ts-ignore
            fundingAmount={tldr?.fundingAmount}
            //@ts-ignore
            deadline={tldr?.deadLine}
            //@ts-ignore
            startDate={tldr?.startingDate}
            //@ts-ignore
            propolsalDescription={tldr?.shortDescription}
            //@ts-ignore
            problem={tldr?.shortDescription}
            //@ts-ignore
            solution={context?.goal}
            ifYouHaveSeenSimilar={tldr?.whyDifferentDescription}
          />
          <h3>Index: {proposalIndex}</h3>
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
