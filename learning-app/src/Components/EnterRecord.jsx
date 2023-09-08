import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Footer from "./Foooter"
import { ShowAlerts } from "./ShowAlerts";
import "../CSS/app.css";
import { useState } from "react";
import { Fields } from "./Fields";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const EnterRecord = ({menu:MiniDrawer}) => {
    const [name, setName] = useState("Enter you name");
    const [email, setEmail] = useState("example.gmail.com");
    const [data, setData] = useState([]);
  
    const clearNameField = () => {
      if (name === "Enter you name") {
        setName("");
      }
    };
  
    const clearEmailField = () => {
      if (email === "example.gmail.com") {
        setEmail("");
      }
    };
    
    const addData = () => {
      console.log(data);
      setData([...data, { name, email }]);
      if (name != "" && email != "") {
        //window.alert('added sucess')
        <ShowAlerts severity={"success"} message={"addead success fully"} />;
      }
  
      setName("");
      setEmail("");
    };
    const handleKeyPress = (event, severity) => {
      if (event.key == "Enter") {
        // Check is name or email is not entered and text field is empty.
        if (name == "" || email == "") {
          let message =
            name == "" ? `Name: ${name} is empty.` : `Email ${email} is empty.`;
          <ShowAlerts severity={severity} message={message} />;
          //showFlasher(message)
          window.alert(`${message} ${severity}`);
        } else {
          addData();
        }
      }
    };
    // const showFlasher = (message) => {
    //   window.alert("here")
    //   return (
    //     <Stack>
    //       <Alert severity="error">This is an error alert — check it out!</Alert>
    //     </Stack>
    //   );
    // }
  return (
    <div>
      <MiniDrawer/>
          <Stack direction="row" spacing={2}>
            <TextField
              value={name}
              onKeyPress={(event) => handleKeyPress(event, "error")}
              onChange={(event) => setName(event.target.value)}
              onClick={clearNameField}
              id="outlined-basic"
              label="Enter your name"
              variant="outlined"
            />
            <TextField
              value={email}
              onKeyPress={(event) => handleKeyPress(event, "error")}
              onChange={(event) => setEmail(event.target.value)}
              onClick={clearEmailField}
              id="outlined-basic"
              label="Enter your Email"
              variant="outlined"
            />
            <Button onClick={addData} variant="contained" color="success">
              <AddIcon />
            </Button>
          </Stack>
          <div className='data'>
            <div className='disply_data'>
            
            <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">REMOVE</TableCell>
            <TableCell align="right">EDIT</TableCell>
          </TableRow>
          </TableHead>
          

              {/* <h4>Name</h4>
              <h4>Email</h4>
              <h4>Remove</h4> */}
            </div>

            {data.map((element, index) => {
              return (
                <Fields
                  key={index}
                  name={element.name}
                  email={element.email}
                  index={element.index}
                  data={data}
                  setData={setData}
                />

              );
            })
            }
           
          </div> 
          <Footer />  
        </div>
        
  )
}
