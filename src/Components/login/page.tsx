'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import ConnectWallet from '../ConnectWallet/page'
import { Button } from '@mui/material'
import { useWalletContext } from '@/Context/WalletStore'
import { useChainApiContext } from '@/Context/ChainApiStore'


function LogIn() {
  // Context
  const {account} = useWalletContext()
  const {fetchPoc5Api} = useChainApiContext()

  useEffect(()=>{
    fetchPoc5Api()
  })

  return (
    <div className="font-space-grotesk flex flex-col align-middle justify-center h-screen">
      <div className="flex flex-col align-middle justify-center">
        <h1 className="md:text-5xl mb-10 flex align-middle justify-center">Log in or sign up</h1>

        <div className="py-2 flex flex-col place-items-center gap-4">
          <div>
            <ConnectWallet/>
          </div>
          <div className="flex flex-col w-1/2 justify-center my-5">
            {
              account ? 
              (
                <Button variant="outlined">
                  Sign Up
                </Button>
              )
              :
              (
                <div></div>
              )
            }
            
          </div>
        </div>

        <div className="my-1 md:my-2"></div>
        
      </div>
      <div className="mt-8 flex flex-col align-middle items-center justify-center">
        <h2 className="md:text-5xl">New To Blockchain? Create Wallet</h2>
        <div className="flex flex-col w-1/2 justify-center my-5">
          <Button variant='outlined'size='large' className="border border-gray-400 hover:bg-gray-200 py-2.5">
            <Link href="/signup">Sign In</Link>
          </Button>
          <Button  className="mt-5 border border-gray-400 hover:bg-gray-200 py-2.5 w-6/12 item-center ml-16 md:ml-48">
            Create Wallet
          </Button>
        </div>
        
      </div>
    </div>
  )
}

export default LogIn