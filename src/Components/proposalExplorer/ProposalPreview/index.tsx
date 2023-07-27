"use client";

const ProposalPreview = () => {
  return (
    <div className="w-full border border-grey-300 border-2 rounded py-4 px-16 flex flex-col">
      <div className="w-full flex justify-between">
        <div className="text-xl font-semibold">Title</div>
        <div className="flex gap-20">
          <div className="text-sm font-semibold">
            <div>Name</div> <div className="text-ordum-grey">Type</div>
          </div>
          <div className="text-sm font-semibold">
            <div>XXXX.XXXXUSD</div>{" "}
            <div className="text-ordum-grey">Requested</div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div>

      <div className="mt-5 flex gap-5">
        <button className="rounder text-xs bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-2 rounded-full onhover:cursor-default shadow">Governence</button>
        <button className="rounder text-xs bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-2 rounded-full onhover:cursor-default shadow">dApps</button>
        <button className="rounder text-xs bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-2 rounded-full onhover:cursor-default shadow">Governence</button>
      </div>
    </div>
  );
};

export default ProposalPreview;
