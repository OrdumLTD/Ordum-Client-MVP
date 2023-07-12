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
	teamSize: (number | string | BN),
	accountId: AccountId,
	description: string,
	members: Array<[AccountId,MemberRole]>|null,
	refTeam: (number | string | BN) | null,
	registeredTime: (number | string | BN),
	applications: (number | string | BN) | null,
	categories: Array<Categories>,
	role: UserRole
}

export type KeyManagement = {
	admin: AccountId,
	keyPointer: AccountId,
	allowedKeys: Array<AccountId>
}
