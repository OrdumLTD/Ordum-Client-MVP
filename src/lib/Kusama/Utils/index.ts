import { ApiPromise } from "@polkadot/api";
import { AccountId } from "@polkadot/types/interfaces";
import type { tldr } from "@/Context/submitPropolsal";
// Function to convert usd to ksm and return the track and amount in ksm
type TrackKsm = {
  Ksm: number;
  Track: string;
  TrackNumber: number;
};

type TrackInfoType = {
  prepPeriod: number; //.. All in unix
  confPeriod: number;
  decPeriod: number;
  decDeposit: number; // In ksm
};

const AllTrackInfo = {
  SmallTipper: {
    prepPeriod: 10, // 60 sec
    confPeriod: 100, // 10 mins
    decPeriod: 109440, // 7 days + 1 day
    decDeposit: 0.33,
  },
  BigTipper: {
    prepPeriod: 100, // 10 mins
    confPeriod: 600, // 1 hr
    decPeriod: 109440, // 7 days + 1 day
    decDeposit: 0.33,
  },
  //The above needs to be in Unix
  SmallSpender: {
    prepPeriod: 14400, // 4 hrs
    confPeriod: 43200, // 12 hrs
    decPeriod: 1296000, // 14 days + 1 day
    decDeposit: 3.33,
  },
  MediumSpender: {
    prepPeriod: 14400, // 4hrs
    confPeriod: 86400, // 1 day
    decPeriod: 1296000, // 14 days + 1day
    decDeposit: 6.66,
  },
  BigSpender: {
    prepPeriod: 14400, // 4 hrs
    confPeriod: 43200, // 2 days
    decPeriod: 1296000, // 14days + 1 day
    decDeposit: 13.33,
  },
  Treasurer: {
    prepPeriod: 7200, // 2 hrs
    confPeriod: 10800, // 3 hrs
    decPeriod: 1296000, // 14 days + 1 day
    decDeposit: 33.33,
  },
};

const refLatestSpending = 1685485200; // 31 May GMT +8
const spendingPeriodDuration = 518400; // 6 days

// Parser

// To be called before recieving date in tl dr;
// But this account when you place decision deposit right after preparation period
export const receiveDateSuggest = (amount: number, rate: number): Date => {
  // get the track name
  const { Track } = getTrackKsm(amount, rate);
  //@ts-ignore
  const Info: TrackInfoType = AllTrackInfo[Track];
  // Convert to date
  const totalDuration = Info.prepPeriod + Info.confPeriod + Info.decPeriod;
  const latestDate = Date.now();
  const suggestDate = latestDate + totalDuration;
  // Take Spending Period into consideration

  let reccomended = 0; // newly recommended time

  let diff = suggestDate - refLatestSpending;
  if (diff < spendingPeriodDuration) {
    const toAdd = spendingPeriodDuration - diff;
    reccomended = suggestDate + toAdd;
  } else {
    const result = diff % spendingPeriodDuration;
    const toAdd = spendingPeriodDuration - result;
    reccomended = suggestDate + toAdd;
  }

  const newDate = new Date(reccomended);
  return newDate;
};

const previewCheck = (preview: tldr): boolean => {
  //Check
  const selectedReceiveDate = preview.recieveDate;

  return true;
};

// Convert to KSM
const convert = (usd: number, rate: number) => {
  return Math.ceil(usd / rate);
};

// Track Hardcoded<=
const Tracks = {
  SmallTipper: 8,
  BigTipper: 33,
  SmallSpender: 333,
  MediumSpender: 3333,
  BigSpender: 33333,
  Treasurer: 33334,
};

export const getTrackKsm = (amount: number, rate: number): TrackKsm => {
  const ksm = convert(amount, rate);
  let track = "";
  let trackNumber: number = 0;
  // Compute the track
  if (ksm <= Tracks.SmallTipper) {
    track = "SmallTipper";
    trackNumber = 30;
  } else if (ksm <= Tracks.BigTipper) {
    track = "BigTipper";
    trackNumber = 31;
  } else if (ksm <= Tracks.SmallSpender) {
    track = "SmallSpender";
    trackNumber = 32;
  } else if (ksm <= Tracks.MediumSpender) {
    track = "MediumSpender";
    trackNumber = 33;
  } else if (ksm <= Tracks.BigSpender) {
    track = "BigSpender";
    trackNumber = 34;
  } else {
    track = "Treasurer";
    trackNumber = 11;
  }

  const tt = {
    Ksm: ksm,
    Track: track,
    TrackNumber: trackNumber,
  };
  return tt;
};

const refBlockNo = 17767047;
const refUnixTime = 1683214032000;
const BlockTime = 6; // In seconds

// Date to blocknumber
export const convertToBlockNumber = (date: string) => {
  // 24-Nov-2023
  // Parse the string

  // Library to convert date to unix
  const unixTime = Date.parse(date);
  console.log("CurrentUnixTime: " + unixTime);
  // A reference blocknumber and check the corresponding unix time
  // Difference on our current unix to ref unix
  const diffUnix = unixTime - refUnixTime;
  // Compute blocks to be produced;
  const blocks = Math.ceil(diffUnix / BlockTime); // Must return a whole number
  // return the blocknumber
  const blockNumber = blocks + refBlockNo;
  return blockNumber;
};

// Fetch KSM price
export const fetchKsmPrice = async () => {
  const url: string =
    "https://api.coingecko.com/api/v3/simple/price?ids=kusama&vs_currencies=usd";
  const price = await fetch(url).catch((err) =>
    console.log("Failed to fetch KSM price " + err)
  );
  return price;
};

export const fetchAcountTokens = async (
  api: ApiPromise,
  account: AccountId
) => {
  const tokens = await api.query.system.account(account);
  return tokens;
};
