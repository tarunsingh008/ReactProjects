import React, { useState } from 'react';
import ScrollArea from 'react-scrollbar'; // Import the ScrollArea component
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import "./WhatsAppCoustemSlideBar.css";
import zIndex from '@mui/material/styles/zIndex';
import { ChatPage } from './ChatPage';

const CoustemSideBar = ({ detailsToDislay }) => {
  let [chatPageSate, setChatPageSate] = useState(false);
   async function displayChatPage(chatPageSate=true) {  
    setChatPageSate(chatPageSate);
  }
  console.log("before if --", chatPageSate)
  if (!chatPageSate){
  return (   
    // <ScrollArea
    //   speed={0.8}
    //   className="scrollbar"
    //   contentClassName="content"
    //   horizontal={false}
    // >
      // <div className="scroll-content">
        <div>
        {detailsToDislay.map((item, index) => (
          <TextField 
            key={index}
            id={`outlined-basic-${index}`}
            label={item.firstName}
            variant="outlined"
            InputProps={{
              
              startAdornment: (
                <Avatar
                  alt="User Avatar"
                  src="https://www.flaticon.com/free-icons/user"
                  sx={{
                    width: 40,
                    height: 40,
                    marginRight: "8px",
                  }}
                />
              ),
            }}
            sx={{
              marginBottom: .5,
              marginTop:2,
              width: "100%",
              borderRadius: "40px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "40px",
              },
            }}
            onClick={displayChatPage}
          />
        ))}
      </div>
    // </ScrollArea>
        

    
  );
          }
          else{
            return(
            <ChatPage fun={displayChatPage}/>            
            );
            
          }
}

export default CoustemSideBar;
