'use client'

export default function ClosedGrants() {
    return (
      <div>
        <div className="flex md:justify-between ">
          <span className="md:text-3xl">Closed Grants</span>
          <div>
            <select
              className="
              ml-2 mt-1 block px-2 md:px-6 md:py-2 bg-white border border-slate-300 rounded-md text-sm md:text-base shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500"
            >
              <option value="" className="" disabled hidden>
                All
              </option>
              <option value="All">All</option>
              <option value="Chain 1">Chain 1</option>
              <option value="Chain 2">Chain 2</option>
            </select>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <p className="text-sm md:text-base">Nohting here yet.</p>
        </div>
      </div>
    );
  }
  