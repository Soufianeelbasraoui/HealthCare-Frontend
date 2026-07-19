import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import api from "../../../services/api";

function ConsulterMedecin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [medecin, setMedecin] = useState(null);

  useEffect(() => {
    try{
      api.get(`/api/medecin/${id}`).then((res) => {
        setMedecin(res.data);
      })
    }catch(err){
        console.log(err);
     };
  }, [id]);

  if (!medecin) {
    return <h2>Chargement...</h2>;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <h2>Consulter un médecin</h2>

        <div>
          <p>
            <strong>ID :</strong> {medecin.id}
          </p>

          <p>
            <strong>Nom :</strong> {medecin.username}
          </p>

          <p>
            <strong>Email :</strong> {medecin.email}
          </p>

          <p>
            <strong>Spécialité :</strong> {medecin.specialite}
          </p>

          <p>
            <strong>Téléphone :</strong> {medecin.telephone}
          </p>

          <button
            type="button"
            onClick={() => navigate("/dashboard/medecinsList")}
          >
            Retour
          </button>
        </div>
      </main>
    </div>
  );
}

export default ConsulterMedecin;