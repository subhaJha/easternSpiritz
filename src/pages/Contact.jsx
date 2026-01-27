import { Container, Row, Col, Card } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="section section-light mt-5">
      <Container>
        <h1 className="mb-5 fade-up">Contact Us</h1>

        <Row className="g-4">
          <Col md={6}>
            <Card className="p-4 shadow-sm animated-card fade-up">
              <h5>Eastern Spiritz</h5>
              <p className="mt-3">
                S3/334, Niladri Vihar<br />
                Bhubaneswar, Odisha
              </p>
              <p>📞 +91 76570 61595</p>
              <p>📧 eastindiaspirits@gmail.com</p>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              bg="dark"
              text="white"
              className="p-4 animated-card fade-up fade-delay-1"
            >
              <h5 className="text-warning">Business Enquiries</h5>
              <p className="mt-3">
                Reach out to discuss sales, marketing, and consultancy
                opportunities. We respond promptly.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
