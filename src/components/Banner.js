import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum] = useState(0);
  const toRotate = ["Web Developer."];
  const [text, setText] = useState("");
  const [delta] = useState(400 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = fullText.substring(0, text.length + 1);

    setText(updatedText);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to My Portfolio</span>
            <h1>
              {"Hi I'm Lucas, "}
              <span className="wrap">
                <br /> {text}
              </span>
            </h1>
            <p>
              I'm 22 years old and reside in Utah. I've been in web development
              for 4 years. Originally began with the WordPress platform
              professionally, and I've started to focus on coding in React on my
              own time for the last 2 years.
              <br />
              <br />
              Down below are links to some projects and technologies I am the
              most familiar with, and I am learning something new every day.
              <br />
              <br />
              Thank you for visiting!
            </p>
            <button
              onClick={() =>
                (window.location = "mailto:lucasmartinsen@gmail.com")
              }
            >
              I've seen enough already. <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5} className="pt-5">
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
