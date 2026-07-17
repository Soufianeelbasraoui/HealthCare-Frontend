import React from "react";
import {
  FaUserFriends,
  FaStethoscope,
  FaCalendarAlt,
  FaFolderOpen,
  FaLock,
  FaChartBar,
  FaCheckCircle,
  FaPlay,
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* ===== BANNER ===== */}
      <section className="about-banner container mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="banner-title">À propos de HealthCare+</h1>
              <p className="banner-text">
                HealthCare+ est à l'avant-garde de la transformation numérique
                clinique. Notre mission est de simplifier la gestion médicale
                complexe en fournissant une plateforme robuste, intuitive et
                hautement sécurisée pour les professionnels de santé. Nous
                croyons que la technologie doit être un facilitateur
                invisible, permettant aux médecins de se concentrer sur ce qui
                compte vraiment : le soin des patients.
              </p>
              <button className="btn1 banner-btn mt-2">
                Découvrir nos solutions
              </button>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="banner-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Salle de contrôle médicale"
                  className="img-fluid banner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FONCTIONNALITÉS CLÉS ===== */}
      <section className="key-features-section">
        <div className="container">
          <h2 className="section-heading">Fonctionnalités Clés</h2>

          <div className="row g-3">
            <div className="col-md-4">
              <div className="key-card">
                <div className="key-icon icon-navy">
                  <FaUserFriends />
                </div>
                <h3 className="key-card-title">Gestion Patients</h3>
                <p className="key-card-text">
                  Suivi complet des admissions, historique médical détaillé et
                  alertes personnalisées pour chaque patient pris en charge.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="key-card">
                <div className="key-icon icon-blue">
                  <FaStethoscope />
                </div>
                <h3 className="key-card-title">Gestion Médecins</h3>
                <p className="key-card-text">
                  Planification des rotations, gestion des spécialités et
                  évaluation de la charge de travail en temps réel.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="key-card">
                <div className="key-icon icon-orange">
                  <FaCalendarAlt />
                </div>
                <h3 className="key-card-title">Rendez-vous</h3>
                <p className="key-card-text">
                  Système intelligent de prise de rendez-vous avec rappels
                  automatiques et gestion optimisée des annulations.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="key-card">
                <div className="key-icon icon-grey">
                  <FaFolderOpen />
                </div>
                <h3 className="key-card-title">Dossiers Médicaux</h3>
                <p className="key-card-text">
                  Numérisation complète des archives, accès sécurisé et
                  partage facilité entre les services compétents.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="key-card">
                <div className="key-icon icon-red">
                  <FaLock />
                </div>
                <h3 className="key-card-title">Sécurité JWT</h3>
                <p className="key-card-text">
                  Authentification robuste par JSON Web Token garantissant
                  l'intégrité et la confidentialité des données.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="key-card">
                <div className="key-icon icon-slate">
                  <FaChartBar />
                </div>
                <h3 className="key-card-title">Tableau de Bord</h3>
                <p className="key-card-text">
                  Analyses visuelles et indicateurs clés de performance pour
                  une gouvernance hospitalière éclairée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FULL STACK ===== */}
      <section className="stack-section">
        <div className="container">
          <div className="stack-box">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <h2 className="stack-title">
                  Application Full Stack de Suivi Clinique
                </h2>
                <p className="stack-text">
                  HealthCare+ est conçu comme un écosystème complet. De la
                  prise de rendez-vous initiale à la gestion complexe des
                  antécédents médicaux, chaque module est interconnecté pour
                  offrir une vue à 360 degrés de la santé du patient.
                </p>

                <ul className="stack-list">
                  <li>
                    <FaCheckCircle className="stack-check" />
                    <div>
                      <strong>Centralisation des données</strong>
                      <p>
                        Accès sécurisé aux dossiers patients depuis n'importe
                        quel poste de travail autorisé.
                      </p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="stack-check" />
                    <div>
                      <strong>Monitoring en temps réel</strong>
                      <p>
                        Suivi des constantes et alertes automatiques pour les
                        cas critiques.
                      </p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="stack-check" />
                    <div>
                      <strong>Interopérabilité totale</strong>
                      <p>
                        Échange de données fluide entre les différents
                        départements et laboratoires.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <div className="stack-video-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Tableau de bord clinique sur écran"
                    className="img-fluid stack-video-image"
                  />
                  <button className="stack-play-btn" aria-label="Lire la vidéo">
                    <FaPlay />
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

export default About;