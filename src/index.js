import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form1 from './Form1';
import { View } from './View';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './Update';
import Login from './Login';
import Profile from './Profile';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Form1/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile/:id' element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
 
   
  </React.StrictMode>
);


reportWebVitals();
