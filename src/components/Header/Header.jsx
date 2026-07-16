import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-2">
      <div className="container">
        <Link className="navbar-brand logo fw-bold fs-3" to="/">
          HealthCare+
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-5">
            <li className="nav-item">
              <NavLink to="/"  className="nav-link"> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to="/about" className="nav-link" > About</NavLink>
            </li>
          </ul>

          <div className="ms-auto d-flex gap-3">
            <Link to="/login" className="btn-link">
              Connexion
            </Link>
            <Link to="/register" className="btn1 px-3 btn-link1">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;