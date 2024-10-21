import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.jpg";
import projImg2 from "../assets/img/project-2.jpg";
import projImg3 from "../assets/img/project-3.jpg";
import projImg4 from "../assets/img/project-4.jpg";
import projImg5 from "../assets/img/project-5.jpg";
import projImg6 from "../assets/img/project-6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Exploratory Data Analysis of CoinMarketCap",
      description: "Web-scraping & Data Analysis using Python",
      click: "Click for LIVE DEMO",
      imgUrl: projImg1,
      link: "https://eda-crypto-phatyma.streamlit.app/"
    },
    {
      title: "Pengiuns Classification",
      description: "Classification model building and predictions using Python",
      click: "Click for LIVE DEMO",
      imgUrl: projImg2,
      link: "https://penguins-classification-phatymah.streamlit.app/"
    },
    {
      title: "Time Series Forecasting",
      description: "Machine Learning model to forecast energy consumption",
      click: "Click for Source Code",
      imgUrl: projImg3,
      link: "https://www.kaggle.com/code/phatymaahmed/time-series-forecasting-with-machine-learning?scriptVersionId=200333247"
    },
    {
      title: "DNA Nucleotide Count Web-App",
      description: "Streamlit app to count the nucleotides in a DNA sample.",
      click: "Click for LIVE DEMO",
      imgUrl: projImg4,
      link: "https://dna-count-phatymah.streamlit.app/"
    },
    {
      title: "Sales Data Analysis",
      description: "Data Analysis using PowerBI",
      click: "Click for Source Code",
      imgUrl: projImg5,
      link: "https://github.com/FatimaAhmed890/Data-Analysis"
    },
    {
      title: "Algorithm Visualizer",
      description: "Sorting Algorithm Visualizer using Python",
      click: "Click for Source Code",
      imgUrl: projImg6,
      link: "https://github.com/FatimaAhmed890/Sorting-Visualizer"
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
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Link eventKey="first">Feel free to explore my Projects!</Nav.Link>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
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
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </Tab.Pane> */}
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
