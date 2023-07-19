'use client'

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { InjectedAccountWithMeta , InjectedExtension} from "@polkadot/extension-inject/types";
import OrdumPreview from "@/Components/preview/milestones";

import '@polkadot/api-augment/kusama';
import { useProposalContext } from "@/Context/submitPropolsal";
import { useWalletContext } from "@/Context/WalletStore";
import { PreimageAndReferendum } from "@/lib/Kusama/Txn/submitReferenda";
import { useChainApiContext } from "@/Context/ChainApiStore";

type Props = {
  className?: string;
};

const SubmitPropolsalPreview: React.FC<Props> = (props) => {
  const [hash, setHash] = useState<string>();
  // Context
  const {changeToStep, setProposalIndex,proposalIndex,tldr,context} =  useProposalContext();
  const {account,signer} = useWalletContext();
  const {api,fetchChainApi} = useChainApiContext();

  const router = useRouter();

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    router.push(route);
  };

  useEffect(()=>{
    if(!api){
      fetchChainApi()
    }
  },[])


  // callBack fn
  const fetchIndex = (index:number) =>[
    setProposalIndex(index)
  ]

  // Referenda Test
  const submit = async () => {
    
    if(tldr?.fundingAmount && tldr.recieveDate){
      const rate = tldr.exchangeRate || 24;
      await PreimageAndReferendum(
        fetchIndex,
        rate,
        signer,
        account,
        tldr.fundingAmount,
        tldr.beneficiary,
        api,
        tldr.recieveDate
      )
    }else{
      console.log("Missing some field Funding "+ tldr?.fundingAmount + "ReceiveData "+ tldr?.recieveDate)
    }
   
  };

  return (
    <div className="ml-10 p-10">
      <div className="w-full flex flex-col">
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

        </div>
        <div className="mt-10 flex flex-col gap-4">
          {/* Buttons and whatnot */}
          <button className="bg-ordum-blue text-white py-2 md:py-4 px-2 rounded">
            Go Back And Edit
          </button>
          <button
            className="bg-ordum-purple text-white py-2 md:py-4 rounded"
            onClick={() => {
              submit()
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
