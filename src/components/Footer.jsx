import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <Link to="/" className="logo">
        wrong<span>how</span>
      </Link>

      <p>Helping people do things incorrectly since 2026.</p>
      <small>© 2026 WrongHow.  Please don't trust us.</small>
    </footer>
  );
}
