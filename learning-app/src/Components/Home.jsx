import React, { useState, useEffect } from "react";
import "../CSS/app.css";
import { Stack } from "@mui/system";
import Card from "@mui/material/Card";
import Draggable from "react-draggable";
import CoustemSideBar from "./Whatsapp/CoustemSideBar";
import { Header } from "./Whatsapp/Header";
import { ChatPage } from "./Whatsapp/ChatPage";
import { Login } from "./LoginRegister/Login";

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


  function increment(n) {
    setNum(num + n);
  }
  function decrement() {
    setNum(num - 2);
  }

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
      {/* Login componnet */}
      <Login/>
      
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

    </div>

  );
};
