import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../../pages/Sidebar/Sidebar";
import api from "../../../services/api";

function ListeDossiers() {
  const [dossiers, setDossiers] = useState([]);
  useEffect(() => {
    fetchDossiers();
  }, []);
  const fetchDossiers = async () => {
    try {
      const response = await api.get("/api/dossier/all");
      setDossiers(response.data);
    } catch (error) {
      console.log(error);
      alert("Erreur lors du chargement des dossiers.");
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Liste des dossiers médicaux</h2>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <table className="table table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Diagnostic</th>
                  <th>Observations</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dossiers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Aucun dossier trouvé.
                    </td>
                  </tr>
                ) : (
                  dossiers.map((dossier) => (
                    <tr key={dossier.id}>
                      <td>{dossier.id}</td>
                      <td>{dossier.patientId}</td>
                      <td>{dossier.diagnostic}</td>
                      <td>{dossier.observations}</td>
                      <td>{dossier.createdAt}</td>
                      <td>
                        <Link
                          to={`/dashboard/dossiers/consulterDossier/${dossier.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Consulter
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListeDossiers;