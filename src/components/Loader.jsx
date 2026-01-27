import "../styles/loader.css";
import logo from "../assets/logo1.png";

export default function Loader({ exit }) {
  return (
    <div className={`loader-wrapper ${exit ? "exit" : ""}`}>
      <div className="loader-content">
        <img
          src={logo}
          alt="Eastern Spiritz"
          className={`loader-logo ${exit ? "logo-travel" : ""}`}
        />

        {!exit && (
          <>
            <h1 className="loader-title">Eastern Spiritz</h1>
            <p className="loader-subtitle">
              Share the Spirit of the East
            </p>

            <div className="loader-bar">
              <span />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
