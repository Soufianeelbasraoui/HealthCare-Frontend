import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import api from "../../../services/api";
import "./ShowPatient.css";

function ShowPatient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    api
      .get(`/api/patient/${id}`)
      .then((res) => setPatient(res.data))
      .catch(console.error);
  }, [id]);

  if (!patient) {
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <p className="show-loading">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />
       <main className="dashboard-main">
          <header className="dashboard-topbar">
          <h1 className="dashboard-title">Patient</h1>
          <div className="dashboard-profile">
            <div className="profile-text">
              
              <strong>{user?.username}</strong>
              <span>{user?.role}</span>
            </div>
        
          </div>
        </header>
        <div className=" container mt-5">
        <div>
          <span><strong>Nom:</strong>{patient.username}</span>
        </div>
        <div>
          <span><strong>Prenom</strong>{patient.prenom}</span>
        </div>
        <div>
          <span ><strong>Email</strong>{patient.email}</span>
        </div>
        <div >
          <span><strong>Téléphone:</strong>{patient.telephone}</span>
        </div>

        <div >
          <span ><strong>Date de naissance:</strong>{patient.dateNaissance}</span>
        </div>
        <Link to="/dashboard/patients">Retour</Link>

      </div>
       </main>
      
    </div>
  );
}

export default ShowPatient;