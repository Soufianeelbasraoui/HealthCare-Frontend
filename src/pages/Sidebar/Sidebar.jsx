import { NavLink, useNavigate } from "react-router-dom";
import {
  FaThLarge,
  FaUserFriends,
  FaStethoscope,
  FaCalendarAlt,
  FaFolderOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkClass = ({ isActive }) => isActive ? "sidebar-link sidebar-link-active" : "sidebar-link";

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>HealthCare+</h2>
        <span>Medical System</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={linkClass} end>
          <FaThLarge className="sidebar-icon" /> Dashboard
        </NavLink>
        <NavLink to="/dashboard/patients" className={linkClass}>
          <FaUserFriends className="sidebar-icon" /> Patients
        </NavLink>
        <NavLink to="/dashboard/medecinsList" className={linkClass}>
          <FaStethoscope className="sidebar-icon" /> Médecins
        </NavLink>
        <NavLink to="/dashboard/rendezVous" className={linkClass}>
          <FaCalendarAlt className="sidebar-icon" /> Rendez-vous
        </NavLink>
        <NavLink to="/dashboard/dossiers" className={linkClass}>
          <FaFolderOpen className="sidebar-icon" /> Dossiers Médicaux
        </NavLink>
      </nav>

      <button className="sidebar-logout" onClick={handleLogout}>
        <FaSignOutAlt className="sidebar-icon" /> Déconnexion
      </button>
    </aside>
  );
}

export default Sidebar;