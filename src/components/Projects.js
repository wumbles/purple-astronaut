import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import githubThumbnail from "../assets/img/github-finder-thumbnail.png";
// import spotlightThumbnail from "../assets/img/spotlightrsv-wp-thumbnail.png";
import migraineThumbnail from "../assets/img/migraine-wp-thumbnail.png";
import edgewoodThumbnail from "../assets/img/edgewood-thumbnail.png";
import yarigaThumbnail from "../assets/img/yariga-project-thumbnail.png";
import moonThumbnail from "../assets/img/moon-phase-thumbnail.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import hivThumbnail from "../assets/img/hivThumbnail.png";
import rsvThumbnail from "../assets/img/rsvThumbnail.png";
import heartweightThumbnail from "../assets/img/heartweightThumbnail.png";
import scotchpinesThumbnail from "../assets/img/scotchpines-thumbnail.png";

export const Projects = () => {
  // React projects tab
  const projects = [
    {
      title: "Moon Phase",
      description: "React, Rapid API",
      imgUrl: moonThumbnail,
      link: "https://lucas-moon.vercel.app",
    },
    {
      title: "Yariga Properties",
      description: "MERN, TypeScript, Google OAuth",
      imgUrl: yarigaThumbnail,
      link: "https://mern-dashboard-eight.vercel.app",
    },
    {
      title: "Github User Finder",
      description: "React, Github API, TailwindCSS",
      imgUrl: githubThumbnail,
      link: "https://git-user-finder-pied.vercel.app",
    },
    // {
    //   title: "MS Chat Clone",
    //   description: "Username: user Password: password",
    //   imgUrl: msChatThumbnail,
    //   link: "https://ms-chat-clone.vercel.app",
    // },
  ];

  // WordPress projects tab
  const projectsSecondTab = [
    {
      title: "Chronic Migraine",
      description: "Migraines",
      imgUrl: migraineThumbnail,
      link: "https://www.research4migraine-au.com",
    },
    {
      title: "Edgewood Golf",
      description: "foreUP",
      imgUrl: edgewoodThumbnail,
      link: "https://edgewoodgolf.com",
    },
    {
      title: "Heart Studies",
      description: "BR-Cardiovascular",
      imgUrl: heartweightThumbnail,
      link: "https://estudoscoracaopeso.com",
    },
    {
      title: "Stop HIV-1",
      description: "HIV",
      imgUrl: hivThumbnail,
      link: "https://stophiv-1.com",
    },
    {
      title: "Scotch Pines Golf",
      description: "foreUP",
      imgUrl: scotchpinesThumbnail,
      link: "https://scotchpinesgolf.com",
    },
    {
      title: "Spotlight RSV",
      description: "RSV",
      imgUrl: rsvThumbnail,
      link: "https://www.spotlightrsv.com",
    },
    // {
    //   title: "Alzheimer's Disease",
    //   description: "WordPress, Elementor",
    //   imgUrl: memoryThumbnail,
    //   link: "https://www.explorememorylane.com",
    // },
  ];

  // Extra tab in case I want to expand project variations:

  // const projectsThirdTab = [
  //   {
  //     title: "Misc",
  //     description: "misc",
  //     imgUrl: placeholderThumbnail,
  //   },
  //   {
  //     title: "Misc",
  //     description: "misc",
  //     imgUrl: placeholderThumbnail,
  //   },
  //   {
  //     title: "Misc",
  //     description: "misc",
  //     imgUrl: placeholderThumbnail,
  //   },
  // ];

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
                {/* <Nav.Item>
                  <Nav.Link eventKey="third">Misc.</Nav.Link>
                </Nav.Item> */}
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
                {/* <Tab.Pane eventKey="third">
                  <Row>
                    {projectsThirdTab.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
