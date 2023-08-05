"use client";

import Link from "next/link";
import Image from "next/image";

import GitHubIcon from "@/assets/svg-icons/github-light-icon.svg";
import Email from "@/assets/svg-icons/email-light-icon.svg";
import Discord from "@/assets/svg-icons/discord-light-icon.svg";
import Twitter from "@/assets/svg-icons/twitter-light-icon.svg";
import Matrix from "@/assets/svg-icons/matric-light-icon.svg";
import Website from "@/assets/svg-icons/web-light-icon.svg";
import { useProfileContext } from "@/Context/ProfileStore";
import { useChainApiContext } from "@/Context/ChainApiStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import { useEffect, useState } from "react";
import { useWalletContext } from "@/Context/WalletStore";
import { createApplicantProfile } from "@/lib/PhalaContract/Txn/createProfile";
import { UserRole } from "@/lib/PhalaContract/Types/types";

const CreateIndividualProfile = () => {
  //Context
  const { profileData, setProfile, setCreationStatus, creationStatus } =
    useProfileContext();
  const {  teamName } = profileData;
  const { account, signer } = useWalletContext();

  const { fetchPoc5Api, poc5 } = useChainApiContext();
  const { loadContractApi, contractApi, cache } = usePhalaContractContext();

  // Local state
  const [links, setLinks] = useState<string[]>([]);

  const updateLink = (i: number, v: string) => {
    setLinks((prevState) => {
      const updatedState = [...prevState];
      updatedState[i] = v;
      return updatedState;
    });
  };
  console.log("State link " + links);
  console.log("Links " + profileData.links);

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

  const saveNDone = async () => {
    //@ts-ignore
    setProfile({ links: links });
    await createProfile();
  };

  // Contract Call for Crreating Profile
  const createProfile = async () => {
    const profileCreationStatus = (v: boolean) => {
      setCreationStatus(v);
    };

    const { teamType, userType } = profileData;
    if (account && signer && cache && contractApi && account.meta.name) {
      //1. (Individual && Applicant)

      await createApplicantProfile(
        //utill fn
        profileCreationStatus,
        //---------
        account,
        signer,
        cache,
        contractApi,
        //Params
        account.meta.name,
        account.address,
        profileData.description,
        profileData.mission,
        profileData.projectType,
        profileData.residentChain,
        //ProfileCtx.profileData.projectType, // Work on this
        profileData.teamMembers,
        profileData.links
      );
    }
  };

  return (
    <div className="grid place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-contain text-sm md:text-base">
      <div
        className="
       my-10 xl:my-28
       border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid"
      >
        <div className="grid place-items-center text-white">
          <div className="justify-self-start text-2xl md:text-4xl">
            Create your profile
          </div>

          <h3 className="mt-5 justify-self-start font-medium">About</h3>
          <textarea
            onChange={(e) => {
              //@ts-ignore
              setProfile({ description: e.target.value });
            }}
            className="
        justify-self-start mt-4
        resize-none
        w-full
        h-20 md:h-36 2xl:h-40
        rounded-md border border-grey-200
        bg-inherit
        text-[#CAC9C9]
        py-2 px-3 "
            placeholder="What does your team want to achieve? "
          />

          <h3 className="mt-5 justify-self-start font-medium">Project type</h3>

          <div
            className=" \
            justify-self-start mt-4
            flex justify-between
            w-full
            "
          >
      <select
              className=" 
             mr-4 
            w-full
            pl-2 md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
            focus:outline-none bg-inherit
            text-[#CAC9C9]"
            >
              <option value="" className="" disabled hidden>
                All
              </option>
              <option value="All">
                What are you creating? Chooce a category
              </option>
              <option value="All">What chain are you building on?</option>
              <option value="DeFi">DeFi </option>
              <option value="Privacy ">Privacy </option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Network Changes">IdNetwork Changesentity</option>
              <option value="Art">Art</option>
              <option value="Media">Media</option>
              <option value="Gaming">Gaming</option>
              <option value="Events">Events</option>
              <option value="Educationtity">Education</option>
              <option value="NFTs">NFTs</option>
              <option value="Translations">Translations</option>
              <option value="Other">Other</option>
            </select>

            <button className="w-40 rounded py-2.5 md:py-3 bg-ordum-purple font-semibold shadow shadow-md hover:shadow-2xl">
              + Add More
            </button>
          </div>

          <h3 className="mt-5 justify-self-start font-medium">Blockchain</h3>

          <div
            className=" \
            justify-self-start mt-4
            flex justify-between
            w-full
            "
          >
            <select
              className=" 
              mr-4 
            w-full
            block pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
            focus:outline-none bg-inherit
            text-[#CAC9C9]"
            >
              <option value="" className="" disabled hidden>
                All
              </option>
              <option value="All">What chain are you building on?</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>

            <button className="w-40 rounded py-2.5 md:py-3 bg-ordum-purple font-semibold shadow shadow-md hover:shadow-2xl">
              + Add More
            </button>
          </div>

          <h3 className="mt-5 justify-self-start font-medium">Mission</h3>
          <textarea
            onChange={(e) => {
              //@ts-ignore
              setProfile({ mission: e.target.value });
            }}
            className="
        justify-self-start mt-4
        resize-none
        w-full
        h-20 md:h-36 2xl:h-40
        rounded-md border border-grey-200
        bg-inherit
        text-[#CAC9C9]
        py-2 px-3 "
            placeholder="What does your team want to achieve? "
          />

          <div className="mt-5 justify-self-start w-full">
            <h3 className="mb-4">Links</h3>
            <div className="flex">
              <Image src={Email} alt="Email" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit "
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Discord} alt="Discord" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Discord"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Twitter} alt="Twitter" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Twitter"
                type="text"
              />
            </div>

            <div className="mt-4 flex">
              <Image src={Matrix} alt="Matrix" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Matrix"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Website} alt="Website" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Website/Portfolio"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={GitHubIcon} alt="Discord" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Github"
                type="text"
              />
            </div>
          </div>

          <div
            className="mt-5
            w-full
            flex flex-col gap-4"
          >
            <button
              onClick={() => saveNDone()}
              className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl"
            >
              Create Profile
            </button>
            {creationStatus ? (
              <button className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl">
                <Link href={"/home"}>Continue</Link>
              </button>
            ) : (
              <button
                disabled
                className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl"
              >
                <Link href={"/home"}>Continue</Link>
              </button>
            )}

            <button className="rounded-full py-2.5 md:py-3 bg-ordum-purple font-semibold shadow-md shadow-md hover:shadow-2xl">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateIndividualProfile;
