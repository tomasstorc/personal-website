import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Container>
        <Row>
          <Col>
            <h1
              style={{
                borderBottom: "2px solid white",
                textAlign: "left",
                paddingBottom: "2px",
              }}
            >
              Tomáš Štorc
            </h1>
            <p style={{ color: "white", textAlign: "left" }}>
              Having dedicated several years to the IT industry, I've carved out
              a niche for myself, with Azure being my central area of expertise.
              My journey has been marked by a series of successful projects,
              each contributing to my comprehensive understanding of cloud
              solutions and their pivotal role in modern business
              infrastructures. While Azure remains my primary specialization, my
              experiences have also granted me a panoramic view of the IT
              landscape, enabling me to offer integrated solutions that resonate
              with both technical and business objectives. As technology
              relentlessly advances, I am dedicated to continuous learning and
              adaptation, ensuring that I remain at the cutting edge of cloud
              innovations. If you're keen to delve deeper into the world of
              Azure or are in search of a seasoned IT collaborator, I welcome
              you to explore further and consider the potential synergies we
              might share
            </p>
          </Col>
          <Col>
            <img src="/me.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
