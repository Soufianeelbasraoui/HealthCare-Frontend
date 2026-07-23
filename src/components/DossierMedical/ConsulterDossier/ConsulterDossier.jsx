import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import api from "../../../services/api";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import "./ConsulterDossier.css";

function ConsulterDossier() {
  const { id } = useParams();

  const [dossier, setDossier] = useState(null);
  const [diagnostic, setDiagnostic] = useState("");
  const [observations, setObservations] = useState("");
  const [editDiagnostic, setEditDiagnostic] = useState(false);
  const [editObservations, setEditObservations] = useState(false);

  useEffect(() => {
    api.get(`/api/dossier/${id}`).then((res) => {
      setDossier(res.data);
      setDiagnostic(res.data.diagnostic || "");
      setObservations(res.data.observations || "");
    });
  }, [id]);

  const handleEnregistrer = async () => {
    try {
      await api.put(`/api/dossier/${id}/diagnostic`, null, {
        params: { diagnostic },
      });
      await api.put(`/api/dossier/${id}/observations`, null, {
        params: { observations },
      });
      alert("Dossier mis à jour avec succès");
      setEditDiagnostic(false);
      setEditObservations(false);
    } catch (error) {
      console.log(error);
      alert("Erreur lors de la mise à jour");
    }
  };

  if (!dossier) {
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <main className="dashboard-main">
          <p className="dossier-loading">Chargement...</p>
        </main>
      </div>
    );
  }
  const patient = dossier.patient || {};

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="dossier-header">
          <h1>Dossier Médical</h1>
          <p>Informations détaillées du patient</p>
        </div>

        <div className="dossier-panel dossier-patient">
          <div className="dossier-avatar">
            <FaUserCircle />
          </div>
          <div className="dossier-patient-info">
            <h2>
              {patient.username} {patient.prenom}
            </h2>
            <div className="dossier-patient-grid">
              <span>
                <strong>Téléphone :</strong> {patient.telephone ?? "-"}
              </span>
              <span>
                <strong>Email :</strong> {patient.email ?? "-"}
              </span>
              <span>
                <strong>Créé le :</strong> {dossier.dateCreation?? "-"}
              </span>
            </div>
          </div>
        </div>

        <div className="dossier-panel">
          <div className="dossier-section-header">
            <h3>Diagnostic</h3>
            <button className="dossier-edit-btn"onCli ck={() => setEditDiagnostic(!editDiagnostic)}>
              <FaEdit /> Modifier
            </button>
          </div>

          {editDiagnostic ? (
            <textarea   value={diagnostic} onChange={(e) => setDiagnostic(e.target.value)} rows={3} />
          ) : (
            <p className="dossier-text">{diagnostic || "Aucun diagnostic renseigné."}</p>
          )}
        </div>

     
        <div className="dossier-panel">
          <div className="dossier-section-header">
            <h3>Observations</h3>
            <button
              className="dossier-edit-btn"
              onClick={() => setEditObservations(!editObservations)}
            >
              <FaEdit /> Modifier
            </button>
          </div>

          {editObservations ? (
            <textarea
              className="dossier-textarea"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              rows={3}
            />
          ) : (
            <p className="dossier-text">
              {observations || "Aucune observation renseignée."}
            </p>
          )}
        </div>

        <div className="dossier-actions">
          <button className="btn-enregistrer" onClick={handleEnregistrer}>
            Enregistrer les modifications
          </button>
        </div>
      </main>
    </div>
  );
}
export default ConsulterDossier;