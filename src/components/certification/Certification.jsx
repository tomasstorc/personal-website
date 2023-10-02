import "./certification.css";
import { text } from "./certification-text";
const Certification = () => {
  return (
    <div id="certifications" className="certification-box">
      <h2 className="certification-text">Certifications</h2>
      <div className="cert-flex">
        {text.map((c, index) => {
          return (
            <div key={index} className="cert">
              <div className="cert-title">{c.title}</div>
              <div>Issued by {c.issuedBy}</div>
              <div>Earned on {c.obtained}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
