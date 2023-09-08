import React, { useState, useEffect } from "react";
import "../CSS/app.css";
import Footer from "./Foooter";
import { Stack } from "@mui/system";
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
import CoustemSideBar from "./Whatsapp/CoustemSideBar";
import { Header } from "./Whatsapp/Header";
import { ChatPage } from "./Whatsapp/ChatPage";
import ChatInput from "./Whatsapp/ChatInput";

export const Home = ({ menu: MiniDrawer }) => {
  console.log("INSIDE HOME.jsx")
  let message = "Enetr your text here";
  const [num, setNum] = useState(100);
  let detailsToDislay = [
    { firstName: "Happy", lastName: "Doe", age: 25, eyeColor: "blue" },
    { firstName: "Arun", lastName: "Doe", age: 25, eyeColor: "blue" },
    { firstName: "Barun", lastName: "Doe", age: 30, eyeColor: "blue" },
    { firstName: "Tarun", lastName: "Doe", age: 20, eyeColor: "blue" },
    { firstName: "Gaurav", lastName: "Doe", age: 24, eyeColor: "blue" },
    { firstName: "saurav", lastName: "Doe", age: 24, eyeColor: "blue" },
    { firstName: "taurav", lastName: "Doe", age: 24, eyeColor: "blue" },
    { firstName: "sumit", lastName: "Doe", age: 24, eyeColor: "blue" },
    { firstName: "ayush", lastName: "Doe", age: 24, eyeColor: "blue" },
    { firstName: "ayush2", lastName: "Doe", age: 24, eyeColor: "blue" },
    { firstName: "qnkuwh", lastName: "Doe", age: 24, eyeColor: "blue" },
  ];
  let threeDotDisplay = [
    "New group",
    "New broadcast",
    "Linked devices",
    "Starred messages",
    "Payment",
    "Settings",
  ];
  let onSearchDisplay = [
    "Unread",
    "Photos",
    "Videos",
    "Links",
    "Gifs",
    "Audio",
  ];

  function increment(n) {
    setNum(num + n);
  }
  function decrement() {
    setNum(num - 2);
  }
  const [defaultUserInputText, setDefaultUserInputText] =
    useState("Enter user name");
  const [defaultUserPasswordText, setDefaultUserPasswordText] = useState(
    "Enter user password"
  );
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


useEffect(() => {
    
    async function getData() {
      const get = await fetch(
        `http://127.0.0.1:8080/api/dummyData`
      );
      const response = await get.json();
      console.log("data from rest ", response)
      
    }
    getData();
  }, [state]);


  const [threeDotState, setthreeDotState] = useState(false);
  const [searchBarState, setSearchBarState] = useState(false);
  async function showData() {
    console.log("Inside onclick on .. dots", threeDotState);
    (await threeDotState) ? setthreeDotState(false) : setthreeDotState(true);
    console.log("state after click", threeDotState);
  }

  async function showSearchTab() {
    console.log("inside search bar...", searchBarState);
    searchBarState ? setSearchBarState(false) : setSearchBarState(true);
    console.log("inside search bar after click...", searchBarState);
  }

  
  
  // const resizableHandle = <div className="resizable-handle" />;
  return (
    <div className="App">
      <MiniDrawer />
      <Stack>
        <p>Hey how you doin !!</p>
        <input type="text" id="message" name="message" value={message} />
        <p>
          <button>Update</button>
        </p>
      </Stack>
      <Stack>
        <div className="buttons">
          {/* syntax for a call back function when you want to pass some vales like below example onClick={() => increment(2) */}
          {/* <button className='btn' onClick={() => increment(2)}> Increment </button> */}
          <button className="btn" onClick={() => increment(3)}>
            {" "}
            Increment{" "}
          </button>
          <h1 className="values"> {num} </h1>

          <button className="btn" onClick={decrement}>
            {" "}
            Decrement{" "}
          </button>
        </div>
      </Stack>
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

      {/* Whast App */}
      {/* <Draggable>
        <Card
          sx={{
            borderRadius: 10,
            maxWidth: 350,
            height: 500,
            marginTop: 10,
            zIndex: 2,
            overflow: "hidden", // Ensure that content exceeding the card's height is hidden

            // animation: "slide-left 5s linear infinite",
            // whiteSpace: "nowrap",
          }}
        >
          <Typography
                  variant="h6"

            sx={{
              marginTop: 0,
              height: 85,
              marginBottom: 2,
              bgcolor: "#128C7E",
              display: "flex",
              flexWrap: "wrap", // Allow items to wrap to the next row
              alignItems: "center", // Center items vertically
              gap: "8px", // Add some spacing between items
              paddingLeft: "16px",
              paddingRight: "16px",
              position: "fixed",
              zIndex:1,
              
            }}
          >
            {searchBarState ? (
              <div>
                <div
                  style={{
                    backgroundColor: "white",
                    display: "flex",
                    marginTop: 7,
                    marginLeft: 9,
                    width: 330,
                    borderRadius: 20,
                  }}
                >
                  <SearchIcon
                    sx={{
                      color: "red",
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
              </div>
            ) : (
              <div>
                <Typography
                  sx={{
                    textAlign: "left",
                    marginLeft: 2.5,
                    marginTop: 0,
                    color: "white",
                  }}
                >
                  WhatsApp
                  <CameraAltIcon sx={{ marginLeft: 17, marginTop: 1 }}>
                    {" "}
                  </CameraAltIcon>
                  <SearchIcon
                    sx={{ marginLeft: 2, marginTop: 1 }}
                    onClick={showSearchTab}
                  >
                    {" "}
                  </SearchIcon>
                  <MoreVertIcon
                    sx={{ marginLeft: 2, marginTop: 1 }}
                    onClick={showData}
                  >
                    {" "}
                  </MoreVertIcon>
                  {threeDotState ? (
                    <card
                      sx={{
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
                          marginLeft: "155PX",
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
                  ) : (
                    console.log("inside button", threeDotState)
                  )}
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: 350,
                      marginTop: 10,
                      marginLeft: -9,
                    }}
                  >
                    <IconButton>
                      <PeopleIcon />
                    </IconButton>
                    <IconButton>Chats</IconButton>
                    <IconButton>Status</IconButton>
                    <IconButton>Calls</IconButton>
                  </Typography>
                </Typography>
              </div>
            )}
            {searchBarState
              ? onSearchDisplay.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "grey",
                      borderRadius: 20,
                      marginTop: 1,
                      // width:60,
                      minWidth: "80px", // Ensure minimum width for each item
                    }}
                  >
                    {item}
                  </Typography>
                ))
              : console.log()}
          </Typography>
          <CoustemSideBar detailsToDislay={detailsToDislay} />
          
        </Card>
      </Draggable> */}

      {/* whats app 2 */}
      <Draggable>
        
        <Card
          sx={{
            borderRadius: 10,
            maxWidth: 350,
            height: 500,
            marginTop: 10,
            zIndex: 2,
          }}
        >
          <Header />            

          <CoustemSideBar detailsToDislay={detailsToDislay} />
        </Card>
      </Draggable>

        <ChatPage/>

        {/* <ChatInput/> */}
      {/* <Footer /> */}

      {/* <button onClick={() => setSate(state + 100)}>
          Click me to increase {state}
        </button> */}
    </div>

  );
};
