import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from "../assets/fatima_ahmed_resume.pdf"

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resume;
  link.download = 'Fatima_Ahmed_Resume.pdf';
  link.click();
};

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "AI/ML Practitioner", "Data Science Enthusiast", "DevOps Landscape Explorer", ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 4);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Digital Workspace!</span>
                <h1>{`Hi! I'm Fatima,`} <span className="txt-rotate" dataPeriod="800" data-rotate='[ "AI/ML Practitioner", "Data Science Enthusiast", "DevOps Landscape Explorer ]'><span className="wrap">{text}</span></span></h1>
                  <p className="purple-text">I'm <b>Fatima Ahmed</b>, a CS enthusiast driven by curiosity and a passion for uncovering
                     insights from raw data. Throughout my journey, I've honed my skills in <b>Data Science</b> and <b>Machine Learning</b> and applied them to a variety of projects. Along with my ongoing journey into <b>AI/ML</b>, 
                     I'm actively learning and exploring <b>DevOps</b> and <b>Software Development</b> best practices and principles like <b>CI/CD</b>, <b>microservices</b>, <b>cloud computing</b> and <b>agile methodologies</b>.
                     I'm also well versed in <b>Web Automation</b> and <b>Web Development</b>. 
                      I'm eager to collaborate on real world projects and apply best practices to build efficient and reliable solutions.                    
                     Let's connect and discuss how we can leverage data and technology to create innovative solutions.</p>
                  <button onClick={handleDownload}> Download Resume <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
