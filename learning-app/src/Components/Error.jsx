import React from "react";

import Stack from "@mui/material/Stack";

import Alert from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

export const Error = () => {
  const navigate = useNavigate();
  return (
    //   <Box
    //     sx={{
    //       bgcolor: "grey",
    //       p: 8,
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "center"
    //     }}
    //   >
    <div>
      <Stack
        sx={{
          bgcolor: "black",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Alert severity="warning">404! Page not found</Alert>
      </Stack>
      
        <Button onClick={() => navigate("/")}>
         
          <HomeIcon /> Back To basic
         
        </Button>
      
    </div>

    //   </Box>
  );
};
