import { Delete, Edit, Home } from "@mui/icons-material";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { BreadCrumbs } from "../components";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  {
    field: "",
    headerName: "Actions",
    width: 100,
    sortable: false,
    filterable: false,
    headerAlign: "center",
    renderCell: (params) => (
      <Stack sx={{ flexDirection: "row" }}>
        <Tooltip title="Edit">
          <IconButton aria-label="edit" color="primary">
            <Edit fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete" color="secondary">
            <Delete fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Stack>
    ),
  },
];
const breadCrumbs = [
  {
    label: "",
    to: "/",
    icon: <Home />,
  },
  {
    label: "Categories",
  },
];

export const CategoriesScreen = () => {
  const [Categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  });

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Stack
        sx={{
          mt: 3,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Categories
        </Typography>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Link to={"/NewCategories"}>
            <Button variant="contained">New</Button>
          </Link>
          <Button variant="contained">Filter</Button>
        </Stack>

        <Box sx={{ height: 400, width: "100%", mt: 3 }}>
          <DataGrid
            rows={Categories}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(size) => setPageSize(size.target)}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </Box>
      </Stack>
    </>
  );
};
