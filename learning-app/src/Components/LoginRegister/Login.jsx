import React, { useState, useEffect } from "react";
import "../../CSS/app.css";
import {  
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Draggable from "react-draggable";

export const Login = () => {
  const [defaultUserInputText, setDefaultUserInputText] =useState("Enter user name");
  const [defaultUserPasswordText, setDefaultUserPasswordText] = useState("Enter user password");
  const [clearData, setClearData] = useState("");
  const [changeInputType, setInputType] = useState("password");

  function handleOnClick() {
    console.log("Inside onclick ", defaultUserInputText);
    if (defaultUserInputText === "Enter user name") {
      setDefaultUserInputText("");
    } else if (defaultUserPasswordText === "Enter user password") {
      setDefaultUserPasswordText("");
    }
  }
  function handlePasswordContainer() {
    setInputType("text");
    setTimeout(() => {
      setInputType("password");
    }, 3000);
  }

  function hasSpecialCharacters(inputString) {
    // Regular expression to match special characters
    const specialCharPattern = /[^a-zA-Z0-9]/;
    let val = specialCharPattern.test(inputString);
    console.log("Has specila char", val);

    return specialCharPattern.test(inputString);
  }
  function hasLoweCase(inputString) {
    // Regular expression to match special characters
    const specialCharPattern = /[a-z]/;
    let val = specialCharPattern.test(inputString);
    console.log("Has lower", val);

    return specialCharPattern.test(inputString);
  }
  function hasUpperCase(inputString) {
    // Regular expression to match special characters

    const specialCharPattern = /[A-Z]/;
    let val = specialCharPattern.test(inputString);
    console.log("Has upeer", val);

    return specialCharPattern.test(inputString);
  }
  function isAlphanumeric(inputString) {
    // Regular expression to match alphanumeric characters

    const alphanumericPattern = /[0-9]/;
    let val = alphanumericPattern.test(inputString);
    console.log("is alpha ", val);
    return alphanumericPattern.test(inputString);
  }

  function checkStrengthOfPassword() {
    console.log("Inside strength buttonn----------");
    if (defaultUserInputText == "" || defaultUserPasswordText == "") {
      let message =
        defaultUserInputText == ""
          ? `Name: ${defaultUserInputText} is empty.`
          : `Password can't be empty ${defaultUserPasswordText}`;
      // <ShowAlerts severity={severity} message={message} />;
      //showFlasher(message)
      window.alert(`${message}`);
    } else {
      if (
        defaultUserPasswordText.length > 5 &&
        isAlphanumeric(defaultUserPasswordText) &&
        hasSpecialCharacters(defaultUserPasswordText) &&
        hasUpperCase(defaultUserPasswordText) &&
        hasLoweCase(defaultUserPasswordText)
      ) {
        console.log("GOOD PASSWORD");
      } else {
        console.log("BAD PASSWORD", defaultUserPasswordText.length);
        window.alert("Follow password rules as mentioned");
      }
    }
  }

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      // Check is name or email is not entered and text field is empty.
      if (defaultUserInputText == "" || defaultUserPasswordText == "") {
        let message =
          defaultUserInputText == ""
            ? `Name: ${defaultUserInputText} is empty.`
            : `Password can't be empty ${defaultUserPasswordText}`;
        // <ShowAlerts severity={severity} message={message} />;
        //showFlasher(message)
        window.alert(`${message}`);
      } else {
        console.log("inside key pres handler ", defaultUserPasswordText);
        if (
          defaultUserPasswordText.length > 5 &&
          isAlphanumeric(defaultUserPasswordText) &&
          hasSpecialCharacters(defaultUserPasswordText) &&
          hasUpperCase(defaultUserPasswordText) &&
          hasLoweCase(defaultUserPasswordText)
        ) {
          console.log("GOOD PASSWORD");
        } else {
          console.log("BAD PASSWORD", defaultUserPasswordText.length);
          window.alert("Follow password rules as mentioned");
        }
      }
    }
  };

  const [state, setSate] = useState(1);

  return (
    <div>
 <Draggable>
        <Card sx={{ maxWidth: 400, height: 420, bgcolor: "grey" }}>
          <Typography sx={{ marginTop: 5, marginBottom: 5 }}>
            Login Page
          </Typography>
          <TextField
            value={defaultUserInputText}
            // onKeyPress={(event) => handleKeyPress(event, "error")}
            // onChange={(event) => setName(event.target.value)}
            onChange={(event) => setDefaultUserInputText(event.target.value)}
            onClick={handleOnClick}
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            sx={{
              // Replace with your desired background color
              borderRadius: "40px", // You can add other custom styles here
              "& .MuiOutlinedInput-root": {
                borderRadius: "40px", // Add border radius to the input element
              },
            }}
          />
          <TextField
            value={defaultUserPasswordText}
            // onKeyPress={(event) => handleKeyPress(event, "error")}
            // onChange={(event) => setEmail(event.target.value)}
            onClick={handleOnClick}
            onChange={(event) => setDefaultUserPasswordText(event.target.value)}
            onKeyPress={(event) => handleKeyPress(event)}
            id="outlined-basic"
            label="Enter your Email"
            variant="outlined"
            type={changeInputType}
            sx={{
              // Replace with your desired background color
              marginTop: 3,
              borderRadius: "40px", // You can add other custom styles here
              "& .MuiOutlinedInput-root": {
                borderRadius: "40px", // Add border radius to the input element
              },
            }}
          />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div"> */}
            <CardActions>
              <Button size="small" onClick={handlePasswordContainer}>
                {" "}
                Show{" "}
              </Button>
              <Button size="small" onClick={checkStrengthOfPassword}>
                Check Strenth{" "}
              </Button>
              <Button size="small">Login</Button>
            </CardActions>
            {/* </Typography> */}
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: -250 }}
              >
                <b>Password Rules</b>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: "-50px" }}
              >
                - Should contain upper and lower case both
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: "2px" }}
              >
                - Should contain at least one special char (@,#,$...)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: "2px" }}
              >
                - Should contain at least one numeric char (1,2,3...)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: "-110px" }}
              >
                - Length should be greater than 5
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Draggable>

    </div>
  )
}
