"use client";

export default function OptionsBar() {
  return (
    <div className="flex gap-3 jsutify-around">
      <button className="bg-black text-white rounded-xl px-6 py-1 text-sm">
        All
      </button>
      <button className="bg-gray-300 hover:bg-gray-500 hover:text-white rounded-xl px-6 py-1 text-sm">
        Discussions
      </button>
      <button className="bg-gray-300 hover:bg-gray-500 hover:text-white  rounded-xl px-6 py-1 text-sm">
        Propolsals
      </button>
      <button className="bg-gray-300 hover:bg-gray-500 hover:text-white  rounded-xl px-6 py-1 text-sm">
        Governance Participation
      </button>
      <button className="bg-gray-300 hover:bg-gray-500 hover:text-white  rounded-xl px-6 py-1 text-sm">
        Reviews
      </button>

      <div>
        <select
          className="
             block md:w-36 px-1 md:py-1 border border-black rounded-md text-sm md:text-base shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 bg-white"
        >
          <option value="Active" className="" disabled hidden>
            Active
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div>
        <select
          className="
             block md:w-36 px-1 md:py-1 border border-black rounded-md text-sm md:text-base shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 bg-white"
        >
          <option value="New-old" className="" disabled hidden>
            New-Old
          </option>
          <option value="New-old">New-Old</option>
          <option value="Old-new">Old-New</option>
          <option value="Funded">Funded</option>
        </select>
      </div>
    </div>
  );
}
