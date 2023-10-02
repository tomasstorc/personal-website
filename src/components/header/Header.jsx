import Button from "react-bootstrap/Button";
import "./header.css";
import { text } from "./header-text";
const Header = () => {
  return (
    <div id="home" className="header-box">
      <div className="header-container">
        <div className="text">
          <h1 className="header-h1">{text.title}</h1>
          <p className="header-text">{text.text}</p>
          <Button className="px-3 py-2" variant="light" href="#contact">
            Contact me
          </Button>{" "}
          <Button className="px-3 py-2" variant="outline-light">
            Download CV
          </Button>{" "}
        </div>
        <div className="image">
          <img src="/me.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
