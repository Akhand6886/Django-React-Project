import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminLayout from '../../layouts/AdminLayout';
import Domain from '../../Api/Api';
import { AuthToken } from '../../Api/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faFilter,
  faEye,
  faHeart,
  faComments,
  faTrash,
  faPen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Loading from '../../layouts/Loading';

function Posts() {
  const [postsData, setPostsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('default');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch posts data
    axios
      .get(`${Domain()}/Posts`, {
        headers: { Authorization: `Bearer ${AuthToken()}` },
      })
      .then((response) => {
        setPostsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        Swal.fire('Error', 'Failed to fetch posts. Please try again.', 'error');
        setLoading(false);
      });
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = postsData.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (selectedSort) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        break;
      case 'likes':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case 'comments':
        filtered.sort((a, b) => b.comment_count - a.comment_count);
        break;
      default:
        break;
    }
    return filtered;
  }, [postsData, searchQuery, selectedSort]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPosts, currentPage]);

  const handleDelete = (postId) => {
    axios
      .get(`${Domain()}/Posts/${postId}`, {
        headers: { Authorization: `Bearer ${AuthToken()}` },
      })
      .then((response) => {
        const postData = response.data;
        Swal.fire({
          icon: 'warning',
          title: 'Are you sure you want to delete this post?',
          html: `
            <div>ID: ${postData.id}</div>
            <div>Picture: <img style="width:200px;height:100px" src="${postData.picture}" alt="Post Image" /></div>
            <div>Title: ${postData.title}</div>
            <div>Created At: ${postData.created_at}</div>
          `,
          showCancelButton: true,
          confirmButtonText: 'Delete',
          confirmButtonColor: '#d33',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`${Domain()}/Posts/${postId}`, {
                headers: { Authorization: `Bearer ${AuthToken()}` },
              })
              .then(() => {
                setPostsData((prev) => prev.filter((post) => post.id !== postId));
                Swal.fire('Deleted!', 'The post has been deleted.', 'success');
              })
              .catch((error) => {
                console.error('Error deleting post:', error);
                Swal.fire('Error', 'Failed to delete the post. Please try again.', 'error');
              });
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
        Swal.fire('Error', 'Failed to fetch post details. Please try again.', 'error');
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <AdminLayout>
      <div className="p-4">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="flex justify-between mb-4">
              <Link
                to="/Admin/Post/New"
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600"
              >
                <FontAwesomeIcon icon={faPlus} /> New Post
              </Link>
              <div className="flex items-center bg-white border rounded-lg shadow-md px-4 py-2">
                <FontAwesomeIcon icon={faSearch} className="text-indigo-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="outline-none bg-transparent"
                />
                {searchQuery && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={handleClearSearch}
                    className="text-gray-400 ml-2 cursor-pointer"
                  />
                )}
              </div>
              <div className="flex items-center bg-white border rounded-lg shadow-md px-4 py-2">
                <FontAwesomeIcon icon={faFilter} className="text-indigo-500 mr-2" />
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="outline-none bg-transparent"
                >
                  <option value="default">Default</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="likes">Likes</option>
                  <option value="comments">Comments</option>
                </select>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-2">Picture</th>
                    <th className="py-2">Title</th>
                    <th className="py-2">Category</th>
                    <th className="py-2">Likes</th>
                    <th className="py-2">Comments</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post) => (
                    <tr key={post.id} className="text-center border-b">
                      <td className="py-2">
                        <img className="w-20 mx-auto" src={post.picture} alt={post.title} />
                      </td>
                      <td className="py-2 truncate">{post.title}</td>
                      <td className="py-2">{post.category_name}</td>
                      <td className="py-2">
                        <FontAwesomeIcon className="text-red-500" icon={faHeart} /> {post.likes}
                      </td>
                      <td className="py-2">
                        <FontAwesomeIcon className="text-blue-500" icon={faComments} /> {post.comment_count}
                      </td>
                      <td className="py-2 flex justify-around">
                        <Link to={`/Admin/Posts/${post.id}`}>
                          <FontAwesomeIcon className="text-green-500" icon={faEye} />
                        </Link>
                        <FontAwesomeIcon
                          onClick={() => handleDelete(post.id)}
                          className="text-red-500 cursor-pointer"
                          icon={faTrash}
                        />
                        <Link to={`/Admin/Posts/Update/${post.id}`}>
                          <FontAwesomeIcon className="text-yellow-500" icon={faPen} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="mr-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Previous
                </button>
              )}
              <span>
                Page {currentPage} of {totalPages}
              </span>
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}

export default Posts;
