import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-2">
            <h3 className="footer-logo">
              <i className="bi bi-hospital me-2"></i>
              HealthCare+
            </h3>
            <p className="footer-text mt-2">
              La solution logicielle leader pour les professionnels de santé
              modernes en quête d'excellence opérationnelle.
            </p>
          </div>
          <div className="col-lg-3 mb-2">
            <h5 className="footer-title">Navigation</h5>
            <ul className="list-unstyled mt-2">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/features">Fonctionnalités</Link>
              </li>

              <li>
                <Link to="/about">À propos</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-1">
            <h5 className="footer-title">Légal</h5>
            <ul className="list-unstyled mt-1">
              <li>
                <Link to="#">Confidentialité</Link>
              </li>
              <li>
                <Link to="#">CGU</Link>
              </li>
              <li>
                <Link to="#">Mentions légales</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center copyright">
          © 2024 HealthCare+. Tous droits réservés.
        </p>

      </div>

    </footer>
  );
}

export default Footer;