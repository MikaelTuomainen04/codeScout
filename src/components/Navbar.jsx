import { Link } from "react-router";

export function Navbar() {
  return (
    <nav aria-label="Main navigation" className="py-3">
      <ul className="nav justify-content-center gap-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">Search page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/compare">
            Compare search results
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/helpPage">
            Instructions
          </Link>
        </li>
      </ul>
    </nav>
  );
}