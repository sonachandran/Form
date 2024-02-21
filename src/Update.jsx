import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Update = () => {

const[viewdata,setViewData]=useState('')
const {id}=useParams()
console.log(id);

useEffect(()=>{
  const fetchdata=async()=>{
    let response=await axios.get(`http://localhost:4000/findone/${id}`)
    console.log(response.data);
    setViewData(response.data)
  }
  fetchdata()
},[])
console.log(id);

const [data,setData]=useState('')
  const changedata=(event)=>{
    setData({...data,[event.target.name]:event.target.value}
      )}


    const submitdata=async(event)=>{
        alert('success')
        let response=await axios.put(`http://localhost:4000/update/${id}`,data)
        console.log(response);
    }
  return (
    <>
    firstName
    <input className='input' type="text"  onChange={changedata} name='firstname' value={data.firstname ? data.firstname: ''} placeholder={viewdata.firstname} /> <br />
    LastName
    <input   className='input' type="text" onChange={changedata} name='lastname' value={data.lastname ? data.lastname : ''} placeholder='LastName' /> <br />
    UserName 
    <input type="text"  className='input'  onChange={changedata}name='username' value={data.username ? data.username : ''}  placeholder='UserName' /> <br />
    Password 
     <input type="password"  className='input' onChange={changedata}name='password' value={data.password ? data.password : ''}  placeholder='Password' /> <br />
    UserType
    <select name="usertype" className='input'  id=""  onChange={changedata}>
     <option value="admin">Admin</option> 
     <option value="admin">Admin</option>
     <option value="teacher">Teacher</option>
     <option value="student">Student</option>
    </select> <br />

    <button className='button' type='submit' onClick={submitdata}>Submit</button>
    </>
  )
}

export default Update