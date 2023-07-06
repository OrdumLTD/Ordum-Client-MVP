import Image from "next/image";

import KittyIcon from "@/assets/svg-icons/kitty-icon.svg";
import OrdumIcon from "@/assets/svg-icons/ordum-icon.svg";
import PlusIcon from "@/assets/svg-icons/plus-icon.svg";

import OrdumLogo from "@/assets/svg-icons/ordum-logo-light.svg";
import HouseIcon from "@/assets/svg-icons/house-icon.svg";
import BankIcon from "@/assets/svg-icons/bank-icon-light.svg"
import PeopleIcon from "@/assets/svg-icons/users-icon-light.svg"
import Compass from "@/assets/svg-icons/compass-light.svg"

import Devider from "@/assets/other/devider.svg";

import Header from "./header";
import Link from "next/link";

interface Props {
  title?: string;
  hideSidePanel?: boolean | undefined;
  children: string | JSX.Element | JSX.Element[] | any
}

const Layout: React.FC<Props> = props => {
  return (
    <main className="flex h-screen bg-[url('/background/dashboard.png')] text-white">
      <div className="flex h-screen ">
        <div className=" w-20 h-full border-r border-r-[#6e7182] border-r-2 flex-col pt-2 px-3">
          <Image src={KittyIcon} alt="You personal profile" className="mt-2" />
          <Image src={OrdumIcon} alt="You team profile" className="mt-2" />
          <Image src={PlusIcon} alt="Add more" className="mt-2" />
        </div>

        {/* Side Panel */}
        { props.hideSidePanel ? null : <div className=" w-48 border-r border-r-[#212850] border-r-2 px-8 pt-4">
          <Image src={OrdumLogo} alt="Ordum's cool logo" className="mt-2" />
          <Image src={Devider} alt="diveder" className="mt-4 scale-125" />
          <nav className="flex flex-col">
            <Link
              href="#"
              className="-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex"
            >
              <div className="w-5 h-5 bg-[#1A1F37]">
                <Image
                  src={HouseIcon}
                  alt="Ordum's cool logo"
                  className="ml-0.5 mt-0.5"
                />
              </div>
              <span className="ml-2 text-[0.9rem]">Dashboard</span>
            </Link>
            <Link
              href="#"
              className="-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex"
            >
              <div className="w-5 h-5 bg-[#1A1F37]">
                <Image
                  src={BankIcon}
                  alt="Ordum's cool logo"
                  className="ml-0.5 mt-0.5"
                />
              </div>
              <span className="ml-2 text-[0.9rem]">My Grants</span>
            </Link>
            <Link
              href="#"
              className="-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex"
            >
              <div className="w-5 h-5 bg-[#1A1F37]">
                <Image
                  src={PeopleIcon}
                  alt="Ordum's cool logo"
                  className="ml-0.5 mt-0.5"
                />
              </div>
              <span className="ml-2 text-[0.9rem]">Manage Teams</span>
            </Link>
            <Image src={Devider} alt="diveder" className="mt-4 scale-125" />

            <Link
              href="#"
              className="-ml-2 mt-3 nav-link block hover:underline transition duration-150 ease-in-out flex"
            >
              <div className="w-5 h-5 bg-[#1A1F37]">
                <Image
                  src={Compass}
                  alt="Ordum's cool logo"
                  className="ml-0.5 mt-0.5"
                />
              </div>
              <span className="ml-2 text-[0.9rem]">Explore Grants</span>
            </Link>
          </nav>
       
        </div>}
      </div>
      <div className="flex flex-col w-full">
        <div className="mt-8">
          <Header title={props.title} />
        </div>
        <div className="mt-16 h-full fixed top-5 overflow-y-auto">
          {props.children}
        </div>
      </div>
    </main>

    //
  );
}

export default Layout;
