"use client";

import Link from "next/link";

import MailIcon from "@mui/icons-material/Mail";
import GitHub from "@/assets/svg-icons/github.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import Matrix from "@/assets/svg-icons/matrix.png";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function TeamMember() {
  return (
    <div className="flex md:justify-between">
      <img
        src="https://pngimg.com/uploads/pirate/pirate_PNG50.png"
        alt="avatar"
        className="w-12 h-12 md:w-24 md:h-24 rounded-full border-2 border-black"
      />

      <div className="flex flex-col md:w-[40rem] 2xl:w-[60rem]">
        <div className="flex flex-col">
          <div className="flex md:justify-between">
            <div className="text-sm md:text-2xl">Name</div>
            <div className="hidden md:block">BlockChain Row</div>
          </div>
          <div>Role</div>
        </div>
        <div className="w-[15rem] md:w-[36rem] text-xs md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="hidden w-[8rem] md:flex justify-around">
        <div>
          <Link href="/">
            <MailIcon />
          </Link>
          {/* Discord  Icon */}
        </div>
        <div>
          <Link href="/">
            <TwitterIcon />
          </Link>
          {/* Matrix Icon */}
        </div>
        <div>
          <Link href="/">
            <GitHubIcon />
          </Link>
          <Link href="/">
            <LanguageIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
