import { useParams } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import Domain from "../../Api/Api";
import { AuthToken } from "../../Api/Api";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Loading from "../../layouts/Loading";

function View() {
  const { id } = useParams(); // Get the post ID from the URL

  return <AdminLayout Content={<GetPost postId={id} />} />;
}

function GetPost({ postId }) {
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${Domain()}/Posts/${postId}`, {
          headers: { Authorization: `Bearer ${AuthToken()}` },
        });
        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire("Error", "Failed to load post data.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleDeleteComment = async (commentId) => {
    const commentToDelete = postData.comments.find((comment) => comment.id === commentId);

    if (commentToDelete) {
      Swal.fire({
        title: "Delete Comment",
        icon: "warning",
        html: `
          <p><strong>Username:</strong> ${commentToDelete.username}</p>
          <p><strong>Comment Body:</strong> ${commentToDelete.body}</p>
          <p><strong>Created At:</strong> ${commentToDelete.created_at}</p>
        `,
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`${Domain()}/Comment/${commentId}`, {
              headers: { Authorization: `Bearer ${AuthToken()}` },
            });

            // Update state to remove the deleted comment
            setPostData((prev) => ({
              ...prev,
              comments: prev.comments.filter((comment) => comment.id !== commentId),
            }));

            Swal.fire("Deleted", "The comment has been deleted.", "success");
          } catch (error) {
            console.error("Error deleting comment:", error);
            Swal.fire("Error", "Failed to delete the comment. Please try again.", "error");
          }
        }
      });
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="shadow-md px-6 py-4 mt-5 rounded-lg bg-white">
      <h1 className="text-2xl font-semibold mb-4">Title: {postData.title}</h1>
      <div>
        <img src={postData.picture} alt="Post" className="w-full h-auto rounded-md" />
      </div>
      <div className="mt-4 text-lg">
        <p><strong>Created At:</strong> {postData.created_at}</p>
        <p><strong>Updated At:</strong> {postData.updated_at}</p>
        <p><strong>Likes:</strong> {postData.likes}</p>
        <p><strong>Category:</strong> {postData.category}</p>
      </div>
      <div className="mt-4">
        <p className="text-lg"><strong>Content:</strong></p>
        <p className="mt-2">{postData.content}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        {postData.comments && postData.comments.length > 0 ? (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Content</th>
                <th className="border px-4 py-2">Created At</th>
                <th className="border px-4 py-2">Updated At</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {postData.comments.map((comment) => (
                <tr key={comment.id}>
                  <td className="border px-4 py-2">{comment.username}</td>
                  <td className="border px-4 py-2">{comment.body}</td>
                  <td className="border px-4 py-2">{comment.created_at}</td>
                  <td className="border px-4 py-2">{comment.updated_at}</td>
                  <td className="border px-4 py-2 text-center">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => handleDeleteComment(comment.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-red-500 font-bold">No comments on this post.</p>
        )}
      </div>
    </div>
  );
}

export default View;
