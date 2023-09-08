import React from "react";
import { Typography} from "@mui/material";
import { NewHeaDERbAR } from "./NewHeaDERbAR";
import { TopIcons } from "./TopIcons";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
export const Header = () => {
  console.log("INSIDE Header.jsx")
  const headerStyle = {
    marginTop: 0,
    height: 85,
    marginBottom: 2,
    bgcolor: "#128C7E",
    display: "flex",
    flexWrap: "wrap", // Allow items to wrap to the next row
    alignItems: "center", // Center items vertically
    gap: "8px", // Add some spacing between items
    // position: "fixed",
    // zIndex:2
  };
  let [searchState, setSearchState] = useState(false);
  async function checkAndSetStates(searchBarState){
    console.log("searchBarState received from TopIcons.jsx inside Header.jsx ", searchBarState);
    searchBarState ? setSearchState(true) : setSearchState(false);
  };
  

  console.log("based on recived prop now state of serch bar in Header.jsx is ", searchState);
  if (searchState) {
    return (
      <Typography
        sx={{
          marginTop: 0,
          height: 190,
          bgcolor: "#128C7E",
          display: "flex",
          flexWrap: "wrap", // Allow items to wrap to the next row
          alignItems: "center", // Center items vertically
          gap: "8px",
        }}
      >
        <SearchBar searchStateFromHeader={searchState} checkAndSetStates={checkAndSetStates}/>
      </Typography>
    );
  } else {
    return (
      <div>
        <Typography
          sx={{
            marginTop: 0,
            height: 85,
            bgcolor: "#128C7E",
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap to the next row
            alignItems: "center", // Center items vertically
            gap: "8px",
          }}
        >
          <TopIcons func={checkAndSetStates} />

          <NewHeaDERbAR />
        </Typography>
      </div>
    );
    
  }
};
