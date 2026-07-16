import { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./AjouterPatient.css";
import api from "../../../services/api";
import Sidebar from "../../../pages/Sidebar/Sidebar";

function AjouterPatient() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const[password ,setPassword]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/patient", {
        username,
        prenom,
        password,
        email,
        telephone,
        dateNaissance,

      });

      navigate("/dashboard/patients");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <h1 className="dashboard-title">Patients</h1>
          <div className="dashboard-profile">
            <div className="profile-text">
              <strong>Dr. Jean Dupont</strong>
              <span>CARDIOLOGUE</span>
            </div>
            <div className="profile-avatar" />
          </div>
        </header>

        <div className="patients-header">
          <h2>Ajouter un Patient</h2>
        </div>

        <div className="form-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                 type="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />

            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Téléphone</label>
              <input
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Date de naissance</label>
              <input
                type="date"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                required
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-annuler"
                onClick={() => navigate("/dashboard/patients")}
              >
                Annuler
              </button>
              <button type="submit" className="btn-enregistrer">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AjouterPatient;