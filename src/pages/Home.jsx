import { Button, TextField } from '@mui/material'
import React from 'react'
import DetailsTable from '../components/DetailsTable'
import CsvDownload from 'react-json-to-csv'


function Home({rows,setList}) {
const downloadData=rows.map(row=>{
    return {...row,username:row.username.join(','),authors:row.authors.join(',')}
})
const sortList=()=>{
    const sortedList=rows.sort((a,b)=>(a.title > b.title) ? 1 : -1)
    setList([...sortedList])
}
  return (
    <div >
        <div style={{display:'flex',justifyContent:'center',padding:'10px',paddingTop:'100px'}}>
        <TextField id="outlined-basic" label="search by ISBN" variant="outlined" />
        <Button>search</Button>
        </div>
        <div style={{display:'flex'}}>
        <Button><CsvDownload data={downloadData} filename={'all-data.csv'}>Download all Data</CsvDownload></Button>
        <Button onClick={sortList}>Sort by titile</Button>
        </div>
        <DetailsTable rows={rows}/>
    </div>
  )
}

export default Home