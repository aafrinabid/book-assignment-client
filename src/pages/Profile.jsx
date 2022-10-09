import { Details } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import DetailsTable from '../components/DetailsTable'
import ProfileCard from '../components/ProfileCard'

function Profile() {
    const params=useParams()
    const [list,setList]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const {id}=params
   
    useEffect(()=>{
        setIsLoading(true)
        axios.post('http://localhost:3500/profileInfo',{id}).then((res=>{
            console.log(res.data)
            setList([...res.data])
            setIsLoading(false)
        })).catch(e=>{
            setIsLoading(false)
            console.log(e)
        })
    },[params])
  return (
    <div>
        {!isLoading &&<ProfileCard details={list[0]} mail={id}/>}
        {!isLoading && <DetailsTable rows={list} postion={true}/>}
    </div>
  )
}

export default Profile