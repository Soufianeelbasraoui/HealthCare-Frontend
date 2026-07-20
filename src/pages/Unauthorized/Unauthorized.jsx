import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleBack = () => {
    if (user?.role === "ADMIN") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard/rendezVous");
    }
  };

  return (
    <div className="unauthorized-page">
      <h2>Accès refusé</h2>
      <p>Vous n'avez pas les droits nécessaires pour accéder à cette page.</p>

      <button onClick={handleBack}>
        Retour
      </button>
    </div>
  );
}

export default Unauthorized;