import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <Container>
        <Row className="gy-4">
          {/* BRAND */}
          <Col md={4}>
            <h4 className="footer-brand">Eastern Spiritz</h4>
            <p className="footer-text">
              Sales & Marketing Consultancy for Liquor Brands across
              Eastern India.
            </p>
          </Col>

          {/* QUICK LINKS */}
          <Col md={4}>
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="brands">Brands</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/regions">Regions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col md={4}>
            <h6 className="footer-title">Contact</h6>
            <p className="footer-text">
              S3/334, Niladri Vihar<br />
              Bhubaneswar, Odisha
            </p>
            <p className="footer-text">
              📞 7657061595<br />
              ✉ eastindiaspirits@gmail.com
            </p>
          </Col>
        </Row>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Eastern Spiritz. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
