'use client'


import ConnectWallet from '@/Components/ConnectWallet'
import { useChainApiContext } from '@/Context/ChainApiStore'
import { usePhalaContractContext } from '@/Context/PhalaContractApiStore'
import { useWalletContext } from '@/Context/WalletStore'
import { onSignCertificate } from '@/lib/PhalaContract/Utils/phalaCertificate'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'



const SignupWallet = () => {
  const router = useRouter()
  //Context
  const {account,signer} = useWalletContext()
  const {poc5} = useChainApiContext()
  const {setCertificate} = usePhalaContractContext()

  const signCertificate =async()=>{
    if(account && signer && poc5){
      const certData = await onSignCertificate(poc5,signer,account)
      setCertificate(certData);
      router.push("/createTeamProfile")
    }  
  }

  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
        <div className="-mt-96 grid place-items-center border px-10 py-5 md:px-40 md:py-20">
            <h1>Sign In</h1>
            {/* Wallet Component */}
            <ConnectWallet/>

            {/* Signing the certificate fns */}
            <div className="flex flex-col w-1/2 justify-center my-5">
              {
                account?
                (
                  <Button 
                    onClick={signCertificate}
                    variant="outlined"
                  >
                    Sign In
                  </Button>
                )
                :
                (
                  <div></div>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default SignupWallet;