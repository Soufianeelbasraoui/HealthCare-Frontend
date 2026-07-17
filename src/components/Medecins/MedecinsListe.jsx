import { useEffect, useState } from "react";
import Sidebar from "../../pages/Sidebar/Sidebar";
import api from "../../services/api";

function MedecinsList() {
  const [medecin, setMedecin] = useState([]);
console.log("MedecinsList Loaded");
  useEffect(() => {
    api
      .get("/api/medecin?page=0&size=5")
      .then((res) => {
         setMedecin(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard-layout">
    
      <Sidebar />

      <main className="dashboard-main">
        <div className="table-panel">
          <table className="medecins-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Spécialité</th>
                <th>soufiane</th>
                <th>Téléphone</th>
              </tr>
            </thead>

            <tbody>
              {medecin.map((item, index) => (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.specialite}</td>
                  <td>{item.email}</td>
                  <td>{item.telephone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

export default MedecinsList;