'use client';


import { AccountId, Categories, Chains, MemberRole } from "@/lib/PhalaContract/Types/types";
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
  residentChain:Chains[],
  teamMembers: Array<[AccountId,MemberRole]>|null;
  allowedAccounts:Array<AccountId>|null,
  links: Array<string>|null
}

const defaultProfileData:createProfileData ={
  teamType:"",
  userType:"",
  teamName:"",
  description:"",
  mission:"",
  projectType:[],
  residentChain:[],
  teamMembers:null,
  allowedAccounts:null,
  links:null
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



// Fetched Profile data

export interface FetchedProfileData{
  teamType:string, //If its an individual or Organization
  userType:string, // If its an applicant or Issuer
  teamName: string; // ISSUE - Should this be a profileName, just for clarity
  description: string;
  mission: string;
  projectType: Categories[];
  residentChain:Chains[],
  teamMembers: Array<[AccountId,MemberRole]>|null;
  allowedAccounts:Array<AccountId>|null,
  links:Array<string>|null
}

const defaultFetchedProfileData:FetchedProfileData ={
  teamType:"",
  userType:"",
  teamName:"",
  description:"",
  mission:"",
  projectType:[],
  residentChain:[],
  teamMembers:null,
  allowedAccounts:null,
  links: null
}

interface FetchedProfile {
  profileData: FetchedProfileData,
  fetchedStatus:boolean;
  setProfile:Dispatch<FetchedProfileData>;
  setFetchedStatus:Dispatch<boolean>
}

const defaultFetchedProfile:FetchedProfile ={
  profileData:defaultFetchedProfileData,
  fetchedStatus:false,
  setProfile:(value:FetchedProfileData) =>{return},
  setFetchedStatus:(v:boolean) => {return}
}


const FetchedProfileContext = createContext<FetchedProfile>(defaultFetchedProfile);

export const FetchedProfileContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<FetchedProfileData>(defaultFetchedProfileData);
  const [fetchedStatus, setFetchedStatus] = useState<boolean>(false)

  const setProfile =(v:createProfileData)=>{
      setProfileData({...profileData,...v})
  }

 
  return (
    <FetchedProfileContext.Provider value={{
      profileData,
      fetchedStatus,
      setProfile,
      setFetchedStatus
    }}
    >{children}</FetchedProfileContext.Provider>
  );
};


export const useFetchedProfileContext =()=> useContext(FetchedProfileContext);