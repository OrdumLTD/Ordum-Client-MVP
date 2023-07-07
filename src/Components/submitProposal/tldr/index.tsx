"use client";

import Image from "next/image";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import SubmitPropolsalContext from "@/Context/submitPropolsal";
// import WalletContext from "@/store/walletContext";

import infoIcon from "@/assets/svg-icons/info-icon.svg";

type Props = {
  className?: string;
};

const SubmitProposalTLDR: React.FC<Props> = (props) => {
  // const walletCtx = useContext(WalletContext);

  const submitCtx = useContext(SubmitPropolsalContext);
  const tldrCtx = { ...submitCtx.tldr };
  console.log(tldrCtx);
  const handleTLDRchange = submitCtx.changeTLDR;
  const router = useRouter();
  const step = submitCtx.propolsalStep;
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        <input
          placeholder="Name your project"
          className="bg-inherit text-2xl "
          value={tldrCtx.propolsalName}
          onChange={(e) => {
            console.log(e.target.value);
            handleTLDRchange({ propolsalName: e.target.value });
          }}
          type="text"
        />
        <div className="text-sm mt-4 border-t border-tr" />
        
        <span className="text-sm mt-">Click the title to edit</span>

        <div className="mt-10 py-3 max-w-[33rem] bg-gray-300 flex justify-around">
          <button className="text-white border rounded bg-clack py-2 px-20 bg-black">
            Discussion
          </button>
          <button className="text-white border rounded bg-clack py-2 px-20 bg-gray-500">
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
            <span>Transfarable 00.00</span>
          </div>
          {/* Add PJS accoutns */}
          <select
            // onChange={(e) => {
            //   const selected = e.target.value;
            //   handleTLDRchange({ account: selected });
            // }}
            className="mt-2  text-gray-500
            w-[33rem] pl-2  md:py-2 border border-black rounded-md text-xs md:text-sm shadow-sm bg-white focus:outline-none focus:border-sky-500"
          >
            {/* {walletCtx.accounts?.map((account) =>
              <option
                onClick={() => {
                  handleTLDRchange({ account: account.address});
                }}
              key={account.address}
                value={account.address}>
                {account.meta?.name}
              </option>
            )} */}
          </select>

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
              handleTLDRchange({ projectType: selected });
            }}
            className="mt-2  text-gray-500
            w-[33rem] pl-2  md:py-2 border border-black rounded-md text-xs md:text-sm shadow-sm bg-white focus:outline-none focus:border-sky-500"
          >
            <option value="" className="" disabled hidden>
              All
            </option>
            <option value="Governance">Governance</option>
            <option value="Defi">Defi</option>
            <option value="Communication">Communication</option>
            <option value="Privacy">Privacy</option>
            <option value="Education">Education</option>
            <option value="Events">Events</option>
            <option value="Infrastracture">Infrastracture</option>
            <option value="Art">Art</option>
            <option value="Media">Media</option>
            <option value="NFT">NFT</option>
            <option value="Other">Other</option>
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
              handleTLDRchange({ propolsalName: e.target.value });
            }}
            type="text"
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
                handleTLDRchange({ fundingAmount: e.target.value });
              }}
              type="text"
            />
          </div>

          <label className="mt-4 text-xl flex">
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
          />

          <label className="mt-4 text-xl flex">
            <span>Starting Date</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="When do you plan to start your project?"
            value={tldrCtx.startingDate}
            onChange={(e) => {
              handleTLDRchange({ startingDate: e.target.value });
            }}
            type="date"
          />

          <label className="mt-4 text-xl flex">
            <span>Deadline</span>
          </label>
          <input
            className="mt-2 text-gray-500  w-[33rem] text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
            placeholder="Eg. 4 months"
            value={tldrCtx.deadLine}
            onChange={(e) => {
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
              handleTLDRchange({ shortDescription: e.target.value });
            }}
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Describe your project in a few sentences. Max XXXX characters.&#10; 
            Suggested format:&#10; 
            
            #Problem 
            
            #Solution 
            
            #How you aim to get there? 
            
            #Deliverables(what will you deliver?)
            
            ---> TBC with surveys and community "
          />

          <label className="mt-4 text-xl flex">
            <span>If you have seen similar before: why is yours different</span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            value={tldrCtx.whyDifferentDescription}
            onChange={(e) => {
              handleTLDRchange({ whyDifferentDescription: e.target.value });
            }}
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="Are there any similar or competing projects in the ecosystem or outside of it? If so, how is yours different. "
          />

          {/* TODO Allow the user to add multiple links */}
          <label className="mt-4 text-xl flex">
            <span>Add external links</span>
          </label>
          <div className="mt-2 flex flex-col justify-between">
            <input
              value={tldrCtx.externalLinks}
              onChange={(e) => {
                handleTLDRchange({ externalLinks: e.target.value });
              }}
              className="text-gray-500 text-xs md:text-sm bg-white border border-black rounded pl-2  md:py-2 focus:outline-none"
              placeholder="eg Gihub, Figma"
              type="text"
            />
            <button className="mt-4 border border-black rounded-xl py-2">
              + Add Link
            </button>
          </div>

          {/* Button Row - take one level up */}
          <div className="mt-10 flex flex-col gap-4 mb-20">
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(2, "/submitproposal/context")
              }
            >
              Save and continue
            </button>
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() => changePropolsalSubPage(1, "/")}
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
