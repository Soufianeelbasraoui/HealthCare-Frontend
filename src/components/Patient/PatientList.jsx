import { useEffect, useState } from "react";
import api from "../../services/api";

function PatientList() {

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await api.get("/api/patient?page=0&size=10");
        console.log(response.data);
        setPatients(response.data.content);
      } catch (error) {
        console.log(error);

      }
    };

    getPatients();

  }, []);

  return (
    <div>
      <h2>Liste des Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.nom} {patient.prenom} - {patient.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;