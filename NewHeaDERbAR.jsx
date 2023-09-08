import React from "react";
import { IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import Typography from "@mui/material/Typography";

export const NewHeaDERbAR = () => {
  // const newHeaderStyle= { display: "flex",
  // justifyContent: "space-between",
  // maxWidth: 350,
  // marginTop: 0,
  // marginLeft: -9,}

  return (
    
    <div
      // style={newHeaderStyle}
      style={{
      // display: "flex",
      // justifyContent: "space-between",
      // maxWidth: 350,
      marginLeft: 5,
      // zIndex:1,
    }}
    >
      <IconButton>
        <PeopleIcon />
      </IconButton>
      <IconButton>Chats</IconButton>
      <IconButton>Status</IconButton>
      <IconButton>Calls</IconButton>
    
    </div>
    
  );
};
