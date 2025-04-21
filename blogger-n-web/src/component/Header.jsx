// component/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-icon">📝</span>
            <span className="logo-text">Blogger</span>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Add Post</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;