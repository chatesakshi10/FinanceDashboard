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
    { field: "type", headerName: "Account Type", flex: 1 },
    { 
      field: "balance", 
      headerName: "Balance", 
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ₹{params.row.balance.toLocaleString("en-IN")}
        </Typography>
      )
    },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  const rows = [
    { id: 1, accountName: "HDFC Savings", type: "Savings", balance: 250000, status: "Active" },
    { id: 2, accountName: "Zerodha Demat", type: "Investment", balance: 125000, status: "Active" },
    { id: 3, accountName: "ICICI Credit Card", type: "Liability", balance: -45200, status: "Active" },
  ];

  return (
    <Box m="20px">
      <Header title="ACCOUNT OVERVIEW" subtitle="Manage your linked financial accounts" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;