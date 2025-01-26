// utils/api.js
export const Domain = () => process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";
export const AuthToken = () => localStorage.getItem("authToken");

// components/Accounts.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Domain, AuthToken } from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Loading from '../../layouts/Loading';

function UserAccountManager({ user, onUpdate, onDelete }) {
  const [updating, setUpdating] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleUpdate = async () => {
    Swal.fire({
      title: 'Confirm Update',
      text: `Update information for ${updatedUser.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.put(
            `${Domain()}/Users/${user.id}`,
            updatedUser,
            {
              headers: { Authorization: `Bearer ${AuthToken()}` },
            }
          );
          onUpdate(response.data);
          setUpdating(false);
          Swal.fire('Updated!', 'User account has been updated.', 'success');
        } catch (error) {
          Swal.fire('Error', error.response?.data?.message || 'Update failed', 'error');
        }
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Confirm Deletion',
      text: `Delete user ${user.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${Domain()}/Users/${user.id}`, {
            headers: { Authorization: `Bearer ${AuthToken()}` },
          });
          onDelete(user.id);
          Swal.fire('Deleted!', 'User account has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error', error.response?.data?.message || 'Deletion failed', 'error');
        }
      }
    });
  };

  return (
    <>
      <tr className="shadow-md items-center p-2 mb-2 rounded-lg bg-white">
        <td className="border p-2">{user.name}</td>
        <td className="border p-2">{user.email}</td>
        <td className="border p-2">
          {user.email_verified_at ? user.email_verified_at : <FontAwesomeIcon className="text-red-600" icon={faTimes} />}
        </td>
        <td className="border p-2">{user.created_at}</td>
        <td className="border p-2">
          <FontAwesomeIcon className="text-indigo-500" icon={faEye} />
        </td>
        <td className="border p-2">
          <FontAwesomeIcon
            onClick={handleDelete}
            className="text-indigo-500 hover:cursor-pointer"
            icon={faTrash}
          />
        </td>
        <td className="border p-2">
          <FontAwesomeIcon
            onClick={() => setUpdating(true)}
            className="text-indigo-500 hover:cursor-pointer"
            icon={faPen}
          />
        </td>
      </tr>

      {updating && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Update User</h2>
          <input
            type="text"
            value={updatedUser.name}
            onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
            placeholder="New Username"
          />
          <input
            type="email"
            value={updatedUser.email}
            onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
            placeholder="New Email"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleUpdate}>
            Save
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 ml-3 rounded" onClick={() => setUpdating(false)}>
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

function Accounts() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${Domain()}/Users`, {
        headers: { Authorization: `Bearer ${AuthToken()}` },
      });
      setUsersData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <AdminLayout>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto mt-8 px-10 bg-white">
          <h1 className="text-3xl font-bold mb-4">User Accounts</h1>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border p-2">Username</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Verification</th>
                <th className="border p-2">Join Date</th>
                <th className="border p-2">View</th>
                <th className="border p-2">Delete</th>
                <th className="border p-2">Modify</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <UserAccountManager
                  key={user.id}
                  user={user}
                  onUpdate={(updatedUser) =>
                    setUsersData((prev) =>
                      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
                    )
                  }
                  onDelete={(id) => setUsersData((prev) => prev.filter((u) => u.id !== id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}

export default Accounts;
