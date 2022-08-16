import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container className="d-flex">
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Float man" />
          </Col>
          <Col size={12} md={6}>
            <Row>
              <h2 className="text-center">Get In Touch!</h2>
              <div className="d-flex justify-content-center">
                <button
                  onClick={() =>
                    (window.location = "mailto:lucasmartinsen@gmail.com")
                  }
                >
                  <span>Send me an email.</span>
                </button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
