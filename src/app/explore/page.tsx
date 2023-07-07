'use client'

import ExploreSideFilters from "@/Components/explore/exploreSideFilters";
import ExploreContent from "@/Components/explore/exploreContent";
import Layout from "@/Components/ui/Layout"
import { useState } from "react";

enum About {
  Web3Fundation,
  Kusama,
}

const Explore = () => {
  const [aboutMenu, setAboutMenu] = useState(About.Web3Fundation);

  return (
    <Layout hideSidePanel>
      <div className="flex h-screen w-screen">
        <ExploreSideFilters className=" w-64" />
        <ExploreContent className=""/>
      </div>
    </Layout>
  );
};

export default Explore;
