"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import KittyIcon from "@/assets/svg-icons/kitty-icon.svg";
import OrdumIcon from "@/assets/svg-icons/ordum-icon.svg";
import PlusIcon from "@/assets/svg-icons/plus-icon.svg";

import OrdumLogo from "@/assets/svg-icons/ordum-logo-light.svg";
import HouseIcon from "@/assets/svg-icons/house-icon.svg";
import BankIcon from "@/assets/svg-icons/bank-icon-light.svg";
import PeopleIcon from "@/assets/svg-icons/users-icon-light.svg";
import Compass from "@/assets/svg-icons/compass-light.svg";

import Devider from "@/assets/other/devider.svg";

import Header from "./header";
import Link from "next/link";

interface Props {
  title?: string;
  grant?: boolean;
  hideSidePanel?: boolean | undefined;
  children: string | JSX.Element | JSX.Element[] | any;
}

const Layout: React.FC<Props> = (props) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    // <main className="flex h-screen bg-[url('/background/dashboard.png')] text-white">
    <main className="flex h-screen bg-gradient-to-b from-blue-900  to-ordum-purple  text-white">
      <div className="flex h-screen ">
        <Link href="/home/dashboard" className=" w-20 h-full border-r border-r-[#6e7182] border-r-2 flex-col pt-2 px-3">
          <Image
            src={KittyIcon}
            alt="You personal profile"
            className={"mt-2 "}
          />
          <Image src={OrdumIcon} alt="You team profile" className="mt-2" />
          <Image src={PlusIcon} alt="Add more" className="mt-2" />
        </Link>

        {/* Side Panel */}
        {props.hideSidePanel ? null : (
          <div className=" w-48 border-r border-r-[#212850] border-r-2 px-8 pt-4">
            <Link href="/home">
              {" "}
              <Image src={OrdumLogo} alt="Ordum's cool logo" className="mt-2" />
            </Link>
            <Image src={Devider} alt="diveder" className="mt-4 scale-125" />
            <nav className="flex flex-col">
              <Link
                href="/home/dashboard"
                className={
                  "-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex " +
                  (pathName == "/home/dashboard" ? "" : " ")
                }
              >
                <div className="w-5 h-5 bg-[#1A1F37]">
                  <Image
                    src={HouseIcon}
                    alt="Ordum's cool logo"
                    className={
                      "ml-0.5 mt-0.5 " +
                      (pathName == "/home/dashboard" ? "bg-ordum-blue" : " ")
                    }
                  />
                </div>
                <span
                  className={
                    "ml-2 text-[0.9rem] " +
                    (pathName == "/home/dashboard" ? "underline" : " ")
                  }
                >
                  Dashboard
                </span>
              </Link>

              <Link
                href="#"
                className="-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex"
              >
                <div className="w-5 h-5 bg-[#1A1F37]">
                  <Image
                    src={BankIcon}
                    alt="Ordum's cool logo"
                    className={
                      "ml-0.5 mt-0.5 " +
                      (pathName == "/home/mygrants" ? "bg-ordum-blue" : " ")
                    }
                  />
                </div>
                <span
                  className={
                    "ml-2 text-[0.9rem] " +
                    (pathName == "/home/mygrants" ? " underline" : " ")
                  }
                >
                  My Grants
                </span>
              </Link>

              <Link
                href="/home/manageteams"
                className="-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex"
              >
                <div className="w-5 h-5 bg-[#1A1F37]">
                  <Image
                    src={PeopleIcon}
                    alt="Ordum's cool logo"
                    className={
                      "ml-0.5 mt-0.5 " +
                      (pathName == "/home/manageteams" ? "bg-ordum-blue" : " ")
                    }
                  />
                </div>
                <span
                  className={
                    "ml-2 text-[0.9rem] " +
                    (pathName == "/home/manageteams" ? " underline" : " ")
                  }
                >
                  Manage Teams
                </span>
              </Link>

              <Image src={Devider} alt="diveder" className="mt-4 scale-125" />

              <Link
                href="/explore"
                className="-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex"
              >
                <div className="w-5 h-5 bg-[#1A1F37]">
                  <Image
                    src={Compass}
                    alt="Ordum's cool logo"
                    className="ml-0.5 mt-0.5"
                  />
                </div>
                <span
                  className={
                    "ml-2 text-[0.9rem] " +
                    (pathName.includes("explore") ? " underline" : " ")
                  }
                >
                  Explore Grants
                </span>
              </Link>

              {/* Chaing Specific for the explore menu */}
              {props.grant ? (
                <div>
                  <h3 className="-mr-2 mt-4 font-bold text-ordum-blue text-sm ">
                    Kusama Treasury
                  </h3>

                  <ul className="mt-2 ml-2 list-disc text-sm flex flex-col gap-1">
                    <li><Link href="/explore/kusamatreasury">Overview</Link></li>
                    <li><Link href="/explore/kusamatreasury/discussions">Discussions</Link></li>
                    <li><Link href="/explore/kusamatreasury/treasurer">Treasurer</Link></li>
                    <li><Link href="/explore/kusamatreasury/smallspender">Small Spender</Link></li>
                    <li><Link href="/explore/kusamatreasury/mediumspender">Medium Speder</Link></li>
                    <li><Link href="/explore/kusamatreasury/bigspender">Big Spender</Link></li>
                  </ul>
                </div>
              ) : null}
            </nav>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        <div className="mt-8">
          <Header title={props.title} />
        </div>
        {props.grant ? (
          <div className="mt-12 h-full top-5 overflow-y-auto scrollbar-hide">
            {props.children}
          </div>
        ) : (
          <div className="mt-16 h-full top-5 overflow-y-auto scrollbar-hide">
            {props.children}
          </div>
        )}
      </div>
    </main>

    //
  );
};

export default Layout;
