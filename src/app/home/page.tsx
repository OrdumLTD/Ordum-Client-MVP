"use client";

import Layout from "@/Components/ui/Layout/";
import Activity from "@/Components/profileAbout/activity/activity";
import Summary from "@/Components/profileAbout/summary";
import Team from "@/Components/profileAbout/team/team";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

enum About {
  Summary,
  Activity,
  Team,
}


const TeamMembersProfile = () => {
  const [aboutMenu, setAboutMenu] = useState(About.Summary);

  return (
    <Layout>
      {" "}
      <div className="font-space-grotesk flex flex-col ">
        {/* Banner */}
        <div className="h-40 md:h-60 bg-emerald-500"></div>
        {/* Company info and social */}
        <nav className="flex navbar relative mb-8 md:mb-16">
          <div className="ml-2 md:ml-16 w-full flex ">
            <div
              className="
       -mt-5 h-14 w-14
       md:-mt-8 md:h-24 md:w-24
       border-2
       bg-black rounded-full text-white"
            ></div>
            <div className="ml-1 md:ml-5 md:mt-2 flex flex-col">
              <span className="md:text-xl">ORG Name</span>
              <span className="text-xs md:text-sm">Project type</span>
            </div>
            <div className="absolute mt-2 right-16 md:mt-4 md:right-32 flex flex-row items-center">
              <span>...</span>
              <span className="mr-1">
                <BookmarkIcon />
              </span>
              <button
                className="
          rounded
          px-2 md:px-16 md:py-0.5 md:py-1
          bg-black text-white
          text-sm md:text-base"
              >
                Follow
              </button>
            </div>
          </div>
        </nav>
        <div className="flex flex-col ">
          {/* Header */}
          <div className="mx-10 md:ml-16 md:mr-32 md:text-xl flex navbar md:border-b border-black mb-8 flex gap-8">
            <button
              className={aboutMenu === About.Summary ? "font-bold" : ""}
              onClick={() => setAboutMenu(About.Summary)}
            >
              Summary
            </button>
            <button
              className={aboutMenu === About.Activity ? "font-bold" : ""}
              onClick={() => setAboutMenu(About.Activity)}
            >
              Activity
            </button>
            <button
              className={aboutMenu === About.Team ? "font-bold" : ""}
              onClick={() => setAboutMenu(About.Team)}
            >
              Team
            </button>
          </div>
          {aboutMenu === About.Summary ? <Summary /> : null}
          {aboutMenu === About.Activity ? <Activity /> : null}
          {aboutMenu === About.Team ? <Team /> : null}
        </div>
      </div>{" "}
    </Layout>
  );
};

export default TeamMembersProfile;
