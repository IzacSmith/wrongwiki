import { Link, useNavigate } from "react-router-dom";
import articles from "../data/articles.json";
import SearchBar from "./SearchBar";

export default function Header({ profile }) {
  const navigate = useNavigate();

  function openRandomArticle() {
    const article = articles[Math.floor(Math.random() * articles.length)];

    if (article) {
      navigate(`/article/${article.id}`);
    }
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-brand">
          <Link to="/" className="logo">
            wrong<span>how</span>
          </Link>
          <span className="header-tagline">The internet's least reliable guide</span>
        </div>

        <SearchBar />
      </div>

      <div className="navigation-shell">
        <nav className="navigation" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/articles">All articles</Link>
          <Link to="/about">About</Link>
          <Link to="/settings">Settings</Link>
          <button
            className="random-article-button"
            type="button"
            onClick={openRandomArticle}
            disabled={articles.length === 0}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
            </svg>
            Random article
          </button>
          <Link
            className="profile-link"
            to="/settings"
            aria-label={
              profile
                ? `Settings for ${profile.displayName}'s pretend profile`
                : "Create a pretend profile"
            }
          >
            <span className="profile-avatar" aria-hidden="true">
              {profile?.avatar || "👤"}
            </span>
            <span>{profile?.displayName || "Profile"}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
 
