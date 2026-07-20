import { Link } from "react-router-dom";
 
function Unauthorized() {
  return (
    <div className="unauthorized-page">
      <h2>Accès refusé</h2>
      <p>Vous n'avez pas les droits nécessaires pour voir cette page.</p>
      <Link to="/dashboard">Retour au tableau de bord</Link>
    </div>
  );
}
 
export default Unauthorized;