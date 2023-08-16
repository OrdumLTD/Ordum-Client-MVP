"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Button from "@/Components/ui/buttons/Button";
import { useProfileContext } from "@/Context/ProfileStore";
import { useUserContext } from "@/Context/user";
import { MemberRole, UserRole } from "@/lib/PhalaContract/Types/types";
import { createTeamApplicantProfile } from "@/lib/PhalaContract/Txn/createProfile";
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { useWalletContext } from "@/Context/WalletStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";
import { useChainApiContext } from "@/Context/ChainApiStore";


// Antd
import type { NotificationPlacement } from 'antd/es/notification/interface';
import { Space, notification } from 'antd';
import { useContract, useEventSubscription, useEvents } from "useink";
import { SmileOutlined,CheckCircleTwoTone } from '@ant-design/icons';
//
import ordumJson from "../../../../lib/PhalaContract/Utils/ordum.json"
import { getTeamApplicant } from "@/lib/PhalaContract/Query";
import { getPasscode } from "@/lib/AntaLite/dbAuth";

const AddTeamMembers = () => {



  // console.log("Test Contracts Events");
  // allContractEvents.map(event => {
  //   console.log(event.name)
  // })

  const router = useRouter();

  const { signer, account } = useWalletContext();
  const { cache, contractApi } = usePhalaContractContext();
  const { profileData, setProfile } = useProfileContext();
  const userCtx = useUserContext();
  const { poc5 } = useChainApiContext();


  const [profileCreation, setProfileCreation] = useState(false);
  const [passkeyStatus, setPasskeyStatus] = useState(false);
  const [ secretError, setSecretError] = useState<string>("");
  const [preSecretfetching, setPreSecretFetching] = useState<boolean>(false);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState<MemberRole>(null);
  const [dBStatus, setDbStatus] = useState<number>();



  useEffect(() => {}, [profileCreation]);

  const addTeamMembersToState = () => {
    const membersToAdd = teamMembers.map((member) => {
      return [member.address, member.role];
    });

    const profile = {
      ...profileData,
      members: membersToAdd,
      // allowedAccounts: null,
    };
    console.log(profile);
    setProfile(profile);
  };

  const addTeamMember = () => {
    if (email && address && role) {
      const toAdd = { email, address, role };
      let newArray = [...teamMembers, toAdd];
      setTeamMembers(newArray);

      setEmail("");
      setAddress("");
      setRole(null);
    }
  };

  const createUser = async () => {

    // Fetch the team profile if its there instruct the user to log in, if not continue
    const returnedTeam =  await getTeamApplicant(
      contractApi,
      poc5,
      signer,
      account,
      cache,
      null
    );

    if(returnedTeam.output.toJSON().valueOf()["ok"]["ok"]){
        console.log("Account is there")
        setSecretError("Log In to Access your account")
        errorNotification("error")

    }else{

      console.log(" Account is not there")
      addTeamMembersToState();
      if (account && signer && cache && contractApi && poc5) {
        await createTeamApplicantProfile(
          setProfileCreation,
          setPasskeyStatus,
          setPreSecretFetching,
          account,
          signer,
          cache,
          contractApi,
          poc5,
          profileData.teamName,
          account.address,
          profileData.description,
          profileData.mission,
          profileData.projectType,
          profileData.residentChain,
          profileData.teamMembers,
          profileData.links
        );
  
      } else {
        console.log("Missing some params in Creation of Applicant");
        console.log(
          `Account: ${account} \n Signer: ${signer} \n Cache: ${cache} \n ContractApi ${contractApi} Api ${poc5}`
        );
      }
    }



  };

  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const [api, contextHolder] = notification.useNotification();

  // Notification for Error
  const errorNotification = (placement: NotificationType) => {
    api.error({
      message: "Please",
      description: "Account is possibly registered please log in",
      btn: <button
            onClick={() => router.push("/")}
            className="rounded-full py-2 bg-ordum-purple text-white w-20">
            Log In
          </button>,
      duration: null,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
    
  };

  // Notification for sucess

  const successNotification = (placement: NotificationType, text: string) => {
    api.error({
      message: "Congratulations",
      description: text,
      duration:6,
      icon: <CheckCircleTwoTone />
    });
    
  };

  const dbErrorNotification = (placement: NotificationType, text: string) => {
    api.error({
      message: "Unexpected Error",
      description: text,
      duration:6
    });
    
  };

  useMemo(()=>{
    if(profileCreation){
      successNotification("success","Profile Registered On-Chain");
    }
    
  },[profileCreation])

  useMemo(()=>{
    if(dBStatus === 201){
      successNotification("success","All Done! Welcome")
    }else{
      dbErrorNotification("error","Something went wrong!!")
    }
    
  },[dBStatus ])

  useMemo(()=>{
    if(preSecretfetching){
      errorNotification("error")
    }
    
  },[preSecretfetching ])

  const removeTeamMember = (i: number) => {
    let newTeamMembers = [...teamMembers];
    newTeamMembers.splice(i, 1);
    setTeamMembers(newTeamMembers);
  };


 
  
  useMemo(async() =>{
    console.log("Db section")
    console.log("passKeyStatus Outer: "+ passkeyStatus)

    if ( passkeyStatus) {

      console.log("passKeyStatus Inner: "+ passkeyStatus)
      console.log("Secret Inner \n");

      const secret = await getPasscode(contractApi,poc5,signer,account,cache);

      console.log("secret outer \n");
      console.log(secret.output.toJSON().valueOf()["ok"]);

      if( secret.output.toJSON().valueOf()["ok"]["ok"]){
        
          const secretInner = secret.output.toJSON().valueOf()["ok"]["ok"];
          console.log("secretInner \n")
          console.log(secretInner);
    
          axios
            // .post("http://localhost:4000/organizations", {
            .post("https://ordum-mvp-api-9de49c774d76.herokuapp.com/organizations", {
              name: secretInner[0],
              passkey: secretInner[1],
            })
            // if succsful it will return a token
            .then((res) => {
              console.log("Db User Return : \n");
              console.log(res.data);
              console.log(res.status)
              setDbStatus(res.status)
      
              userCtx.logInUser(res.data?.token, res.data?.toSend?._id, secretInner[1],UserRole.applicant);
            })
            .catch((e) => console.log(e));
        }
    
      }else{
        console.log("Something went wrong fetching token")
        dbErrorNotification("error","Something went wrong!!")
      }
      
      
  },[passkeyStatus])


  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base">
      <div>
      {
        contextHolder
      }
      </div>
      
      <div
        className="
       my-10 xl:my-28
       border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid"
      >
        <div className="grid place-items-center text-white">
          <div className="justify-self-start text-2xl md:text-4xl">
            Add Team members
          </div>

          <p className="my-8 paragraph mb-4">
            Add your team and send them wallet invitations. Remember to add your
            own personal wallet if the one you logged in with is a multi sig or
            belongs to an organisation.
          </p>

          <div className="w-full mt-5">
            {" "}
            <form className="flex gap-1.5  justify-around">
              <input
                type="text"
                placeholder="Add Team Member Email"
                className="
                basis-4/12
                w-full
                rounded-md border border-grey-200
                bg-inherit
                text-[#CAC9C9]
                text-[0.7rem] 
                py-2 px-3 
                      "
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="text"
                placeholder="Add Wallet Address Associated with the Email"
                className="
                basis-6/12
                w-full
                rounded-md border border-grey-200
                bg-inherit
                text-[#CAC9C9]
                text-[0.7rem] 
                py-2 px-3 
                      "
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />

              <select
                className="
                basis-2/12
                w-full
                rounded-md border border-grey-200
                bg-inherit
                text-[#CAC9C9]
                text-[0.65rem] 
                py-2 px-3 
                      "
                value={role}
                onChange={(e) => {
                  const toSet = e.target.value as keyof typeof MemberRole;
                  setRole(MemberRole[toSet]);
                }}
              >
                <option value="" className="" disabled selected hidden>
                  Role
                </option>
                <option value="admin">Admin</option>
                <option value="regular">Regular</option>
              </select>
            </form>
          </div>
          <Button
            primeColor
            className="w-full mt-4"
            onClick={() => {
              addTeamMember();
            }}
          >
            {" "}
            Add More
          </Button>

          <ul className="mt-3 w-full">
            {teamMembers.map((member, index) => {
              return (
                <li key={index}>
                  <div className="mt-2 border rounded px-2 py-1 flex justify-between items-center">
                    <div className="basis-11/12 flex gap-4 ">
                      <span className="basis-6/12 flex flex-col text-xs">
                        {" "}
                        <span className="font-semibold">Mail:</span>
                        {member.email}
                      </span>
                      <span className="basis-4/12 flex flex-col text-xs">
                        <span className="font-semibold">Address:</span>
                        {member.address}
                      </span>
                      <span className="basis-2/12 flex flex-col text-xs">
                        <span className="font-semibold">Role:</span>{" "}
                        {member.role}
                      </span>
                    </div>
                    <button
                      className="text-sm px-1.5 bg-red-500 rounded-md"
                      onClick={() => removeTeamMember(index)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div
            className="mt-10
            w-full
            flex flex-col gap-4"
          >
            {(profileCreation && dBStatus === 201)? (
              <button
                onClick={() => router.push("/home")}
                className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl"
              >
                Go to dashboard
              </button>
            ) : (
              <button
                className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl"
                onClick={() => {
                  createUser();
                }}
              >
                Create Organizaiton
              </button>
            )}

            <button
             className="rounded-full py-2.5 md:py-3 bg-ordum-purple font-semibold shadow-md shadow-md hover:shadow-2xl">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMembers;
