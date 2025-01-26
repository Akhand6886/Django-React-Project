import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AdminLayout from "../../layouts/AdminLayout";
import Domain from "../../Api/Api";
import { AuthToken } from "../../Api/Api";
import Loading from "../../layouts/Loading";

function GetPost() {
  const { id: postId } = useParams();
  const [postData, setPostData] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    // Fetch post details and categories
    const fetchPostAndCategories = async () => {
      try {
        const postResponse = await axios.get(`${Domain()}/Posts/${postId}`, {
          headers: { Authorization: `Bearer ${AuthToken()}` },
        });
        setPostData(postResponse.data);

        const categoriesResponse = await axios.get(`${Domain()}/Categories`, {
          headers: { Authorization: `Bearer ${AuthToken()}` },
        });
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire("Error", "Failed to load post or categories data.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndCategories();
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "question",
      title: "Are you sure you want to update this post?",
      html: `
        <b>New Title:</b> ${postData.title}<br>
        <b>New Picture:</b> ${postData.picture}<br>
        <b>New Content:</b> ${postData.content}<br>
        <b>New Category:</b> ${postData.category}
      `,
      showCancelButton: true,
      confirmButtonText: "Yes, Update",
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setUpdating(true);
        try {
          await axios.put(`${Domain()}/Posts/${postId}`, postData, {
            headers: { Authorization: `Bearer ${AuthToken()}` },
          });
          Swal.fire("Updated!", "The post has been updated.", "success");
        } catch (error) {
          console.error("Error updating post:", error);
          Swal.fire("Error", "Failed to update the post. Please try again.", "error");
        } finally {
          setUpdating(false);
        }
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="shadow-md px-6 py-4 mt-5 rounded-lg bg-white">
      <form onSubmit={handleUpdate}>
        <h1 className="text-2xl font-semibold mb-4">
          Title:{" "}
          <input
            type="text"
            name="title"
            value={postData.title || ""}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </h1>
        <div>
          <label className="block text-lg font-medium mb-2">Picture URL:</label>
          <input
            type="text"
            name="picture"
            value={postData.picture || ""}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          {postData.picture && <img src={postData.picture} alt="Post" className="mt-4 w-full h-auto" />}
        </div>
        <div className="mt-4">
          <span className="block text-lg font-medium">Created At:</span>
          {postData.created_at}
        </div>
        <div className="mt-4">
          <span className="block text-lg font-medium">Updated At:</span>
          {postData.updated_at}
        </div>
        <div className="mt-4">
          <label className="block text-lg font-medium mb-2">Category:</label>
          <select
            name="category"
            value={postData.category || ""}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-lg font-medium mb-2">Content:</label>
          <textarea
            name="content"
            value={postData.content || ""}
            onChange={handleChange}
            rows="10"
            className="border rounded p-2 w-full"
          />
        </div>
        {postData.comments && postData.comments.length > 0 ? (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Comments:</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Username</th>
                  <th className="border p-2">Content</th>
                  <th className="border p-2">Created At</th>
                  <th className="border p-2">Updated At</th>
                </tr>
              </thead>
              <tbody>
                {postData.comments.map((comment, index) => (
                  <tr key={index}>
                    <td className="border p-2">{comment.username}</td>
                    <td className="border p-2">{comment.body}</td>
                    <td className="border p-2">{comment.created_at}</td>
                    <td className="border p-2">{comment.updated_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-4 text-red-500 font-bold">No comments on this post.</div>
        )}
        <button
          type="submit"
          className={`mt-6 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 ${
            updating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={updating}
        >
          {updating ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}

function UpdatePost() {
  return <AdminLayout Content={<GetPost />} />;
}

export default UpdatePost;
