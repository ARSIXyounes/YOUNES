<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>/* ==================== */
/* Variables Globales */
/* ==================== */
:root {
  --main-bg-color: #1f1f1f; /* Noir */
--second-bg-color: #2c2c2c; /* Gris foncé */
--text-color: #ffffff; /* Blanc */
--main-color: #ff6f61; /* Corail */
--gradient-primary: linear-gradient(45deg, #ff6f61, #ffcc00); /* Dégradé corail à jaune */
--gradient-secondary: linear-gradient(45deg, #ffcc00, #ff6f61); /* Dégradé jaune à corail */
}


/* ==================== */
/* Styles Généraux */
/* ==================== */
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: var(--second-bg-color);
  color: var(--text-color);
  overflow: auto;
  scroll-behavior:smooth;
}
html{
    scroll-behavior:smooth;

}

body, html {
  overflow: visible; /* Remplacez par visible */
}







.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}



.navbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Styles de la navigation */
.navbar-nav a {
  color: #fff;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.navbar-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: #ffcc00;
  transition: width 0.3s ease;
}

.navbar-nav a:hover {
  color: #ffcc00;
  transform: scale(1.1);
}

.navbar-nav a:hover::after {
  width: 100%;
}

.navbar-nav a.hover-effect {
  color: #ffcc00;
  transform: scale(1.1);
}

.navbar-nav a.hover-effect::after {
  width: 100%;
}

.navbar-nav a.hover-effect {
  color: #00ffcc;
  border-bottom: 2px solid #00ffcc;
}
.navbar-nav a:hover {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}








/* ==================== */
/*   <!-- Page d'accueil -->
 */
/* ==================== */
#accueil {
  color: var(--text-color);
}

.profile-image-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  margin-left: 100px;
}


#accueil::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Overlay sombre */
  z-index: 1;
}
#accueil .container {
  position: relative;
  z-index: 2;
}
.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.gradient-border {
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  background: linear-gradient(45deg, violet, blue);
  border-radius: 49.5%;
  z-index: 0;
  animation: rotateBorder 4s linear infinite;
}

@keyframes rotateBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animated-text {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: var(--text-color);
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
}

.text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--text-color);
  animation: typing 3s steps(30, end), blink-cursor 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-cursor {
  from, to { border-color: transparent; }
  50% { border-color: var(--text-color); }
}

.reveal {
  position: relative;
  overflow: visible;
}

.reveal::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #6a11cb;
  animation: reveal 2s ease-in-out forwards;
}

@keyframes reveal {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
/* fin Page d'accueil*/










/* ==================== */
/* PAGE A PROPOS DE MOI */
/* ==================== */
.about-section {
  padding: 60px 0;
  background: transparent;
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
}

.title-container {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  overflow: hidden;
}

.title-container::before {
  content: "À propos de moi";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.05);
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 1;
  animation: scrollText 20s linear infinite;
}

@keyframes scrollText {
  0% { transform: translate(-50%, -50%) translateX(100%); }
  100% { transform: translate(-50%, -50%) translateX(-100%); }
}

.about-title {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: var(--gradient-primary);
  margin: 0 auto;
  border-radius: 2px;
  position: relative;
  z-index: 2;
}

.about-row {
  display: flex;
  align-items: center;
  gap: 40px;
}

.profile-image-wrapper-2 {
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;
}

.profile-image-2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border: 5px solid var(--text-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image-2:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.gradient-border-2 {
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background: var(--gradient-secondary);
  border-radius: 50%;
  z-index: 0;
  animation: rotateBorder 6s linear infinite;
}

.image-caption {
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.about-info {
  flex: 1;
}

.about-info h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #ffdd57;
}

.profession {
  font-size: 1.5rem;
  color: #ddd;
  margin-bottom: 20px;
  font-weight: 700;
}




.description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #f0f0f0;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.contact-list a {
  color: #ffdd57;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-list a:hover {
  color: #ff9a9e;
}
/* fin PAGE A PROPOS DE MOI */








/* ==================== */
/* style la section de mes competances */
/* ==================== */
.skills-section {
  padding: 60px 0;
  color: var(--text-color);
  text-align: center;
}

.skills-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: linear-gradient(45deg, #000000, #333333a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skills-title .underline {
  display: inline-block;
  width: 100%;
  border-bottom: 4px solid #000000;
  margin-bottom: 60px;
  border-radius: 20px;
  animation: underline-animation 3s ease-in-out infinite;
}

@keyframes underline-animation {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(0.2); }
}

.skills-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}

.skill {
  width: 150px;
  text-align: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.skill:hover {
  transform: translateY(-10px);
  opacity: 0.9;
}

.skill-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}
/* .skill-icon {
  transition: transform 1.3s ease;
}

.skill:hover .skill-icon {
  transform: rotate(360deg);
  
} 
 
 
.skill-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
}
     /* fin style la section de mes competances */





/* ==================== */
/* Responsive Design */
/* ==================== */
@media (max-width: 768px) {
  .about-row {
    flex-direction: column;
    text-align: center;
  }

  .profile-image-wrapper, .profile-image-wrapper-2 {
    width: 200px;
    height: 200px;
  }

  .about-title, .skills-title {
    font-size: 2rem;
  }
  

  .about-info h2 {
    font-size: 2rem;
  }

  .profession {
    font-size: 1.2rem;
  }

  .title-container::before {
    font-size: 3rem;
  }

  .skills-row {
    gap: 20px;
  }

  .skill {
    width: 120px;
  }

  .skill-icon {
    width: 60px;
    height: 60px;
  }

  .skill-name {
    font-size: 1rem;
  }
}










/* style page resumer */
/* ==================== */
/* Section Éducation & Expériences */
/* ==================== */
.education-experience-section {
  padding: 80px 0;
  /* background: var(--second-bg-color);  ---------------- couleur background bleu de cette section  -----------------*/
  color: var(--text-color);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-title .underline {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--gradient-primary);
  margin: 10px auto 0;
  border-radius: 2px;
  animation: underline-animation 3s ease-in-out infinite;
}

.sub-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--main-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.timeline {
  position: relative;
  padding-left: 30px;
}
.timeline-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease-out forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.2s; }
.timeline-item:nth-child(2) { animation-delay: 0.4s; }
.timeline-item:nth-child(3) { animation-delay: 0.6s; }
.timeline-item:nth-child(4) { animation-delay: 0.8s; }

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: var(--gradient-secondary);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 20px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 10px;
  width: 16px;
  height: 16px;
  background: var(--main-color);
  border: 3px solid var(--text-color);
  border-radius: 50%;
  z-index: 1;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
}

.timeline-date {
  font-size: 1rem;
  font-weight: 500;
  color: var(--main-color);
  margin-bottom: 10px;
}

.timeline-description {
  font-size: 1rem;
  color: #ddd;
  line-height: 1.6;
}

/* Animation du trait */
@keyframes underline-animation {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .sub-title {
    font-size: 1.5rem;
  }

  .timeline-title {
    font-size: 1.2rem;
  }

  .timeline-date {
    font-size: 0.9rem;
  }

  .timeline-description {
    font-size: 0.9rem;
  }
}
/* fin style page resumer */


/* <!-- style pour mes projet  --> */
/* ==================== */
/* ==================== */
/* Section Projets */
/* ==================== */
.projets-section {
  padding: 80px 0;
  color: var(--text-color);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-title .underline {
  display: block;
  width: 100px;
  height: 4px;
  
  background: var(--gradient-primary);
  margin: 10px auto 0;
  border-radius: 2px;
  animation: underline-animation 3s ease-in-out infinite;
}

/* Styles des Cartes de Projets */
.project-card {
  background: rgb(66, 35, 35);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 30px; /* Espacement entre les cartes */
  padding: 15px; /* Espace intérieur */
  height: 100%; /* Pour que toutes les cartes aient la même hauteur */
  display: flex;
  flex-direction: column;
}
.project-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;
}

.project-card:nth-child(1) { animation-delay: 0.2s; }
.project-card:nth-child(2) { animation-delay: 0.4s; }
.project-card:nth-child(3) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}


.project-image {
  width: 100%;
  height: 200px; /* Hauteur fixe pour l'image */
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Pour que l'image couvre toute la zone */
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 20px;
  flex: 1; /* Pour que le contenu prenne l'espace restant */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
}

.project-description {
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 20px;
  line-height: 1.6;
}

.btn-primary {
  background: var(--main-color);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--text-color);
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: var(--gradient-secondary);
}

/* Animation du trait */
@keyframes underline-animation {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .btn-primary {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
/* Animation du trait */
@keyframes underline-animation {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .btn-primary, .btn-outline-light {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

/* <!--fin  page pour mes projet  --> */







/* style de page contact  */

/* Conteneur principal */
.cv-contact-section {
  padding: 80px 0;
  color: var(--text-color);
}
.cv-contact-icon {
  animation: pulse 2s infinite alternate;
}

@keyframes pulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
/* Ligne pour les colonnes */
.cv-contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Colonnes */
.cv-contact-col {
  flex: 1 1 calc(50% - 20px);
  box-sizing: border-box;
  background: var(--main-bg-color);
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cv-contact-col:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Titres */
.cv-contact-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cv-contact-title .underline {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--gradient-primary);
  margin: 10px auto 0;
  border-radius: 2px;
  animation: underline-animation 3s ease-in-out infinite;
}

/* Formulaire de contact */
.cv-contact-form-fields .cv-contact-input,
.cv-contact-form-fields .cv-contact-textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 16px;
  background: var(--second-bg-color);
  color: var(--text-color);
}

.cv-contact-form-fields .cv-contact-textarea {
  height: 150px;
  resize: vertical;
}

.cv-contact-form-fields .cv-contact-button {
  background: var(--gradient-primary);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--text-color);
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cv-contact-form-fields .cv-contact-button:hover {
  background: var(--gradient-secondary);
}

/* Informations de contact */
.cv-contact-details {
  list-style: none;
  padding: 0;
}

.cv-contact-item {
  margin-bottom: 15px;
  font-size: 16px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}
/* STYLEBACK GROUND LIGHT 45DEG */
body{
  background: linear-gradient(45deg, var(--main-bg-color), var(--second-bg-color));
  background-size: 200% 200%;
  animation: gradient-animation 5s ease infinite;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
/* FIN STYLEBACKGROUND 45DEG */
.cv-contact-item {
  padding: 10px;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--main-bg-color), var(--second-bg-color));
  position: relative;
  overflow: hidden;
}

.cv-contact-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 1.5s ease;

}

.cv-contact-item:hover::before {
  left: 50%;
  right: 50%;

}

.cv-contact-item {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: text-shadow 0.3s ease;
}

.cv-contact-item:hover {
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}

.cv-contact-item:hover {
  transform: translateX(10px);
}

.cv-contact-icon {
  margin-right: 10px;
  color: var(--main-color);
  transition: color 0.3s ease;
}

.cv-contact-item:hover .cv-contact-icon {
  color: #ffa94d;
}

/* Réseaux sociaux */
.cv-contact-social {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.cv-social-link {
  text-decoration: none;
  color: var(--main-color);
  margin-right: 15px;
  font-size: 24px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.cv-social-link:hover {
  color: #ffa94d;
  transform: scale(1.2);
}

/* Animation du trait */
@keyframes underline-animation {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .cv-contact-col {
      flex: 1 1 100%;
  }

  .cv-contact-title {
      font-size: 1.8rem;
  }

  .cv-contact-item {
      font-size: 14px;
  }

  .cv-social-link {
      font-size: 20px;
  }
}


/* fin style de page contact  */







</style>
  <title>Portfolio_YOUNES_ELAnbri </title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Animate.css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="younes.css">
  <!-- icons_contact-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  
</head>

  <body >
     
  
  
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-nav">
    <div class="container"class="nav-item" >
      <a class="navbar-brand"class="nav-link" href="#"id="acceuil" >YOUNES</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#accueil">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#apropos">À propos de moi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#competences">Compétences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Résumer">Résumer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projets">Projets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
</nav>







<main >
  

  <!-- Page d'accueil -->
  <section id="accueil"class="d-flex align-items-center min-vh-100" class="reveal" >
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h1 class="display-4 animate__animated animate__fadeInLeft">Bonjour, je suis</h1>
            <div class="animated-text">
              <span class="text"></span>
              </div>
          
          <p class="lead animate__animated animate__fadeInLeft animate__delay-1s">Développeur Web | Designer | Passionné par la technologie</p>
          <a href="cv_pdf/CV_2025-02-10-083846.pdf" download="CV_Younes_Elanbri.pdf" class="btn btn-primary btn-lg animate__animated animate__fadeInUp animate__delay-2s">Télecharger cv</a>
        </div>
        <div class="col-md-6 text-center">
          <div class="profile-container">
            <div class="profile-image-wrapper">
              <img src="img/pexels-moh-adbelghaffar-771742.jpg" alt="Ton nom" class="profile-image">
              <div class="gradient-border"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <!-- fin Page d'accueil -->






<!-- PAGE A PROPOS DE MOI -->

  <section  id="apropos" class="about-section" class="skills">
    <div class="container">
      <!-- Titre en haut -->
      <h1 class="section-title"> A propos de moi : <span class="underline"></span></h1>
  
      <!-- Row divisée en deux colonnes -->
      <div class="about-row">
        <!-- Colonne de gauche : Image -->
        <div class="about-image">
          
          <div class="profile-image-wrapper-2">
            <img src="img/pexels-moh-adbelghaffar-771742.jpg" alt="Younes El Anbri" class="profile-image-2">
            <div class="gradient-border-2"></div>
          </div>
          <div class="image-caption">Développeur Full Stack | Passionné par l'innovation</div>
        </div>
  
        <!-- Colonne de droite : Informations -->
        <div class="about-info">
          <h2>Younes El Anbri</h2>
          <p class="profession">Développeur Full Stack</p>
          <p class="description">
            Passionné par le développement web et les nouvelles technologies, je suis un développeur Full Stack avec une expérience dans la création d'applications modernes et performantes. J'aime relever des défis techniques et apporter des solutions innovantes.
          </p>
          <ul class="contact-list">
            <li><strong>Email :</strong> <a href="mailto:younes.el.anbri@example.com">YounesELAnbri@gmail.com</a></li>
            <li><strong>Téléphone :</strong> <a href="tel:+212612345678">+212 665 060 133</a></li>
            <li><strong>Langues :</strong> Arabe (langue maternelle), Français, Anglais</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--fin  PAGE A PROPOS DE MOI -->








        <!-- page pour la section de mes competances  -->

  <section id="competences" class="skills-section" id="skills">
    <div class="container">
      <!-- Titre de la section -->
      <h1 class="section-title">Mes compétances <span class="underline"></span></h1>
  
      <!-- Première rangée de compétences -->
      <div class="skills-row">
        <!-- Compétence 1 -->
        <div class="skill">
          <img src="png/006-html-5.png" alt="HTML" class="skill-icon">
          <p class="skill-name">HTML</p>
        </div>
        <!-- Compétence 2 -->
        <div class="skill">
          <img src="png/005-css-3.png" alt="CSS" class="skill-icon">
          <p class="skill-name">CSS</p>
        </div>
        <!-- Compétence 3 -->
        <div class="skill">
          <img src="png/004-javascript.png" alt="JavaScript" class="skill-icon">
          <p class="skill-name">JavaScript</p>
        </div>
        <!-- Compétence 4 -->
        <div class="skill">
          <img src="png/icons8-bootstrap.svg" alt="Bootstrap" class="skill-icon">
          <p class="skill-name">Bootstrap</p>
        </div>
        <!-- Compétence 5 -->
        <div class="skill">
          <img src="png/icons8-react.svg" alt="React" class="skill-icon">
          <p class="skill-name">React</p>
        </div>
        <!-- Compétence 6 -->
        <div class="skill">
          <img src="png/010-nodejs.png" alt="Node.js" class="skill-icon">
          <p class="skill-name">Node.js</p>
        </div>
      </div>
  
      <!-- Deuxième rangée de compétences -->
      <div class="skills-row">
        <!-- Compétence 7 -->
        <div class="skill">
          <img src="png/001-python.png" alt="Python" class="skill-icon">
          <p class="skill-name">Python</p>
        </div>
        <!-- Compétence 8 -->
        <div class="skill">
          <img src="png/009-git.png" alt="Git" class="skill-icon">
          <p class="skill-name">Git</p>
        </div>
        <!-- Compétence 9 -->
        <div class="skill">
          <img src="png/002-mysql.png" alt="MySQL" class="skill-icon">
          <p class="skill-name">MySQL</p>
        </div>
        <!-- Compétence 10 -->
        <div class="skill">
          <img src="png/008-php-programming-language.png" alt="PHP" class="skill-icon">
          <p class="skill-name">PHP</p>
        </div>
        <!-- Compétence 11 -->
        <div class="skill">
          <img src="png/007-figma.png" alt="Figma" class="skill-icon">
          <p class="skill-name">Figma</p>
        </div>
        <!-- Compétence 12 -->
        <div class="skill">
          <img src="png/003-photoshop.png" alt="Photoshop" class="skill-icon">
          <p class="skill-name">Photoshop</p>
        </div>
      </div>
    </div>
  </section>
<!-- fin page pour la section de mes competances -->





<!-- page pour resumer  -->
 <!-- Section Éducation & Expériences -->
<section id="Résumer" id="education-experience" class="education-experience-section">
  <div class="container">
    <h1 class="section-title">Résumer<span class="underline"></span></h1>
    <div class="row">
      <!-- Colonne Éducation -->
      <div class="col-md-6">
        <h2 class="sub-title">Éducation</h2>
        <div class="timeline">
          <div class="timeline-item">
            <h3 class="timeline-title">Master en Développement Web</h3>
            <p class="timeline-date">2027 - 2029</p>
            <p class="timeline-description">Université TechWorld, Paris</p>
          </div>
          <div class="timeline-item">
            <h3 class="timeline-title">Licence en Informatique</h3>
            <p class="timeline-date">2026 - 2027</p>
            <p class="timeline-description">Université CodeMaster, Lyon</p>
          </div>
          <div class="timeline-item">
            <h3 class="timeline-title">Technicien spécialisé en Développement Digital</h3>
            <p class="timeline-date">2024 - 2026</p>
            <p class="timeline-description">ISTA NTYC SYBA , Marrakech</p>
          </div>
          <div class="timeline-item">
            <h3 class="timeline-title">Baccalauréat Scientifique</h3>
            <p class="timeline-date">2023 - 2024</p>
            <p class="timeline-description">EL kHALID 2, Marrakech</p>
          </div>
        </div>
      </div>

      <!-- Colonne Expériences -->
      <div class="col-md-6">
        <h2 class="sub-title">Expériences</h2>
        <div class="timeline">
          <div class="timeline-item">
            <h3 class="timeline-title">Développeur Full Stack</h3>
            <p class="timeline-date">2026 - Présent</p>
            <p class="timeline-description">ISTA NTYC SYBA , Marrakech</p>
          </div>
          <div class="timeline-item">
            <h3 class="timeline-title">Stagiaire en Développement Web</h3>
            <p class="timeline-date">Été 2025</p>
            <p class="timeline-description">WebCrafters, Lyon</p>
          </div>
          <div class="timeline-item">
            <h3 class="timeline-title">Stagiaire en Développement Web</h3>
            <p class="timeline-date">2025 - 2026</p>
            <p class="timeline-description">Création de sites web pour des clients indépendants</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 <!-- fin page pour resumer  -->




 <!-- page pour mes projet  -->
  <!-- Section Projets -->
<section id="projets" id="projets" class="projets-section">
  <div class="container">
    <h1 class="section-title">Mes Projets <span class="underline"></span></h1>
    <div class="row">
      <!-- Projet 1 -->
      <div class="col-md-4">
        <div class="project-card">
          <div class="project-image">
            <img src="img/ecomerce_img.jpg" alt="Projet 1" class="img-fluid">
          </div>
          <div class="project-content">
            <h3 class="project-title">Site E-commerce</h3>
            <p class="project-description">Création d'une plateforme e-commerce avec React et Node.js.</p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>

      <!-- Projet 2 -->
      <div class="col-md-4">
        <div class="project-card">
          <div class="project-image">
            <img src="img/ecomerce_img.jpg" alt="Projet 2" class="img-fluid">
          </div>
          <div class="project-content">
            <h3 class="project-title">Application de Gestion</h3>
            <p class="project-description">Développement d'une application de gestion pour petites entreprises.</p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>

      <!-- Projet 3 -->
      <div class="col-md-4">
        <div class="project-card">
          <div class="project-image">
            <img src="img/ecomerce_img.jpg" alt="Projet 3" class="img-fluid">
          </div>
          <div class="project-content">
            <h3 class="project-title">Portfolio Personnel</h3>
            <p class="project-description">Conception et développement de mon portfolio en HTML, CSS et JavaScript.</p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>

      <!-- Projets Supplémentaires (Masqués par défaut) -->
      <div class="col-md-4 additional-project" style="display: none;">
        <div class="project-card">
          <div class="project-image">
            <img src="img/ecomerce_img.jpg" alt="Projet 4" class="img-fluid">
          </div>
          <div class="project-content">
            <h3 class="project-title">Blog Technologique</h3>
            <p class="project-description">Création d'un blog sur les dernières tendances technologiques.</p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 additional-project" style="display: none;">
        <div class="project-card">
          <div class="project-image">
            <img src="img/ecomerce_img.jpg" alt="Projet 5" class="img-fluid">
          </div>
          <div class="project-content">
            <h3 class="project-title">Application Mobile</h3>
            <p class="project-description">Développement d'une application mobile multiplateforme avec React Native.</p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 additional-project" style="display: none;">
        <div class="project-card">
          <div class="project-image">
            <img src="img/ecomerce_img.jpg" alt="Projet 6" class="img-fluid">
          </div>
          <div class="project-content">
            <h3 class="project-title">Jeu en Ligne</h3>
            <p class="project-description">Conception d'un jeu en ligne multijoueur avec Unity et WebSocket.</p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>

      <!-- Nouveau Projet 7 -->
      <div class="col-md-4 additional-project" style="display: none;">
        <div class="project-card">
          <div class="project-image">
            <img src="img/ecomerce_img.jpg" alt="Projet 7" class="img-fluid">
          </div>
          <div class="project-content">
            <h3 class="project-title">Application de Réservation</h3>
            <p class="project-description">Développement d'une application de réservation en ligne pour les restaurants.</p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bouton "Voir plus de projets" -->
    <div class="text-center mt-5">
      <button id="voir-plus" class="btn btn-outline-light btn-lg">Voir plus de projets</button>
    </div>
  </div>
</section>
 <!--fin page pour mes projet  -->




 <!-- page pour contact -->
 <section class="cv-contact-section" id="contact">
  <h1 class="section-title">Contact : <span class="underline"></span></h1>

  <div class="cv-contact-row">
      <!-- Colonne 1 : Formulaire de contact -->
      <div class="cv-contact-col cv-contact-form">
          <h2 class="cv-contact-title">Contactez-moi</h2>
          <form class="cv-contact-form-fields">
              <input type="text" placeholder="Votre nom" class="cv-contact-input">
              <input type="email" placeholder="Votre email" class="cv-contact-input">
              <input type="text" placeholder="Sujet" class="cv-contact-input">
              <textarea placeholder="Votre message" class="cv-contact-textarea"></textarea>
              <button type="submit" class="cv-contact-button">Envoyer</button>
          </form>
      </div>

      <!-- Colonne 2 : Informations de contact -->
      <div class="cv-contact-col cv-contact-info">
          <h2 class="cv-contact-title">Informations de Contact</h2>
          <ul class="cv-contact-details">
              <li class="cv-contact-item"><i class="fas fa-envelope cv-contact-icon"></i> youneselanbri@gmail.com</li>
              <li class="cv-contact-item"><i class="fas fa-phone cv-contact-icon"></i> +212 665-060133</li>
              <li class="cv-contact-item"><i class="fas fa-map-marker-alt cv-contact-icon"></i> 132 hay Iziki 1, Marrakech, Maroc</li>
          </ul>
          <div class="cv-contact-social">
              <a href="#" class="cv-social-link"><i class="fab fa-linkedin cv-social-icon"></i></a>
              <a href="#" class="cv-social-link"><i class="fab fa-github cv-social-icon"></i></a>
              <a href="#" class="cv-social-link"><i class="fab fa-twitter cv-social-icon"></i></a>
              <a href="#" class="cv-social-link"><i class="fab fa-facebook cv-social-icon"></i></a>
          </div>
      </div>
  </div>
  
</section>
   <!-- fin page pour contact -->



</main>
      <!-- Particles.js -->
      <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
     
  <!-- Bootstrap JS et dépendances -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
  <!-- Custom JS -->
  <script src="younes.js"></script>


  <!-- GSAP et ScrollTrigger -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
  <script>
    
    



    gsap.registerPlugin(ScrollTrigger);

    // Animation d'intro
    gsap.to(".intro-title", {
        opacity: 1,
        scale: 1.2,
        duration: 2.5,
        ease: "power2.out",
        onComplete: () => {
            // Flash blanc rapide
            let flash = document.createElement("div");
            flash.classList.add("flash");
            document.body.appendChild(flash);
    
            // Faire disparaître l'écran d'intro
            gsap.to("#intro", {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    document.getElementById("intro").remove(); // Supprime l'écran noir
                    flash.remove(); // Supprime le flash après l'animation
                }
            });
        }
    });
    
    
    // Animation du site après l'intro
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("div").forEach((div, index) => {
      gsap.from(div, {
        opacity: 0,
        y: 40,
        scale:0.95,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: div,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      });
    });
  </script>




  
</body>
</html>
