import { Link } from "react-router";

export function Navbar() {
    return (
        <nav>
            <Link to="/" >Search page</Link>
            <Link to="/compare">Compare search results</Link>
            <Link to="/help">Instructions</Link>
        </nav>
    );
}