import Link from "next/link";
import Image from "next/image";

import circle from "@/assets/svg-icons/circle-plus.svg";
import { Mail, GitHub } from "react-feather";
import Discord from "../../assets/svg-icons/discord.svg";
import Twitter from "../../assets/svg-icons/twitter-icon.svg";
import Matrix from "../../assets/svg-icons/matrix.png";
import Website from "../../assets/svg-icons/global.png";

const ChooseProfileStep2 = () => {
  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base">
      <div className="border border-2 border-white backdrop-blur-md rounded-lg p-5 xl:p-16 w-7/12 xl:w-6/12 2xl:w-5/12 grid">
        <div className="grid place-items-center text-white">
          <div className="justify-self-start font-medium">
            Are you a team or an individual
          </div>
          <div
            className="
            justify-self-start
            w-full
            border border-1 border-white rounded-full shadow-xl
            backdrop-blur-xl bg-white/20
            mt-5 p-4
            text-xs sm:text-base
            flex justify-around gap-2"
          >
            <button className="w-[5rem] sm:w-[7rem] md:w-[12rem] lg:w-[16rem] 2xl:w-[18rem] rounded-full py-2.5 md:py-4 bg-[#467EEE] hover:bg-blue-700 shadow-md hover:shadow-2xl font-semibold">
              Anon
            </button>
            <button className="w-[5rem] sm:w-[7rem] md:w-[12rem] lg:w-[16rem] 2xl:w-[18rem] rounded-full py-2.5 md:py-4 bg-[#0A1D47] hover:bg-purple-700 shadow-md hover:shadow-2xl font-semibold">
              Create Profile
            </button>
          </div>

          <h3 className="mt-5 justify-self-start font-medium">Username</h3>
          <input
            className="
          justify-self-start mt-4
          w-full
          rounded-md border border-grey-200
          bg-inherit
          text-[#CAC9C9]
          py-2 px-3 "
            placeholder="E.g. Anon"
          />

          <h3 className="mt-5 justify-self-start font-medium">Bio</h3>
          <textarea
            className="
          justify-self-start mt-4
          resize-none
          w-full
          h-20 md:h-36 2xl:h-40
          rounded-md border border-grey-200
          bg-inherit
          text-[#CAC9C9]
          py-2 px-3 "
            placeholder="In a few sentences describe who you are , what you do, interests, etc."
          />

          <div
            className="mt-5
          justify-self-start
           flex flex-row"
          >
            <Image
              src={circle}
              alt="Add a picture button"
              className="w-16 sm:w-20 xl:w-28"
            />
            <div className="self-center ml-2 md:ml-8 ">Add prifile picture</div>
          </div>

          <div
            className="mt-5
          w-full
           flex flex-col gap-4"
          >
            <button className="rounded-full py-2.5 md:py-3 bg-ordum-blue font-semibold shadow-md shadow-xl hover:shadow-2xl">
              Continue
            </button>
            <button className="rounded-full py-2.5 md:py-3 bg-ordum-purple font-semibold shadow-md shadow-md hover:shadow-2xl">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseProfileStep2;
