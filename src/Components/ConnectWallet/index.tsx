"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  enablePolkadotExtension,
  getSigner,
} from "../../Components/wallet/pjs";
import { useWalletContext } from "../../Context/WalletStore";
import { web3Accounts } from "@polkadot/extension-dapp";

function ConnectWallet() {
  //Context
  const { account, setAccount, signer, setSigner, accounts, setAccounts } =
    useWalletContext();
  //----------------------------------------------

  const [isWallet, setIsWallet] = useState<boolean>(false);
  const [selectedAcc, setSelectedAcc] = useState<
    InjectedAccountWithMeta | undefined
  >(undefined);

  const getAccounts = async () => {
    // Check if the Wallet is installed
    const wallet: boolean = await enablePolkadotExtension();
    setIsWallet(wallet);
    // Get Accounts

    const availableAccounts = await web3Accounts();

    setAccounts(availableAccounts);
  };
  const getTheSigner = async (account: InjectedAccountWithMeta) => {
    // get the signer & update the context state of the signer and Account name
    const signer = await getSigner(account);
    setSigner(signer);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    //@ts-ignore
    setAccount(event.target.value);
    //@ts-ignore
    getTheSigner(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-around">
      <div className="flex flex-col w-1/3 justify-center align-middle items-center rounded">
        {isWallet ? (
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              width: 300,
              borderColor: "lightblue",
              border: "1px solid",
              borderRadius: 2,
            }}
            size="medium"
          >
            <InputLabel id="wallet" sx={{ color: "white" }}>
              Choose Account
            </InputLabel>
            <Select
              labelId="Choose-Wallet"
              id="wallet"
              //@ts-ignore
              value={account}
              label="account"
              onChange={handleChange}
              sx={{ color: "white" }}
            >
              {accounts?.map((acc, id) => (
                //@ts-ignore
                <MenuItem key={id} value={acc}>
                  {acc.meta.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <h1 className="font-sans font-light text-base">
            Wallet unavailable? Try out{" "}
            <button>
              <Link href="/sign-in">Wallet Connect</Link>
            </button>
            <p>
              Or try the{" "}
              <Link
                href="https://polkadot.js.org/extension/"
                className="underlie"
              >
                PJS extenson
              </Link>
            </p>
          </h1>
        )}
      </div>
    </div>
  );
}

export default ConnectWallet;
