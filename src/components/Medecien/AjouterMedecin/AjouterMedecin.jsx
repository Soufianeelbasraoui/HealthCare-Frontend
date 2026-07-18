import Sidebar from "../../../pages/Sidebar/Sidebar";
import * as yup from "yup";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup.string().required("Le nom est obligatoire"),
  password: yup
    .string()
    .min(4, "Minimum 4 caractères")
    .required("Mot de passe obligatoire"),
  email: yup
    .string()
    .email("Email invalide")
    .required("Email obligatoire"),
  specialite: yup.string().required("Spécialité obligatoire"),
  telephone: yup
    .string()
    .min(8, "Minimum 8 chiffres")
    .max(8, "Maximum 8 chiffres")
    .required("Téléphone obligatoire"),
});

function AjouterMedecin() {
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
      const res = await api.post("/api/medecin", data);

      console.log(res.data);

      alert("Médecin ajouté avec succès");

      navigate("/dashboard/medecinsList");
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
            <h2 className="mb-4">Ajouter un médecin</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Nom d'utilisateur</label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  {...register("username")}
                />

                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email")}
                />

                <div className="invalid-feedback">
                  {errors.email?.message}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Mot de passe</label>
                <input type="password" className={`form-control ${ errors.password ? "is-invalid" : "" }`} {...register("password")}/>
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Spécialité</label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.specialite ? "is-invalid" : ""
                  }`}
                  {...register("specialite")}
                />

                <div className="invalid-feedback">
                  {errors.specialite?.message}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Téléphone</label>
                
                <input
                  type="text"
                    className={`form-control ${
                    errors.telephone ? "is-invalid" : ""
                  }`}
                  {...register("telephone")}
                />

                <div className="invalid-feedback">
                  {errors.telephone?.message}
                </div>
              </div>

              <div className="d-flex gap-3">
                <button type="submit" className="btn btn-primary">
                  Ajouter
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate("/dashboard/medecinsList")}
                >
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

export default AjouterMedecin;