import { Container } from "react-bootstrap";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <h1 className="display-5 fw-semibold">{title}</h1>
        <p className="text-warning mt-2">{subtitle}</p>
      </Container>
    </div>
  );
}
