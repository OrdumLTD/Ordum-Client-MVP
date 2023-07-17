import * as React from "react";

type Dropdown = {
  //   children: React.ReactNode;
  //   className?: string;
  //   buttonBasic?: boolean;
  //   borderWhite?: boolean;
  //   borderBlack?: boolean;
  //   primeColor?: boolean;
  //   secondaryColor?: boolean;
};

// export default function Button(props:Button) {
const Dropdown: React.FC<Dropdown> = (
  {
    //   children,
    //   className,
    //   buttonBasic,
    //   borderWhite,
    //   borderBlack,
    //   primeColor,
    //   secondaryColor,
  }
) => {

    const [show, setShow] = React.useState(false)

    const showItems = () =>{

    }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
            Title title title
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
      >asd asd asd s</div>
    </div>
  );
};

export default Dropdown;
