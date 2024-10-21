import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/fatima-ahmed-256560256/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/FatimaAhmed890" target="_blank"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Made with ❤ by Fatima Ahmed</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
