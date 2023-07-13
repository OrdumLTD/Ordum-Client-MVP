import Dashboard from "@/Components/dashboards/IndividualDashboard";
import Layout from "@/Components/ui/Layout";

const ManageTeams = () => {
  return (
    <Layout title="Welcome back Human">
      <Dashboard activeGrants={3} pendingGrants={1} className="ml-20" />
    </Layout>
  );
};

export default ManageTeams;
