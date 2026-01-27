import { Container, Row, Col } from "react-bootstrap";
import "../styles/about.css";

// If image is in src/assets (recommended)
import marketExecution from "../assets/market-execution.png";
// OR if you use public/images, comment above and use:
// const marketExecution = "/images/market-execution.png";

export default function About() {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center g-5">
          {/* LEFT: IMAGE */}
          <Col lg={6} className="fade-up">
            <img
              src={marketExecution}
              alt="Market Execution"
              className="about-image"
            />
          </Col>

          {/* RIGHT: CONTENT */}
          <Col lg={6} className="fade-up">
            <h1>About Eastern Spiritz</h1>

            <p>
              Eastern Spiritz is a specialized sales and marketing consultancy
              focused exclusively on the alcoholic beverage industry. We work
              closely with liquor brands to help them navigate complex excise
              regulations and build sustainable market presence.
            </p>

            <p>
              Our operations are deeply rooted in Eastern India, with active
              execution across Odisha, West Bengal, Assam, and Jharkhand. From
              registrations and compliance to on-ground sales execution, we act
              as an extended growth arm for our partner brands.
            </p>

            <p>
              With a strong understanding of depot systems, beat planning,
              manpower deployment, and market intelligence, Eastern Spiritz
              delivers structured, scalable, and compliance-first growth
              strategies.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
