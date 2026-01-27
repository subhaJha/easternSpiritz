import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsGraphUpArrow,
  BsPeople,
  BsShieldCheck,
  BsMap,
} from "react-icons/bs";
import "../styles/home.css";
import liquorMarketing from "../assets/liquor-marketing.png";
import marketExecution from "../assets/market-execution.png";



export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="fade-up">
              <h1>Eastern Spiritz</h1>
              <p className="subtitle">
                Sales & Marketing Consultancy for Liquor Brands across
                Eastern India
              </p>

              <Button as={Link} to="/contact" variant="warning">
                Partner With Us
              </Button>
            </Col>

            <Col lg={5} className="d-none d-lg-block">
              {/* <img
                src="https://images.unsplash.com/photo-1514361892635-eae31f15d4bb"
                alt="Liquor marketing"
                className="hero-image"
              /> */}
              <img src={liquorMarketing} alt="Liquor Marketing"  className="section-image"/>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="home-section light-bg">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="fade-up">
              {/* <img
                src="https://images.unsplash.com/photo-1523362628745-0c100150b7a1"
                alt="Market execution"
                className="section-image"
              /> */}
              <img src={marketExecution} alt="Market Execution" className="who-we-image" />

            </Col>

            <Col lg={6} className="fade-up">
              <h2>Who We Are</h2>
              <p>
                Eastern Spiritz is a specialized sales and marketing consultancy
                dedicated to the alcoholic beverage industry. We help liquor
                brands enter, grow, and sustain themselves in highly regulated
                Eastern Indian markets.
              </p>
              <p>
                Our strength lies in compliance-first execution, strong
                on-ground networks, and data-driven sales planning.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT WE DO (UNCHANGED STRUCTURE, BETTER VISUALS) */}
      <section className="home-section">
        <Container>
          <h2 className="mb-4 text-center fade-up">What We Do</h2>

          <Row className="g-4">
            {[
              "OSBCL Registration & Compliance",
              "Sales & Beat Planning",
              "Depot-wise Stock Planning",
              "Manpower Planning & Recruitment",
              "Market Claims & Settlements",
              "Marketing Activity Execution",
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card className="service-card fade-up">
                  <Card.Body>{item}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button as={Link} to="/services" variant="dark">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-section light-bg">
        <Container>
          <h2 className="mb-5 text-center fade-up">Why Eastern Spiritz</h2>

          <Row className="g-4">
            <Col md={3}>
              <div className="why-card fade-up">
                <BsShieldCheck />
                <h6>Compliance First</h6>
              </div>
            </Col>

            <Col md={3}>
              <div className="why-card fade-up">
                <BsGraphUpArrow />
                <h6>Sales Driven</h6>
              </div>
            </Col>

            <Col md={3}>
              <div className="why-card fade-up">
                <BsPeople />
                <h6>Strong Manpower</h6>
              </div>
            </Col>

            <Col md={3}>
              <div className="why-card fade-up">
                <BsMap />
                <h6>Eastern India Focus</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <Container>
          <h3>Looking to Expand Your Brand?</h3>
          <p>
            Let Eastern Spiritz handle your sales, compliance, and market
            execution across Eastern India.
          </p>
          <Button as={Link} to="/contact" variant="warning">
            Get In Touch
          </Button>
        </Container>
      </section>
    </>
  );
}
