import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../pages/Sidebar/Sidebar";
import api from "../../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Le nom est obligatoire"),
  email: yup.string().email("Email invalide").required("Email obligatoire"),
  specialite: yup.string().required("La spécialité est obligatoire"),
  telephone: yup
    .string()
    .length(10, "Le téléphone doit contenir 10 chiffres")
    .required("Téléphone obligatoire"),
});

function ModifierMedecin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    api.get(`/api/medecin/${id}`).then((res) => {
        setValue("username", res.data.username);
        setValue("email", res.data.email);
        setValue("specialite", res.data.specialite);
        setValue("telephone", res.data.telephone);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setValue]);

  const onSubmit = (data) => {
    api.put(`/api/medecin/${id}`, data).then(() => {
        alert("Médecin modifié avec succès");
        navigate("/dashboard/medecinsList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <h2>Modifier un médecin</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nom</label>
            <br />
            <input type="text" {...register("username")} />
            <p>{errors.username?.message}</p>
          </div>

          <div>
            <label>Email</label>
            <br />
            <input type="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label>Spécialité</label>
            <br />
            <input type="text" {...register("specialite")} />
            <p>{errors.specialite?.message}</p>
          </div>

          <div>
            <label>Téléphone</label>
            <br />
            <input type="text" {...register("telephone")} />
            <p>{errors.telephone?.message}</p>
          </div>

          <br />

          <button type="submit">Modifier</button>

          <button
            type="button"
            onClick={() => navigate("/dashboard/medecinsList")}
          >
            Annuler
          </button>
        </form>
      </main>
    </div>
  );
}

export default ModifierMedecin;