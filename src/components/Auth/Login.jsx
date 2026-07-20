import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import "./Golobal.css";

const schema = yup.object({
  email: yup.string().email("Email invalide").required("L'email est obligatoire"),
  password: yup.string().required("Le mot de passe est obligatoire"),
});

function Login() {
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
      const response = await api.post("/auth/login", data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          username:response.data.username,
          role:response.data.role,
        })
      )

      navigate("/dashboard");
    } catch (error) {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#eef3fb" }}>
      <div>
        <div className="text-center mb-4">
          <h2 className="fw-bold register-logo">HealthCare+</h2>
          <small className="text-muted">Medical System Portal</small>
        </div>
        <div className="card   p-4" style={{ width: "420px" }}>
             <h4 className="fw-bold mb-4">Connexion</h4>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input  type="email"  className={`form-control ${ errors.email ? "is-invalid" : "" }`} placeholder="nom@example.com" {...register("email")} />
            <div className="invalid-feedback">
              {errors.email?.message}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className={`form-control ${ errors.password ? "is-invalid" : "" }`}
              placeholder="********"
              {...register("password")}
            />
            <div className="invalid-feedback">
              {errors.password?.message}
            </div>
          </div>
          <button className="btn register-btn w-100"type="submit">
            Se connecter 
          </button>
          <hr />
          <p className="text-center mb-0">
            Pas encore inscrit ?{" "}
            <Link to="/register">
              S'inscrire
            </Link>
          </p>

        </form> 
        </div>
      </div>
    </div>
  );
}

export default Login;