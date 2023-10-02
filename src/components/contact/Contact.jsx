import "./contact.css";
import { Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div id="contact" className="contact-box">
      <div className="contact-text">Contact</div>
      <div className="contacts">
        <Button
          className="px-3 py-2 contactButton text-white"
          variant="outline-light"
        >
          <img src="/linkedin.png" alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/tomasstorc/">Linkedin</a>
        </Button>
        <Button className="px-3 py-2 contactButton" variant="outline-light">
          <img src="/mail.png" alt="Email" />
          <a href="mailto:tomas.storc@gmail.com">tomas.storc@gmail.com</a>
        </Button>
        <Button className="px-3 py-2 contactButton" variant="outline-light">
          <img src="/phone.png" alt="Phone" />
          <a href="tel:+420773989743">773 989 743</a>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
