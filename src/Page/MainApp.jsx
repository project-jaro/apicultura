import { Routes, Route, Navigate } from 'react-router-dom';

import { UserProvider } from '../context/UserProvider';
import React from 'react';
import { HomePage } from './HomePage';
import { AboutePage } from './AboutePage';
import { LoginPage } from './LoginPage';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ContactPage } from './ContactPage';
import { ProductsPage } from './ProductsPage';

export const MainApp = () => {
  return (

    <UserProvider>

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='Products' element={<ProductsPage />} />
        <Route path='/*' element={<Navigate to="/about" />} />

      </Routes>
      <Footer />
    </UserProvider>


  )
}
