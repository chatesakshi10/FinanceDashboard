import { Box, Typography, useTheme } from "@mui/material"; // Added Typography here
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData"; // Swapped to mockTransactions for consistency
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "user", // Matches mockTransactions key
      headerName: "Merchant/Recipient",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "txId", // Matches mockTransactions key
      headerName: "Transaction ID",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Amount",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
          ₹{params.row.cost}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      {/* Updated Branding for Zorvyn Requirement 2 */}
      <Header
        title="TRANSACTION HISTORY"
        subtitle="Detailed log of all financial activities"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          /* Using mockTransactions here ensures the Dashboard and Table show the same data */
          rows={mockTransactions}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.txId} // Essential for MUI DataGrid to track items
        />
      </Box>
    </Box>
  );
};

export default Contacts;