"use client";

import React, { useEffect, useState } from "react";
import Router from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { useWallet, useInstalledWallets } from "useink";
import OrdumLogoLight from "@/assets/svg-icons/ordum-logo-light.svg";
// import ConnectWallet from "../ConnectWallet/";
import { useWalletContext } from "../../Context/WalletStore";
import { useChainApiContext } from "../../Context/ChainApiStore";
import Button from "../ui/buttons/Button";
import { getPasscode } from "@/lib/AntaLite/dbAuth";
import { usePhalaContractContext } from "@/Context/PhalaContractApiStore";

enum LogInWalletType {
  NONE,
  POLKADOTJS,
  TALISMAN,
  // WALLETCONNECT,
}

const ConnectWallet = dynamic(() => import("../ConnectWallet/"), {
  loading: () => <p>Loading ...</p>,
});

const LogIn: React.FC = () => {
  const wallets = useInstalledWallets();
  const { isConnected, connect, disconnect, setAccount } = useWallet();

  const { loadContractApi, contractApi, cache } = usePhalaContractContext();

  const [walletType, setWalletType] = useState(LogInWalletType.NONE);

  const { account, signer } = useWalletContext();
  const { fetchPoc5Api, poc5 } = useChainApiContext();

  console.log({ 
    contractApi,
    //  poc5, 
    //  signer,
    //  account,
      // cache 
    });

  useEffect(() => {
    if (poc5) {
      if (contractApi) {
      } else {
        loadContractApi();
      }
    } else {
      fetchPoc5Api();
      loadContractApi();
    }
  }, []);

  const checkLogIn = async () => {
    if (contractApi && poc5 && signer) {
      const secret = await getPasscode(
        contractApi,
        poc5,
        signer,
        account,
        cache
      );
      console.log(secret.output.toJSON().valueOf()["ok"]);
    } else {
      loadContractApi();
      fetchPoc5Api();
      console.log("Missing some params in Creation of Applicant");
      console.log(
        `Account: ${account} \n Signer: ${signer} \n ContractApi ${contractApi} Api ${poc5}`
      );
    }
  };

  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base text-white">
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
        </div>
        <div className="grid place-items-center">
          <p className="my-10">Please Log in with a wallet</p>

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

              <Button onClick={() => checkLogIn()}>Print secret</Button>
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
