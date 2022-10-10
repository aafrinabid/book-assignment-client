import { Details } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import DetailsTable from '../components/DetailsTable'
import ProfileCard from '../components/ProfileCard'
import CsvDownload from 'react-json-to-csv'


function Profile() {
    const params=useParams()
    const [list,setList]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const {id}=params
   
    useEffect(()=>{
        setIsLoading(true)
        axios.post('https://book-server-csv.herokuapp.com/profileInfo',{id}).then((res=>{
            setList([...res.data])
            setIsLoading(false)
        })).catch(e=>{
            setIsLoading(false)
        })
    },[params])
    const downloadData=list.map(row=>{
        return {...row,username:row.username.join(','),authors:row.authors.join(',')}
    })
  return (
    <div>
        {!isLoading &&<ProfileCard details={list[0]} mail={id}/>}
        {!isLoading && <CsvDownload data={downloadData} filename={`${list[0].username[0]}.csv`}>Download all Data</CsvDownload>}
        {!isLoading && <DetailsTable rows={list} postion={true}/>}
    </div>
  )
}

export default Profile