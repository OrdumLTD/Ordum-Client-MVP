import { useRouter } from "next/navigation";
// import ChainApiContext from "@/store/apiContext";
import { useContext, useEffect } from "react";
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
  

  const router = useRouter();
  return (
    <div className={"pl-5 mt-16 " + props.className}>
      <h2 className="text-4xl">Explore Grants</h2>
      <div className="flex flex-row-reverse mr-40">
        {/* <button className="mt-5 w-32 text-sm bg-black text-white rounded-xl px-2 py-1">
          Find your grant
        </button> */}
      </div>
      <div className="flex flex-col flex-row gap-3">
    

        <div className="mt-2 w-[33rem] border-2 py-2 border-white backdrop-blur-md rounded cursor-pointer"
        onClick={() => {
          router.push("/submitproposal/tldr")
        }}>
          <div className="pl-5 flex">
            <div className="w-20 h-20 bg-black rounded-full"></div>
            <div className="mt-2 ml-5 flex flex-col">
              <h3 className="text-3xl font-medium">Kusama Treasury</h3>
              <span>On-chain</span>
            </div>
          </div>
          <div className="mt-3 border-t-2 border-b-2 py-2 pl-5 border-black">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <span>10,000,000</span>
                <span className="text-sm font-bold">Paid out(KSM)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm">
                  Contribution and growth of the Kusama ecosystem
                </span>
                <span className="text-sm font-bold">Categoris</span>
              </div>
            </div>
          </div>
          <div className="py-2 pl-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
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
      <button onClick={() => getRefInfo()}>
        Query
      </button>
    </div>
  );
};

export default ExploreContent;
