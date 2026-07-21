import { useNavigate } from "react-router-dom";
import { FaBan } from "react-icons/fa";

import "./Unauthorized.css";
import { getUser } from "../../services/authService";

function Unauthorized() {
  const navigate = useNavigate();
  const user = getUser();

  const handleBack = () => {
    if (user?.role === "ADMIN") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard/rendezVous");
    }
  };

  return (
    <div className="unauthorized-wrapper">
      <div className="unauthorized-card">
        <div className="unauthorized-icon">
          <FaBan />
        </div>

        <h2 className="unauthorized-title">Accès refusé</h2>
        <p className="unauthorized-text">
          Vous n'avez pas les droits nécessaires pour accéder à cette page.
        </p>

        <button className="unauthorized-btn" onClick={handleBack}>
          Retour
        </button>
      </div>
    </div>
  );
}

export default Unauthorized;