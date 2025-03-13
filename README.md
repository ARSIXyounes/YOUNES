<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
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
