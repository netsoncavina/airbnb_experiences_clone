import navLogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <img className="nav--logo" src={navLogo}></img>
      </nav>
    </>
  );
}
