import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



import './Login.css'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {

  const navigate=useNavigate()

  const[data,setData]=useState('')

  const Changedata=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  const Submitbutton=async(event)=>{
    // let response=await axios.post('http://localhost:4000/login',data)
    // console.log(response.data); 
    // if(response.data){
    //    alert('success')
    //    navigate(`/Profile/${response.data._id}`)

    // }
    // else{
    //     alert('failed');
    // }
    setData(data)
    try{

        let response=await axios.post('http://localhost:4000/login',data)
        console.log(response.data);
        const token=response.data.token
        console.log(token);
        localStorage.setItem('token',token)
        

        if(response){

           navigate('./view')
          // navigate(`/Profile/${response.data._id}`)
        }
    }
    catch(e){
      console.log(e);
      toast.error('Invalid username or password');
    
    }


   
}

 

  return (
    <>
    <ToastContainer/>
   <div className='container2 border '>
    <div style={{marginTop:'80px'}}>
    UserName <br />
    <input className='input' type="text" name='username'onChange={Changedata} /><br />
    Password <br />
    <input  className='input'  type="password" name='password' onChange={Changedata} /> <br />
  
    <button className='button'  onClick={Submitbutton} type='submit'>Sign In</button>
    
    </div>
    </div>
   
    </>
    
  
  )
}

export default Login