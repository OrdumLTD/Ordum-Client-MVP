import type BN from 'bn.js';

export enum Categories {
	publicGood = 'PublicGood',
	infrastructure = 'Infrastructure',
	mediaArt = 'MediaArt',
	governance = 'Governance',
	gameFi = 'GameFi'
}

export enum UserRole {
	applicant = 'Applicant',
	foundation = 'Grant Issuer'
}

export enum MemberRole {
	admin = 'Admin',
	regular = 'Regular'
}

export enum Chains {
	polkadot = 'Polkadot',
	offChain = 'OffChain'
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
