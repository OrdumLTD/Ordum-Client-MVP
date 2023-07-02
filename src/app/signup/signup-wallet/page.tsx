'use client'


import ConnectWallet from '@/Component/connect-wallet/page'
import React from 'react'



function SignupWallet() {
  return (
    <div>
        <div>
            <h1>Sign Up</h1>
            {/* Wallet Component */}
            <ConnectWallet/>

            {/* Signing the certificate fns */}
        </div>
    </div>
  )
}

export default SignupWallet;