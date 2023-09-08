import React from "react";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { Typography, ThemeProvider, createTheme, IconButton, SliderMarkLabel } from "@mui/material";
import { useState } from "react";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import LinkIcon from "@mui/icons-material/Link";
import GifBoxIcon from "@mui/icons-material/GifBox";
import HeadsetIcon from "@mui/icons-material/Headset";
import ArticleIcon from "@mui/icons-material/Article";
import PollIcon from "@mui/icons-material/Poll";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const theme = createTheme();

export const SearchBar = ({searchStateFromHeader, checkAndSetStates}) => {


  console.log("Inside Search.jsx _ prop recied from header searchState->", searchStateFromHeader);
  // let [searchState, setSearchState] = useState(false);
  // const checkAndSetStates = (searchBarState) => {
  //   searchBarState ? setSearchState(true) : setSearchState(false);
  //   // let searchState = searchBarState;
  //   console.log("searchBarState in Header.jsx ", searchState);
  // };
  const [searchBarState, setSearchBarState] = useState(false);
  console.log("Inside Search.jsx : searchBarState->", searchBarState);
  let onSearchDisplay = [
    { name: "Unread", icon: <MarkChatUnreadIcon /> },
    { name: "Photos", icon: <InsertPhotoIcon /> },
    { name: "Videos", icon: <VideocamIcon /> },
    { name: "Links", icon: <LinkIcon /> },
    { name: "Gifs", icon: <GifBoxIcon /> },
    { name: "Audio", icon: <HeadsetIcon /> },
    { name: "Documents", icon: <ArticleIcon /> },
    { name: "Poll", icon: <PollIcon /> },
  ];
  async function showSearchTab() {
    console.log("Inside Search.jsx -> showSearchTab() -> Before click", searchBarState);
    checkAndSetStates(searchBarState)
    searchBarState ? setSearchBarState(false) : setSearchBarState(true);
    
  };
  console.log("Inside Search.jsx -> showSearchTab() after click...", searchBarState);
  console.log("will be calling function below...", searchBarState);
  // searchFunc(searchBarState);

    return (
      <div>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            marginTop: 8,
            marginLeft: 9,
            width: 330,
            borderRadius: 20,
          }}
        >
          <ArrowBackIcon
            sx={{
              // color: "red",
              cursor: "pointer",
              marginRight: "2px",
              marginLeft: "15px",
              marginTop: "12px",
            }}
            onClick={showSearchTab}
          />
          <InputLabel
            htmlFor="search"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "2px",
            }}
          >
            <InputBase
              id="search"
              placeholder="Search..."
              sx={{
                flex: 1,
                border: "none",
                height: "40px",
                marginLeft: "2px",
  
                "&::placeholder": { color: "gray" },
              }}
            />
          </InputLabel>
        </div>
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 6,
              marginLeft: 18,
              maxWidth: 300,
            }}
          >
            {onSearchDisplay.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  bgcolor: "grey",
                  borderRadius: 20,
                  marginTop: 1,
                  marginRight: theme.spacing(2),
                  // padding: "3px", // Add padding for better spacing
                  minWidth: "80px", // Ensure minimum width for each item
                  display: "flex",
                  height:30,
                  // alignItems: "center",
                  // justifyContent: "space-between",
                }}
              >
                <IconButton
                sx={{fontSize:"small"}}
                >                
                  {item.icon}
                  {item.name}
                </IconButton>
              </Typography>
            ))}
          </div>
        </ThemeProvider>
      </div>
    );
  
 
};
