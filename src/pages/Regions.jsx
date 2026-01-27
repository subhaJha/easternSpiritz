import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import RegionsMapLeaflet from "../components/RegionsMapLeaflet";
import "../styles/regions.css";

const REGIONS = ["Odisha", "Jharkhand", "West Bengal", "Assam"];

export default function Regions() {
  // "ALL" = highlight only operating regions initially
  const [activeRegion, setActiveRegion] = useState("ALL");

  return (
    <section className="section section-light regions-section mt-5">
      <Container>
        <h1 className="mb-4 fade-up">Regions of Operation</h1>

        <Row className="g-4 align-items-stretch">
          {/* LEFT: STATE LIST */}
          <Col lg={4}>
            <Row className="g-3">
              {REGIONS.map((region) => (
                <Col md={6} lg={12} key={region}>
                  <Card
                    className={`region-card ${
                      activeRegion === region ? "active" : ""
                    }`}
                    onClick={() => setActiveRegion(region)}
                  >
                    {region}
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* RIGHT: MAP */}
          <Col lg={8}>
            <div className="map-wrapper fade-up">
              <RegionsMapLeaflet activeRegion={activeRegion} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
