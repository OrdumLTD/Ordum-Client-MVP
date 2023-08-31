"use client";
import GrantPage from "@/Components/Grants/Kusama";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";
import Layout from "@/Components/ui/Layout";

import { usePolkassemblyContext } from "@/Context/PolkassembyContext";

const Treasurer = () => {
  const polkassemblyCtx = usePolkassemblyContext();

  const getSpneder = (posts: any = [], searchTerm: string) => {
    const result = posts.filter((post) => post?.origin === searchTerm);
    return result;
  };

  const getProposals = (posts: any = []) => {
    const result = posts.filter(
      (post) =>
        post?.origin === "SmallSpender" ||
        post?.origin === "MediumSpender" ||
        post?.origin === "searchTerm"
    );
    return result;
  };

  const fetchProposals = () => {
    let myHeaders = new Headers();
    myHeaders.append("x-network", "kusama");

    let requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      // "https://api.polkassembly.io/api/v1/latest-activity/all-posts?govType=open_gov&listingLimit=100",
      "https://api.polkassembly.io/api/v1/latest-activity/all-posts?govType=open_gov&listingLimit=100",
      requestOptions
    )
      .then((response) => response.text())
      .then(async (result) => {
        console.log(JSON.parse(result).posts);
        polkassemblyCtx.addProposals(getProposals(JSON.parse(result).posts));
      })
      .catch((error) => console.log("error", error));
  };

  const fetAndShow = () => {
    let myHeaders = new Headers();
    myHeaders.append("x-network", "kusama");

    let requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let res;

    fetch(
      // "https://api.polkassembly.io/api/v1/latest-activity/all-posts?govType=open_gov&listingLimit=100",
      "https://api.polkassembly.io/api/v1/latest-activity/all-posts?govType=open_gov&listingLimit=840",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => (res = JSON.parse(result)))
      .then(() => {
        // console.log(res.posts)

        // const mediumSpender = res.posts.filter((post) => post.origin === "MediumSpender")
        //  const mediumSpender = getSpneder(res.posts, "MediumSpender")
        //   console.log(mediumSpender)
        console.log("small");
        console.log(getSpneder(res.posts, "SmallSpender"));
        console.log("medium");
        console.log(getSpneder(res.posts, "MediumSpender"));
        console.log("big");
        console.log(getSpneder(res.posts, "BigSpender"));
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Layout title={"Explore | Kusama Treasury | Treasurer"} grant>
      <div className="mx-4 flex flex-col">
        <h1>Treasurer</h1>
        <div>List proposals: </div>
        <ul>
          {polkassemblyCtx.propsals?.map((proposal, index) => {
            return (
              <li key={index} className="my-2">
                <ProposalPreview title={proposal.title}/>
              </li>
            );
          })}
        </ul>
        <button onClick={() => fetchProposals()}>Get and store</button>
        <button onClick={() => fetAndShow()}>Get em</button>
        <p>NUmber of proposals: {polkassemblyCtx.propsals?.length}</p>
      </div>
    </Layout>
  );
};

export default Treasurer;
