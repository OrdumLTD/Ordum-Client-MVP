"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OrdumLogoBlack from "@/assets/logos/ordum-logo-black.svg";
import ConnectWallet from "../ConnectWallet/page";
import { useWalletContext } from "@/Context/WalletStore";
import { useChainApiContext } from "@/Context/ChainApiStore";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";

const LogIn = () => {
  const { account } = useWalletContext();
  const {loadContractApi,contractApi} = usePhalaContractContext()
  const { fetchPoc5Api,poc5 } = useChainApiContext();

  useEffect(() => {
    fetchPoc5Api();
    if(poc5){
      if(contractApi){
          
      }else{
          loadContractApi()
      }
  }else{
      fetchPoc5Api();
      loadContractApi()
  }
  });

  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base">
      <div className="border border-black rounded-lg p-5 md:p-10 w-5/12 grid bg-white">
        <div className="flex flex-col sm:flex-row justify-between border-b border-black pb-2 md:pb-5">
          <Image
            src={OrdumLogoBlack}
            alt="Ordum's log in black"
            className="scale-50 sm:scale-75 lg:scale-100 mb-4 sm:mb-0"
          />
          <button className="rounded-full bg-black text-white px-2 lg:px-10 py-0.5 md:py-3 mb-2 sm:mb-0">
            <Link href="/signup">Sign up</Link>
          </button>
        </div>
        <div className="grid place-items-center">
          <div className="text-lg md:text-4xl font-light mt-5">Log in</div>
          <div className="mt-5 w-full grid gap-4">
            {/* Make pretty later */}
            <div className="w-full border border-black rounded-full border-2 py-4">
              {" "}
              <ConnectWallet />
            </button>
            {/* <button className="w-full border border-black rounded-full border-2 py-4">
              {" "}
              Talisman{" "}
            </button> */}
            <button className="w-full border border-black rounded-full border-2 py-4">
              {" "}
              Wallet Connect{" "}
            </button>
            {account ? (
              <div>
               
                  <button className="w-full border border-black rounded-full border-2 py-4">
                    {/* Should be home page */}
                  <Link href={"/profile"}>
                    {" "}
                    Sign In
                    </Link>
                  </button>
                
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
