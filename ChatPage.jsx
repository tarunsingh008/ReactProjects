import { Avatar, IconButton, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallIcon from "@mui/icons-material/Call";
import Draggable from "react-draggable";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VideocamIcon from "@mui/icons-material/Videocam";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";


export const ChatPage = ({ fun }) => {

    const [data, setData] = useState([]);

    const [message, setMessage] = useState("");

    const addData = () => {
      console.log("inside add data---",data);
      setData([...data, { message, userSate }]);
      setMessage("")
            
    };
    const handleKeyPress = (event) => {  
        if (event.key == "Enter") { 
        console.log("Inside key press ->",event)
            addData();
        }
        };
      

  let [chatPageSate, setChatPageSate] = useState(true);
  async function handleSendChatPageSate() {
    setChatPageSate(false);
  }
  

  let [userSate, setUserState] = useState("User_1");

  async function switchUser(){
    userSate === "User_1"?setUserState("User_2"):setUserState("User_1")

  }
  useEffect(() => {
    // Call the fun function when the component mounts or when chatPageSate changes
    console.log("inside use Effcet sending state from chat page--", chatPageSate);
    if (typeof fun === "function") {
      fun(chatPageSate);
    }
  }, [chatPageSate, fun]);
  console.log("Current user", userSate);

  return (
    <div>
      {/* <img src={process.env.PUBLIC_URL + "/WhatsAppDefaultBgImage.png"} />  
            this is how we should render images in public folder*/}

      <Paper
        sx={{
          height: 420,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: `url(${process.env.PUBLIC_URL}/WhatsAppDefaultBgImage.png)`, // Set the background image
          backgroundSize: "cover", // Ensure the background image covers the entire Paper
        }}
      >
        <Typography
          sx={{
            width: 355,
            bgcolor: "grey",
            display: "flex",
          }}
        >
          <ArrowBackIcon
            sx={{
              cursor: "pointer",
              marginRight: "2px",
              marginLeft: "1px",
              marginTop: "12px",
            }}
            onClick={handleSendChatPageSate}
          />
          <Avatar
            sx={{
              padding: 0.2,
              marginTop: 0.3,
              marginBottom: 0.3,
              height: 38,
            }}
          >
            I
          </Avatar>
          <div style={{ display: "flex", marginLeft: 6, marginTop: 10 }}>
            Name
          </div>
          <Tooltip title="Switch user">
                <Switch 
                onClick={switchUser}
                />
            </Tooltip>
          <IconButton sx={{ marginLeft: 7 }}>
            <VideocamIcon />
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
            flex: 1, // This makes the content area take up all available vertical space
            overflowY: "auto", // Allow the content to scroll if it overflows
            padding: "5px", // Add some padding to the content area
        //    maxHeight: "50%", // Limit the height to half of the Paper's height
          }}
        >
          {/* Your chat content goes here */}
          

{

userSate==="User_1"?(

          <Typography
            sx={{
              textAlign: "left",
              bgcolor: "black",
              borderRadius: "20px",
              color: "white",
              maxWidth: "50%", // Limit the width to half of the Paper's width
              wordWrap: "break-word", // Allow text to break onto the next line
              padding: "3px", // Add padding to the text
            }}
          >
            Hi, how are you? This is a long message that will break onto the
            next line automatically when it reaches the maximum width.
          </Typography>
):
(

    
    <Typography
            sx={{
                justifyContent: "flex-end",
              textAlign: "left",
              bgcolor: "white",
              borderRadius: "20px",
              color: "black",
              maxWidth: "50%", // Limit the width to half of the Paper's width
              wordWrap: "break-word", // Allow text to break onto the next line
              padding: "3px", // Add padding to the text
            }}
          >
            Hi, im goood wbu?
          </Typography>
)    
}
        </div>
        
        <div
          style={{
            backgroundColor: "grey",
            display: "flex",
            width: 290,
            borderRadius: 20,
            marginBottom: -40,
            marginLeft: 12,
          }}
        >
          <InputLabel
            htmlFor="search"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "2px",
            }}
          >
            <TagFacesIcon
              sx={{
                marginLeft: "1px",
              }}
            />
            <InputBase
              id="search"
              value={message}
              onKeyPress={(event) => handleKeyPress(event)}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              sx={{
                flex: 1,
                border: "none",
                height: "40px",
                marginLeft: "2px",
                "&::placeholder": { color: "grey" },
              }}
            />
            <AttachmentIcon sx={{ transform: "rotate(45deg)" }} />
            <CurrencyRupeeIcon />
            <CameraAltRoundedIcon />
          </InputLabel>
        </div>
        <div>
          <Avatar
            sx={{
              bgcolor: "#128C7E",
              // marginRight:-8
              marginLeft: 38,
              marginBottom: 2,
            }}
          >
            <KeyboardVoiceIcon />
          </Avatar>
        </div>
      </Paper>
    </div>
  );
};
