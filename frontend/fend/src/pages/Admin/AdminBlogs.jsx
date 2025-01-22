import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'; // Optional if you want the same Navbar
// import Footer from '../../components/Footer/Footer'; // if needed

function AdminBlogs() {
  // Sample initial blog data (in a real app, you’d fetch from the backend)
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', content: 'Hello World!', category: 'General' },
    { id: 2, title: 'Second Blog', content: 'Another post', category: 'Updates' },
  ]);

  // Form states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  // Handle new blog submission
  const handleAddBlog = (e) => {
    e.preventDefault();
    // In a real app, you'd do an API call to create the blog post, then refetch or update state
    const newBlog = {
      id: Date.now(), // Temporary ID; the server normally provides this
      title,
      content,
      category,
    };
    setBlogs([...blogs, newBlog]);

    // Reset form fields
    setTitle('');
    setContent('');
    setCategory('');
  };

  // Example: handle deleting a blog
  const handleDelete = (id) => {
    // In a real app, you'd do an API call, then update state
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* If you want your site’s main navbar on admin pages as well */}
      <Navbar />

      <div className="max-w-screen-xl mx-auto w-full flex-1 px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin: Manage Blogs</h1>

        {/* Add New Blog Form */}
        <form
          onSubmit={handleAddBlog}
          className="bg-white p-4 rounded shadow mb-8 flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold">Add New Blog</h2>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Title</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Content</label>
            <textarea
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter blog content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Category</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded"
              placeholder="e.g. General, Updates, News"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-start"
          >
            Add Blog
          </button>
        </form>

        {/* Blog List */}
        <h2 className="text-xl font-semibold mb-4">Existing Blogs</h2>
        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs yet. Add one above!</p>
        ) : (
          <table className="w-full bg-white shadow rounded overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Content</th>
                <th className="p-3 text-left w-20">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b last:border-none">
                  <td className="p-3">{blog.title}</td>
                  <td className="p-3">{blog.category || '—'}</td>
                  <td className="p-3">{blog.content}</td>
                  <td className="p-3">
                    {/* For now, just a delete button. You could add "Edit" as well. */}
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* If you want a footer here, you can uncomment */}
      {/* <Footer /> */}
    </div>
  );
}

export default AdminBlogs;
