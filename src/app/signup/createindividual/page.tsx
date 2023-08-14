"use client";

// import Link from "next/link";
import Image from "next/image";

import {
  useIndividualProfileContext,
  useProfileContext,
} from "@/Context/ProfileStore";
import { useChainApiContext } from "@/Context/ChainApiStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import { useEffect, useMemo, useState } from "react";
import { useWalletContext } from "@/Context/WalletStore";
import { Categories, Chains, UserRole } from "@/lib/PhalaContract/Types/types";
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { useUserContext } from "@/Context/user";
import { createIndividualProfile } from "@/lib/PhalaContract/Txn/createProfile";

// Antd
import type { NotificationPlacement } from "antd/es/notification/interface";
import { Space, notification } from "antd";
import { useContract, useEventSubscription, useEvents } from "useink";
import { SmileOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { Spin } from 'antd';
//
import ordumJson from "@/lib/PhalaContract/Utils/ordum.json";
import { getIndividual } from "@/lib/PhalaContract/Query";
import { getPasscode } from "@/lib/AntaLite/dbAuth";

import GitHubIcon from "@/assets/svg-icons/github-light-icon.svg";
import Email from "@/assets/svg-icons/email-light-icon.svg";
import Discord from "@/assets/svg-icons/discord-light-icon.svg";
import Twitter from "@/assets/svg-icons/twitter-light-icon.svg";
import Matrix from "@/assets/svg-icons/matric-light-icon.svg";
import Website from "@/assets/svg-icons/web-light-icon.svg";
import { useRouter } from "next/navigation";
import axios from "axios";

let categoriesArray = [];
for (const key in Categories) {
  if (Categories.hasOwnProperty(key)) {
    categoriesArray.push({ [key]: Categories[key] });
  }
}

// axios

// .post("https://ordum-mvp-api-9de49c774d76.herokuapp.com/individuals", {
//   name: secretInner[0],
//   passkey: secretInner[1],
// })
// // if succsful it will return a token
// .then((res) => {
//   console.log("Db User Return : \n");
//   console.log(res.data);
//   console.log(res.status)
//   setDbStatus(res.status)

//   userCtx.logInUser(res.data?.token, res.data?.toSend?._id, secretInner[1]);
// })
// .catch((e) => console.log(e));
// }

const CreateIndividualProfile = () => {
  const [profileCreation, setProfileCreation] = useState(false);
  const [passkeyStatus, setPasskeyStatus] = useState(false);
  const [secretError, setSecretError] = useState<string>("");
  const [preSecretfetching, setPreSecretFetching] = useState<boolean>(false);
  const [dBStatus, setDbStatus] = useState<number>();
  

  const [projectType, setProjectType] = useState<Categories>(null);
  const [projects, setProjects] = useState<Categories[]>([]);
  const [blockchain, setBlockchain] = useState<Chains>(null);
  const [blockchains, setBlockchains] = useState<Chains[]>([]);
  const [userName, setUserName] = useState("");
  const [about, setAbout] = useState("");
  const [mission, setMission] = useState("");
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [element, setElement] = useState("");
  const [git, setGit] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const addUserToSate = () => {
    const profile = {
      teamName: profileData.teamName,
      description: profileData.description,
      // mission: profileData.mission,
      projectType: projects,
      residentChain: blockchains,
      links: [email, discord, twitter, website, element, git],
    };

    setProfile(profile);
  };

  const router = useRouter();
  const { profileData, setProfile, setCreationStatus, creationStatus } =
    useIndividualProfileContext();
  const { account, signer } = useWalletContext();
  const userCtx = useUserContext();
  const { fetchPoc5Api, poc5 } = useChainApiContext();
  const { loadContractApi, contractApi, cache } = usePhalaContractContext();

  const updateLink = (i: number, v: string) => {
    setLinks((prevState) => {
      const updatedState = [...prevState];
      updatedState[i] = v;
      return updatedState;
    });
  };

  // console.log(projectType);

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
  };

  const createUser = async () => {
    // Fetch the team profile if its there instruct the user to log in, if not continue
    console.log("prefetching individual profile");
    const returnedTeam = await getIndividual(
      contractApi,
      poc5,
      signer,
      account,
      cache,
      null
    );

    if (returnedTeam.output.toJSON().valueOf()["ok"]["ok"]) {
      console.log("Account is there");
      setSecretError("Log In to Access your account");
      errorNotification("error");
    } else {
      console.log(" Account is not there");
      if (account && signer && cache && contractApi && poc5) {
        await createIndividualProfile(
          setProfileCreation,
          setPasskeyStatus,
          setPreSecretFetching,
          account,
          signer,
          cache,
          contractApi,
          poc5,
          profileData.teamName,
          profileData.description,
          profileData.projectType,
          profileData.residentChain,
          profileData.links,
          UserRole.applicant
        );
      } else {
        console.log("Missing some params in Creation of Applicant");
        console.log(
          `Account: ${account} \n Signer: ${signer} \n Cache: ${cache} \n ContractApi ${contractApi} Api ${poc5}`
        );
      }
    }
  };

  type NotificationType = "success" | "info" | "warning" | "error";

  const [api, contextHolder] = notification.useNotification();

  // Notification for Error
  const errorNotification = (placement: NotificationType) => {
    api.error({
      message: "Please",
      description: "Account is possibly registered please log in",
      btn: (
        <button
          onClick={() => router.push("/")}
          className="rounded-full py-2 bg-ordum-purple text-white w-20"
        >
          Log In
        </button>
      ),
      duration: null,
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };
  // Notification for sucess
  const successNotification = (placement: NotificationType, text: string) => {
    api.error({
      message: "Congratulations",
      description: text,
      duration: 6,
      icon: <CheckCircleTwoTone />,
    });
  };

  // Not for DB Error
  const dbErrorNotification = (placement: NotificationType, text: string) => {
    api.error({
      message: "Unexpected Error",
      description: text,
      duration: 6,
    });
  };


  useMemo(() => {
    if (profileCreation) {
      successNotification("success", "Profile Registered On-Chain");
    }
  }, [profileCreation]);

  useMemo(() => {
    if (dBStatus === 201) {
      successNotification("success", "All Done! Welcome");
    } else {
      dbErrorNotification("error", "Something went wrong!!");
    }
  }, [dBStatus]);

  useMemo(() => {
    if (preSecretfetching) {
      errorNotification("error");
    }
  }, [preSecretfetching]);

  useMemo(async () => {
    console.log("Db section");
    console.log("passKeyStatus Outer: " + passkeyStatus);
    if (passkeyStatus) {
      console.log("passKeyStatus Inner: " + passkeyStatus);
      console.log("Secret Inner \n");
      const secret = await getPasscode(
        contractApi,
        poc5,
        signer,
        account,
        cache
      );

      console.log("secret outer \n");
      console.log(secret.output.toJSON().valueOf()["ok"]);

      if (secret.output.toJSON().valueOf()["ok"]["ok"]) {
        const secretInner = secret.output.toJSON().valueOf()["ok"]["ok"];
        console.log("secretInner \n");
        console.log(secretInner);

        axios
          // .post("http://localhost:4000/organizations", {
          .post(
            "https://ordum-mvp-api-9de49c774d76.herokuapp.com/individuals",
            {
              name: secretInner[0],
              passkey: secretInner[1],
            }
          )
          // if succsful it will return a token
          .then((res) => {
            console.log("Db User Return : \n");
            console.log(res.data);
            console.log(res.status);
            setDbStatus(res.status);

            userCtx.logInUser(
              res.data?.token,
              res.data?.toSend?._id,
              secretInner[1],
              UserRole.applicant
            );
          })
          .catch((e) => console.log(e));
      }
    } else {
      console.log("Something went wrong fetching token");
      dbErrorNotification("error", "Something went wrong!!");
    }
  }, [passkeyStatus]);

 

  return (
    <div className="grid place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-contain text-sm md:text-base">
      <div
        className="
       my-10 xl:my-28
       border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid"
      >
        <div className="grid place-items-center text-white">
          <div className="justify-self-start text-2xl md:text-4xl">
            Create your individual profile
          </div>

          <div className="mt-8 w-full">
            <span>User Name</span>
            <input
              // value={userName}
              onChange={(e) => {
                //@ts-ignore
                setProfile({ teamName: e.target.value });
              }}
              className="
        justify-self-start mt-4
        resize-none
        w-full
     
        rounded-md border border-grey-200
        bg-inherit
  
        py-2 px-3 "
              placeholder="Eg - Super_Anon_12 "
            />
          </div>

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
              value={Categories[projectType]}
              onChange={(e) => {
                const toSet = e.target.value as keyof typeof Categories;
                setProjectType(Categories[toSet]);
              }}
            >
              <option value="" className="" disabled hidden>
                All
              </option>
              <option value={"All"} selected disabled>
                What are you creating? Chooce a category
              </option>
              {categoriesArray.map((category) => {
                const val = Object.keys(category)[0];
                const toShow = Object.values(category)[0];
                // const toShow = String(val)
                return (
                  <option key={val} value={val}>
                    {String(toShow)}
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
              <option value="" selected disabled>
                What chain are you building on?
              </option>
              <option value="kusama">kusama</option>
              <option value="polkadot">polkadot</option>
              <option value="offChain">offChain</option>
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
            placeholder="What does you want to achieve? "
          />

          <div className="mt-5 justify-self-start w-full">
            <h3 className="mb-4">Links</h3>
            <div className="flex">
              <Image src={Email} alt="Email" height={36} width={38} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit "
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Discord} alt="Discord" height={36} width={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Discord"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Twitter} alt="Twitter" height={36} width={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Twitter"
                type="text"
              />
            </div>

            <div className="mt-4 flex">
              <Image src={Matrix} alt="Matrix" height={36} width={36} />{" "}
              <input
                className="ml-5 w-full pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
              focus:outline-none bg-inherit"
                placeholder="Matrix"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Website} alt="Website" height={36} width={36} />{" "}
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
            {!(profileCreation && dBStatus === 201) ? (
              <button
                onClick={() => {
                  addUserToSate();
                  saveNDone();
                  createUser();
                }}
                className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl"
              >
                Create Profile
              </button>

            ) : 

            (
              <button className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl">
                
                Go to Dashboard
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
