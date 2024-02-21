import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './View.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
let token=localStorage.getItem('token')
export const View = () => {
   const[data,setdata]=useState([''])
   const [refresh,setrefresh]=useState(false)
  const navigate=useNavigate()
   useEffect(()=>{
    const fetchdatabase=async()=>{

      try{
      let response=await axios.get('http://localhost:4000/find', {headers: {
        Authorization: `Bearer ${token}` 
     }})

        console.log(response.data);
        setdata(response.data)
      }
      catch(error)
       {
        console.log(error.response.data.message);
        navigate('/login')
       
       }   
    }
    if(token==null){
      navigate('/login')
    }
    else{
      

        fetchdatabase()


    }

   
    },[refresh])
    console.log(data);

    let handleDelete=async (id)=>{
      setrefresh(!refresh)
      let response=await axios.delete(`http://localhost:4000/delete/${id}`)
      console.log(response);
    }
  return (
    <div className='example d-flex flex-wrap gap-3 '>
        {data.map((item,index)=>(
            <div className='bg-black text-white p-3 '>
            <h2>Sl no. : {index}</h2>
            <h2>Username : {item.firstname}</h2>
            <h2>Password : {item.lastname}</h2>
            <h2>first name : {item.username}</h2>
            <h2>Last name : {item.password}</h2>
            <h2>User Type: {item._id}</h2>
          <Link to={`/update/${item._id}`}><button>Update</button></Link>
          <button onClick={()=>{handleDelete(item._id)}}>Delete</button>
        </div>
        ))}
    </div> 
  )}
