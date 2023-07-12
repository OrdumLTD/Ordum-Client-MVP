"use client";

import Image from "next/image";

import { useContext, useEffect, useState,useMemo } from "react";
import { useRouter } from "next/navigation";

// import WalletContext from "@/store/walletContext";

import infoIcon from "@/assets/svg-icons/info-icon.svg";
import { useProposalContext } from "@/Context/submitPropolsal";
import { fetchKsmPrice, receiveDateSuggest } from "@/lib/Kusama/Utils";
import ConnectWallet from "@/Components/ConnectWallet/page";
import { useWalletContext } from "@/Context/WalletStore";
import { Categories } from "@/lib/PhalaContract/Types/types";
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';


type Props = {
  className?: string;
};

const SubmitProposalTLDR: React.FC<Props> = (props) => {
  // Function for fetching latest KSM exchange rate

  // const walletCtx = useContext(WalletContext);

  const {tldr,changeTLDR,proposalStep,changeToStep,readyToSubmit,setReadyToSubmit} = useProposalContext();
  const tldrCtx = { ...tldr };
  const {accounts,account} = useWalletContext()

  accounts?.map(acc =>{
    console.log("Accounts "+ acc.address)
  })
  
  // Local state
  const [accountBalance, setAccountBalance] = useState<number>(0.00);
  const [suggestDate , setSuggestDate] = useState<Date>();
  

  console.log("tldr "+
   tldr?.teamName, tldr?.account, tldr?.contact,
   tldr?.fundingAmount, tldr?.recieveDate,
   tldr?.projectType, tldr?.shortDescription,
   tldr?.startingDate, tldr?.exchangeRate
  )

  const handleTLDRchange = changeTLDR;
  const router = useRouter();
  const step = proposalStep;
  const changeStep = changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  const handleSuggestion = (param?:number)=>{
    if(param ){
      const rate = tldr?.exchangeRate || 24;
      const date = receiveDateSuggest(param,rate);
      console.log(date)
      setSuggestDate(date);
    }else{

    }

  }

  // Solve CORS issue in localhost
  const storeKsmPrice =async()=>{
    const ksmPrice = await fetchKsmPrice();
    //@ts-ignore
    changeTLDR({exchangeRate:ksmPrice})
  }

  useEffect(()=>{
    // if(tldr?.exchangeRate){

    // }else{
    //   storeKsmPrice()
    // }
    
  })

  useMemo(()=>{ 
    handleSuggestion(tldr?.fundingAmount)
  },[tldr?.fundingAmount])


  return (
    
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        <input
          placeholder="Name your project"
          className="bg-inherit text-2xl "
          value={tldrCtx.teamName}
          onChange={(e) => {
            //@ts-ignore
            handleTLDRchange({ teamName: e.target.value });
          }}
          type="text"
        />
        <div className="text-sm mt-4 border-t border-tr" />

        <span className="text-sm mt-">Click the title to edit</span>

          {/* Need reflective UI when clicked */}
        <div className="mt-10 py-3 max-w-[33rem] bg-gray-300 flex justify-around">
          <button
          onClick={() =>setReadyToSubmit(false)}
          className="text-white border rounded bg-clack py-2 px-20 bg-black">
            Discussion
          </button>
          <button className="text-white border rounded bg-clack py-2 px-20 bg-gray-500"
          onClick={() => setReadyToSubmit(true)}
          >
            On-Chain
          </button>
        </div>

        <h2 className="mt-8 text-4xl font-thin">1. TL;DR</h2>

        <div className="mt-8">
          <div className="flex justify-between">
            <label className="text flex">
              <span>Choose Beneficiary Account </span>
              <Image src={infoIcon} width={12} alt="" className="-mt-4 mr-2" />
            </label>
            {/* Fetch tokens for this Account */}
            <span>Transfarable {accountBalance}</span>
          </div>
          {/* Add PJS accoutns */}
          
            
            <input
              onChange={(e) => {
                const selected = e.target.value;
                //@ts-ignore
                handleTLDRchange({ account: selected });
              }}
              className="mt-2  text-gray-500
              w-[33rem] pl-2  md:py-2 border border-black rounded-md text-xs md:text-sm shadow-sm bg-white focus:outline-none focus:border-sky-500"
            >
           
            </input>
            
          
          <span className="mt-1.5 block text-xs max-w-[26rem]">
            This account does not have a verified identity. Please visit
            <span className="underline"> this link</span> to learn how to do so,
            it will increase your credibility.
          </span>

          {/* <label className="mt-4 text-xl flex">
            <span>Team Name </span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="You teams name"
            autoComplete="off"
            type="text"
            value={tldrCtx.teamName}
            onChange={(e) => {
              handleTLDRchange({ teamName: e.target.value });
            }}
          /> */}

          <label className="mt-4 text-xl flex">
            <span>Project Type </span>
          </label>
          <select
            onChange={(e) => {
              const selected = e.target.value;
              //@ts-ignore
              handleTLDRchange({ projectType: [...selected,selected] });
            }}
            className="mt-2  text-gray-500
            w-[33rem] pl-2  md:py-2 border border-black rounded-md text-xs md:text-sm shadow-sm bg-white focus:outline-none focus:border-sky-500"
          >
            <option value="" className="" disabled hidden>
              All
            </option>
            <option value={Categories.governance}>Governance</option>
            <option value={Categories.publicGood}>Public Good</option>
            <option value={Categories.infrastructure}>Infranstructure</option>
            <option value={Categories.media}>Media</option>
            <option value={Categories.gaming}>Gaming</option>
            <option value={Categories.defi}>Defi</option>
            <option value={Categories.identity}>Identity</option>
            <option value={Categories.privacy}>Privacy</option>
            <option value={Categories.networkChanges}>NetworkChanges</option>
            <option value={Categories.events}>Events</option>
            <option value={Categories.education}>Education</option>
            <option value={Categories.nfts}>NFTs</option>
            <option value={Categories.translation}>Translation</option>
            <option value={Categories.gaming}>Gaming</option>
          </select>

          <label className="mt-4 text-xl flex">
            <span>Contact</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Email"
            autoComplete="off"
            type="email"
            value={tldrCtx.contact}
            onChange={(e) => {
              //@ts-ignore
              handleTLDRchange({ contact: e.target.value });
            }}
          />

          <label className="mt-4 text-xl flex">
            <span>Proposal Name</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Name your propolsal"
            value={tldrCtx.propolsalName}
            onChange={(e) => {
              console.log(e.target.value);
              //@ts-ignore
              handleTLDRchange({ propolsalName: e.target.value });
            }}
            type="text"
          />

          {/* <label className="mt-4 text-xl flex">
            <span>Recieve Date</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="When do you want to recieve the funding?"
            value={tldrCtx.recieveDate}
            onChange={(e) => {
              handleTLDRchange({ recieveDate: e.target.value });
            }}
            type="date"
          /> */}

          <label className="mt-4 text-xl flex">
            <span>Starting Date</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="When do you plan to start your project?"
            value={tldrCtx.startingDate}
            onChange={(e) => {
              //@ts-ignore
              handleTLDRchange({ startingDate: e.target.value });
            }}
            type="date"
          />

          <label className="mt-4 text-xl flex">
            <span>Funding Amount</span>
          </label>
          <div className="mt-2 flex flex-row">
            <input
              className="text-gray-500 w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
              placeholder="$"
              value={tldrCtx.fundingAmount}
              onChange={(e) => {
                e.preventDefault()
                
                //@ts-ignore
                handleTLDRchange({ fundingAmount: e.target.value });
                
              }}
              type="text"
            />
          </div>
          <label className="mt-4 text-xl flex">
            <span>Receive Date</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="When do you plan to start your project?"
            value={tldrCtx.startingDate}
            onChange={(e) => {
              e.preventDefault()
              //@ts-ignore
              handleTLDRchange({ recieveDate: e.target.value });
            }}
            type="date"
          />
          {
            suggestDate && tldr?.fundingAmount && (
            <Alert severity="info">
              <AlertTitle>Suggestion</AlertTitle>
                Early receiving date should be <strong>{suggestDate.toJSON()}</strong>
            </Alert>
            )
          }
          

          <label className="mt-4 text-xl flex">
            <span>Delivery Date</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. 4 months"
            value={tldrCtx.deadLine}
            onChange={(e) => {
              //@ts-ignore
              handleTLDRchange({ deadLine: e.target.value });
            }}
            type="date"
          />

          <label className="mt-4 text-xl flex">
            <span>Short description</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            value={tldrCtx.shortDescription}
            onChange={(e) => {
              //@ts-ignore
              handleTLDRchange({ shortDescription: e.target.value });
            }}
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Describe your procet in 800 characters max"
          />

          {/* TODO Allow the user to add multiple links */}
          <label className="mt-4 text-xl flex">
            <span>Add external links</span>
          </label>
          <div className="mt-2 flex flex-col justify-between">
            <input
              value={tldrCtx.externalLinks}
              onChange={(e) => {
                //@ts-ignore
                handleTLDRchange({ externalLinks: e.target.value });
              }}
              className="text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
              placeholder="eg Gihub, Figma"
              type="text"
            />
            <button className="mt-4 border border-black rounded-xl py-2 bg-ordum-blue">
              + Add Link
            </button>
          </div>

          {/* Button Row - take one level up */}
          <div className="mt-10 flex flex-col gap-4 mb-20">
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(2, "/submitproposal/theproposal")
              }
            >
              Save and continue
            </button>
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() => changePropolsalSubPage(1, "/home")}
            >
              Save draft and Close
            </button>
            <button
              className="bg-gray-400 text-white py-2 md:py-4"
              onClick={() => changePropolsalSubPage(1, "/")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default SubmitProposalTLDR;
