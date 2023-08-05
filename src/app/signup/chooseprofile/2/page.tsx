"use client";

import Link from "next/link";
import Image from "next/image";

import PfpCircle from "@/assets/svg-icons/pfp-circle.svg";
import { useProfileContext } from "@/Context/ProfileStore";
import { useChainApiContext } from "@/Context/ChainApiStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import { useEffect, useState } from "react";
import ConnectWallet from "@/Components/ConnectWallet";
import { onSignCertificate } from "@/lib/PhalaContract/Utils/phalaCertificate";
import { useWalletContext } from "@/Context/WalletStore";

const ChooseProfileStep2 = () => {
  //Context
  const { profileData, setProfile } = useProfileContext();
  const { teamName} = profileData;

  const [profileType, setProfileType] = useState("");

  const { fetchPoc5Api, poc5 } = useChainApiContext();
  const { loadContractApi, contractApi, setCertificate, cache } =
    usePhalaContractContext();
  const { account, signer } = useWalletContext();

  

  const chooseLink = (str:string) => {
    if(str === "team") {
      return "/signup/createteam"
    } else if(str === "individual") {
      return "/signup/createindividual"
    } else {
      return "#"
    }
  }

  useEffect(() => {
    if (poc5) {
      if (contractApi) {
      } else {
        loadContractApi();
      }
    } else {
      fetchPoc5Api();
      loadContractApi();
    }
  });

  const handleIndividual = async () => {
    if (poc5 && signer && account) {
      const certData = await onSignCertificate(poc5, signer, account);
      setCertificate(certData);
      
    } else {
      console.log("Failing to sign certificate due to missing params");
    }
  };

  const handleTeam = async () => {
    if (poc5 && signer && account) {
      const certData = await onSignCertificate(poc5, signer, account);
      setCertificate(certData);
    
    } else {
      console.log("Failing to sign certificate due to missing params");
    }
  };

  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base">
      <div className="border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid">
        <div className="grid text-white">
          <div className="justify-self-start font-medium">
            Are you a team or an individual
          </div>
          <div
            className="
            justify-self-start
            w-full
            border border-1 border-white rounded-full shadow-xl
            backdrop-blur-xl bg-white/20
            mt-5 p-4
            text-xs sm:text-base
            flex justify-around gap-2"
          >
            {/* <Link href="/signup/createteam"> */}
            <button
              //@ts-ignore
              onClick={() => {
                handleTeam();
                setProfileType("team");
              }}
              className={
                "w-[5rem] sm:w-[7rem] md:w-[12rem] lg:w-[16rem] 2xl:w-[18rem] rounded-full py-2.5 md:py-4 bg-[#467EEE] hover:bg-blue-700 shadow-md hover:shadow-2xl font-semibold " +
                (profileType === "team" ? " underline " : " ")
              }
            >
              Team
            </button>
            {/* </Link> */}
            {/* <Link href="/signup/createindividual"> */}
            <button
              //@ts-ignore
              onClick={() => {
                handleIndividual();
                setProfileType("individual");
              }}
              className={
                "w-[5rem] sm:w-[7rem] md:w-[12rem] lg:w-[16rem] 2xl:w-[18rem] rounded-full py-2.5 md:py-4 bg-[#0A1D47] hover:bg-purple-700 shadow-md hover:shadow-2xl font-semibold " +
                (profileType === "individual" ? " underline" : " ")
              }
            >
              Indvidual
            </button>
            {/* </Link> */}
          </div>

          <div className="w-full">
            <label className="mt-4 text-xl flex">
              <span className="text-sm">Username</span>
            </label>
            {/* ToDo fix line break for plaeholder */}
            <input
              className="mt-2 text-gray-300 mt-2 w-full bg-inherit text-sm placeholder:font-italitc placeholder:text-xs placeholder-gray-300 border border-gray-500
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none"
              placeholder="Eg. Anon_10"
              // value={bio}
              // onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="mt-4 text-xl flex">
              <span className="text-sm">Bio</span>
            </label>
            {/* ToDo fix line break for plaeholder */}
            <textarea
              className="mt-2 text-gray-300 mt-2 w-full bg-inherit text-sm placeholder:font-italitc placeholder:text-xs placeholder-gray-300 border border-gray-500
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[4rem]"
              placeholder="In a few sentences describe who you are , what you do, interests, etc."
              // value={bio}
              // onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <ConnectWallet />

          <div className="mt-10 flex gap-4">
            <Image src={PfpCircle} alt="Add an image" className="hover:cursor-pointer"/>
            <span className="place-self-center text-lg font-medium hover:cursor-pointer">Add Profile Picture</span>
          </div>
          {/* <ConnectWallet/> */}
          <div
            className="mt-10
          w-full
           flex flex-col gap-4"
          >
            <Link href={chooseLink(profileType)}>
              <button className="w-full rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-md hover:shadow-2xl">
                Continue
              </button>
            </Link>

            <Link href={"/createprofile"}>
              <button className="w-full rounded-full py-2.5 md:py-3 bg-ordum-purple font-semibold shadow-md shadow-md hover:shadow-2xl">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseProfileStep2;
