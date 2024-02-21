import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Profile = () => {
  const[viewdata,Setviewdata]=useState('')
  useEffect(()=>{
     const logindata=async()=>{
         let response=await axios.get(`http://localhost:4000/FindOne/${id}`)
         console.log(response.data);
         Setviewdata(response.data)
     }
     logindata()
  },[])
    
  
const {id}=useParams()
console.log(id);

  return (
   <>
   <h2> {viewdata.firstname}</h2>
   <h2> {viewdata.lastname}</h2>
   <h2> {viewdata.username}</h2>
   <h2> {viewdata.password}</h2>

   </>
  )
}

export default Profile