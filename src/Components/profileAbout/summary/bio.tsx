"use client";
//ToDo - Add props for links and

import Link from "next/link";

import MailIcon from "@mui/icons-material/Mail";
import GitHub from "@/assets/svg-icons/github.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import Matrix from "@/assets/svg-icons/matrix.png";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

type BioType = {
  children?: React.ReactNode;
  className?: string;
  buttonBasic?: boolean;
  borderWhite?: boolean;
  borderBlack?: boolean;
  primeColor?: boolean;
  secondaryColor?: boolean;
};

const Bio: React.FC<BioType> = ({ className }) => {
  return (
    <div className={" " + className}>
      <div className="flex justify-between md:gap-16">
        <p className="text-lg md:text-3xl">Bio</p>
        <div className="flex gap-5">
          <div className="md:ml-10 mt-2 flex flex-row gap-4">
            <Link href="/">
              <MailIcon />
            </Link>

            <Link href="/">
              <TwitterIcon />
            </Link>

            <Link href="/">
              <GitHubIcon />
            </Link>
            <Link href="/">
              <LanguageIcon />
            </Link>
          </div>
          <button className="mt-2 md:mt-0 border-2 rounded border-black hover:bg-gray-200 px-1 md:px-14 md:font-bold">
            Docs
          </button>
        </div>
      </div>

      <p className="mt-2 md:mt-4 text-xs md:text-base">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.{" "}
      </p>
    </div>
  );
};

export default Bio;
