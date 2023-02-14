import { Box, Button } from "@mui/material";
import { Layout } from "./components/Layout";
import { useToast, useDialog } from "./hooks";

function App() {
  const showToast = useToast();
  const showDialog = useDialog();

  return (
    <Layout>
      <Box sx={{ p: 5, display: "flex" }}>
        <Button
          variant="contained"
          onClick={() => {
            showToast("!ERROR! ");
          }}
        >
          Toggle toast
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            showDialog(true);
          }}
        >
          See
        </Button>
      </Box>
    </Layout>
  );
}

export default App;
