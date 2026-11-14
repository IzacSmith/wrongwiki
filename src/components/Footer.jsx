import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            wrong<span>how</span>
          </Link>
          <p>Helping people do things incorrectly since 2026.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <strong>Explore</strong>
            <Link to="/articles">All articles</Link>
            <Link to="/categories">Categories</Link>
          </div>
          <div>
            <strong>WrongHow</strong>
            <Link to="/about">About us</Link>
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <small>© 2026 WrongHow. Please don't trust us.</small>
        <span>For entertainment only. Definitely not advice.</span>
      </div>
    </footer>
  );
}
