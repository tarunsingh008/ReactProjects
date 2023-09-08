import React from "react";
import { Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useState} from "react";
import { ThreeDotDisplay } from "./ThreeDotDisplay";


export const TopIcons = ({ func }) => {
  // const topIocnStyle = {textAlign: "left",
  // marginLeft: 2.5,
  // marginTop: 0,
  // color: "white",
  // zIndex: 1,}
  console.log("Inside TopIcons.jsx");
  const [threeDotState, setthreeDotState] = useState(false);

  const [searchBarState, setSearchBarState] = useState(false);

  async function showData() {
    console.log("Inside TopIcons onclick on three dots", threeDotState);
    threeDotState ? setthreeDotState(false) : setthreeDotState(true);
    
    console.log("state after click of three dots ", threeDotState);
  }

  async function showSearchTab() {
    console.log("inside TopIcon.jsx search bar...", searchBarState);
    searchBarState ? setSearchBarState(false) : setSearchBarState(true);
    console.log("inside search bar after click...", searchBarState);
  }

  console.log("Inside TopIcons.jsx -> searchBarState, threeDotState", searchBarState, threeDotState);
  if (searchBarState && threeDotState) {
    // Both can't be viewed at a time check in mobile whats app
    setSearchBarState(false);
    setthreeDotState(false);
  }

  console.log("Inside TopIcons.jsx passing this to parent Header.jsx props", searchBarState);
  func(searchBarState);
  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
    <Typography
      sx={{
        textAlign: "left",
        marginLeft: 2.5,
        marginTop: 0,
        // position: "relative", // Add position relative
        // zIndex:2,
      }}
    >
      WhatsApp
      <CameraAltIcon sx={{ marginLeft: 17, marginTop: 1 }}> </CameraAltIcon>
      <SearchIcon
        sx={{ marginLeft: 2, marginTop: 1 }}
        onClick={showSearchTab}
      ></SearchIcon>
      <MoreVertIcon
        sx={{ marginLeft: 2, marginTop: 1 }}
        onClick={showData}
      ></MoreVertIcon>
      {threeDotState ? (
        <ThreeDotDisplay />
      ) : (
        console.log("Inside TopIcons.jsx, in else on three dot  ", threeDotState)
      )}
    </Typography>
    </div>
  );
};
