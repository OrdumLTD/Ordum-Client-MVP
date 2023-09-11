const ViewProposal = () => {
  return (
    // Context
    <div className="mt-8 flex flex-col gap-4 ">
      <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
        <h3 className="font-semibold text-xl">Context</h3>
        <p className="font-semibold text-xl">
          a. Any points discussed in advance in any channel related to the
          proposal and background research for your project.
        </p>
      </div>

      <span className="my-8">
        There is no existing software besides Gitcoin to publish, apply for and
        manage grants. Gitcoin focuses on a quadratic funding model, while there
        is a need for an overall indexer and management software for grants in
        web3. After reading the Builders Program post on the Polkadot Forum and
        speaking with other members of the community (including councilors, Web3
        Foundation, and members of Shokunin Network), it was evident that a
        grants aggregator is imperative for bringing projects into the ecosystem
        as well as scaling it. In order to construct a rich and independent
        environment of public goods and DAOs, it is fundamental for teams to
        easily find and acquaint themselves with treasuries and foundations.
      </span>

      {/* WhyKSM */}

      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            b. Any known backups already behind the solution?
          </h3>
        </div>

        <span className="my-8">
          Ordum has received 2 grants from Shokunin Network(worth 4000 GBP each)
          for research and development in May and July. The Network will still
          remain our advisor.
        </span>
      </div>

      {/* Problem */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">Problem Statement</h3>
        </div>

        <span className="my-8">
          Treasuries/foundations(eg. Polkadot Treasury) are burning funds as
          there are not enough projects to support.
        </span>
      </div>

      {/* Solution */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">Solution</h3>
        </div>

        <span className="my-8">
          Success for Ordum is the deliverance of all milestones and a V1 POC of
          a public goods grant aggregator. A dapp which contains all grants from
          the ecosystems. Index data from treasuries in the ecosystem by
          building custom APIs(Subsquids) for tracking proposals Integrate
          Github in the front end for tracking and submitting non-treasury
          grants Building and maintaining light clients for quick data
          retrivals, security and low loading times Enable log in with multiple
          DID services, Github and Wallets Minting of non-transferable NFTs as
          “certificates” for completed milestones. Each token would contain
          information on what was executed and how it was evaluated. Ordum will
          be built on Phala to leverege the chains privacy capabilities and Phat
          smart contracts Create a connection between DID (foundation)–&gt;
          Phala Smart Contract–&gt; Non-transferable NFT–&gt;DID (recipient)
          Design a custom type of RMRK non-transferable NFT, stored on Crust,
          containing reports from the foundations on milestone delivery Delivery
          of milestones, grant applications and funding are displayed on a
          team’s profile for transparency. Front end displaying funding amounts
          and certificates within a roadmap Issuing surveys and analyzing /
          feedback data for the purpose of aggregating and managing treasury
          grants in the most optimal way. Design the optimal UX through
          collaboration with other teams in the ecosystem(interviews, surveys)
          Bellow is a biased information architecture (WIP). The main UI parts
          would be: Dashboard (tracking of active grants, applications,
          discussions and delivery requirements/ milestones / timelines and
          feedback for each grant issuer and recipient)
        </span>
      </div>

      {/* How does */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            a. How does this proposal change the current logic in Kusama?
          </h3>
        </div>

        <span className="my-8">
          This proposal will help enhance operations of organizations within the
          network
        </span>
      </div>

      {/* Who does the solution help? */}
      <div className="mt-8 flex flex-col gap-4 ">
        <div className="w-max flex flex-col items-start border-b border-b-white border-spacing-4">
          <h3 className="font-semibold text-xl">
            a. How does this proposal change the current logic in Kusama?
          </h3>
        </div>

        <span className="my-8">
          Grant issuers / foundations Increase the influx of relevant candidates
          / minimize treasury burn → ecosystem growth Track records and data on
          teams will aid decision making Applicants Connecting talent with
          access to independent funding Increased level of experimentation,
          innovation and entrepreneurship Community members / token holders
          Transparency of delivery and funding for each team will help community
          members decide which projects to support and get involved in
        </span>
      </div>
    </div>
  );
};

export default ViewProposal;
