'use client'
//ToDo - Add props for links and 

import Link from "next/link";

import MailIcon from '@mui/icons-material/Mail';import GitHub from "@/assets/svg-icons/github.png";
import TwitterIcon from '@mui/icons-material/Twitter';import Matrix from "@/assets/svg-icons/matrix.png";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Bio() {
  return (
    <div className="flex flex-col">
      <div className="md:flex flex-row md:gap-16">
        <p className="text-lg md:text-4xl">Bio</p>
        <div className="md:ml-10 mt-2 flex flex-row gap-4">
          <Link href="/">
            <MailIcon/>
          </Link>
          
          <Link href="/">
            <TwitterIcon/>
          </Link>
          
          <Link href="/">
            <GitHubIcon/>
          </Link>
          <Link href="/">
            <LanguageIcon/>
          </Link>
        </div>
        <button className="mt-2 md:mt-0 border-2 rounded border-black hover:bg-gray-200 px-1 md:px-14 md:font-bold">
          Docs
        </button>
      </div>

      <p className="mt-2 md:mt-4 max-w-[18rem] md:max-w-[40rem] text-xs md:text-base">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.{" "}
      </p>
    </div>
  );
}
