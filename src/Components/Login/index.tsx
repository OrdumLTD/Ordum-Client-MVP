"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OrdumLogoLight from "@/assets/svg-icons/ordum-logo-light.svg";
import ConnectWallet from "../ConnectWallet/page";
import { useWalletContext } from "../../Context/WalletStore";
import { useChainApiContext } from "../../Context/ChainApiStore";
import Button from "../ui/buttons/Button";

enum LogInWalletType {
  NONE,
  POLKADOTJS,
  TALISMAN,
  WALLETCONNECT,
}

const LogIn = () => {
  const [walletType, setWalletType] = useState(LogInWalletType.NONE);

  const { account } = useWalletContext();
  const { fetchPoc5Api } = useChainApiContext();

  useEffect(() => {
    fetchPoc5Api();
  });

  return (
    <div className="grid place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-contain text-sm md:text-base text-white">
      <div
        className="
       my-10 xl:my-28
       border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid"
      >
        <div className="flex flex-col sm:flex-row justify-between border-b border-white pb-2 md:pb-5">
          <Image
            src={OrdumLogoLight}
            alt="Ordum's log in black"
            className="scale-50 sm:scale-75 lg:scale-100 mb-4 sm:mb-0"
          />
          <Button primeColor className="py-4 font-semibold">
            <Link href="/signup">Sign up</Link>
          </Button>
          {/* <button className="rounded-full bg-black text-white px-2 lg:px-10 py-0.5 md:py-3 mb-2 sm:mb-0">
            <Link href="/signup">Sign up</Link>
          </button> */}
        </div>
        <div className="grid place-items-center">
          <div className="text-lg md:text-4xl font-light mt-5">Log in</div>
          <div className="mt-5 w-full grid gap-4">
            <div className="flex flex-col">
              <label>Email</label>
              <input className="mt-2 bg-inherit border rounded-md pl-2 py-2" />
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <input className="mt-2 bg-inherit border rounded-md pl-2 py-2" />
            </div>

            <Button primeColor className="mt-2 py-4">
              Log in
            </Button>
          </div>

          <div className="mt-5 w-full flex place-items-center justify-between">
            <div className="basis-4/12 border-b border-b-white" />
            <span className="self-center font-bold text-xl">OR LOG WITH</span>
            <div className="basis-4/12 border-b border-b-white" />
          </div>

          {walletType === LogInWalletType.NONE ? (
            <div className="mt-5 w-full grid gap-4">
              {/* <ConnectWallet /> */}
              <Button
                borderWhite
                className="py-4 font-semibold"
                onClick={() => {
                  setWalletType(LogInWalletType.POLKADOTJS);
                }}
              >
                Polkadot JS
              </Button>
              <Button
                borderWhite
                className="py-4 font-semibold"
                onClick={() => {
                  setWalletType(LogInWalletType.TALISMAN);
                }}
              >
                Talisman
              </Button>
              <Button borderWhite className="py-4 font-semibold">
                Wallet Connect
              </Button>
            </div>
          ) : (
            <div className="mt-5 w-full grid gap-4">
              <Button
                onClick={() => {
                  setWalletType(LogInWalletType.NONE);
                }}
              >
                Choose another wallet{" "}
              </Button>

              <ConnectWallet />

              {account ? (
                <Button borderWhite className="py-4 font-semibold">
                  <Link href={"/home"}> Log in with Wallet</Link>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
