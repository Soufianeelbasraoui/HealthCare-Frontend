import { useEffect, useState } from "react";
import Sidebar from "../../pages/Sidebar/Sidebar";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import "./Medecins.css";
function Medecins() {
  const [medecin, setMedecin] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/medecin?page=0&size=50")
      .then((res) => {
        setMedecin(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShow = (id) => {
    navigate(`/dashboard/medecinsList/consulterMedecin/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/medecin/${id}`);
      setMedecin(medecin.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
      alert("Erreur lors de la suppression");
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="table-panel">
          <div className="d-flex gap-5 justify-content-between mb-4">
            <h5>Liste des médecins</h5>
            <Link to="/dashboard/medecinsList/nouveau" className="btn-ajouter">
              Ajouter
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Spécialité</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {medecin.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.specialite}</td>
                  <td>{item.email}</td>
                  <td>{item.telephone}</td>
                  <td>
                    <button className="icon-btn icon-show" onClick={() => handleShow(item.id)}>
                      <FaEye />
                    </button>
                    <Link to={`/dashboard/medecinsList/modifier/${item.id}`} className="icon-btn icon-edit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaEdit />
                    </Link>
                    <button className="icon-btn icon-delete" onClick={() => handleDelete(item.id)}>
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

export default Medecins;