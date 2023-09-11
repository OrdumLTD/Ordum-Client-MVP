import type BN from "bn.js";

export enum Categories {
  defi = "Defi",
  identity = "Identity",
  privacy = "Privacy",
  infrastructure = "Infrastructure",
  networkChanges = "NetworkChanges",
  art = "Art",
  media = "Media",
  gaming = "Gaming",
  events = "Events",
  education = "Education",
  nfts = "NFTs",
  translation = "Translation",
  governance = "Governance",
  publicGood = "PublicGood",
}

export enum UserRole {
  applicant = "Applicant",
  issuer = "Issuer",
}

export enum MemberRole {
  admin = "Admin",
  regular = "Regular",
}

export enum Chains {
  polkadot = "Polkadot",
  offChain = "OffChain",
  kusama = "Kusama",
}

export type Project = {
  id: number | string | BN;
  data: InnerProject;
  edited: Array<[number | string | BN, Array<EditedMile>]>;
  main: Array<AddMilestone>;
  pivoted: Array<Array<AddMilestone>>;
  pivotReason: Array<string> | null;
  pivotIndex: Array<number | string | BN> | null;
  totalMem: number | string | BN;
};

export type InnerProject = {
  chain: Chains;
  file: string;
  referendaNo: (number | string | BN) | null;
};

export type EditedMile = {
  editedIndex: number | string | BN;
  mainIndex: number | string | BN;
  data: string;
  mem: number | string | BN;
};

export type AddMilestone = {
  mainIndex: number | string | BN;
  noEdits: number | string | BN;
  data: string;
  mem: number | string | BN;
};

export type FetchedMilestone = {
  id: number | string | BN;
  editedPerMile: Array<EditedMile> | null;
  allEdits: Array<[number | string | BN, Array<EditedMile>]> | null;
  main: Array<AddMilestone> | null;
  pivoted: Array<AddMilestone> | null;
};

export enum KeyAction {
  add = "ADD",
  remove = "REMOVE",
  changeAdmin = "ChangeAdmin",
}

export type AccountId = string | number[];

export type TeamApplicantProfile = {
  name: string;
  accountId: AccountId;
  description: string;
  mission: string;
  chain: Array<Chains>;
  members: Array<[AccountId, MemberRole]>;
  registeredTime: number | string | BN;
  applications: number | string | BN;
  certificates: Array<[string, number | string | BN]>;
  categories: Array<Categories>;
  links: Array<string>;
};

export type IndividualProfile = {
  name: string;
  accountId: AccountId;
  description: string;
  chains: Array<Chains>;
  refTeam: Array<[AccountId, MemberRole]>;
  applications: number | string | BN;
  certificates: Array<[string, number | string | BN]>;
  categories: Array<Categories>;
  links: Array<string>;
  role: UserRole;
};

export type KeyManagement = {
  admin: AccountId;
  keyPointer: AccountId;
  allowedKeys: Array<AccountId>;
};

// Errors Type

export enum LangError {
  couldNotReadInput = "CouldNotReadInput",
}

export enum Error {
  accountExists = "AccountExists",
  notAuthorized = "NotAuthorized",
  accountDontExists = "AccountDontExists",
  profileDontExists = "ProfileDontExists",
  maxKeysExceeded = "MaxKeysExceeded",
  accountExistsOrMaxExceeded = "AccountExistsOrMaxExceeded",
  unexpectedError = "UnexpectedError",
}

export enum MilestoneError {
  notAuthorized = "NotAuthorized",
  unexpectedError = "UnexpectedError",
  storageExceeded = "StorageExceeded",
  milestoneNotFound = "MilestoneNotFound",
  projectNotFound = "ProjectNotFound",
}
