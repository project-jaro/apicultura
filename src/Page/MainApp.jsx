import { Routes,Route, Navigate } from 'react-router-dom';

import { UserProvider } from '../context/UserProvider';
import React from 'react';
import { HomePage } from './HomePage';
import { AboutePage } from './AboutePage';
import { LoginPage } from './LoginPage';
import { NavBar } from '../components/NavBar';

export const MainApp = () => {
  return (
    
    <UserProvider>
        <NavBar/>
        <hr />
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="about" element={<AboutePage/>} />

          <Route path='/*' element={<Navigate to="/about"/>}/>
          
        </Routes>
    </UserProvider>


  )
}
