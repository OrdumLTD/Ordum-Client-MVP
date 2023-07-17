'use client'

import ExploreSideFilters from "@/Components/explore/exploreSideFilters";
import ExploreContent from "@/Components/explore/ExploreContent";
import Layout from "@/Components/ui/Layout"
import { useState } from "react";

enum About {
  Web3Fundation,
  Kusama,
}

const Explore = () => {
  const [aboutMenu, setAboutMenu] = useState(About.Web3Fundation);

  return (
    <Layout title="Explore Grants">
      <div className="flex">
        <ExploreContent />
      </div>
    </Layout>
  );
};

export default Explore;
