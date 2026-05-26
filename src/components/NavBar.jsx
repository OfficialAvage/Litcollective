import { useState } from "react";
import "./../styles/NavBar.css";

const links = [
  "home",
  "case studies",
  "about us",
  "careers",
  "what we do",
  "contact",
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <img src="Logo.png" alt="Logo" className="navbar-logo" />

        <ul className={`navbar-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link}>
              <a href="/" onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <div className="navbar-lang">
            <img src="USflag.png" alt="Flag" className="navbar-flag" />
            <span>EN-US</span>
            <span className="arrow">⌄</span>
          </div>

          <button
            className={`hamburger${open ? " active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
