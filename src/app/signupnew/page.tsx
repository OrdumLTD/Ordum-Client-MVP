import Link from "next/link";
import Image from "next/image";
import OrdumLogoBlack from "@/assets/logos/ordum-logo-black.svg";

const SignUp = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  return (
    <div className="grid h-screen place-items-center text-sm sm:text-base bg-[url('/background/grain-cover.png')] bg-cover text-sm md:text-base">
      <div className="border border-black rounded-lg p-5 md:p-10 w-5/12 grid bg-white">
        <div className="flex flex-col sm:flex-row justify-between border-b border-black pb-2 md:pb-5">
          <Image
            src={OrdumLogoBlack}
            alt="Ordum's log in black"
            className="scale-50 sm:scale-75 lg:scale-100 mb-4 sm:mb-0"
          />
        </div>
        <div className="text-lg md:text-3xl font-base mt-5">Connect Wallet</div>
        <p className="mt-5 md:text-lg">
          In order to get paid in cryptocurrency you will need a wallet. If you
          don’t have one,
        </p>
        <div className="grid place-items-center">
          <div className="mt-5 w-full grid gap-4">
            {/* <button className="w-full border border-black rounded-full border-2 py-4">
              {" "}
              Polkadot JS
            </button>

            <button className="w-full border border-black rounded-full border-2 py-4">
              {" "}
              Talisman{" "}
            </button> */}

            {/* <button className="w-full border border-black rounded-full border-2 py-4">
              {" "}
              Wallet Connect{" "}
            </button> */}

            {/* <Link href={"/profile"}>
            <button className="w-full border border-black rounded-full border-2 py-4 bg-black text-white text-sm md:text-lg font-thin md:font-medium">
              {" "}
              Connect Wallet Later
            </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
