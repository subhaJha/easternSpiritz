import { Container, Row, Col } from "react-bootstrap";
import "../styles/brands.css";

// IMPORT BRAND IMAGES (FROM src/assets)
import yakshaImg from "../assets/YakshaWhiskey.png";
import saltyImg from "../assets/SaltyNerdVodka.png";
import cherrapunjiImg from "../assets/cherrapunji-gin_orig.png";

export default function Brands() {
  return (
    <section className="section section-light brands-page mt-5">
      <Container>
        <h1 className="mb-5 fade-up text-center">Brands We Promote</h1>

        {/* YAKSHA */}
        <Row className="align-items-center brand-row fade-up">
          <Col md={6}>
            <img
              src={yakshaImg}
              alt="Yaksha Whiskey"
              className="brand-image"
              loading="lazy"
            />
          </Col>
          <Col md={6}>
            <h3 className="brand-name">Yaksha</h3>
            <span className="brand-category">Whiskey</span>
            <p className="brand-description">
              Yaksha is a bold Indian whiskey brand positioned for strong
              regional performance and scalable growth across Odisha,
              supported by structured sales execution and market penetration.
            </p>
          </Col>
        </Row>

        {/* SALTY NERD */}
        <Row className="align-items-center brand-row fade-up flex-md-row-reverse">
          <Col md={6}>
            <img
              src={saltyImg}
              alt="Salty Nerd Vodka"
              className="brand-image"
              loading="lazy"
            />
          </Col>
          <Col md={6}>
            <h3 className="brand-name">Salty Nerd</h3>
            <span className="brand-category">Vodka</span>
            <p className="brand-description">
              Salty Nerd is a contemporary vodka brand targeted at urban and
              semi-urban consumers, designed for visibility-led growth and
              modern retail positioning.
            </p>
          </Col>
        </Row>

        {/* CHERRAPUNJI GIN */}
        <Row className="align-items-center brand-row fade-up">
          <Col md={6}>
            <img
              src={cherrapunjiImg}
              alt="Cherrapunji Eastern Craft Gin"
              className="brand-image"
              loading="lazy"
            />
          </Col>
          <Col md={6}>
            <h3 className="brand-name">Cherrapunji</h3>
            <span className="brand-category">Eastern Craft Gin</span>
            <p className="brand-description">
              Cherrapunji Eastern Craft Gin is inspired by the rainiest place
              on earth, blending regional storytelling with premium craft
              positioning for niche and premium liquor markets.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
