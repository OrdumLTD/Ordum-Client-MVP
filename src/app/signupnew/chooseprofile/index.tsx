import Link from "next/link";
import Image from "next/image";
import OrdumLogoBlack from "@/assets/logos/ordum-logo-black.svg";

const ChooseProfile = () => {
  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base">
      <div className="border border-2 border-white backdrop-blur-md rounded-lg p-5 md:p-10 w-7/12 xl:w-6/12 2xl:w-5/12 grid">
        <div className="grid place-items-center text-white">
          <div className="text-xl lg:text-2x xl:text-3xl 2xl:text-4xl place-self-auto">
            To create or not to create a profile!
          </div>
          <p className="mt-5 justify-self-start text-sm sm:text-base font-base xl:font-medium xl:text-lg 2xl:font-medium 2xl:text-lg">
            Would you like to create a profile or stay anon, human? If you don’t
            opt into creating a profile, only the wallet address will be
            displayed, unless you have set an on-chain identity.
          </p>
          <div className="mt-5 text-xs sm:text-base grid grid-flow-col gap-2 xl:gap-3 2xl:gap-5">
            <button className="w-[5rem] sm:w-[8rem] md:w-[12rem] xl:w-[16rem] 2xl:w-[20rem] rounded-full py-2.5 bg-[#467EEE] shadow-md hover:bg-blue-700 shadow-md hover:shadow-2xl">
              Anon
            </button>
            <button className="w-[5rem] sm:w-[8rem] md:w-[12rem] xl:w-[16rem] 2xl:w-[20rem] rounded-full py-2.5 bg-[#0A1D47] shadow-md hover:bg-purple-700 shadow-md hover:shadow-2xl">
              Create Profile
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChooseProfile;
