import { Home } from "@mui/icons-material";
import { Button, TextField, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { BreadCrumbs } from "../components";
import { useState } from "react";
import axios from "axios";

const breadCrumbs = [
  {
    label: "",
    to: "/",
    icon: <Home />,
  },
  {
    to: "/Categories",
    label: "Categories",
  },
  {
    to: "/NewCategories",
    label: "NewCategories",
  },
];

const inputValue = [{ label: "First Name" }, { label: "Last Name" }];
export const CategoriesAddScreen = () => {
  const [Categories, setCategories] = useState([]);

  const Submit = () => {
    axios.post("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  };

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
          NewCategories
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,

              width: "99%",
              maxWidth: "100%",
            },
          }}
          noValidate
          autoComplete="off"
        >
          {inputValue.map((item, index) => {
            return (
              <TextField
                key={index}
                id="outlined-basic"
                label={item.label}
                variant="outlined"
              />
            );
          })}
          <Stack sx={{ flexDirection: "row", gap: 2 }}>
            <Button
              variant="contained"
              onClick={(e) => {
                Submit(e.target.value);
              }}
            >
              Save
            </Button>
            <Button variant="contained">Cancel</Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
