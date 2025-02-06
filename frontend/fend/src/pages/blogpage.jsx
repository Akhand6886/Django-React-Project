// src/pages/Blog.jsx
// @ts-ignore
import React, { useState, useEffect } from 'react';

const Blogpage = () => {
  // State variables for posts, loading and error
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from the backend API on component mount
  useEffect(() => {
    fetch('http://localhost:8000/api/posts/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
              <small>
                Published on {new Date(post.published_date).toLocaleDateString()}
              </small>
            </p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Blogpage;
