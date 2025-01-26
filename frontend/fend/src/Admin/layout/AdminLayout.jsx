import React from "react";
import SideBar from "./SideBar";
import Nav from "./Nav";

function AdminLayout({ Content, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Nav />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-md hidden md:block sticky top-0 h-screen">
          <SideBar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-50">
          {Content || children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
