import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header 
        title="PORTFOLIO GROWTH" 
        subtitle="Visualizing net worth trends over the last 12 months" 
      />
      <Box height="75vh">
        {/* We use the same component but the underlying data in mockData.js should be updated to Monthly labels */}
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;