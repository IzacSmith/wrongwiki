import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo">
          wrong<span>how</span>
        </Link>

        <SearchBar />
      </div>

      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
 
