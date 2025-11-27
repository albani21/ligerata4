import "./Hero.css";

function Hero(props) {
  return (
    <section class="hero">
      <h1>{props.name}</h1>
      <p>Welcome — a small selection of projects below.</p>
    </section>
  );
}

export default Hero;
