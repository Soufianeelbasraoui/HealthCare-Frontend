import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { isAuthenticated } from "../../services/authService";
import "./Golobal.css";

const schema = yup.object({
  username: yup.string().required("Nom d'utilisateur obligatoire"),
  email: yup.string().email("Email invalide").required("Email obligatoire"),
  password: yup.string().min(4, "Minimum 4 caractères").required("Mot de passe obligatoire"),
  role: yup.string().required("Choisissez un rôle"),
});

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/register", data);

      alert("Compte créé avec succès. Veuillez vous connecter.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Erreur d'inscription");
    }
  };

  return (
    <div className="register-page section">
      <div className="mt-5 mb-5">
        <div className="text-center mb-3">
          <h2 className="register-logo">HealthCare+</h2>
          <small className="text-muted">
            Système de gestion médicale intelligent
          </small>
        </div>

        <div className="card shadow-sm border-0 register-card">
          <h3 className="register-title">
            Créer un compte
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-2">
              <label className="form-label">
                Nom d'utilisateur
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                placeholder="jdupont"
                {...register("username")}
              />

              <div className="invalid-feedback">
                {errors.username?.message}
              </div>
            </div>

            <div className="mb-2">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="nom@email.com"
                {...register("email")}
              />

              <div className="invalid-feedback">
                {errors.email?.message}
              </div>
            </div>

            <div className="mb-2">
              <label className="form-label">
                Mot de passe
              </label>

              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="********"
                {...register("password")}
              />

              <div className="invalid-feedback">
                {errors.password?.message}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Rôle
              </label>

              <select
                className={`form-select ${
                  errors.role ? "is-invalid" : ""
                }`}
                {...register("role")}
              >
                <option value="">Sélectionnez</option>
                <option value="ADMIN">ADMIN</option>
                <option value="MEDECIN">MEDECIN</option>
                <option value="PATIENT">PATIENT</option>
              </select>

              <div className="invalid-feedback">
                {errors.role?.message}
              </div>
            </div>

            <button type="submit"className="btn  w-100 fw-semibold">
              S'inscrire
            </button>

            <div className="my-3 d-flex align-items-center">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">
                OU
              </span>
              <hr className="flex-grow-1" />
            </div>

            <p className="text-center mb-0">
              Déjà inscrit ?
              <Link  to="/login"className="ms-2 text-decoration-none fw-bold" >
                Se connecter
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;