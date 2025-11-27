import "./Nav.css";

function NavBar() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="brand">
              <strong>Alban</strong>
            </div>
            <div className="nav-links">
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
