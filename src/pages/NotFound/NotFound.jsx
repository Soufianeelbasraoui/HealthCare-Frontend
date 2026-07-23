import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaTachometerAlt } from "react-icons/fa";
import { isAuthenticated } from "../../services/authService";
import "./NotFound.css";

function NotFound() {
  const loggedIn = isAuthenticated();

  return (
    <div className="not-found-wrapper">
      <div className="card shadow-lg not-found-card p-4 p-md-5 text-center">
        <div className="not-found-icon-wrapper">
          <FaExclamationTriangle />
        </div>

      
        <h1 className="not-found-code">404</h1>

        <h2 className="not-found-title mb-2">Page introuvable</h2>
        <p className="not-found-text mb-4">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/" className="btn btn-primary not-found-btn d-inline-flex align-items-center gap-2">
            <FaHome /> Retour à l'accueil
          </Link>

          {loggedIn && (
            <Link to="/dashboard" className="btn btn-outline-primary not-found-btn d-inline-flex align-items-center gap-2">
              <FaTachometerAlt /> Retour au Dashboard
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
