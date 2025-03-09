import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum] = useState(0);
  const toRotate = ["Web Developer"];
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
            <span className="tagline">My Portfolio</span>
            <h1>
              {"Lucas Martinsen, "}
              <span className="wrap">
                <br /> {text}
              </span>
            </h1>
            <p>
              Hello!
              <br />
              <br />
              I'm Lucas,
              <br />
              <br />
              I am 24 years old, I speak Portuguese, and I (physically) reside
              in Utah.
              <br />
              <br />
              I have been self-studying web development for a decade and I've
              been employed as a Frontend Developer on a team for the last 4+
              years.
              <br />
              <br />
              Professionally, I started my web development journey after I had
              taken a position creating WordPress sites for golf course clients.
              <br />
              <br />
              While I attended a coding bootcamp on my own time to enhance my
              skills, I began working on a global marketing team as a Frontend
              Developer helping to create new clinical trial websites.
              <br />
              <br />
              Down below, you can find links to projects I've worked on and get
              an idea of technologies I'm familiar with. (React was used for
              this page.)
              <br />
              <br />
              Thank you for your interest!
              <br />
              <br />
            </p>
            {/* <button
              onClick={() =>
                (window.location = "mailto:lucasmartinsen@gmail.com")
              }
            >
              I'm interested. <ArrowRightCircle size={25} />
            </button> */}
          </Col>
          <Col xs={12} md={6} xl={5} className="pt-5 pb-5">
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
