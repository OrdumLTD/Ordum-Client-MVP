"use client";

import Layout from "@/Components/ui/Layout/";
import Activity from "@/Components/profileAbout/activity/activity";
import Summary from "@/Components/profileAbout/summary";
import GrantDetails from "./Overview/subpages/Grants";
import Team from "@/Components/profileAbout/team/team";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useEffect, useState } from "react";
import { getApplicant } from "@/lib/PhalaContract/Query";
import { useWalletContext } from "@/Context/WalletStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import { useChainApiContext } from "@/Context/ChainApiStore";

import KusamaAvatar from "@/assets/svg-icons/kusama-avatar.svg";
import Image from "next/image";

import ApplicationProcess from "./Overview/subpages/AppicationProcess";
import Button from "@/Components/ui/buttons/Button";
import Link from "next/link";
import { useFetchedProfileContext } from "@/Context/ProfileStore";

enum About {
  Summary,
  Activity,
  Team,
}

const GrantPage = () => {
  //Context
  const { account, signer } = useWalletContext();
  const { loadContractApi, cache, contractApi } = usePhalaContractContext();
  const { poc5 } = useChainApiContext();
  const { fetchedStatus } = useFetchedProfileContext();

  {
    /* Handle the error */
  }
  const fetchApplicantProfile = async () => {
    if (contractApi && poc5 && signer && account) {
      const profile = await getApplicant(
        contractApi,
        poc5,
        signer,
        account,
        cache,
        null // This should be optional account id
      );
      console.log(profile.output?.toHuman());
    } else {
      {
        /* SignUp page */
      }
      <div></div>;
    }
  };

  useEffect(() => {
    fetchApplicantProfile();
  });

  const [aboutMenu, setAboutMenu] = useState(About.Summary);

  return (
    <div className="font-space-grotesk flex flex-col ">
      {/* Banner */}
      <div className="justify-center bg-no-repeat bg-cover bg-center h-[23rem] bg-[url('/banners/kusama-banner.webp')]"></div>
      <nav className=" flex  navbar relative mb-8 md:mb-16">
        <div className="ml-2 md:ml-16 w-full flex ">
          {/* <div
              className="
       -mt-5 h-14 w-14
       md:-mt-8 md:h-24 md:w-24
       border-2
       bg-black rounded-full text-white"
            ></div> */}
          <Image
            src={KusamaAvatar}
            alt="user icon"
            className="
       -mt-5 h-14 w-14
       md:-mt-14 md:h-32 md:w-32
       "
          />
          <div className="ml-1 md:ml-5 md:mt-2 flex flex-col ">
            <span className="md:text-3xl">Kusama Treasury </span>
            <span className="text-xs md:text-sm">
              Grants for the Kusama ecosystem
            </span>
          </div>
        </div>
        <div className="mr-16 mt-5">
          <Link href="/submitproposal/tldr">
            <Button primeColor className="w-[20rem]">
              Apply
            </Button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col ">
        {/* Header */}
        <div className="mx-2 md:ml-16 md:mr-32 flex navbar border-b border-b-white py-4 mb-8 flex gap-8">
          <button
            className={aboutMenu === About.Summary ? "font-bold" : ""}
            onClick={() => setAboutMenu(About.Summary)}
          >
            Grant Details
          </button>
          <button
            className={aboutMenu === About.Activity ? "font-bold" : ""}
            onClick={() => setAboutMenu(About.Activity)}
          >
            Application Processes
          </button>
          <button
            className={aboutMenu === About.Team ? "font-bold" : ""}
            onClick={() => setAboutMenu(About.Team)}
          >
            Wiki
          </button>
        </div>
        {/* Content */}
        <div className="md:mx-10 md:ml-16 md:mr-32 h-screen flex flex-row">
          <div className="pl-0.5 md:pl-16 flex flex-1 flex-col overflow-y-auto paragraph">
            {aboutMenu === About.Summary ? <GrantDetails /> : null}
            {aboutMenu === About.Activity ? <ApplicationProcess /> : null}
            {aboutMenu === About.Team ? <p>Coming soon!</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantPage;
