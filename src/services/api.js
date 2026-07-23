import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  
  (response)=>response,
  (error)=>{
    if(error.response){
      switch(error.response.status){
        case 400:
          alert("Requête invalide.");
          console.error("Requête invalide (400) :", error.response.data);
          break;
        case 401:
           alert("Session expirée, veuillez vous reconnecter."); 
           console.error("Non authentifié (401) — session supprimée.");
           localStorage.removeItem("token");
           localStorage.removeItem("user");
           
           window.location.href="/login";
            break;
        case 403:
          alert("Accès refusé.");
           console.error("Accès refusé (403) : droits insuffisants.");
           window.location.href = "/unauthorized";
          break;
        case 404:
          alert("Ressource introuvable.");
          console.error("Ressource introuvable (404) :", error.config?.url);
          break
        case 500:
          alert("Erreur interne du serveur.");
            console.error("Erreur serveur (500) :", error.response.data);
          break;
        default :
            alert("Erreur réseau ou serveur.");
            console.error("Erreur réseau ou serveur injoignable :", error.message);


      }
    }else{
      alert("Impossible de contacter le serveur.");
    }
    return Promise.reject(error);
  }
)

export default api;