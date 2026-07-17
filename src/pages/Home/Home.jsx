import React from "react";
import { FaArrowRight, FaPlay, FaUserFriends, FaStethoscope, FaCalendarAlt } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <h1 className="hero-title">
                Votre santé, notre priorité.
                <span className="hero-title-accent"> Gestion simplifiée.</span>
              </h1>
              <p className="hero-subtitle">
                Optimisez le flux de travail de votre établissement de santé
                avec notre plateforme intuitive de dossiers patients et de
                gestion des rendez-vous.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <button className="btn1  hero-btn-primary">
                  Découvrir l'application <FaArrowRight className="ms-2" />
                </button>
                <button className="btn btn-outline-primary  hero-btn-secondary">
                  <FaPlay className="me-2" /> Voir la démo
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                  alt="Médecin avec un patient et sa famille"
                  className="img-fluid hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="features-title">
              Une solution complète pour votre cabinet
            </h2>
            <p className="features-subtitle">
              Concentrez-vous sur vos patients, nous nous occupons du reste
              avec des outils conçus pour l'efficacité.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaUserFriends />
                </div>
                <h3 className="feature-card-title">Gestion des Patients</h3>
                <p className="feature-card-text">
                  Centralisez tous les dossiers médicaux, historiques de
                  consultations et documents de vos patients dans un espace
                  sécurisé et accessible.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaStethoscope />
                </div>
                <h3 className="feature-card-title">Suivi des Médecins</h3>
                <p className="feature-card-text">
                  Gérez le planning de votre équipe, suivez les performances et
                  optimisez l'utilisation de vos salles de consultation en
                  temps réel.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaCalendarAlt />
                </div>
                <h3 className="feature-card-title">Prise de Rendez-vous</h3>
                <p className="feature-card-text">
                  Système de réservation intelligent avec rappels automatiques
                  par SMS et email pour réduire les absences de dernière
                  minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <h2 className="cta-title">
                  Prêt à moderniser votre gestion médicale ?
                </h2>
                <p className="cta-subtitle">
                  Rejoignez des centaines d'établissements qui font déjà
                  confiance à HealthCare+ pour améliorer l'expérience patient.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-wrap justify-content-lg-end gap-3">
                  <button className="btn1  cta-btn-primary">
                    Créer un compte
                  </button>
                  <button className="btn1  cta-btn-outline">
                    Parler à un expert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;