import Image from "next/image";

import EditIcon from "@/assets/svg-icons/edit.svg";

const Milestone = () => {
  return (
    <div
      className="mt-5 border border-black rounded-full py-2 md:py-4 px-2 md:px-8 
  flex justify-between"
    >
      <div className="flex flex-col">
        <div>Milestone (placeholder)</div>
        <div>1.1 Research</div>
      </div>
      <button className="border py-2 px-4 rounded border-black underline font-bold flex">
        <Image src={EditIcon} alt="" height={20} className="" />
        <span className="mt-1"> Edit</span>
      </button>
    </div>
  );
};

export default Milestone;
