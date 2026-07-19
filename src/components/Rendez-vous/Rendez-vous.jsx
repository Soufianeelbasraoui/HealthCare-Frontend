import { useEffect, useState } from "react";
import Sidebar from "../../pages/Sidebar/Sidebar";
import api from "../../services/api";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


function RendezVous(){
    const[rendezVous,setRendezVous]=useState([]);
    const navigate=useNavigate();


    useEffect(()=>{
        try{
           api.get("/api/rendezVous?page=0&size=5").then((res) => {
             setRendezVous(res.data.content);
             console.log(res.data.content);
           });
        }catch (error){
            console.log(error);
        }
        console.log(rendezVous)

    },[])

const handleEdit = (id) => {
  navigate(`/dashboard/rendezVous/modifier/${id}`);
};
const handleDelete=(id)=>{
    try{
    api.delete(`/api/rendezVous/${id}`);
    setRendezVous(rendezVous.filter((item)=>item.id!==id)); 
    }catch (error){
        console.log(error)
    }
    
}
    return(
        <div className="dashboard-layout">
            <Sidebar/>
            <main className="dashboard-main ">
            <div className="container mt-4 ">
               <div className="d-flex justify-content-between mb-4">
                <h2>list des RendezVous</h2>
                <button className="btn-ajouter"><Link to="/dashboard/rendezVous/nouveau">Creer Rendez-Vous</Link></button>
               </div>
               <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th> 
                            <th> dateRendezVous</th>
                            <th>Patient</th>
                            <th>Medecin</th>
                            <th>Status</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {rendezVous.map((item,index)=>(
                            <tr key={index} >
                                <td>{item.id}</td>
                                <td>{item. dateRendezVous}</td>
                                <td>{item.patientId}</td>
                                <td>{item.medecinId}</td>
                                <td>{item. statut}</td>
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