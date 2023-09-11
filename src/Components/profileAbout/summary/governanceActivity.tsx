"use client";

export default function GoverenceActivity() {
  return (
    <div className="mt-4 md:mt-0 p-1 md:px-5 flex flex-col  border rounded border-black ">
      <div className="flex justify-between mb-2">
        <span className="text-sm md:text-base md:font-semibold">
          Governance Activity
        </span>{" "}
        {/* ToDo Add logic */}
        <span className="mr-10 md:mr-0 text-sm md:text-base text-gray-500 underline decoration-gray-500 hover:cursor-pointer">
          View All
        </span>
      </div>
      <span className="text-sm">
        <span className="md:font-semibold mr-2">XXXX</span> votes
      </span>
      <span className="text-sm">
        <span className="fmd:ont-semibold mr-2">XXXX</span> Total Value Locked
      </span>
      <span className="text-sm">
        <span className="md:font-semibold mr-2">XXXX</span> votes
      </span>
      <span className="text-sm">
        <span className="md:font-semibold mr-2">XXXX</span> votes
      </span>
    </div>
  );
}
