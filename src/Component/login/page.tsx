'use client'

import Link from 'next/link'
import React from 'react'
import ConnectWallet from '../connect-wallet/page'
import { Button } from '@mui/material'


function LogIn() {
  return (
    <div className="font-space-grotesk flex flex-col align-middle justify-center h-screen">
      <div className="flex flex-col align-middle justify-center">
        <h1 className="md:text-5xl mb-10">Log in or sign up</h1>

        <div className="border border-black py-2 flex flex-col place-items-center gap-4">
          <div>
            <ConnectWallet/>
          </div>
        </div>

        <div className="my-1 md:my-2"></div>
        
      </div>
      <div className="-mt-80 flex flex-col">
        <h2 className="md:text-5xl">New To Blockchain? Create Wallet</h2>
        <Button variant='outlined'size='large' className="border border-gray-400 hover:bg-gray-200 py-2.5">
          <Link href="/signup">Sign up</Link>
        </Button>
        <Button  className="mt-5 border border-gray-400 hover:bg-gray-200 py-2.5 w-6/12 item-center ml-16 md:ml-48">
          Create Wallet
        </Button>
      </div>
    </div>
  )
}

export default LogIn