import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import Loading from '../../layouts/Loading';
import { Domain, AuthToken } from '../../Api/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Swal from 'sweetalert2';

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Domain()}/Categories`, {
          headers: { Authorization: `Bearer ${AuthToken()}` },
        });
        setCategoriesData(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        Swal.fire('Error', 'Unable to fetch categories. Please try again.', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Add a new category
  const AddCategory = () => {
    Swal.fire({
      title: 'Add New Category',
      html: `
        <input id="categoryName" class="swal2-input" placeholder="Category Name">
        <textarea id="categoryDescription" class="swal2-textarea" placeholder="Category Description"></textarea>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add',
      preConfirm: () => {
        const name = document.getElementById('categoryName').value.trim();
        const description = document.getElementById('categoryDescription').value.trim();

        if (!name || !description) {
          Swal.showValidationMessage('Both fields are required.');
          return;
        }

        return axios
          .post(
            `${Domain()}/Categories`,
            { name, description },
            { headers: { Authorization: `Bearer ${AuthToken()}` } }
          )
          .then((response) => response.data)
          .catch((error) => {
            Swal.showValidationMessage(error.response?.data?.message || 'Failed to add category.');
          });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const newCategory = result.value;
        setCategoriesData((prev) => [...prev, newCategory]);
        Swal.fire('Added!', 'Category added successfully.', 'success');
      }
    });
  };

  // Delete a category
  const DeleteCategory = (category) => {
    Swal.fire({
      title: 'Confirm Deletion',
      html: `
        <p><strong>Category Name:</strong> ${category.name}</p>
        <p><strong>Category Description:</strong> ${category.description}</p>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      preConfirm: () => {
        return axios
          .delete(`${Domain()}/Categories/${category.id}`, {
            headers: { Authorization: `Bearer ${AuthToken()}` },
          })
          .then((response) => response.data)
          .catch((error) => {
            Swal.showValidationMessage(error.response?.data?.message || 'Failed to delete category.');
          });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setCategoriesData((prev) => prev.filter((cat) => cat.id !== category.id));
        Swal.fire('Deleted!', 'Category deleted successfully.', 'success');
      }
    });
  };

  // Update a category
  const UpdateCategory = (category) => {
    Swal.fire({
      title: 'Update Category',
      html: `
        <input id="categoryName" class="swal2-input" value="${category.name}" placeholder="Category Name">
        <textarea id="categoryDescription" class="swal2-textarea" placeholder="Category Description">${category.description}</textarea>
      `,
      showCancelButton: true,
      confirmButtonText: 'Update',
      preConfirm: () => {
        const name = document.getElementById('categoryName').value.trim();
        const description = document.getElementById('categoryDescription').value.trim();

        if (!name || !description) {
          Swal.showValidationMessage('Both fields are required.');
          return;
        }

        return axios
          .put(
            `${Domain()}/Categories/${category.id}`,
            { name, description },
            { headers: { Authorization: `Bearer ${AuthToken()}` } }
          )
          .then((response) => response.data)
          .catch((error) => {
            Swal.showValidationMessage(error.response?.data?.message || 'Failed to update category.');
          });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setCategoriesData((prev) =>
          prev.map((cat) => (cat.id === category.id ? { ...cat, name: result.value.name, description: result.value.description } : cat))
        );
        Swal.fire('Updated!', 'Category updated successfully.', 'success');
      }
    });
  };

  return (
    <AdminLayout>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto mt-8 px-6 bg-white rounded shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Categories</h1>
            <button onClick={AddCategory} className="bg-blue-500 text-white px-4 py-2 rounded shadow">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Category
            </button>
          </div>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoriesData.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{category.name}</td>
                  <td className="border px-4 py-2">{category.description}</td>
                  <td className="border px-4 py-2 text-center">
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-green-500 cursor-pointer mr-4"
                      onClick={() => UpdateCategory(category)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-red-500 cursor-pointer"
                      onClick={() => DeleteCategory(category)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}

export default Categories;
