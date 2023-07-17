import Layout from "@/Components/ui/Layout";
import Preview from "@/Components/preview";

const preview = () => {
  return (
    <Layout hideSidePanel>
      <Preview teamName="Test" />
    </Layout>
  );
};

export default preview;
