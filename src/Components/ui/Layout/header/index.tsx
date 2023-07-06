import Link from "next/link";
import Image from "next/image";

import SearchBar from "./searchBar";

import BellIcon from "@/assets/svg-icons/bell-icon-light.svg";
import SettingsIcon from "@/assets/svg-icons/settings-icon-light.svg";
import UserIcon from "@/assets/svg-icons/user-icon-light.svg";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function Header(props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  // let openModal = false
  // const openDevTools = () => {
  //   openModal = true
  // }

  return (
    <div>
      <nav className="">
        {/* Nav Elements */}
        <div className="flex justify-between">
          <div className="basis 3/12 flex gap-5 text-2xl">{props.title}</div>
          <div className="basis 3/12 flex gap-5">
            <SearchBar />
            <div className="flex gap-5 mt-1.5">
              <Link href="/notifications">
                <Image
                  src={BellIcon}
                  alt="Notifications"
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link href="/profile">
                <Image
                  src={UserIcon}
                  alt="User page"
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link href="Settings">
                <Image
                  src={SettingsIcon}
                  alt="Settings page"
                  className="hover:cursor-pointer"
                />
              </Link>
              {/* <button>DevTools</button> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
