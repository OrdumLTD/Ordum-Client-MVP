'use client';


import { AccountId, Categories, MemberRole } from "@/lib/PhalaContract/Types/types";
import React, { createContext, useState, ReactNode, Dispatch, useContext } from "react";


type Props = {
  children: ReactNode;
};

export interface createProfileData{
  teamType:string, //If its an individual or Organization
  userType:string, // If its an applicant or Issuer
  teamName: string;
  description: string;
  mission: string;
  projectType: Categories[];
  residentChain:string,
  teamMembers: Array<[AccountId,MemberRole]>|null;
  allowedAccounts:Array<AccountId>|null
}

const defaultProfileData:createProfileData ={
  teamType:"",
  userType:"",
  teamName:"",
  description:"",
  mission:"",
  projectType:[],
  residentChain:"",
  teamMembers:null,
  allowedAccounts:null
}

interface createProfile {
  profileData: createProfileData,
  creationStatus:boolean;
  setProfile:Dispatch<createProfileData>;
  setCreationStatus:Dispatch<boolean>
}

const defaultProfile:createProfile ={
  profileData:defaultProfileData,
  creationStatus:false,
  setProfile:(value:createProfileData) =>{return},
  setCreationStatus:(v:boolean) => {return}
}


const ProfileContext = createContext<createProfile>(defaultProfile);

export const ProfileContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<createProfileData>(defaultProfileData);
  const [creationStatus, setCreationStatus] = useState<boolean>(false)

  const setProfile =(v:createProfileData)=>{
      setProfileData({...profileData,...v})
  }

 
  return (
    <ProfileContext.Provider value={{
      profileData,
      creationStatus,
      setProfile,
      setCreationStatus
    }}
    >{children}</ProfileContext.Provider>
  );
};


export const useProfileContext =()=> useContext(ProfileContext);