'use client'

//TODO - mobile view  


const TeamMember = () => {
  return (
    <form className="flex gap-1.5  justify-around">
      <input
        type="text"
        placeholder="Add Team Member Email"
        className="
        basis-4/12
        w-full
        rounded-md border border-grey-200
        bg-inherit
        text-[#CAC9C9]
        text-[0.7rem] 
        py-2 px-3 
               "
      />

      <input
        type="text"
        placeholder="Add Wallet Address Associated with the Email"
        className="
        basis-6/12
        w-full
        rounded-md border border-grey-200
        bg-inherit
        text-[#CAC9C9]
        text-[0.7rem] 
        py-2 px-3 
               "
      />

      <select
        className="
        basis-2/12
        w-full
        rounded-md border border-grey-200
        bg-inherit
        text-[#CAC9C9]
        text-[0.65rem] 
        py-2 px-3 
               "
      >
        <option value="" className="" disabled selected hidden>
          Role
        </option>
        <option value="test1">Test1</option>
        <option value="test2">Test2</option>
      </select>
    </form>
  );
};

export default TeamMember;
