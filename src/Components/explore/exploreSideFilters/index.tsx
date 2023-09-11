type Props = {
  className?: string;
};

const ExporeSideFilters: React.FC<Props> = (props) => {
  return (
    <div className={"pt w-[20rem] " + props.className}>
      <div className="grid gap-3 ">
        <button className="mr-16 underline text-white ">Clear Filters</button>
        <select
          className=" ml-12
            w-44 block pl-2  md:py-2 border border-black rounded-md text-sm md:text-base shadow-sm bg-gray-700
            focus:outline-none focus:border-sky-500"
        >
          <option value="All">Foundation</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>

        <select
          className=" ml-12
            w-44 block pl-2  md:py-2 border border-black rounded-md text-sm md:text-base shadow-sm bg-gray-700
            focus:outline-none focus:border-sky-500"
        >
          <option value="" className="" disabled hidden>
            All
          </option>
          <option value="All">Active</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
        <select
          className=" ml-12
            w-44 block pl-2  md:py-2 border border-black rounded-md text-sm md:text-base shadow-sm bg-gray-700
            focus:outline-none focus:border-sky-500"
        >
          <option value="" className="" disabled hidden>
            All
          </option>
          <option value="All">Grant Type</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
        <select
          className=" ml-12
            w-44 block pl-2  md:py-2 border border-black rounded-md text-sm md:text-base shadow-sm bg-gray-700
            focus:outline-none focus:border-sky-500"
        >
          <option value="" className="" disabled hidden>
            All
          </option>
          <option value="All">New-Old</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
        <select
          className=" ml-12
            w-44 block pl-2  md:py-2 border border-black rounded-md text-sm md:text-base shadow-sm bg-gray-700
            focus:outline-none focus:border-sky-500"
        >
          <option value="" className="" disabled hidden>
            All
          </option>
          <option value="All">Project Type</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>

        <div className="ml-12 text-sm font-bold flex flex-col">
          <span>Funding Amound (USD)</span>
          <div className="flex flex-row gap-2">
            <input
              className="mt-2 w-20 text-sm font-thin bg-gray-900 placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none "
              placeholder="Min"
              type="text"
            />
            <input
              className="mt-2 w-20 text-sm font-thin bg-gray-900 placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
              placeholder="Max"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExporeSideFilters;
