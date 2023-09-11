"use client";

import { useEffect, useState } from "react";

import { useReferendaContext } from "@/Context/ReferendaContext";
import axios from "axios";


import subscanApiHeaders from "@/global/subscanHeader";
import ExploreContent from "@/Components/explore/exploreContent";
import Layout from "../../Components/ui/Layout";

enum About {
  Web3Fundation,
  Kusama,
}



const Explore = () => {
  const [aboutMenu, setAboutMenu] = useState(About.Web3Fundation);

  const referendaCtx = useReferendaContext();

  const getReferendumCount = async (): Promise<number> => {
    let result;
    const raw = JSON.stringify({
      row: 1,
      page: 0,
    });
    await axios
      .post(
        "https://kusama.api.subscan.io/api/scan/referenda/referendums",
        raw,
        // @ts-ignore
        subscanApiHeaders
      )
      .then((res) => {
        result = res.data.data.count;
        return result;
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };
  
  const getAllReferenda = async (count: number) => {
    let result = [];
  
    //Subscan use pagination - 100 rows per page
    const rows = 100;
    const reminder = count % 100;
    const numberOfPages = (count - reminder) / rows;
  
    const populateReferendaContext = async () => {
      for (let i = numberOfPages + 1; i > 0; i--) {
        const raw = JSON.stringify({
          row: 100,
          page: i - 1,
        });
        await axios
          .post(
            "https://kusama.api.subscan.io/api/scan/referenda/referendums",
            raw,
            // @ts-ignore
            subscanApiHeaders
          )
          .then((res) => {
            result = [...result, ...res.data.data.list];
          });
      }
      const proposals = result.map((item) => {
        return {
          referendum_index: item?.referendum_index,
          account: {
            address: item?.account.address,
            display: item?.account.display,
            identity: item?.account.identity,
          },
          origins: item?.origins,
        };
      });
      referendaCtx.addProposals(proposals);
      // console.log(proposals)
    };
  
    populateReferendaContext();
  };

  useEffect(() => {
    console.log('use effect eplore')
    getReferendumCount().then((res) => getAllReferenda(res))
   }, [])

  return (
    <Layout title="Explore Grants">
      <div className="flex">
        <ExploreContent />
      </div>
    </Layout>
  );
};

export default Explore;
