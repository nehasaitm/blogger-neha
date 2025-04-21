// pages/AddPost.jsx
import { useNavigate } from 'react-router-dom';
import BlogForm from '../component/BlogForm';

function AddPost({ addBlog }) {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    addBlog(formData);
    navigate('/');
  };

  return (
    <div className="fade-in">
      <h2 className="form-title">Add New Blog Post</h2>
      <BlogForm onSubmit={handleSubmit} buttonText="Add Post" />
    </div>
  );
}

export default AddPost;