import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import api from "../../../services/api";

function ModifierRdv() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    try{
       api.get(`/api/rendezVous/${id}`).then((res) => {
        setValue("dateRendezVous", res.data.dateRendezVous);
        setValue("statut", res.data.statut);
        setValue("patientId", res.data.patientId);
        setValue("medecinId", res.data.medecinId);
      })
    }catch(err){
      console.log("errour de fetch api:",err)
    };
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await api.put(`/api/rendezVous/${id}`, data);
      alert("Rendez-vous modifié");
      navigate("/dashboard/rendezVous");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="container ">
          
        <h2>Modifier Rendez-vous</h2>
           <div className="mt-4 card py-4 p-5">

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-2">
              <label>Date</label>
              <input type="date" className="form-control"  {...register("dateRendezVous")}/>
            </div>

            <div className="mb-2">
              <label>Statut</label>
              <select className="form-control"{...register("statut")}>
                <option value="PLANIFIE">PLANIFIE</option>
                <option value="CONFIRME">CONFIRME</option>
                <option value="ANNULE">ANNULE</option>
                <option value="TERMINE">TERMINE</option>
              </select>
            </div>

            <div className="mb-2">
              <label>Patient</label>
              <input className="form-control" {...register("patientId")}/>
            </div>

            <div className="mb-2">
              <label>Médecin</label>
              <input className="form-control" {...register("medecinId")}/>
            </div>

            <button className="btn btn-primary">
              Modifier
            </button>

          </form>
        </div>
      </div>
      </main>
    </div>
  );
}

export default ModifierRdv;