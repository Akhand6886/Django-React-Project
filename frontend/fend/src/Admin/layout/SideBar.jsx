import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faFolder,
  faInbox,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logout } from "../Api/Api";

function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout();
    navigate("/Login");
  };

  const links = [
    { to: "/Admin/Dashboard", icon: faHome, label: "Dashboard" },
    { to: "/Admin/Posts", icon: faFileAlt, label: "Posts" },
    { to: "/Admin/Categories", icon: faFolder, label: "Categories" },
    { to: "/Admin/Inbox", icon: faInbox, label: "Inbox" },
    { to: "/Admin/Accounts", icon: faUser, label: "Accounts" },
    { to: "/Admin/Settings", icon: faCog, label: "Settings" },
  ];

  return (
    <nav className="border-r bg-white h-screen p-4 w-64 pt-10 shadow-md">
      <div className="text-xl font-bold text-gray-700 mb-6">Admin Panel</div>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`flex items-center text-gray-600 hover:text-blue-500 cursor-pointer rounded-md p-2 mb-2 ${
            location.pathname === link.to ||
            (location.pathname === "/Admin" && link.to === "/Admin/Dashboard")
              ? "bg-gray-200 text-blue-600"
              : ""
          }`}
        >
          <FontAwesomeIcon icon={link.icon} className="mr-3 text-indigo-500" />
          <span>{link.label}</span>
        </Link>
      ))}
      {/* Logout Button */}
      <div
        onClick={handleLogout}
        className="flex items-center text-gray-600 hover:text-red-500 cursor-pointer rounded-md p-2 mt-6"
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 text-red-500" />
        <span>Logout</span>
      </div>
    </nav>
  );
}

export default SideBar;
