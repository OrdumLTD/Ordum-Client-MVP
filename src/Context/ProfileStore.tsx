'use client';


import { AccountId, Categories, Chains, IndividualProfile, MemberRole, TeamApplicantProfile, UserRole } from "@/lib/PhalaContract/Types/types";
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


//------------------------------------------------------------------//


// Fetched Team Applicant Profile data


const defaultFetchedProfileData: TeamApplicantProfile ={
  name: "",
	accountId: "",
	description: "",
	mission: "",
	chain: [],
	members: [],
	registeredTime: "",
	applications:0,
	certificates: [],
	categories: [],
	links: []
}

interface FetchedProfile {
  profileData: TeamApplicantProfile,
  fetchedStatus:boolean;
  setProfile:Dispatch<TeamApplicantProfile>;
  setFetchedStatus:Dispatch<boolean>
}

const defaultFetchedProfile:FetchedProfile ={
  profileData:defaultFetchedProfileData,
  fetchedStatus:false,
  setProfile:(value:TeamApplicantProfile) =>{return},
  setFetchedStatus:(v:boolean) => {return}
}


const FetchedProfileContext = createContext<FetchedProfile>(defaultFetchedProfile);

export const FetchedProfileContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<TeamApplicantProfile>(defaultFetchedProfileData);
  const [fetchedStatus, setFetchedStatus] = useState<boolean>(false)

  const setProfile =(v:TeamApplicantProfile)=>{
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



// --------------------------------------------------------------------------//

// Individual Profile

export interface createIndividualData{
  userType:string, // If its an applicant or Issuer
  teamName: string;
  description: string;
  projectType: Categories[];
  residentChain:Chains[],
  links: Array<string>|null
}

const defaultIndividualData:createIndividualData ={
  userType:"",
  teamName:"",
  description:"",
  projectType:[],
  residentChain:[],
  links:null
}

interface createIndividualProfile {
  profileData: createIndividualData,
  creationStatus:boolean;
  setProfile:Dispatch<createIndividualData>;
  setCreationStatus:Dispatch<boolean>
}

const defaultIndividualProfile:createIndividualProfile ={
  profileData:defaultProfileData,
  creationStatus:false,
  setProfile:(value:createProfileData) =>{return},
  setCreationStatus:(v:boolean) => {return}
}


const IndividualProfileContext = createContext<createIndividualProfile>(defaultIndividualProfile);

export const IndividualProfileContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<createIndividualData>(defaultIndividualData);
  const [creationStatus, setCreationStatus] = useState<boolean>(false)

  const setProfile =(v:createIndividualData)=>{
      setProfileData({...profileData,...v})
  }

 
  return (
    <IndividualProfileContext.Provider value={{
      profileData,
      creationStatus,
      setProfile,
      setCreationStatus
    }}
    >{children}</IndividualProfileContext.Provider>
  );
};


export const useIndividualProfileContext =()=> useContext(IndividualProfileContext);


// ----------------------------------------------------------------------------------//
// Fetched Individual Profile

const defaultFetchedIndividualProfileData: IndividualProfile={
  name: "",
  accountId: "",
  description: "",
  chains: [],
  applications: 0,
  refTeam: [],
  certificates: [],
  categories: [],
  links: [],
  role: UserRole.applicant
}

interface FetchedIndividualProfile {
  profileData: IndividualProfile,
  fetchedStatus:boolean;
  setProfile:Dispatch<IndividualProfile>;
  setFetchedStatus:Dispatch<boolean>
}

const defaultFetchedIndividualProfile:FetchedIndividualProfile ={
  profileData:defaultFetchedIndividualProfileData,
  fetchedStatus:false,
  setProfile:(value: IndividualProfile) =>{return},
  setFetchedStatus:(v:boolean) => {return}
}


const FetchedIndividualProfileContext = createContext<FetchedIndividualProfile>(defaultFetchedIndividualProfile);

export const FetchedIndividualProfileContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<IndividualProfile>(defaultFetchedIndividualProfileData);
  const [fetchedStatus, setFetchedStatus] = useState<boolean>(false)

  const setProfile =(v:IndividualProfile)=>{
      setProfileData({...profileData,...v})
  }

 
  return (
    <FetchedIndividualProfileContext.Provider value={{
      profileData,
      fetchedStatus,
      setProfile,
      setFetchedStatus
    }}
    >{children}</FetchedIndividualProfileContext.Provider>
  );
};


export const useFetchedIndividualProfileContext =()=> useContext(FetchedIndividualProfileContext);


// -------------------------------------------------------------------------------------//

// All Teams Profile

export interface NameNId {
  id: AccountId,
  name: string
}

const defaultNameNId: NameNId = {
  id: "",
  name: ""
}

export interface ApplicantNameNId {
  data: Array<NameNId>,
  setApplicantNameNId: Dispatch<NameNId>
}

const defaultApplicantNameNId: ApplicantNameNId = {
  data: [],
  setApplicantNameNId: (v:NameNId) => {return}
}


const ApplicantNameNIdContext = createContext<ApplicantNameNId>(defaultApplicantNameNId);

export const ApplicantNameNIdContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<NameNId[]>([]);

  const setProfile =(v:NameNId)=>{
      setProfileData(prevData => [...prevData,v])
  }

 
  return (
    <ApplicantNameNIdContext.Provider value={{
      data:profileData,
      setApplicantNameNId:setProfile
    }}
    >{children}</ApplicantNameNIdContext.Provider>
  );
};


export const useAppicantNameNIdContext =()=> useContext(ApplicantNameNIdContext);

// ---- ----- --- --//

export interface IndividualNameNId {
  data: Array<NameNId>,
  setIndividualNameNId: Dispatch<NameNId>
}

const defaultIndividualNameNId: IndividualNameNId = {
  data: [],
  setIndividualNameNId: (v:NameNId) => {return}
}


const IndividualNameNIdContext = createContext<IndividualNameNId>(defaultIndividualNameNId);

export const IndidvualNameNIdContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<NameNId[]>([]);

  const setProfile =(v:NameNId)=>{
      setProfileData(prevData => [...prevData,v])
  }

 
  return (
    <ApplicantNameNIdContext.Provider value={{
      data:profileData,
      setApplicantNameNId:setProfile
    }}
    >{children}</ApplicantNameNIdContext.Provider>
  );
};


export const useIndividualNameNIdContext =()=> useContext(IndividualNameNIdContext);


