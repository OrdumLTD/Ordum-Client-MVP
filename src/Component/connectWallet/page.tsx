'use client';


import Link from 'next/link';
import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { Signer } from "@polkadot/types/types";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { blue } from '@mui/material/colors';
import { enablePolkadotExtension ,getSigner} from '@/Component/wallet/pjs';
import { useWalletContext } from '@/Context/WalletStore';


function ConnectWallet() {

  //Context
  const {account,setAccount,signer,setSigner} = useWalletContext();
  //----------------------------------------------

  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
  const [isWallet, setIsWallet] = useState<boolean>();
  const [selectedAcc, setSelectedAcc] = useState<InjectedAccountWithMeta>();

  const getAccounts = async() =>{
    // Check if the Wallet is installed
    const wallet:boolean = await enablePolkadotExtension();
    setIsWallet(wallet);
    // Get Accounts
    const { web3Accounts, web3AccountsSubscribe } = await import(
      "@polkadot/extension-dapp"
    );

    const accounts = await web3Accounts();
    setAccounts(accounts);
    
  }
  const getTheSigner = async(account:InjectedAccountWithMeta) =>{
    // get the signer & update the context state of the signer and Account name
    const signer = await getSigner(account);
    setSigner(signer)
  }

  const handleChange = (event: SelectChangeEvent) => {
    //@ts-ignore
    setAccount(event.target.value);
    //@ts-ignore
    getTheSigner(event.target.value)
  };

  useEffect(()=>{
    getAccounts()

  },[])

  return (
    <main className="flex flex-col items-center justify-around">
        
        <div className="flex flex-col w-1/3 justify-center align-middle items-center">
            {
              isWallet? 
                (
                <FormControl sx={{ m: 1, minWidth: 120,width:300,borderColor:'lightblue' }} size="medium">
                    <InputLabel id="wallet">Choose Wallet Account</InputLabel>
                    <Select
                    labelId="Choose-Wallet"
                    id="wallet"
                    //@ts-ignore
                    value={selectedAcc}
                    label="account"
                    onChange={handleChange}
                    >
                    {accounts?.map((acc,id) =>(
                        //@ts-ignore
                        <MenuItem key={id} value={acc}>{acc.meta.name}</MenuItem>
                    ))}
                    
                    </Select>
                </FormControl>
                ) 
                : (<Button variant="outlined" disabled>Wallet Account</Button>)
            }
            
        </div>
        <div className="flex flex-col w-100 justify-center align-middle items-center">
        {
            isWallet? (
              <div></div>       
            )
            : (<h1 className="font-sans font-light text-base">Wallet unavailable? Try out <Button><Link href="/sign-in">Wallet Connect</Link></Button></h1>)
        }
        </div>

    </main>
  )
}

export default ConnectWallet;