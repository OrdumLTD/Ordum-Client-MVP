import SearchIcon from "@/assets/svg-icons/search-icon-gray.svg";
import Image from "next/image"

function SearchBar() {
  return (
    <div className="">
      <form>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={SearchIcon} alt="Search lense" className="" />
          </span>
          <input
            className="w-full border-[#4e546d] bg-[#0f1535] text-white placeholder:font-italitc border border-black rounded-xl py-1 pl-10 pr-4 focus:outline-none"
            placeholder="Search for grants"
            type="text"
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
