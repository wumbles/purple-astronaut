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
              Hi, I'm Lucas.
              <br />
              <br />
              I am 23 years old, speak Portuguese, and (physically) reside in
              Utah!
              <br />
              <br />
              I have been self-studying web development for 4+ years; and I am
              currently employed as frontend Developer on a team for the last 3
              years.
              <br />
              <br />
              Professionally, I originally started my web development journey
              after taking a position doing WordPress sites for golf course
              clients.
              <br />
              <br />
              A year later, I attended a coding bootcamp on my own time after
              work to broaden my knowledge.
              <br />
              <br />
              Immediately, I took an interest in trying out new tools and
              switching to modern technologies.
              <br />
              <br />
              (React was used for this page!)
              {/* around 2 years ago. I'm 22 years old and currently reside in Utah.
              I've been studying web development for 4+ years. I originally
              began working with the WordPress platform professionally, and
              later attended a coding bootcamp on my own time after I took
              interest in switching technologies to React around 2 years ago. */}
              <br />
              <br />
              Down below, you can find links to projects I've worked on and get
              an idea of technologies I'm familiar with.
              <br />
              <br />
              Thanks for visiting!
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
