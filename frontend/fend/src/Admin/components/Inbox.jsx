import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import Domain from '../../Api/Api';
import { AuthToken } from '../../Api/Api';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Loading from '../../layouts/Loading';

/* ContactMessage Component */
function ContactMessage({ message, onDelete }) {
  const [read, setRead] = useState(message.read);

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this contact message?',
      icon: 'warning',
      html: `
        <p><b>Name:</b> ${message.name}</p>
        <p><b>Email:</b> ${message.email}</p>
        <p><b>Subject:</b> ${message.subject}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return axios
          .delete(`${Domain()}/Contact/${message.id}`, {
            headers: { Authorization: `Bearer ${AuthToken()}` },
          })
          .then((response) => response.data)
          .catch((error) => {
            Swal.showValidationMessage(
              error.response?.data?.message || 'Failed to delete the message.'
            );
          });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(message.id);
        Swal.fire('Deleted', 'The contact message has been deleted.', 'success');
      }
    });
  };

  const handleMarkAsRead = () => {
    axios
      .put(
        `${Domain()}/Contact/Read/${message.id}`,
        { read: true },
        { headers: { Authorization: `Bearer ${AuthToken()}` } }
      )
      .then(() => setRead(true))
      .catch((error) => console.error('Error marking message as read:', error));
  };

  return (
    <tr
      className={`items-center p-2 justify-center gap-9 rounded-lg hover:shadow-md ${
        read ? 'bg-white' : 'bg-gray-100'
      }`}
    >
      <td className="border p-2">{message.name}</td>
      <td className="border p-2">{message.email}</td>
      <td className="border p-2 truncate">{message.subject}</td>
      <td className="border p-2">{message.date}</td>
      <td className="border p-2">
        <Link
          to={`/Inbox/${message.id}?name=${message.name}&email=${message.email}&subject=${message.subject}&date=${message.date}`}
          onClick={handleMarkAsRead}
        >
          <FontAwesomeIcon className="text-indigo-500 cursor-pointer" icon={faEye} />
        </Link>
      </td>
      <td className="border p-2">
        <button onClick={handleDelete} className="text-red-500 cursor-pointer">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

/* Inbox Component */
function Inbox() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${Domain()}/Contact`, {
        headers: { Authorization: `Bearer ${AuthToken()}` },
      })
      .then((response) => setMessages(response.data))
      .catch((error) => {
        console.error('Error fetching contact messages:', error);
        Swal.fire('Error', 'Failed to fetch messages. Please try again later.', 'error');
      })
      .finally(() => setLoading(false));
  }, []);

  const deleteMessage = (messageId) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== messageId));
  };

  return (
    <AdminLayout>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto mt-8 px-4 bg-white shadow-lg rounded">
          <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Open
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <ContactMessage key={message.id} message={message} onDelete={deleteMessage} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}

export default Inbox;
