import TeamDashboard from "@/Components/dashboards/TeamsDashboard";
import Layout from "@/Components/ui/Layout";

const ManageTeams = () => {
  return (
    <Layout title="Welcome back Team">
      <TeamDashboard activeGrants={3} pendingGrants={1} className="ml-20" />
    </Layout>
  );
};

export default ManageTeams;
