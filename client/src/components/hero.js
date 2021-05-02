import { Col, Container, Row } from "react-bootstrap";

const Hero = () => (
  <Container fluid>
    <Row className="hero-section-top">
      <Col sm className="hero-left">
        <div className="hero-content">
          <div className="hero-title">
            While you are still standing, try to reach out to the people who are falling.
          </div>
          <div className="hero-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <button className="btn btn-hero">Donate now</button>
        </div>
      </Col>
      <Col className="hero-right">
        <div className="hero-content">
          <img className="d-none d-lg-block" src="/foto1.jpg" alt="foto-1" />
        </div>
      </Col>
    </Row>
    <Row className="hero-section-bottom">
      <Col md={5} className="hero-left">
        <img className="d-none d-lg-block" src="/foto2.jpg" alt="foto-2" />
      </Col>
      <Col className="hero-right">
        <div className="hero-content">
          <div className="hero-title">
            Your donation is very helpful for people affected by forest fires in Kalimantan.
          </div>
          <Row>
            <Col>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Col>
            <Col>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
)

export default Hero
