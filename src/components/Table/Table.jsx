import React from "react";
//import React, {useState, useEffect} from "react";
// import Table from "@mui/material/Table"
// import TableBody from "@mui/material/TableBody"
// import TableCell from "@mui/material/TableCell"
// import TableContainer from "@mui/material/TableContainer"
// import TableHead from "@mui/material/TableHead"
// import TableRow from "@mui/material/TableRow"
// import Paper from "@mui/material/Paper"

import "./Table.scss";

function createData(productName, trackingId, date, Status) {
  return { productName, trackingId, date, Status };
}
const rows = [
  createData("Lasania Chiken Fri", 18908424,'2 March 2022', 'Approved'),
  createData("Big Baza Bang", 18908424,'2 March 2022', 'Pending'),
  createData("Mouth Freshner", 18908424,'2 March 2022',  'Approved'),
  createData("CupCake", 18908424,'2 March 2022',  'Delivered'),
  createData("Lasania Chiken Fri", 18908424,'2 March 2022', 'Approved'),
  createData("Big Baza Bang", 18908424,'2 March 2022', 'Pending'),
  createData("Mouth Freshner", 18908424,'2 March 2022',  'Approved'),
  createData("CupCake", 18908424,'2 March 2022',  'Delivered'),
  createData("Lasania Chiken Fri", 18908424,'2 March 2022', 'Approved'),
  createData("Big Baza Bang", 18908424,'2 March 2022', 'Pending'),
  createData("Mouth Freshner", 18908424,'2 March 2022',  'Approved'),
  createData("CupCake", 18908424,'2 March 2022',  'Delivered'),
  createData("Lasania Chiken Fri", 18908424,'2 March 2022', 'Approved'),
  createData("Big Baza Bang", 18908424,'2 March 2022', 'Pending'),
  createData("Mouth Freshner", 18908424,'2 March 2022',  'Approved'),
  createData("CupCake", 18908424,'2 March 2022',  'Delivered'),
];

const makeStyles = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }

    } else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    } else {
        return {
            background: '#59bfff',
            color: 'White',
        }
    }
}

export default function BasicTable() {


    // const [sortable, setSortable] = useState(false)
    
    // useEffect(() => {
      
    //     tableHeaders.forEach((headerCell) => {
    //         headerCell.addEventListener("click", () => {
    //           const tableContainer = headerCell.parentElement.parentElement.parentElement;
    //           const headeIndex = Array.prototype.indexOf.call(
    //             headerCell.parentElement.children,
    //             headerCell
    //           );
    //           const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    //           // console.log(currentIsAscending);
          
    //           sortByColumn(tableContainer, headeIndex, !currentIsAscending);
    //         });
    //       });
          
    //   return () => {
        
    //   }
    // }, [])
    

  return (
    <div className="table table-sortable">
      <h3>Recent Order</h3>
      {/* <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label='simple table' >
              <TableHead>
                      <TableRow>
                          <TableCell>Dessert (100g serving) </TableCell>
                          <TableCell align='right'>Calories</TableCell>
                          <TableCell align='right'>Fat&nbsp;(g) </TableCell>
                          <TableCell align='right'>Carb&nbsp;(g) </TableCell>
                          <TableCell align='right'>Dessert&nbsp;(g) </TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                          <TableRow
                              key={row.name}
                              sx={{'&:last-child td, &:last-child th': {border: 0}}}
                          >
                              <TableCell component='th' scope='row'>
                                  {row.name}
                              </TableCell>
                              <TableCell align='right'>{row.calories}</TableCell>
                              <TableCell align='right'>{row.fat}</TableCell>
                              <TableCell align='right'>{row.carbs}</TableCell>
                              <TableCell align='right'>{row.protein}</TableCell>
                              
                          </TableRow>
                      ))}
                  </TableBody>
          </Table>
          </TableContainer> */}
      <div className="tableContainer">
        <div className="srol">
        <table className="">
          
          <thead>
            <tr>
              <th>Product</th>
              <th>Tracking ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
            
                  <tbody className="tablebody">
                      {rows.map((row, index) => (
                       <tr key={index}>
                              <td>{ row.productName}</td>
                       <td>{row.trackingId}</td>
                       <td>{row.date}</td>
                              <td><span className="status" style={makeStyles(row.Status)}>{row.Status}</span>
                                 </td>
                       <td className="details">Detail</td>
                     </tr> 
                   ))}   
           

            
            
             
          </tbody>
          
          
         
        </table>
        </div>
        
      </div>
    </div>
  );
}
