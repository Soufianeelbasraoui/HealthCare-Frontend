import { useEffect, useState } from "react";
import {
  FaUserFriends,
  FaStethoscope,
  FaCalendarAlt,
  FaFolderOpen,
  FaUserPlus,
  FaCalendarCheck,
  FaFileMedicalAlt,
} from "react-icons/fa";
import api from "../../services/api";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import { Link } from "react-router-dom";


function Dashboard() {
  const [nbPatients, setNbPatients] = useState(0);
  const [nbMedecins, setNbMedecins] = useState(0);
  const [nbRendezVous, setNbRendezVous] = useState(0);
  const [rendezVous, setRendezVous] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
 
  useEffect(() => {
   
    api.get("/api/patient?page=0&size=1").then((res) => {
      setNbPatients(res.data.totalElements);
    });


    api.get("/api/medecin?page=0&size=1").then((res) => {
      setNbMedecins(res.data.totalElements);
      
    });

  
    api.get("/api/rendezVous?page=0&size=5").then((res) => {
      setRendezVous(res.data.content);
      setNbRendezVous(res.data.totalElements || res.data.content?.length || 0);
      console.log(res.data)
    });

    api.get("/api/dossier/all").then((res)=>{
      console.log(res.data)
      setDossier(res.data)
    })
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <h1 className="dashboard-title">Tableau de bord</h1>
          <div className="dashboard-profile">
            <div className="profile-text">
              
              <strong>{user?.username}</strong>
              <span>{user?.role}</span>
            </div>
        
          </div>
        </header>

      
        <section className="stats-grid">
          <div className="stat-card stat-border-blue">
            <div className="stat-card-text">
              <span>Patients</span>
              <strong>{nbPatients}</strong>
            </div>
            <div className="stat-icon icon-bg-blue">
              <FaUserFriends />
            </div>
          </div>

          <div className="stat-card stat-border-green">
            <div className="stat-card-text">
              <span>Médecins</span>
              <strong>{nbMedecins}</strong>
            </div>
            <div className="stat-icon icon-bg-green">
              <FaStethoscope />
            </div>
          </div>

          <div className="stat-card stat-border-orange">
            <div className="stat-card-text">
              <span>RDV aujourd'hui</span>
              <strong>{nbRendezVous}</strong>
            </div>
            <div className="stat-icon icon-bg-orange">
              <FaCalendarAlt />
            </div>
          </div>

          <div className="stat-card stat-border-navy">
            <div className="stat-card-text">
              <span>Dossiers</span>
              <strong>{dossier.length}</strong>
            </div>
            <div className="stat-icon icon-bg-navy">
              <FaFolderOpen />
            </div>
          </div>
        </section>

        <section className="dashboard-content-grid">
          <div className="rdv-panel">
            <div className="panel-header">
              <h2>Derniers Rendez-vous</h2>
              <Link to="/dashboard/rendezVous" className="panel-link">
                Voir tout
              </Link>
            </div>

            <table className="rdv-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Médecin</th>
                  <th>Date</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {rendezVous.map((rdv) => (
                  <tr key={rdv.id}>
                    <td>{rdv.patientId}</td>
                    <td>{rdv.medecinId}</td>
                    <td>{rdv.dateRendezVous}</td>
                    <td>
                      <span className="badge badge-planifie">
                        {rdv.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="actions-panel">
            <h2>Actions rapides</h2>

            <Link to="/dashboard/patients/nouveau" className="action-item">
              <span className="action-icon icon-bg-blue">
                <FaUserPlus />
              </span>
              <div>
                <strong>Ajouter patient</strong>
                <p>Enregistrer un nouvel assuré</p>
              </div>
            </Link>

            <Link to="/dashboard/rendezVous/nouveau" className="action-item">
              <span className="action-icon icon-bg-yellow">
                <FaCalendarCheck />
              </span>
              <div>
                <strong>Nouveau RDV</strong>
                <p>Placer une consultation</p>
              </div>
            </Link>

            <Link to="/dashboard/dossiers/nouveau" className="action-item">
              <span className="action-icon icon-bg-navy">
                <FaFileMedicalAlt />
              </span>
              <div>
                <strong>Créer dossier</strong>
                <p>Historique médical complet</p>
              </div>
            </Link>

            <Link to="/dashboard/medecinsList/nouveau" className="action-item">
              <span className="action-icon icon-bg-green">
                <FaUserPlus />
              </span>
              <div>
                <strong>Ajouter médecin</strong>
                <p>Recruter un nouveau praticien</p>
              </div>
            </Link>

            <div className="system-status">
              <span>Système à jour</span>
              <strong>HealthCare+ v2.4.0</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;