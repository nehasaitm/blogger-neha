// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Header from './component/Header';
import { useState, useEffect } from 'react';

// Sample preloaded blog posts
const preloadedBlogs = [
  {
    id: "1",
    title: "Getting Started with React",
    content: "React is a JavaScript library for building user interfaces. It's declarative, efficient, and flexible. With React, you can compose complex UIs from small and isolated pieces of code called 'components'. React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, this guide will help you get started."
  },
  {
    id: "2",
    title: "CSS Styling Best Practices",
    content: "When it comes to styling your web applications, following best practices can save you time and headaches. Always organize your CSS with a consistent methodology like BEM or SMACSS. Use CSS variables for themes and repeated values. Minimize specificity conflicts by keeping selectors simple. Consider using a preprocessor like SASS for larger projects. And don't forget about responsive design - always test your styles across different screen sizes to ensure a consistent experience for all users."
  },
  {
    id: "3",
    title: "The Power of JavaScript ES6",
    content: "ES6, also known as ECMAScript 2015, introduced many features that make JavaScript code more modern and readable. Arrow functions provide a concise syntax and lexical 'this' binding. Template literals allow for easier string interpolation. Destructuring assignment makes it possible to unpack values from arrays or properties from objects. The spread operator simplifies array manipulation. And let/const declarations help prevent common scoping issues that were prevalent with var. Learning these features will significantly improve your JavaScript coding experience."
  }
];

function App() {
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('blogs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing saved blogs:', e);
      }
    }
    // Fall back to preloaded blogs
    return preloadedBlogs;
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs([...blogs, { ...blog, id: Date.now().toString() }]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === id ? { ...updatedBlog, id } : blog));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home blogs={blogs} deleteBlog={deleteBlog} />} />
          <Route path="/add" element={<AddPost addBlog={addBlog} />} />
          <Route path="/edit/:id" element={<EditPost blogs={blogs} updateBlog={updateBlog} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;