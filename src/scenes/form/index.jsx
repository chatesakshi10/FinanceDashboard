import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log("New Transaction Data:", values);
  };

  return (
    <Box m="20px">
      <Header title="ADD TRANSACTION" subtitle="Record a new financial activity" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={transactionSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Merchant / Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Amount (₹)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="Food">Food & Dining</MenuItem>
                <MenuItem value="Shopping">Shopping</MenuItem>
                <MenuItem value="Tech">Technology</MenuItem>
                <MenuItem value="Rent">Rent & Utilities</MenuItem>
                <MenuItem value="Investment">Investment</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Transaction Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                InputLabelProps={{ shrink: true }}
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Transaction
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const transactionSchema = yup.object().shape({
  description: yup.string().required("Description is required"),
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  category: yup.string().required("Please select a category"),
  date: yup.date().required("Date is required"),
});

const initialValues = {
  description: "",
  amount: "",
  category: "Food",
  date: new Date().toISOString().split("T")[0], // Defaults to today
};

export default Form;