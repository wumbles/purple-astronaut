import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bootstrapLogo from "../assets/img/bootstrap-icon.png";
import nodeLogo from "../assets/img/node-logo-img.png";
import reactLogo from "../assets/img/react-logo-img.png";
import scssLogo from "../assets/img/scss-logo-img.png";
import tsLogo from "../assets/img/typescript-logo-img.png";
import tailwindLogo from "../assets/img/tailwind-logo-img.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Blandit volutpat maecenas volutpat blandit. Erat nam at lectus
                urna duis convallis convallis tellus id. */}
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item skills-adjust">
                    <img src={reactLogo} alt="Image" />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <img src={tsLogo} alt="Image" />
                    <h5>TypeScript</h5>
                  </div>
                  <div className="item">
                    <img src={tailwindLogo} alt="Image" id="tailwind-logo" />
                    <h5>Tailwind</h5>
                  </div>
                  <div className="item">
                    <img src={nodeLogo} alt="Image" id="node-logo" />
                    <h5>Node</h5>
                  </div>
                  <div className="item">
                    <img src={bootstrapLogo} alt="Image" />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <img src={scssLogo} alt="Image" />
                    <h5>SCSS</h5>
                  </div>
                </Carousel>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
