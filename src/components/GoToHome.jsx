// GoToHomeButton.jsx
import { useNavigate } from "react-router-dom";

const GoToHome = () => {
  const navigate = useNavigate();

  return (
    <button
      style={{
        padding: "12px 24px",
        backgroundColor: "#f97316", // Orange-400
        color: "white",
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
        fontSize: "16px",
        transition: "background-color 0.3s, transform 0.2s",
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.2)",
        // Responsive design for smaller screens
        width: "auto",
        maxWidth: "200px",
        margin: "0 10px",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")} // Orange-600 on hover
      onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")} // Back to Orange-400
      onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")} // Click effect
      onMouseUp={(e) => (e.target.style.transform = "scale(1)")} // Release effect
      onClick={() => navigate("/home")}
    >
      Go to Home
    </button>
  );
};

export default GoToHome;
