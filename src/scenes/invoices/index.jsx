import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "accountName", headerName: "Account Name", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
          ₹{params.row.balance.toLocaleString("en-IN")}
        </Typography>
      ),
    },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  // Manual rows for the Overview page to show your total wealth
  const rows = [
    { id: 1, accountName: "Primary Savings", type: "Savings", balance: 282450, status: "Active" },
    { id: 2, accountName: "Investment Portfolio", type: "Equity", balance: 125000, status: "Active" },
    { id: 3, accountName: "Fixed Deposit", type: "Fixed Income", balance: 75000, status: "Active" },
  ];

  return (
    <Box m="20px">
      <Header title="ACCOUNT OVERVIEW" subtitle="Managing your linked financial assets" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700] },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": { backgroundColor: colors.blueAccent[700] },
        }}
      >
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;