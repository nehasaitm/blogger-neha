// pages/Home.jsx
import { Link } from 'react-router-dom';

function Home({ blogs, deleteBlog }) {
  return (
    <div className="fade-in">
      {/* Hero Banner */}
      <div className="hero fade-in">
        <h2>Welcome to Blogger</h2>
        <p>Share your insights and explore posts from our community.</p>
        <Link to="/add">
          <button className="btn btn-primary">Write a Post</button>
        </Link>
      </div>

      {/* Empty or List State */}
      {blogs.length === 0 ? (
        <div className="empty-state fade-in">
          <h2>No blogs yet!</h2>
          <p style={{ color: 'var(--secondary-text)', marginTop: '1rem' }}>
            Get started by adding your first blog post.
          </p>
          <Link to="/add" style={{ display: 'inline-block', marginTop: '1rem' }}>
            <button className="btn btn-primary">Add Your First Blog</button>
          </Link>
        </div>
      ) : (
        <>
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>All Blogs</h2>
          <div className="blog-list">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-text">
                    {blog.content.length > 150 
                      ? `${blog.content.substring(0, 150)}...` 
                      : blog.content}
                  </p>
                  <div className="blog-actions">
                    <Link to={`/edit/${blog.id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => deleteBlog(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;