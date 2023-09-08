import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../CSS/app.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const Fields = ({ name, email, index, data, setData }) => {
  const delteData = (index) => {
    let tmp = data;
    tmp.splice(index, 1);
    setData([...tmp]);
  };
  const updateData = (index, value) => {
    // window.alert('To be implemented')
    // console.log(value)
    console.log(data);
    // let temp = data
    // let tmp = data
    // tmp.splice(index, 0)
    // setData([...tmp])
  };
  return (
    <div key={index} className="disply_data">
      {name}
      {email}
      {/* <Stack> */}
        <Button
          onClick={() => delteData(index)}
          variant="contained"
          color="error"
        >
          <DeleteIcon />
        </Button>
        <Button
          onClick={() => updateData(index, data[index])}
          variant="contained"
          colour="success"
        >
          <EditIcon />
        </Button>
      {/* </Stack> */}
    </div>
  );
};
