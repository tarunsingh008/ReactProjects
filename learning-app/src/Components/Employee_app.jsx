import "../CSS/Employee_app.css";
import Employee from "./Emplyoee";
import Footer from "./Foooter";
import React, { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Employee_app({ menu: MiniDrawer }) {
  const [state, setSate] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  
  function showToast() {

    toast.success("Data loading success!", {
      position: toast.POSITION.CENTER,
      autoClose: 1000, // Close the toast after 3 seconds
      hideProgressBar: false, // Hide the progress bar
      closeButton: false, // Hide the close button
    });
  }

  useEffect(() => {
    setloading(true);
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const response = await get.json();
      setData(response);
      setloading(false);
      // showToast();
      setInitialLoadComplete(true); 
      
    }
    getData();
  }, [state]);
  useEffect(() => {
    if (initialLoadComplete && !loading) {
      showToast();
    }
  }, [initialLoadComplete, loading]);

  return (
    <div className="main">
      <MiniDrawer />
      {/* <div className="employee-app-content"> */}
        <button onClick={() => setSate(state + 100)}>
          Click me to increase {state}
        </button>
        <div className="cards-container">
          {loading ? (
            <TailSpin color="blue" height={500} />
          ) : (
            data.map((element, index) => (
              <div key={index}>
                <Employee
                  address={element.address}
                  age={element.age}
                  contactNumber={element.contactNumber}
                  dob={element.dob}
                  email={element.email}
                  firstName={element.firstName}
                  id={element.id}
                  imageUrl={element.imageUrl}
                  lastName={element.lastName}
                  salary={element.salary}
                />
              </div>
            ))
          )}
        </div>
      {/* </div> */}
      <ToastContainer
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
      <Footer />
    </div>
  );
}

export default Employee_app;
