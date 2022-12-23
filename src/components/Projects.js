import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import githubThumbnail from "../assets/img/github-finder-thumbnail.png";
import spotlightThumbnail from "../assets/img/spotlightrsv-wp-thumbnail.png";
import migraineThumbnail from "../assets/img/migraine-wp-thumbnail.png";
import memoryThumbnail from "../assets/img/memorylane-wp-thumbnail.png";
import nucampThumbnail from "../assets/img/nucamp-project-thumbnail.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Github User Finder",
      description: "React, Github API, Tailwind, DaisyUI",
      imgUrl: githubThumbnail,
    },
    {
      title: "Nucampsite",
      description: "React, Redux, Formik, Reactstrap",
      imgUrl: nucampThumbnail,
    },
    {
      title: "Lucas Project #3",
      description: "React",
      imgUrl: githubThumbnail,
    },
  ];

  const projectsSecondTab = [
    {
      title: "Chronic Migraine",
      description: "WordPress, Elementor, GA4",
      imgUrl: migraineThumbnail,
    },
    {
      title: "Spotlight RSV",
      description: "WordPress, Elementor, GA4",
      imgUrl: spotlightThumbnail,
    },

    {
      title: "Alzheimer's Disease",
      description: "WordPress, Elementor, GA4",
      imgUrl: memoryThumbnail,
    },
  ];

  const projectsThirdTab = [
    {
      title: "Misc",
      description: "misc",
      imgUrl: githubThumbnail,
    },
    {
      title: "Misc",
      description: "misc",
      imgUrl: githubThumbnail,
    },
    {
      title: "Misc",
      description: "misc",
      imgUrl: githubThumbnail,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2 className="pb-4">Projects</h2>
            {/* <p>
              The following are some projects I've created that are separated by
              what technologies I primarily used at the time.
            </p> */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">WordPress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Misc.</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsSecondTab.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
