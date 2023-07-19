'use client'

import Image from "next/image";
import Link from "next/link";

import KsmAvatar from "@/assets/svg-icons/kusama-avatar.svg";
// import ChainApiContext from "@/store/apiContext";
// import { useContext, useEffect } from "react";
// import { getReferendumInfo } from "@/components/Kusama/ApiQuery";
//ToDo Fish out proer logos

type Props = {
  className?: string;
};

const ExploreContent: React.FC<Props> = (props) => {
  // const ChainAPICtx = useContext(ChainApiContext);

  // const getRefInfo = async() =>{
  //   getReferendumInfo(180, ChainAPICtx.api)
  // }


  return (
    <div className={"mx-10 " + props.className}>
      <Link href={"/explore/kusamatreasury"}>
        <div>FILTERS</div>

        <div className="mt-8 flex flex-col flex-row gap-3">
          <div
            className=" border-2 py-2 border-white backdrop-blur-md rounded cursor-pointer"
            // onClick={() => {
            //   router.push("/submitproposal/tldr");
            // }}
          >
            <div className="pl-5 flex justify-between">
              <div className="flex self-start">
                <Image src={KsmAvatar} alt="Kusama Avatar" width={75} />
                <div className="mt-2 ml-5 flex flex-col">
                  <h3 className="text-lg font-semibold">Kusama Treasury</h3>
                  <span>Off-chain</span>
                </div>
              </div>

              <div className="flex gap-8 mr-16">
                <div>
                  <div>Web3 R&D</div>

                  <div>Type</div>
                </div>

                <div>
                  <div>XXXX.XXXXUSD</div>

                  <div>Paid ou(USD)</div>
                </div>
              </div>
            </div>

            <div className="py-2 pl-5 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div>Tags</div>
          </div>

          {/*     <div className="mt-2 bg-gray-200 w-[33rem] border-2 py-2 border-black rounded">
          <div className="pl-5 flex">
            <div className="w-20 h-20 bg-black rounded-full"></div>
            <div className="mt-2 ml-5 flex flex-col">
              <h3 className="text-3xl font-medium">Web3 Foundation</h3>
              <span>Off-chain</span>
            </div>
          </div>
          <div className="mt-3 border-t-2 border-b-2 py-2 pl-5 border-black">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <span>10,000,000</span>
                <span className="text-sm font-bold">Paid out(USD)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm">
                  Research and development of Web3 technology
                </span>
                <span className="text-sm font-bold">Categoris</span>
              </div>
            </div>
          </div>
          <div className="py-2 pl-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div> */}
        </div>
        {/* <button onClick={() => getRefInfo()}>
        Query
      </button> */}
      </Link>
    </div>
  );
};

export default ExploreContent;
