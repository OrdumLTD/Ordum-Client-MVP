"use client";
import GrantPage from "@/Components/Grants/Kusama";
import ProposalPreview from "@/Components/proposalExplorer/ProposalPreview";
import Layout from "@/Components/ui/Layout";

const Treasurer = () => {
  const fetchProposals = () => {
    let myHeaders = new Headers();
    myHeaders.append("x-network", "kusama");

    let requestOptions:RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.polkassembly.io/api/v1/latest-activity/all-posts?govType=open_gov&listingLimit=1",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Layout title={"Explore | Kusama Treasury | Treasurer"} grant>
      <div className="mx-4 flex flex-col">
        <h1>Treasurer</h1>
        <div>List proposals: </div>
        <ProposalPreview />
        <button onClick={() => fetchProposals()}>Get em</button>
      </div>
    </Layout>
  );
};

export default Treasurer;
