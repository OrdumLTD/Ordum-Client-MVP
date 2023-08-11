"use client";

// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useWalletContext } from "@/Context/WalletStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import { useProfileContext } from "@/Context/ProfileStore";
import { Categories, Chains } from "@/lib/PhalaContract/Types/types";

// import { Mail, GitHub } from "react-feather";
import GitHubIcon from "@/assets/svg-icons/github-light-icon.svg";
import Email from "@/assets/svg-icons/email-light-icon.svg";
import Discord from "@/assets/svg-icons/discord-light-icon.svg";
import Twitter from "@/assets/svg-icons/twitter-light-icon.svg";
import Matrix from "@/assets/svg-icons/matric-light-icon.svg";
import Website from "@/assets/svg-icons/web-light-icon.svg";

import { createTeamApplicantProfile } from "@/lib/PhalaContract/Txn/createProfile";

const CreateTeam = () => {
  const { signer, account } = useWalletContext();
  const { cache, contractApi } = usePhalaContractContext();
  const { profileData, setProfile } = useProfileContext();

  const [profileCreation, setProfileCreation] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [about, setAbout] = useState("");

  const [projectType, setProjectType] = useState<Categories>(null);
  const [projects, setProjects] = useState<Categories[]>([]);

  const [blockchain, setBlockchain] = useState<Chains>(null);
  const [blockchains, setBlockchains] = useState<Chains[]>([]);

  const [mission, setMission] = useState("");
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [element, setElement] = useState("");
  const [git, setGit] = useState("");

  const router = useRouter();

  let categoriesArray = [];
  for (const key in Categories) {
    if (Categories.hasOwnProperty(key)) {
      categoriesArray.push({ [key]: Categories[key] });
    }
  }

  const addUserToSate = () => {
    const profile = {
      teamName: teamName,
      description: about,
      mission: mission,
      projectType: projects,
      residentChain: blockchains,
      teamMembers: [],
      allowedAccounts: [],
      links: [email, discord, twitter, website, element, git],
    };

    setProfile(profile);
  };

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }

  // Name to be sent to smart contract save

  // const createUser = (
  //   name,
  //   about,
  //   projects,
  //   mission,
  //   blockchains,
  //   email,
  //   discord,
  //   twitter,
  //   website,
  //   element,
  //   git
  // ) => {

  //   createApplicantProfile(
  //     setProfileCreation,
  //     signer,
  //     cache,
  //     contractApi,
  //     profileData.teamName,
  //     account.address,
  //     profileData.description,
  //     profileData.mission,
  //     profileData.mission,
  //     projects,
  //     blockchains,
  //       );

  //   axios
  //     .post("http://localhost:3000/organizations", {
  //       name: name,
  //       passkey: "123421412",
  //       // email: "test@example.com",

  //       // projectType: { projects: projects },
  //       // blockchain: { blockchains: blockchains },
  //       // links: {
  //       //   email: email,
  //       //   discord: discord,
  //       //   twitter: twitter,
  //       //   matrix: element,
  //       //   website: website,
  //       //   git: git,
  //       // },
  //       // about: about,
  //       // mission: mission,
  //     })
  //     // if succsful it will return a token
  //     .then((res) => console.log(res.data?.token))
  //     .catch((e) => console.log(e));
  // };

  return (
    <div className="grid place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-contain text-sm md:text-base">
      <div
        className="
       my-10 xl:my-28
       border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid"
      >
        <div className="grid place-items-center text-white">
          <div className="justify-self-start text-2xl md:text-4xl">
            Create your team
          </div>

          <h3 className="mt-5 md:mt-10 justify-self-start font-medium">
            Team Name
          </h3>
          <input
            className="
        justify-self-start mt-4
        w-full
        rounded-md border border-grey-200
        bg-inherit
        text-[#CAC9C9]
        py-2 px-3 "
            type="text"
            placeholder="Pick a name for your team"
            value={teamName}
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
          />

          <h3 className="mt-5 justify-self-start font-medium">About</h3>
          <textarea
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
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <h3 className="mt-5 justify-self-start font-medium">Project type</h3>

          <div
            className=" 
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
              value={projectType}
              onChange={(e) => {
                const toSet = e.target.value as keyof typeof Categories;
                setProjectType(Categories[toSet]);
              }}
            >
              <option value="" className="" disabled hidden>
                All
              </option>
              <option value="All">
                What are you creating? Chooce a category
              </option>
              {categoriesArray.map((cat) => {
                const val = Object.keys(cat)[0];
                const toShow = Object.values(cat)[0];
                return (
                  <option key={val} value={val}>
                    {val}
                  </option>
                );
              })}
            </select>

            <button
              className="w-40 rounded py-2.5 md:py-3 bg-ordum-purple font-semibold shadow shadow-md hover:shadow-2xl"
              onClick={() => {
                if (projectType !== null && !projects.includes(projectType)) {
                  setProjects([...projects, projectType]);
                  setProjectType(null);
                }
              }}
            >
              + Add More
            </button>
          </div>

          <div
            className=" mt-4
           w-full"
          >
            <ul className="flex flex-col">
              {projects.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="w-11/12 border rounded mt-3 px-4 py-2  flex justify-between">
                      {" "}
                      <span>{item}</span>{" "}
                      <button
                        className="bg-red-500 rounded-md px-2"
                        onClick={() => {
                          const newArray = [...projects];
                          newArray.splice(index, 1);
                          setProjects(newArray);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
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
              value={blockchain}
              onChange={(e) => {
                const toSet = e.target.value as keyof typeof Chains;
                setBlockchain(Chains[toSet]);
              }}
            >
              {/* <option value="" className="" disabled hidden>
                All
              </option> */}
              <option value="">What chain are you building on?</option>
              <option value="kusama">Kusama</option>
              <option value="polkadot">Polkdot</option>
              <option value="offChain">Off Chain</option>
              {/* <option value="Phala">Phala</option>
              <option value="Aleph Zero">Aleph Zero</option>
              <option value="Basilisk">Basilisk</option>
              <option value="HydraDX">HydraDX</option>
              <option value="Astar">Astar</option>
              <option value="Subsocial">Subsocial</option>
              <option value="Zeitgeist">Zeitgeist</option>
              <option value="Interlay">Interlay</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Near">Near</option>
              <option value="KILT">KILT</option>
              <option value="Aventus">Aventus</option>
              <option value="Bifrost">Bifrost</option>
              <option value="Composable Finance">Composable Finance</option>
              <option value="Picasso">Picasso</option>
              <option value="Equilibrium">Equilibrium</option>
              <option value="Frequency">Frequency</option>
              <option value="Centerfuge">Centerfuge</option>
              <option value="Darwania">Darwania</option>
              <option value="Ajuna">Ajuna</option>
              <option value="Parallel">Parallel</option>
              <option value="Pendulum">Pendulum</option>
              <option value="Moonbeam">Moonbeam</option>
              <option value="Unique Netwolr">Unique Netwolr</option>
              <option value="Altair">Altair</option>
              <option value="GM">GM</option>
              <option value="Inbue">Inbue</option>
              <option value="Moonriver">Moonriver</option>
              <option value="Robonomics">Robonomics</option>
              <option value="Touring">Touring</option>
              <option value="Sora">Sora</option>
              <option value="Kintsugi">Kintsugi</option>
              <option value="Other">Other</option> */}
            </select>

            <button
              className="w-40 rounded py-2.5 md:py-3 bg-ordum-purple font-semibold shadow shadow-md hover:shadow-2xl"
              onClick={() => {
                if (blockchain !== null && !blockchains.includes(blockchain)) {
                  setBlockchains([...blockchains, blockchain]);
                  setBlockchain(null);
                }
              }}
            >
              + Add More
            </button>
          </div>

          <div
            className=" mt-4
           w-full"
          >
            <ul className="flex flex-col">
              {blockchains.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="w-11/12 border rounded mt-3 px-4 py-2  flex justify-between">
                      {" "}
                      <span>{item}</span>{" "}
                      <button
                        className="bg-red-500 rounded-md px-2"
                        onClick={() => {
                          const newArray = [...blockchains];
                          newArray.splice(index, 1);
                          setBlockchains(newArray);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <h3 className="mt-5 justify-self-start font-medium">Mission</h3>
          <textarea
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
            value={mission}
            onChange={(e) => setMission(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Discord} alt="Discord" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Discord"
                type="text"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Twitter} alt="Twitter" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Twitter"
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>

            <div className="mt-4 flex">
              <Image src={Matrix} alt="Matrix" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Matrix"
                type="text"
                value={element}
                onChange={(e) => setElement(e.target.value)}
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Website} alt="Website" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Website/Portfolio"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="mt-4 flex">
              <Image src={GitHubIcon} alt="Discord" height={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Github"
                type="text"
                value={git}
                onChange={(e) => setGit(e.target.value)}
              />
            </div>
          </div>

          <div
            className="mt-5
            w-full
            flex flex-col gap-4"
          >
            <button
              className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl"
              // onClick={() => createTeamHandler()}
              onClick={() => {
                addUserToSate();
                router.push("createteam/addteammembers");
              }}
            >
              {/* <Link href={"createteam/addteammembers"}></Link> */}
              Save and continue
            </button>
            <button className="rounded-full py-2.5 md:py-3 bg-ordum-purple font-semibold shadow-md shadow-md hover:shadow-2xl">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
