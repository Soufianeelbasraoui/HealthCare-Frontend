import { useEffect, useState } from "react";
import { FaSearch, FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import api from "../../services/api";
import Sidebar from "../../pages/Sidebar/Sidebar";
import "./PatientList.css";
import { Link, useNavigate } from "react-router-dom";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [recherche, setRecherche] = useState("");
  const navigate =useNavigate();

  useEffect(() => {
    api.get("/api/patient?size=50").then((res) => {
      setPatients(res.data.content);
  });
  },[]);

  const handleSearch = () => {
    api.get("/api/patient/search?nom=" + recherche).then((res) => {
      setPatients(res.data.content);
    });
  };
 const handleShow = (id) => {
    navigate(`/dashboard/patients/ShowPatinet/${id}`);
  };
  const handleDelete = (id) => {
     api.delete("/api/patient/" + id);
     setPatients(patients.filter((item) => item.id !== id));
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
          <h2>Liste des Patients</h2>
          <button className="btn-ajouter">
            <FaPlus /> <Link to="/dashboard/patients/nouveau" >Ajouter patient</Link>
          </button>
        </div>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un patient par nom..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
          <button onClick={handleSearch}>Rechercher</button>
        </div>

        <div className="patients-panel">
          <table className="patients-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Date Naissance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.prenom}</td>
                  <td>{item.email}</td>
                  <td>{item.telephone}</td>
                  <td>{item.dateNaissance}</td>
                  <td>
                  <button className="icon-btn icon-show" onClick={() => handleShow(item.id)}>
                   <FaEye />
                  </button>
                    <button className="icon-btn icon-edit">
                      <Link  to={`/dashboard/patients/modifier/${item.id}`}>
                            <FaEdit />
                      </Link>
                     
                    </button>
                    <button
                      className="icon-btn icon-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default PatientList;