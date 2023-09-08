import Footer from "./Foooter";
import React, { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
// import Paper from '@mui/material/Paper';
import "../CSS/app.css";

function NewApp({ menu: MiniDrawer }) {
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
    <div>
      <MiniDrawer />
      <div className="new_app_button">
        <button onClick={() => setSate(state + 100)}>
          Click me to increase {state}
        </button>
        </div>
        <div>
          {loading ? (
            <TailSpin color="blue" height={500} />
          ) : (
            <TableContainer component={Paper}>
            {/* <Table stickyHeader aria-label="sticky table"> */}
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
              <TableHead className="table_head">
              <TableRow>
                  <TableCell>Image URL</TableCell>
                  <TableCell>EMP ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Salary</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
            {data.map((element, index) => (
              
                <TableRow key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="table">
                    <TableCell align="right"><img src={element.imageUrl}alt="" /></TableCell>
                    <TableCell align="right">{element.id}</TableCell>
                    <TableCell align="right">{element.firstName}</TableCell>  
                    <TableCell align="right">{element.lastName}</TableCell>
                    <TableCell align="right">{element.email}</TableCell>
                    <TableCell align="right">{element.dob}</TableCell>
                    <TableCell align="right">{element.age}</TableCell>
                    <TableCell component="th" scope="row">{element.address}</TableCell>
                    {/* <TableCell align="right">{element.address}</TableCell> */}    
                    <TableCell align="right">{element.contactNumber}</TableCell>
                    <TableCell align="right">{element.salary}</TableCell>
                  </TableRow>
              
            ))
          }
          </TableBody>
      </Table>
    </TableContainer>

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

export default NewApp;