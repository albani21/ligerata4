import "./App.css";
import Nav from "../nav/Nav";
import Hero from "../hero/Hero";
import Counter from "../counter/Counter";

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero banner="hero"></Hero>
      <Counter></Counter>
    </>
  );
}

export default App;
