import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

function ViewMessage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract query parameters
  const name = queryParams.get('name') || 'No Name Provided';
  const email = queryParams.get('email') || 'No Email Provided';
  const subject = queryParams.get('subject') || 'No Subject Provided';
  const date = queryParams.get('date') || 'No Date Provided';

  return (
    <AdminLayout>
      <div className="w-full mx-auto mt-8 px-6 bg-white shadow-lg rounded-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">View Message</h1>
          <div className="bg-gray-50 shadow rounded-lg p-6">
            <div className="text-lg mb-4">
              <span className="font-bold text-gray-700">Name: </span>
              <span className="text-gray-900">{name}</span>
            </div>
            <div className="text-lg mb-4">
              <span className="font-bold text-gray-700">Email: </span>
              <span className="text-gray-900">{email}</span>
            </div>
            <div className="text-lg mb-4">
              <span className="font-bold text-gray-700">Date: </span>
              <span className="text-gray-900">{date}</span>
            </div>
            <div className="text-lg mb-4">
              <span className="font-bold text-gray-700">Subject: </span>
            </div>
            <div className="text-gray-900">{subject}</div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ViewMessage;
