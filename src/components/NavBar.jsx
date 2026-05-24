import "./../styles/NavBar.css";

function NavBar() {
  return (
          <nav className="Navbar">
      <div className="navbar-container">
        <img src="Logo.png" alt="Logo" className="navbar-logo" />

        <ul className="navbar-links">
          <li><a href="/">home</a></li>
          <li><a href="/">cases studies</a></li>
          <li><a href="/">about us</a></li>
          <li><a href="/">careers</a></li>
          <li><a href="/">what we do</a></li>
          <li><a href="/">contact</a></li>
        </ul>

        <div className="navbar-lang">
          <img src="USflag.png" alt="Flag" className="navbar-flag" />
          <span>EN-US</span>
          <span className="arrow">⌄</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
