import React from 'react'

function ProjectType() {
  return (
        <div
            className=" \
          justify-self-start mt-4
           flex justify-between
           w-full
           "
          >
            <select
              className=" 
             mr-4 
            w-full
            block pl-2  md:py-2 border border-grey-200 rounded-md text-sm md:text-base shadow-sm bg-gray-300
            focus:outline-none bg-inherit
            text-[#CAC9C9]"
            >
              <option value="" className="" disabled hidden>
                All
              </option>
              <option value="All">
                What are you creating? Chooce a category
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>

            <button className="w-40 rounded py-2.5 md:py-3 bg-ordum-purple font-semibold shadow shadow-md hover:shadow-2xl">
              + Add More
            </button>
        </div>
  )
}

export default ProjectType