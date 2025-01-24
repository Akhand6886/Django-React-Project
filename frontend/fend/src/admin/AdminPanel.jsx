import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import BlogList from "./pages/BlogList";
import BlogCreate from "./pages/BlogCreate";
import BlogEdit from "./pages/BlogEdit";

const AdminPanel = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/create" element={<BlogCreate />} />
        <Route path="blogs/edit/:id" element={<BlogEdit />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AdminPanel;
