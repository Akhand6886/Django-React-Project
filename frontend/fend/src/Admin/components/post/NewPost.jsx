import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layout/SideBar';
import Domain from '../../Api/Api';
import { AuthToken } from '../../Api/Api';
import Swal from 'sweetalert2';

function AddPost() {
  const [formData, setFormData] = useState({
    title: '',
    picture: '',
    content: '',
    category_id: '', // Initialize to an empty string
  });

  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch categories from API
    axios
      .get(`${Domain()}/Categories`, {
        headers: { Authorization: `Bearer ${AuthToken()}` },
      })
      .then((response) => setCategories(response.data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${Domain()}/Posts/New`, formData, {
        headers: { Authorization: `Bearer ${AuthToken()}` },
      });

      Swal.fire({
        icon: 'success',
        title: 'Post Created',
        html: `
          <b>Title:</b> ${formData.title}<br>
          <b>Picture:</b> ${formData.picture}<br>
          <b>Content:</b> ${formData.content}<br>
          <b>Category:</b> ${getCategoryName(formData.category_id)}
        `,
      });

      // Clear the form after successful submission
      setFormData({
        title: '',
        picture: '',
        content: '',
        category_id: '',
      });
    } catch (error) {
      console.error('Error creating post:', error);
      Swal.fire({
        icon: 'error',
        title: 'Post Creation Failed',
        text: error.response ? error.response.data.message : 'An error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setFormData({
      title: '',
      picture: '',
      content: '',
      category_id: '',
    });
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === parseInt(categoryId));
    return category ? category.name : 'N/A';
  };

  return (
    <div className="shadow-md px-6 py-4 mt-5 rounded-lg bg-white max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-500">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 focus:outline-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="picture" className="text-lg font-medium">Picture URL</label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 focus:outline-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-lg font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 focus:outline-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category_id" className="text-lg font-medium">Category</label>
          <select
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 focus:outline-indigo-500"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className={`bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

function Add() {
  return <AdminLayout Content={<AddPost />} />;
}

export default Add;
