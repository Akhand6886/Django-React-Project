// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ChapterPage from '../pages/ChapterPages/ChapterPages';
import Login from '../Login/Login'
import Register from '../Register/Register'
import AdminBlogs from '../pages/Admin/AdminBlogs';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter" element={<ChapterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/blogs" element={<AdminBlogs />} />
    </Routes>
  );
}

export default AppRoutes;