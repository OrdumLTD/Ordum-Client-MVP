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
import { enablePolkadotExtension ,getSigner} from '@/Components/wallet/pjs';
import { useWalletContext } from '@/Context/WalletStore';
import { web3Accounts } from '@polkadot/extension-dapp';

function ConnectWallet() {

  //Context
  const {account,setAccount,signer,setSigner,accounts,setAccounts} = useWalletContext();
  //----------------------------------------------

  const [isWallet, setIsWallet] = useState<boolean>();
  const [selectedAcc, setSelectedAcc] = useState<InjectedAccountWithMeta>();

  const getAccounts = async() =>{
    // Check if the Wallet is installed
    const wallet:boolean = await enablePolkadotExtension();
    setIsWallet(wallet);
    // Get Accounts

    const availableAccounts = await web3Accounts();
    
    setAccounts(availableAccounts);
    
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

  })

  return (
    <div className="flex flex-col items-center justify-around">
        
        <div className="flex flex-col w-1/3 justify-center align-middle items-center">
            {
              isWallet? 
                (
                <FormControl sx={{ m: 1, minWidth: 120,width:300,borderColor:'lightblue',border:"1px solid" }} size="medium">
                    <InputLabel id="wallet">Choose Account</InputLabel>
                    <Select
                    labelId="Choose-Wallet"
                    id="wallet"
                    //@ts-ignore
                    value={}
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
                : (<h1 className="font-sans font-light text-base">Wallet unavailable? Try out <button><Link href="/sign-in">Wallet Connect</Link></button></h1>)
            }
            
        </div>
       

    </div>
  )
}

export default ConnectWallet;