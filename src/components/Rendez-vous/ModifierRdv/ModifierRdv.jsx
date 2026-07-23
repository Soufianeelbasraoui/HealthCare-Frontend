import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import api from "../../../services/api";

function ModifierRdv() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [medecins, setMedecins] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    api.get("/api/patient?page=0&size=100").then((res) => {
      setPatients(res.data.content || []);
    }).catch(console.error);

    api.get("/api/medecin?page=0&size=100").then((res) => {
      setMedecins(res.data.content || []);
    }).catch(console.error);

    api.get(`/api/rendezVous/${id}`).then((res) => {
      setValue("dateRendezVous", res.data.dateRendezVous);
      setValue("statut", res.data.statut);
      setValue("patientId", res.data.patientId);
      setValue("medecinId", res.data.medecinId);
    }).catch((err) => {
      console.log("Erreur fetch API:", err);
    });
  }, [id, setValue]);

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
        <div className="container">
          <h2>Modifier Rendez-vous</h2>
          <div className="mt-4 card py-4 p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label>Date</label>
                <input type="date" className="form-control" {...register("dateRendezVous")} />
              </div>

              <div className="mb-2">
                <label>Statut</label>
                <select className="form-control" {...register("statut")}>
                  <option value="PLANIFIE">PLANIFIE</option>
                  <option value="CONFIRME">CONFIRME</option>
                  <option value="ANNULE">ANNULE</option>
                  <option value="TERMINE">TERMINE</option>
                </select>
              </div>

              <div className="mb-2">
                <label>Patient</label>
                <select className="form-control" {...register("patientId")}>
                  <option value="">Choisir un patient...</option>
                  {patients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.username} {p.prenom}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-2">
                <label>Médecin</label>
                <select className="form-control" {...register("medecinId")}>
                  <option value="">Choisir un médecin...</option>
                  {medecins.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.username} ({m.specialite})
                    </option>
                  ))}
                </select>
              </div>

              <div className="d-flex gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Modifier
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate("/dashboard/rendezVous")}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ModifierRdv;