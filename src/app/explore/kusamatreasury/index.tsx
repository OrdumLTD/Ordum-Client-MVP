import Layout from "@/components/layout";
import ChainSidePanel from "@/components/chain/sidePanel";

const Explore = () => {
  return (
    <Layout>
      <div className="flex h-screen w-screen">
        <ChainSidePanel className="bg-gray-300 w-64" />
      </div>
    </Layout>
  );
};

export default Explore;
