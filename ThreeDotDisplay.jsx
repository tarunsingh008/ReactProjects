import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

export const ThreeDotDisplay = () => {
  let threeDotDisplay = [
    "New group",
    "New broadcast",
    "Linked devices",
    "Starred messages",
    "Payment",
    "Settings",
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        zIndex: 3,
      }}
    >
    <card
      sx={{
        // position: "absolute", // Use position absolute to overlay without affecting layout
        // top: "100%", // Position it below the parent
        // left: 0,
        // zIndex:3,


        borderRadius: 10,
        maxWidth: 50,
        height: 50,
        marginTop: 10,
      }}
    >
      <Paper
        sx={{
          height: "30px",
          width: "180px",
          marginLeft: 22,
          borderRadius: "10px",
          bgcolor: "grey",    
        }}
      >
        <MenuList
          sx={{            
            bgcolor: "grey",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            zIndex: 1,
          }}
        >
          {threeDotDisplay.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </MenuList>
      </Paper>
    </card>
    </div>
  );
};
