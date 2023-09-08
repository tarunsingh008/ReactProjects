// These two material ui components are installed
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

import "../CSS/app.css";
import React from "react";
import MiniDrawer from "./MiniDrawer";
import { EnterRecord } from "./EnterRecord";
import Employee_app from "./Employee_app";
import Movie_app from "./Movie_app";
import { Error } from "./Error";
import {Home} from "./Home"
import { Nested_route } from "./Nested_route";
import NewApp  from "./NewApp";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 

  return (
  
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<MiniDrawer />} /> */}
         
          <Route path="/" element= {<Home menu={MiniDrawer}/>} /> 

           <Route path="/movie" element={<Movie_app menu={MiniDrawer}/>} />
          
          <Route path="/employe" element={<Employee_app menu={MiniDrawer}/>} /> 

          <Route path="/emprecord" element= {<EnterRecord menu={MiniDrawer}/>} />
          
          <Route path ="/index" element= {<Nested_route menu= {MiniDrawer} />} /> 

          <Route path ="/newapp" element= {<NewApp menu= {MiniDrawer} />} />  

          <Route path ="*" element={<Error/>} />
        </Routes>
      </div>
    </Router>
  );
}
// other way to export is as object, so while improrting also import as object example below
// export {App}
// import {App} from './App'

export default App;
//import App from './Components/App';
//import xxy from './Components/App'; as names work not required App
