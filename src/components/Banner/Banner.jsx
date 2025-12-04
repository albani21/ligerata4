import "./Banner.css";

function Banner(props) {
  return (
    <>
      <div className="hero-banner">
        {props.name ? <p className="middle-hero">{props.name} </p> : ""}
      </div>
    </>
  );
}

export default Banner;
