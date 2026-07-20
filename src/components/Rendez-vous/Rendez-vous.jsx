import { useEffect, useState } from "react";
import Sidebar from "../../pages/Sidebar/Sidebar";
import api from "../../services/api";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


function RendezVous(){
    const[rendezVous,setRendezVous]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        api.get("/api/rendezVous?page=0&size=50").then((res) => {
          setRendezVous(res.data.content);
        }).catch((error) => {
          console.log(error);
        });
    },[])

const handleEdit = (id) => {
  navigate(`/dashboard/rendezVous/modifier/${id}`);
};
const handleDelete = async (id)=>{
    try {
      await api.delete(`/api/rendezVous/${id}`);
      setRendezVous(rendezVous.filter((item)=>item.id!==id)); 
    } catch (error){
      console.log(error);
    }
}
    return(
        <div className="dashboard-layout">
            <Sidebar/>
            <main className="dashboard-main ">
            <div className="container mt-4 ">
               <div className="d-flex justify-content-between mb-4">
                <h2>Liste des Rendez-Vous</h2>
                <Link to="/dashboard/rendezVous/nouveau" className="btn-ajouter">Créer Rendez-Vous</Link>
               </div>
               <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th> 
                            <th>Date Rendez-Vous</th>
                            <th>Patient ID</th>
                            <th>Médecin ID</th>
                            <th>Statut</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rendezVous.map((item,index)=>(
                            <tr key={index} >
                                <td>{item.id}</td>
                                <td>{item.dateRendezVous}</td>
                                <td>{item.patientId}</td>
                                <td>{item.medecinId}</td>
                                <td>{item.statut}</td>
                                <td>
                                    <button className="icon-btn icon-show" onClick={()=>handleEdit(item.id)}><FaEdit/></button>
                                    <button className="icon-btn icon-delete" onClick={()=>handleDelete(item.id)}><FaTrash /> </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               </div>
            </div>
          </main>
        </div>
    )
}
export default RendezVous;