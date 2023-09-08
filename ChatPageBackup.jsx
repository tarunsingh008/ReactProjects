import { Avatar, IconButton, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallIcon from "@mui/icons-material/Call";
import Draggable from "react-draggable";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VideocamIcon from '@mui/icons-material/Videocam';
import TagFacesIcon from '@mui/icons-material/TagFaces';


export const ChatPage = ({fun}) => {
    let [chatPageSate, setChatPageSate] = useState(true);
    async function handleSendChatPageSate(){
        setChatPageSate(false)
        
    };
    console.log("sending state from chat page--",chatPageSate )


      useEffect(() => {
        // Call the fun function when the component mounts or when chatPageSate changes
        if (typeof fun === 'function') {
                fun(chatPageSate);
        }
      }, [chatPageSate, fun]);


  return (
    <div>
      {/* <Draggable> */}

        <Paper sx={{ 
            height: 350, 
            // bgcolor: "white",
            // backgroundImage: `url('C:\Users\tkumar\OneDrive - RadiSys Corporation\Desktop\learn\learning-app\public\WhatsAppDefaultBgImage.png')`, // Replace with the actual image path
            }}>

          <Typography
            sx={{
              width: 355,
              bgcolor: "grey",
              display: "flex",
              marginRight: "spac",
            }}
          >
            <ArrowBackIcon
              sx={{
                // color: "red",
                cursor: "pointer",
                marginRight: "2px",
                marginLeft: "1px",
                marginTop: "12px",
              }}
              onClick={handleSendChatPageSate}
            />
            <Avatar
            sx={{padding:.2,
                marginTop:.3,
                marginBottom:.3,
                height:38}}
            >I
            </Avatar>
            <div style={{ display: "flex", marginLeft: 6, marginTop: 10 }}>
              Name
            </div>

            <IconButton sx={{ marginLeft: 15 }}>
              <VideocamIcon/>
            </IconButton>
            <IconButton>
              <CallIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Typography>
          <div
            style={{
              backgroundColor: "grey",
              display: "flex",
              marginTop: 415,
              // marginLeft: 9,
              width: 315,
              borderRadius: 20,
            }}
          >
            <TagFacesIcon
             sx={{
                // color: "red",
                // cursor: "pointer",
                marginRight: "2px",
                marginLeft: "10px",
                marginTop: "9px",
              }}
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
                placeholder="Message"
                sx={{
                  flex: 1,
                  border: "none",
                  height: "40px",
                  marginLeft: "2px",

                  "&::placeholder": { color: "grey" },
                }}
              />
            </InputLabel>
            <div
              style={{
                // marginRight: "2",
                // justifyContent: "space-between",
                // marginLeft: "0px",
                marginTop: "12px",
              }}
            >
              <AttachmentIcon 
              sx={{transform: 'rotate(45deg)'}}/>
              <CurrencyRupeeIcon />
              <CameraAltRoundedIcon />
            </div>
       
          </div>
          <Avatar sx={{ 
            bgcolor: "#128C7E",
            marginTop:-5,
            marginLeft:40,
            }}>
            <KeyboardVoiceIcon />
          </Avatar>
          
        </Paper>
      {/* </Draggable> */}
    </div>
  );
};
