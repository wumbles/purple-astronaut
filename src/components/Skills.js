import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactLogo from "../assets/img/react-logo.svg";
import nodeLogo from "../assets/img/node-logo.svg";
import bootstrapLogo from "../assets/img/bootstrap-logo.png";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Blandit volutpat maecenas volutpat blandit. Erat nam at lectus
                urna duis convallis convallis tellus id.
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={reactLogo} alt="Image" />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <img src={nodeLogo} alt="Image" />
                    <h5>NodeJS</h5>
                  </div>
                  <div className="item">
                    <img src={bootstrapLogo} alt="Image" />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Swag Percent</h5>
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
