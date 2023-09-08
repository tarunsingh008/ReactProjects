// import React from "react";
// import "../CSS/nested_route.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Nested_route_1 } from "./Nested_route_1";
// import { Nested_route_2 } from "./Nested_route_2";
// import { Alert } from "@mui/material";
// import { TextField } from "@mui/material";
// export const Nested_route = ({ menu: MiniDrawer }) => {
//   <Alert> Done</Alert>;
//   <Alert severity="error">This is an error alert — check it out!</Alert>;
//   return (
//     <div className="nested_route">
//       <MiniDrawer />

//       This is default nested router
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />

//       {/* <Routes>
//         <Route path ="/index_1" element={<Nested_route_1 menu={MiniDrawer} />} >
//           <Route path="index_2" element={<Nested_route_2 menu={MiniDrawer} />} />
//         </Route>
//       </Routes> */}
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/FeedbackBox.css";
import Footer from "./Foooter";
import { Rating, Typography } from "@mui/material";
import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";

// toast.configure();

// import { Nested_route_1 } from './Nested_route_1';
export const Nested_route = ({ menu: MiniDrawer }) => {
  const [feedback, setFeedback] = useState("");
  const [satrtCount, collectStart] = useState(0);
  let disable_flag = false;
  // console.log("We have got  stats 1- ", satrtCount)

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };
  useEffect(() => {
    console.log("We have got stats 2-", satrtCount);
  }, [satrtCount]);
  const handleRating = (event, value) => {
    collectStart(value);
    // console.log("We have got stats 2-", satrtCount);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the submitted feedback
    console.log("Submitted feedback:", feedback);
    console.log("rating", satrtCount)

    

    let message = "Feedback submitted!";
    if (feedback !=="" & satrtCount !== 0){
      message = "Feedback & rating submitted"
    }
    else if (feedback!=="" & satrtCount ===0) {message = "Feedback submitted!"}
    else if (feedback ==="" & satrtCount >0) {message = "Ratings submitted!"}
    setFeedback("");
    collectStart(0);

    toast.success(message, {
      position: toast.POSITION.CENTER,
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false, // Hide the progress bar
      closeButton: false, // Hide the close button
    });

    console.log("Submitted feedback: end");
  };

  return (
    <div className="feedback-box">
      <MiniDrawer />
      <h2>Hey let me help you !! Paste your error messge below</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleInputChange}
          placeholder="Please enter your feedback here..."
        />
        {/* <button type="submit">Submit</button> */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <Rating
            name="simple-controlled"
            value={satrtCount}
            onChange={handleRating}
            // onChange={(event, newValue) => {
            //   collectStart(newValue);
            // }}
          />
          {
            // console.log("feedback ignored: ", feedback, "rating ignore -> ", satrtCount);
            satrtCount || feedback ? (
              <button type="submit">Submit</button>
            ) : (
              <button type="submit" disabled>Submit</button>
            )
          }
          {/* <button type="submit"  >Submit</button>           */}
          
        </div>
      </form>
      <Footer />
      <ToastContainer
        // className={ classes.toast }
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        theme="light"
      />
    </div>
  );
};
