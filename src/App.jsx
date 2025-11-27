import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./NavBar";
import "./App.css";
import Hero from "./Hero";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Hero name="jungle"></Hero>
      <Hero name="leart"></Hero>

      <Hero name="besart"></Hero>
    </>
  );
}

export default App;
