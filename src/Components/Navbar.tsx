import { Link } from "react-router-dom";

import { Search } from "./Search";

export const Navbar = () => (
  <nav className="Navbar">
    <Link className="logoLink" to="/">
      <h1 className="LOGO">Giggle 🔎</h1>
    </Link>
    <Search />
  </nav>
);
