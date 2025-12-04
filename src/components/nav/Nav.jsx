import "./Nav.css";
import LogIn from "../LogIn/LogIn";

function Nav() {
  let isLogIn = true;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <nav>
        <h2 className="logo">
          <span className="logo-start">A</span>
          <span className="letters">l</span>
          <span className="letters">b</span>
          <span className="letters">a</span>
          <span className="letters">n</span>
          <span className="letters"> </span>
          <span className="letters">M</span>
          <span className="letters">i</span>
          <span className="letters">s</span>
          <span className="letters">i</span>
          <span className="letters">m</span>
          <span className="letters">i</span>
        </h2>
        <ul>
          <li className="nav-links">
            <a href="#">Projects</a>
          </li>
          <li className="nav-links">
            <a href="#">About</a>
          </li>
          <li className="nav-links">
            <a href="#">Contatcs</a>
          </li>
          <li className="nav-links">
            <LogIn></LogIn>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
