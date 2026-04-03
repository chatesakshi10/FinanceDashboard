import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { tokens } from "../../theme";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Updated Branding for Requirement 2 & 4 */}
      <Header 
        title="SPENDING ANALYSIS" 
        subtitle="Monthly comparison of Budgeted vs. Actual expenses" 
      />

      <Box height="70vh" mt="40px">
        <BarChart />
      </Box>

      {/* Requirement 4: Added a text-based insight below the chart */}
      <Box 
        mt="20px" 
        p="20px" 
        backgroundColor={colors.primary[400]} 
        borderRadius="8px"
      >
        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
          Quick Observation
        </Typography>
        <Typography variant="body1" sx={{ mt: "10px" }} color={colors.greenAccent[500]}>
          Your <b>Entertainment</b> spending has exceeded the set budget by 15% this month. 
          Consider reallocating funds from your <b>Travel</b> budget to balance the portfolio.
        </Typography>
      </Box>
    </Box>
  );
};

export default Bar;