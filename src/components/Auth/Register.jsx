import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";

const schema = yup.object({
  username: yup.string().required("Username obligatoire"),
  email: yup.string().email("Email invalide").required("Email obligatoire"),
  password: yup.string().min(4, "Minimum 4 caractères").required("Password obligatoire"),
  role: yup.string().required("Role obligatoire"),
});

function Register() {

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
      const response = await api.post("/auth/register", data);
      console.log(response.data);
      alert("Compte créé avec succès");
      navigate("/patientList");

    } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.status);
  console.log(error.response?.data);

  alert("Erreur d'inscription");
}
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        <p>{errors.username?.message}</p>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <select {...register("role")}>
          <option value="">Choisir un rôle</option>
          <option value="ADMIN">ADMIN</option>
          <option value="PATIENT">PATIENT</option>
          <option value="MEDECIN">MEDECIN</option>
        </select>

        <p>{errors.role?.message}</p>

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;