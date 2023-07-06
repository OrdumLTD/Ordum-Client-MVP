import Link from "next/link";

// /createteamprofile

const SignUpWallet = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
      <div className="-mt-96 grid place-items-center border px-10 py-5 md:px-40 md:py-20">
        <h1 className="md:text-5xl mb-10">Sign up</h1>

        <Link href="/createteamprofile"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Wallet 1</button></Link>
        <div className="my-1 md:my-2"></div>
        <Link href="/createteamprofil"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Wallet 2</button></Link>
        <div className="my-1 md:my-2"></div>
        <Link href="/createteamprofil"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Wallet 3</button></Link>
      </div>
      {/* <div className="-mt-80 flex flex-col">
        <h2 className="md:text-5xl mb-10">New To Blockchain? Create Wallet</h2>
        <button className="border border-gray-400 py-2.5 w-6/12 item-center ml-16 md:ml-48">
          Create Wallet
        </button>
      </div> */}
    </div>
  );
};

export default SignUpWallet;
