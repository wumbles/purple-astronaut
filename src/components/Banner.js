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
              I am Lucas. I am 25 years old and I (physically) reside in Utah!
              <br />
              <br />
              Professionally, I embarked on my web development journey after
              accepting a position creating WordPress sites for golf course
              clients and resort owners.
              <br />
              <br />
              While attending a React.js coding bootcamp on my own time to
              deepen my coding skills, I began working on a global marketing
              team as a Frontend WordPress Developer creating new clinical trial
              recruitment websites.
              <br />
              <br />
              I have been working on the same marketing team as a frontend
              developer for the last three and a half years.
              <br />
              <br />
              Below, you can find links to projects I've worked on and get an
              idea of technologies I'm familiar with. (React was used for this
              page.)
              <br />
              <br />
              Thank you for checking out my portfoliio!
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
