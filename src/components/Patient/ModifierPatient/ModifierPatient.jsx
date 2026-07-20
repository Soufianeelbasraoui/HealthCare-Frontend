import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../services/api";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import "../Ajouterpatient/Ajouterpatient.css";
function ModifierPatient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
  api.get(`/api/patient/${id}`).then((res) => {
      console.log(res.data);
      setUsername(res.data.username);
      setPrenom(res.data.prenom);
      setEmail(res.data.email);
      setTelephone(res.data.telephone);
      setDateNaissance(res.data.dateNaissance);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/api/patient/${id}`, {
        username,
        prenom,
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
          <h1 className="dashboard-title">Tableau de bord</h1>
          <div className="dashboard-profile">
            <div className="profile-text">
              
              <strong>{user?.username}</strong>
              <span>{user?.role}</span>
            </div>
        
          </div>
        </header>

        <div className="patients-header">
          <h2>Modifier un patient</h2>
        </div>

        <div className="form-panel">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Nom</label>
              <input type="text" value={username}onChange={(e) => setUsername(e.target.value)}  required/>
            </div>

            <div className="form-group">
              <label>Prénom</label>
              <input type="text" value={prenom}   onChange={(e) => setPrenom(e.target.value)}  required/>
            </div>

            <div className="form-group">
              <label>Email</label>

              <input type="email" value={email}   onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div className="form-group">
              <label>Téléphone</label>

              <input type="text"value={telephone} onChange={(e) => setTelephone(e.target.value)}required/>
            </div>

            <div className="form-group">
              <label>Date de naissance</label>

              <input
                type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)}required />
            </div>

            <div className="form-actions">

              <button  type="button" className="btn-annuler"  onClick={() => navigate("/dashboard/patients")} >
                Annuler
              </button>

              <button
                type="submit"
                className="btn-enregistrer"
              >
                Modifier
              </button>

            </div>

          </form>

        </div>

      </main>
    </div>
  );
}

export default ModifierPatient;