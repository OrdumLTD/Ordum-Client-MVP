import type BN from 'bn.js';



export enum Categories {
	defi = "Defi",
   	identity = "Identity",
   	privacy = "Privacy",
    infrastructure = "Infrastructure",
   	networkChanges= "NetworkChanges",
    art = "Art",
   	media = "Media",
   	gaming = "Gaming",
   	events = "Events",
    education = "Education",
   	nfts = "NFTs",
   	translation= "Translation",
    governance = "Governance",
   	publicGood = "PublicGood"
}

export enum UserRole {
	individual = 'Individual',
	foundation = 'Foundation'
}

export enum MemberRole {
	admin = 'Admin',
	regular = 'Regular'
}

export enum Chains {
	polkadot = 'Polkadot',
	offChain = 'OffChain',
	kusama = 'Kusama'
}

export type Project = {
	id: (number | string | BN),
	data: InnerProject,
	edited: Array<[(number | string | BN), Array<EditedMile>]>,
	main: Array<AddMilestone>,
	pivoted: Array<Array<AddMilestone>>,
	pivotReason: Array<string> | null,
	pivotIndex: Array<(number | string | BN)> | null,
	totalMem: (number | string | BN)
}

export type InnerProject = {
	chain: Chains,
	file: string,
	referendaNo: (number | string | BN) | null
}

export type EditedMile = {
	editedIndex: (number | string | BN),
	mainIndex: (number | string | BN),
	data: string,
	mem: (number | string | BN)
}

export type AddMilestone = {
	mainIndex: (number | string | BN),
	noEdits: (number | string | BN),
	data: string,
	mem: (number | string | BN)
}

export type FetchedMilestone = {
	id: (number | string | BN),
	editedPerMile: Array<EditedMile> | null,
	allEdits: Array<[(number | string | BN), Array<EditedMile>]> | null,
	main: Array<AddMilestone> | null,
	pivoted: Array<AddMilestone> | null
}



export enum KeyAction {
	add = 'ADD',
	remove = 'REMOVE',
	changeAdmin = 'ChangeAdmin'
}


export type AccountId = string | number[]

export type IssuerProfile = {
	name: string,
	id: (number | string | BN),
	chain: Chains,
	isActive: boolean,
	registrationDate: (number | string | BN),
	categories: Array<Categories>,
	description: string,
	mission: string,
	members: Array<[AccountId,MemberRole]>|null,
	applications: Array<(number | string | BN)> | null
	role: UserRole
}



export type ApplicantProfile = {
	name: string,
	accountId: AccountId,
	description: string,
	members: Array<[AccountId, MemberRole]> | null,
	refTeam: (number | string | BN) | null,
	registeredTime: (number | string | BN),
	applications: (number | string | BN) | null,
	categories: Array<Categories> | null,
	links: Array<string> | null,
	role: UserRole
}


export type KeyManagement = {
	admin: AccountId,
	keyPointer: AccountId,
	allowedKeys: Array<AccountId>
}

// Errors Type

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export enum Error {
	accountExists = 'AccountExists',
	notAuthorized = 'NotAuthorized',
	accountDontExists = 'AccountDontExists',
	profileDontExists = 'ProfileDontExists',
	maxKeysExceeded = 'MaxKeysExceeded',
	accountExistsOrMaxExceeded = 'AccountExistsOrMaxExceeded',
	unexpectedError = 'UnexpectedError'
}

export enum MilestoneError {
	notAuthorized = 'NotAuthorized',
	unexpectedError = 'UnexpectedError',
	storageExceeded = 'StorageExceeded',
	milestoneNotFound = 'MilestoneNotFound',
	projectNotFound = 'ProjectNotFound'
}

