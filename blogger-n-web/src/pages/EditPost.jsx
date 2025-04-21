// pages/EditPost.jsx
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../component/BlogForm';
import { useEffect, useState } from 'react';

function EditPost({ blogs, updateBlog }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find(blog => blog.id === id);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      navigate('/');
    }
  }, [id, blogs, navigate]);

  const handleSubmit = (formData) => {
    updateBlog(id, formData);
    navigate('/');
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="fade-in">
      <h2 className="form-title">Edit Blog Post</h2>
      <BlogForm 
        initialValues={blog} 
        onSubmit={handleSubmit} 
        buttonText="Update Post" 
      />
    </div>
  );
}

export default EditPost;