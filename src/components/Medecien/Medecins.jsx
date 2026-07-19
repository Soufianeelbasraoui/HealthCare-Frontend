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
    api
      .get("/api/medecin?page=0&size=5")
      .then((res) => {
         setMedecin(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);


  const handleShow=(id)=>{
    navigate(`/dashboard/medecinsList/consulterMedecin/${id}`)
  }
  const handleDelete=(id)=>{
    try{
    api.delete(`/api/medecin/${id}`)
    setMedecin(medecin.filter((item)=>item.id!==id));
    alert("comfirmer delet")
    }catch (error){
      console.log(error);
      alert("errro de delet")
    }

  }

  return (
    <div className="dashboard-layout">
    
      <Sidebar />

      <main className="dashboard-main">
        <div className="table-panel">
          <div className="d-flex gap-5  justify-content-between mb-4">
            <h5>Liste des medecins</h5>
            <button className="btn-ajouter">
              
              <Link to='/dashboard/medecinsList/nouveau'>ajouter</Link>
            </button>

          </div>
          <table  className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Spécialité</th>
                <th>soufiane</th>
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
                  <button className="icon-btn icon-show" onClick={() => handleShow(item.id)}><FaEye /></button>
                  <button  className="icon-btn icon-edit"><Link to={`/dashboard/medecinsList/modifier/${item.id}`} >   <FaEdit/></Link>  </button>
                  <button   className="icon-btn icon-delete" onClick={()=>handleDelete(item.id)}> <FaTrash /> </button>
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