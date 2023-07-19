"use client";
//ToDo - Add props for links and

import Link from "next/link";

import MailIcon from "@mui/icons-material/Mail";
import GitHub from "@/assets/svg-icons/github.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import Matrix from "@/assets/svg-icons/matrix.png";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountInfo from "./AccountInfo";

type GrantDetails = {
  children?: React.ReactNode;
  className?: string;
  buttonBasic?: boolean;
  borderWhite?: boolean;
  borderBlack?: boolean;
  primeColor?: boolean;
  secondaryColor?: boolean;
};

const GrantDetails: React.FC<GrantDetails> = ({ className }) => {
  return (
    <div className={"overflow-hidden mb-10 " + className}>
      <AccountInfo />
      <div className="mt-12 flex justify-between md:gap-16">
        <p className="text-lg md:text-3xl">Introduction</p>
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

      <p className="mt-4 md:mt-4 text-xs md:text-base">
        The Kusama Treasury is a pot of funds collected through transaction
        fees, slashing, and staking inefficiencies, that can be spent by
        submitting a spending proposal that, if approved by the Community, will
        enter a waiting period before distribution.
      </p>

      <div className="mt-12">
        <h2 className="text-lg md:text-3xl"> Projects we want to see</h2>
        <div className="mt-4">
          <span>Proposals may consist of (but are not limited to):</span>

          <ul className="list-disc mt-1 mx-4">
            <li>Infrastructure deployment and continued operation.</li>
            <li>
              Network security operations (monitoring services, continuous
              auditing).
            </li>
            <li>Ecosystem provisions (collaborations with friendly chains).</li>
            <li>
              {" "}
              Marketing activities (advertising, paid features, collaborations).
            </li>
            <li>
              Community events and outreach (meetups, pizza parties,
              hackerspaces).
            </li>
            <li>
              {" "}
              Software development (wallets and wallet integration, clients and
              client upgrades).
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-lg md:text-3xl"> Get Inspired</h2>
          <span className="mt-4">
            For more information on projects that have been funded so far,
            please check here.
          </span>
        </div>

        <div className="mt-12">
          <h2 className="text-lg md:text-3xl"> The Community</h2>
          <p className="mt-5">
            {" "}
            The Treasury is controlled by the Community, and how funds are spent
            is up to token holders’ judgment. Funds are available for use by
            anyone willing to propose an answer to the following question: How
            can my project contribute to {`Kusama's`} vision? 
          </p>
          <p className="mt-5">
            {" "}
            The Community aims to fund as many valuable proposals as possible
            without running out of funds. Ultimately, the success of your
            proposal depends on the idea behind it, but we suggest following a
            series of the steps as part of the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrantDetails;
