import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import CsvDownload from 'react-json-to-csv'

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DetailsTable({rows,postion}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,textAlign:'center'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' >IBSN</TableCell>
            <TableCell align="center">TITLE</TableCell>
            <TableCell align="center">AUTHORS</TableCell>
            <TableCell align="center">DESCRIPTION</TableCell>
            <TableCell align="center">PUBLISHED AT</TableCell>
            {!postion && <TableCell align="center">FULLNAME</TableCell>}
            <TableCell align="center">DOWNLOAD</TableCell>
          
            

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const downlaodData = {...row,username:row.username.join(','),authors:row.authors.join(',')}
            return (
              <TableRow
                key={row.ibn}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                             <TableCell align="center">{ row.ibn}</TableCell>
  
                <TableCell align="center">{row.title}</TableCell>
                {/* <TableCell align="center">{row.authors}</TableCell> */}
                <TableCell align="center">{row.authors.map(name=>(
                  <div>
           <Link to={`/user/${name}`}>{name}</Link>,
           </div>
                ))}
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.published}</TableCell>
               {!postion && <TableCell align="center">{row.username.map(name=>(
         <h5> {name}</h5>
                ))}
                </TableCell>}
                <TableCell align="center">
                  <CsvDownload data={[downlaodData]} filename={`${row.title}.csv`} />
                </TableCell>
  
  
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
