import Banner from "../Banner/Banner";
import "./Hero.css";

function Hero(props) {
  let name = props.banner;
  let comp;

  if (name === "hero") {
    comp = <Banner name="alban"></Banner>;
  } else {
    comp = <h2>No Banner</h2>;
  }

  return <div className="conditional-banner-container">{comp} zz</div>;
}

export default Hero;
