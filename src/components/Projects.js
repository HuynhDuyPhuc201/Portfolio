import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kymco from "../assets/img/kymco.jpg";
import gbox from "../assets/img/gbox.jpg";
import wooder from "../assets/img/wooder.jpg";
import speedy from "../assets/img/speedy.jpg";
import shop from "../assets/img/shop.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Kymco",
      description: "Design & Development",
      imgUrl: kymco,
      URL: 'https://kymco.vercel.app/'
    },
    {
      title: "Wooder",
      description: "Design & Development",
      imgUrl: wooder,
      URL: "https://wooder-five.vercel.app/"
    },
    {
      title: "SPEEDy CAR",
      description: "Design & Development",
      imgUrl: speedy,
      URL: "https://speed-car.vercel.app/"
    },
    {
      title: "React Shop",
      description: "Design & Development",
      imgUrl: shop,
      URL: "https://dpshop.vercel.app/"
    },
    {
      title: "G-Box",
      description: "Design & Development",
      imgUrl: gbox,
      URL: "https://g-box.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Not Project</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Not Project</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
