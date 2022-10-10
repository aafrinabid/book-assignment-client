import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import DetailsTable from '../components/DetailsTable'
import CsvDownload from 'react-json-to-csv'
import axios from 'axios'


function Home({rows,setList,loading,setLoading}) {
    const[ sortState,setSortState]=useState(false)
    const [isbnState,setIsbnState]=useState('')
    const [oldState,setOldState]=useState([])
  const [error,setError]=useState(false)

    const isbnChanger=(e)=>{
        setIsbnState(e.target.value)
    }
const downloadData=rows.map(row=>{
    return {...row,username:row.username.join(','),authors:row.authors.join(',')}
})
const sortList=(state)=>{
    setSortState(!state)
    setOldState([...rows])

    if(!state){
        const sortedList=rows.sort((a,b)=>(a.title > b.title) ? 1 : -1)
        setList([...sortedList])
    }else{
        setList([...oldState])
    }
   
}

const fetchIsbnData=()=>{
    const isbn=isbnState
    axios.post('https://book-server-csv.herokuapp.com/getIsbnData',{isbn}).then((res=>{
        setList([...res.data])
    })).catch(e=>{
        setError(true)

    })

}
  return (
    <div style={{padding:'51px'}}>
        <div style={{display:'flex',justifyContent:'center',padding:'10px',paddingTop:'100px'}}>
        <TextField onChange={isbnChanger} value={isbnState} id="outlined-basic" label="search by ISBN" variant="outlined" />
        <Button onClick={fetchIsbnData} disabled={isbnState.length>0?false:true}>search</Button>
        </div>
        <div style={{display:'flex'}}>
        <Button onClick={sortList.bind(null,sortState)}>{!sortState?'Sort by titile':'unsort'}</Button>
        <Button><CsvDownload data={downloadData} filename={'all-data.csv'}>Download all Data</CsvDownload></Button>
        </div>
       {!loading && <DetailsTable rows={rows}/>}
       {loading && <h1>LOADING...</h1>}
    </div>
  )
}

export default Home