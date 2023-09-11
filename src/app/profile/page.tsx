"use client";

import Layout from "@/Components/ui/Layout/";
import Activity from "@/Components/profileAbout/activity/activity";
import Summary from "@/Components/profileAbout/summary";
import Team from "@/Components/profileAbout/team/team";
import Skills from "@/Components/profileAbout/Skills";
import Work from "@/Components/profileAbout/Work";

import { useEffect, useState } from "react";
import { getTeamApplicant } from "@/lib/PhalaContract/Query";
import { useWalletContext } from "@/Context/WalletStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import { useChainApiContext } from "@/Context/ChainApiStore";
import { useFetchedProfileContext } from "@/Context/ProfileStore";
import { useUserContext } from "@/Context/user";

import KittyIcon from "@/assets/svg-icons/kitty-icon.svg";
import Image from "next/image";

enum About {
  Summary,
  Work,
  Skills,
}

const TeamMembersProfile = () => {
  //Context
  const { account, signer } = useWalletContext();
  const { loadContractApi, cache, contractApi } = usePhalaContractContext();
  const { poc5 } = useChainApiContext();
  const { fetchedStatus } = useFetchedProfileContext();
  const userCtx = useUserContext();

  console.log(userCtx);

  {
    /* Handle the error */
  }
  const fetchApplicantProfile = async () => {
    if (contractApi && poc5 && signer && account) {
      const profile = await getTeamApplicant(
        contractApi,
        poc5,
        signer,
        account,
        cache,
        null,
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
    <Layout>
      {" "}
      <div className="font-space-grotesk flex flex-col ">
        {/* Banner */}
        <div className="h-40 md:h-60 bg-[url('/background/ordum-banner.jpeg')]"></div>
        <nav className="flex navbar relative mb-8 md:mb-16">
          <div className="ml-2 md:ml-16 w-full flex ">
            <Image
              src={KittyIcon}
              alt="user icon"
              className="
       -mt-5 h-14 w-14
       md:-mt-8 md:h-24 md:w-24
       backdrop-blur-md
       "
            />
            <div className="ml-1 md:ml-5 md:mt-2 flex flex-col">
              <span className="md:text-xl">{userCtx.userName}</span>
              <span className="text-xs md:text-sm">Project type</span>
            </div>
          </div>
        </nav>
        <div className="flex flex-col ">
          {/* Header */}
          <div className="mx-10 md:ml-16 md:mr-32 md:text-xl flex navbar md:border-b border-black mb-8 flex gap-8">
            <button
              className={aboutMenu === About.Summary ? "font-bold" : ""}
              onClick={() => setAboutMenu(About.Summary)}
            >
              Summary
            </button>
            <button
              className={aboutMenu === About.Work ? "font-bold" : ""}
              onClick={() => setAboutMenu(About.Work)}
            >
              Work
            </button>
            <button
              className={aboutMenu === About.Skills ? "font-bold" : ""}
              onClick={() => setAboutMenu(About.Skills)}
            >
              Skills
            </button>
          </div>
          {aboutMenu === About.Summary ? <Summary /> : null}
          {aboutMenu === About.Work ? <Work /> : null}
          {aboutMenu === About.Skills ? <Skills /> : null}
        </div>
      </div>{" "}
    </Layout>
  );
};

export default TeamMembersProfile;
