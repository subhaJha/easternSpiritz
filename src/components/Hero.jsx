export default function Hero() {
  return (
    <header style={{
      background: "linear-gradient(to right, #111, #222)",
      color: "white",
      padding: "120px 20px",
      textAlign: "center"
    }}>
      <h1 style={{ letterSpacing: "2px" }}>EASTERN SPIRITZ</h1>
      <p style={{ margin: "15px 0" }}>
        Share the Spirit of the East
      </p>
      <p>
        Sales & Marketing Consultancy for Liquor Brands
      </p>
      <button style={{
        marginTop: "25px",
        padding: "12px 30px",
        borderRadius: "30px",
        border: "none",
        background: "#c9a24d",
        fontWeight: "600",
        cursor: "pointer"
      }}>
        Contact Us
      </button>
    </header>
  );
}
