"use client";

import Link from "next/link";
import Image from "next/image";
import OrdumLogoLight from "@/assets/svg-icons/ordum-logo-light.svg";
import ConnectWallet from "@/Components/ConnectWallet";

const SignUp = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base">
      <div className="border border-black rounded-lg p-5 md:p-10 w-5/12 grid backdrop-blur-md text-white">
        <div className="flex flex-col sm:flex-row justify-between border-b border-black pb-2 md:pb-5">
          <Image
            src={OrdumLogoLight}
            alt="Ordum's log in black"
            className="scale-50 sm:scale-75 lg:scale-100 mb-4 sm:mb-0"
          />
        </div>

        {/* <p className="mt-5 md:text-lg">
          In order to get paid in cryptocurrency you will need a wallet. If you
          don’t have one:
        </p> */}
        <div className="grid place-items-center">
          <div className="text-lg md:text-3xl font-base mt-5">Sign Up</div>
          <div className="mt-5 w-full grid gap-4">

            <ConnectWallet />
{/* 
            <Link href={"/signup/chooseprofile"}>
              <button className="w-full border border-white rounded-full py-4 text-white text-sm md:text-lg ">
                {" "}
                Sign up!
              </button>
            </Link> */}

            <Link href={"/signup/chooseprofile"}>
              <button className="mt-4 w-full border border-white rounded-full py-4 text-white text-sm md:text-lg ">
                {" "}
                Go back to Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
