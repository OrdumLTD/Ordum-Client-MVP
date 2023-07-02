'use client';


import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

import Link from "next/link";
import Image from "next/image"
import SearchBar from './searchBar/page';


function Header() {
    // let openModal = false
    // const openDevTools = () => {
    //   openModal = true
    // }
  
    return (
      <div>
        <nav className="ml-8 md:ml-20 navbar border-b border-l md:py-4 bg-white relative ">
          {/* Nav Elements */}
          <div className="static mr-10 flex">
            <div
              className="ml-1 md:ml-12 flex items-center md:text-lg"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav grid grid-cols-4 gap-3 md:gap-6">
                <li className="nav-item">
                  <Link
                    href="/profile/about/person"
                    className="nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                  >
                    Home
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link
                    href="/explore"
                    className="nav-link block -ml-1.5 md:ml-0 hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                  >
                    Explore
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                  >
                    Teams
                  </Link>
                  </li>
                  {/* <Link to="/">
                    <a
                      className="nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/explore">
                    <a
                      className="-ml-0.5 md:-ml-0 nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Explore
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/teams">
                    <a
                      className="nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Teams
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ksmindexing">
                    <a
                      className="-ml-0.5 md:-ml-0 nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      KSM
                    </a>
                  </Link> */}
                
              </ul>
            </div>
            <div className="hidden md:flex absolute right-40">
              <SearchBar />
              <div className="ml-4 flex gap-5">
                <Link href="/notifications">
                 <AlarmOnIcon/>
                </Link>
                <Link href="/profile/about">
                  <PersonIcon/>
                </Link>
                <Link href="Settings">
                  <SettingsIcon/>
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
  