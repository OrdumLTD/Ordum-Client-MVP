'use client'

import Link from 'next/link'
import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';


function CreateTeamProfile() {
  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
        <div className="grid place-items-start pt-20 pl-4 md:pl-80 md:pl-96">
            <div className="flex flex-col">
                <div>
                    <h1 className="md:text-5xl font-medium">Sign Up</h1>
                    <p className="mt-2 text-sm">Create your profile</p>
                </div>
                <div className="mt-8">
                    <h3>Are you an organisation or an individual?</h3>
                    <div className="mt-2 rounded bg-gray-200 py-2 flex space-around px-2">
                        {/* Ui for button for if condition */}
                        <button>
                            Organization
                        </button>
                        <button>
                            Individual
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <h3>Are you an Applicant or a Grant Issuer?</h3>
                    <div className="mt-2 rounded bg-gray-200 py-2 flex space-around px-2">
                        {/* Ui for button for if condition */}
                        <button>
                            Applicant
                        </button>
                        <button>
                            Grant Issuer
                        </button>
                    </div>
                </div>
            </div>
            <div>
                  <div className="mt-8 md:mt-12 md:w-screen flex flex-col">

                    <form className="md:w-5/12">
                        <label>Team Name</label>
                        <input
                            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
                         type="text"
                         placeholder="What is the name of your team?" 
                        />
                    </form>

                    <form className="mt-4 md:w-5/12">
                        <label>About</label>
                        <textarea
                            className="mt-2 w-full resize-none h-40 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all pl-2 pr-4 py-2"
                            placeholder="What is the name of your team?"
                        />
                    </form>
                    
                  
                    {/* Project Type additive */}
                  
                  
                    {/* Blockchain residence UI additive */}
                  
                    <form className="mt-4 md:w-5/12">
                        <label>Mission</label>
                        <textarea
                              className="mt-2 w-full resize-none h-40 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all pl-2 pr-4 py-2"
                            placeholder="What does your team want to achieve?"
                        />
                    </form>
                </div>
                <div className="mt-10 w-5/12">
                    <h3 className="mb-4">Social Links</h3>
                    {/* Links UI */}
                    <div className="flex">
                        <EmailIcon/>
                    <input
                        className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                        placeholder="Email"
                        type="text"
                    />
                    </div>
                    
                    <div className="mt-4 flex">
                        <TwitterIcon/>
                    <input
                        className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                        placeholder="Twitter"
                        type="text"
                    />
                    </div>

                    <div className="mt-4 flex">
                        <LanguageIcon/>
                    <input
                        className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                        placeholder="Website"
                        type="text"
                    />
                    </div>
                    <div className="mt-4 flex">
                        <GitHubIcon/>
                    <input
                        className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                        placeholder="Github"
                        type="text"
                    />
                    </div>

                
                    <Link href="/add-team-members">
                    <button className="mt-10 py-3 border bg-black text-white w-full text-lg mb-20">
                        Save and Next
                    </button>
                    </Link>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default CreateTeamProfile;