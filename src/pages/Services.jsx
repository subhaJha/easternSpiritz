import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaFileSignature,
  FaChartLine,
  FaWarehouse,
  FaUsers,
  FaHandshake,
  FaBullhorn
} from "react-icons/fa";
import "../styles/services.css";

const services = [
  {
    icon: <FaFileSignature />,
    title: "OSBCL Registration & Compliance",
    desc: "End-to-end support for registrations, documentation, and excise compliance."
  },
  {
    icon: <FaChartLine />,
    title: "Sales & Beat Planning",
    desc: "Market-wise beat plans designed for maximum retail penetration."
  },
  {
    icon: <FaWarehouse />,
    title: "Depot-wise Stock Planning",
    desc: "Optimized stock planning aligned with demand and depot movement."
  },
  {
    icon: <FaUsers />,
    title: "Manpower Planning & Recruitment",
    desc: "Recruitment and deployment of sales teams for on-ground execution."
  },
  {
    icon: <FaHandshake />,
    title: "Market Claims & Settlements",
    desc: "Structured handling of claims and trade settlements."
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Activity Execution",
    desc: "Planning and execution of visibility and brand activation programs."
  }
];

export default function Services() {
  return (
    <section className="section section-light mt-4">
      <Container>
        <h1 className="mb-5 fade-up">Our Services</h1>

        <Row className="g-4">
          {services.map((service, i) => (
            <Col md={4} key={i}>
              <Card className="service-card animated-card fade-up">
                <div className="service-icon">{service.icon}</div>
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
