import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./AjouterPatient.css";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import api from "../../../services/api";

const schema = yup.object({
  username: yup.string().required("Le nom est obligatoire"),
  prenom: yup.string().required("Le prénom est obligatoire"),
  password: yup.string().min(4, "Minimum 4 caractères").required("Le mot de passe est obligatoire"),
  email: yup.string().email("Email invalide").required("L'email est obligatoire"),
  telephone: yup.string().required("Le téléphone est obligatoire").min(10, "Minimum 10 chiffres").max(10, "Maximum 10 chiffres"),
  dateNaissance: yup.string().required("La date de naissance est obligatoire"),
});

function AjouterPatient() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/api/patient", data);
      console.log(res.data);
      alert("Patient ajouté avec succès");
      navigate("/dashboard/patients");
    } catch (error) {
      console.log(error.response.data);
      alert("Erreur lors de l'ajout");
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

            <div className="profile-avatar"></div>
          </div>
        </header>

        <div className="patients-header">
          <h2>Ajouter un Patient</h2>
        </div>

        <div className="form-panel">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" {...register("username")} />
              <small className="text-danger">
                {errors.username?.message}
              </small>
            </div>

            <div className="form-group">
              <label>Prénom</label>
              <input type="text" {...register("prenom")} />
              <small className="text-danger">
                {errors.prenom?.message}
              </small>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" {...register("password")} />
              <small className="text-danger">
                {errors.password?.message}
              </small>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" {...register("email")} />
              <small className="text-danger">
                {errors.email?.message}
              </small>
            </div>

            <div className="form-group">
              <label>Téléphone</label>
              <input type="text" {...register("telephone")} />
              <small className="text-danger">
                {errors.telephone?.message}
              </small>
            </div>

            <div className="form-group">
              <label>Date de naissance</label>
              <input type="date" {...register("dateNaissance")} />
              <small className="text-danger">
                {errors.dateNaissance?.message}
              </small>
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