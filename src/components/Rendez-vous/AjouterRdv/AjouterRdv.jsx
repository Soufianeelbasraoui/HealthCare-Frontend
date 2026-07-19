import { useEffect, useState } from "react";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  dateRendezVous: yup
    .string()
    .required("La date du rendez-vous est obligatoire"),

  statut: yup
    .string()
    .required("Le statut est obligatoire"),

  patientId: yup
    .number()
    .typeError("Patient obligatoire")
    .required("Patient obligatoire"),

  medecinId: yup
    .number()
    .typeError("Médecin obligatoire")
    .required("Médecin obligatoire"),
});

function AjouterRdv() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [medecins, setMedecins] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    api
      .get("/api/patient?page=0&size=100")
      .then((res) => {
        setPatients(res.data.content);
      })
      .catch((err) => console.log(err));

    api
      .get("/api/medecin?page=0&size=100")
      .then((res) => {
        setMedecins(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/api/rendezVous", data);
      console.log(res.data);
      alert("Rendez-vous ajouté avec succès");
      navigate("/dashboard/rendezVous");
    } catch (error) {
      console.log(error);
      alert("Erreur lors de l'ajout");
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="container mt-4">
          <div className="card shadow p-4">

            <h2 className="mb-4">Créer un Rendez-vous</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Date du rendez-vous</label>

                <input
                  type="date"
                  className={`form-control ${ errors.dateRendezVous ? "is-invalid" : ""}`}
                  {...register("dateRendezVous")}
                />

                <div className="invalid-feedback">
                  {errors.dateRendezVous?.message}
                </div>
              </div>

        
              <div className="mb-3">
                <label className="form-label">Statut</label>
                <select
                  className={`form-control ${  errors.statut ? "is-invalid" : ""}`}
                  {...register("statut")}
                >
                  <option value="">Choisir...</option>
                  <option value="PLANIFIE">PLANIFIE</option>
                  <option value="CONFIRME">CONFIRME</option>
                  <option value="ANNULE">ANNULE</option>
                  <option value="TERMINE">TERMINE</option>
                </select>

                <div className="invalid-feedback">
                  {errors.statut?.message}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Patient</label>

                <select
                  className={`form-control ${ errors.patientId ? "is-invalid" : "" }`}
                  {...register("patientId")}
                >
                  <option value="">Choisir un patient</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.username}
                    </option>
                  ))}
                </select>

                <div className="invalid-feedback">
                  {errors.patientId?.message}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Médecin</label>

                <select
                  className={`form-control ${errors.medecinId ? "is-invalid" : "" }`}
                  {...register("medecinId")}>
                  <option value="">Choisir un médecin</option>

                  {medecins.map((medecin) => (
                    <option key={medecin.id} value={medecin.id}>
                      {medecin.username} ({medecin.specialite})
                    </option>
                  ))}
                </select>

                <div className="invalid-feedback">
                  {errors.medecinId?.message}
                </div>
              </div>

              <div className="d-flex gap-3">
                <button type="submit" className="btn btn-primary">
                  Ajouter
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

export default AjouterRdv;