"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OrdumLogoBlack from "@/assets/logos/ordum-logo-black.svg";
import OrdumLogoLight from "@/assets/svg-icons/ordum-logo-light.svg"
import ConnectWallet from "../ConnectWallet/page";
import { useWalletContext } from "@/Context/WalletStore";
import { useChainApiContext } from "@/Context/ChainApiStore";
import Button from "../ui/buttons/Button";

const LogIn = () => {
  const { account } = useWalletContext();
  const { fetchPoc5Api } = useChainApiContext();

  useEffect(() => {
    fetchPoc5Api();
  }, []);

  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base text-white">
      <div className="backdrop-blur-md border border-black rounded-lg p-5 md:p-10 w-5/12 grid">
        <div className="flex flex-col sm:flex-row justify-between border-b border-black pb-2 md:pb-5">
          <Image
            src={OrdumLogoLight}
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

            <ConnectWallet />

            <Button borderWhite className="py-4 font-semibold">
              Polkadot JS
            </Button>
            <Button borderWhite className="py-4 font-semibold">
              Talisman
            </Button>
            <Button borderWhite className="py-4 font-semibold">
              Wallet Connect
            </Button>

            {account ? (
              <div>
                <button className="w-full border border-black rounded-full border-2 py-4">
                  <Link href={"/home"}> Sign IN</Link>
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
