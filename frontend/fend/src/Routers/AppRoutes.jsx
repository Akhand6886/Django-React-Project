// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ChapterPage from '../pages/ChapterPages/ChapterPages';
import Login from '../Login/Login'
import Register from '../Register/Register'
import AppAdmin from '../pages/Admin/AdminBlogs';
import AdminLayout from '../Admin/layout/AdminLayout';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter" element={<ChapterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/*" element={<AdminLayout />} /> 
      <Route path="/admin/a" element={<AppAdmin />} />
    </Routes>
  );
}

export default AppRoutes;