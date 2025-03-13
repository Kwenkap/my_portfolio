import React, { useEffect, useState } from 'react';
import axios from 'axios';
import hero from '../image/hero.jpg';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';import Slider from 'react-slick'; // Importation de Slider pour le carrousel
import 'slick-carousel/slick/slick.css'; // Styles de base pour le carrousel
import 'slick-carousel/slick/slick-theme.css'; // Thème pour le carrousel


const Content = () => {
  // Données des compétences
  const competences = [
    { name: "React.js & Angular", level: 80 },
    { name: "TypeScript / JavaScript", level: 75 },
    { name: "HTML5 / CSS3 / SCSS", level: 90 },
    { name: "Figma, Photoshop, Illustrator, Canva", level: 90 },
    { name: "Python, Django", level: 45 },
    { name: "UI/UX Design & Prototypage", level: 88 },
    { name: "Responsive Design", level: 92 },
    { name: "Git & GitHub / GitLab", level: 85 },
    { name: "Bases de données NoSQL (MongoDB)", level: 70 },
    { name: "Node.js / Express", level: 60 },
    { name: "CMS (Wordpress, Wix.)", level: 90 },
    { name: "TailwindCss , Boostrap", level: 80 },
  ];

  // Données des expériences professionnelles
  const experiences = [
    {
      poste: "Conseillé Technique",
      entreprise: "Intelcia",
      date: "Novembre 2023 - Present",
      missions: [
        "Assurer le support technique de N1 pour les clients de SFR, en répondant à leurs questions et en résolvant leurs problèmes liés aux services et équipements.",
        "Diagnostiquer les incidents techniques, identifier les causes potentielles et proposer des solutions adaptées dans le respect des procédures.",
        "Guider les clients dans l'utilisation des produits et services de SFR, en leur fournissant des informations claires et précises.",
        "Enregistrer et suivre les incidents dans le système de gestion des tickets, en veillant à la satisfaction des clients et au respect des délais.",
        "Collaborer avec les équipes techniques de niveau supérieur pour résoudre les problèmes complexes et améliorer la qualité du service.",
        "Contribuer à l'amélioration continue des processus et des outils, en partageant les retours d'expérience et en proposant des solutions innovantes."
      ]
    },
    {
      poste: "Stage Professionnel Développeur Full Stack",
      entreprise: "Agence Web de Pointe - Clear Solutions 237",
      date: "Octobre 2022 - Aout 2023",
      missions: [
        "Lead développeur frontend sur des projets web complexes pour des clients majeurs.",
        "Implémentation de solutions frontend avancées avec React.js et Angular.",
        "Responsable de la qualité du code frontend et de la mise en place de tests automatisés.",
        "Collaboration étroite avec les équipes backend et design pour une expérience utilisateur cohérente."
      ]
    },
    {
      poste: "Responsable Informatique",
      entreprise: "TCHONANG HIGHER INSTITUTE OF BAFOUSSAM (THIB)",
      date: "Juillet 2021 - Août 2022",
      missions: [
        "Gestion complète de l'infrastructure informatique et réseau de l'établissement.",
        "Administration et maintenance du système d'information et des bases de données.",
        "Conception et développement du site web institutionnel et gestion des réseaux sociaux.",
        "Support technique et formation des utilisateurs aux outils informatiques."
      ]
    }
  ];

  // Données des projets portfolio
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Kwenkap/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets GitHub:', error);
      }
    };

    fetchRepos();
  }, []);


   // Données des projets portfolio
   const portfolios = [
    {
      nomProjet: "Site de professionnel de la santé mental ",
      technologies: "Wordpress, Elementor, PHP, MySQL",
      description: "Développement d'une interface utilisateur riche et interactive respectant maquette etablie par le web designer en ajoutant quelque effet pour amoliorer l'experience utilisateur.",
      // imageSrc: "/images/projet-saas.png",
      lien: "https://sm-clic-it.com/"
    },
    {
      nomProjet: "Site Web Vitrine pour une agence de decocation evénementielle",
      technologies: "Wordpress, Elementor, PHP, MySQL",
      description: "Création d'un site web vitrine pour une agence de décoration événementielle. Design moderne et élégant, animations pour une expérience utilisateur immersive.",
      // imageSrc: "/images/projet-ecommerce.png",
      lien: "https://dev-ballonbycelia.pantheonsite.io/"
    },
    {
      nomProjet: "Web design d'un site pour le concours de miss master et styliste organise par beaufort",
      technologies: "Figma, Photoshop, Illustrator",
      description: "Conception d'une maquette de site web pour un concours de miss master et styliste organisé par Beaufort. Design moderne et élégant, respectant la charte graphique de la marque.",
      // imageSrc: "/images/projet-mobile.png" ,
      lien: "https://www.figma.com/design/nOjeBIOZZX2jVjItw1IiQQ/Mc-Distribution_test"
    },
    {
      nomProjet: "Site e-commerce pour une boutique de Cosmetique",
      technologies: "Wix",
      description: "Développement d'un site e-commerce pour une boutique de cosmétiques. Design moderne et élégant, animations pour une expérience utilisateur immersive.",
      // imageSrc: "/images/projet-portfolio-v3.png" ,
      lien: "https://dwaynehermann1.wixsite.com/website"
    },
    {
      nomProjet: "Site reservation chambre d'hotel",
      technologies: "Wix",
      description: "Développement d'un site de réservation de chambres d'hôtel. Design moderne et élégant, animations pour une expérience utilisateur immersive.",
      // imageSrc: "/images/projet-portfolio-v3.png" ,
      lien: "https://www.atomi-hotel.be/"
    }
  ];


  // Configuration du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans antialiased animate-fadeIn">
    {/* Hero Section */}
    <section id='hero' className="hero min-h-screen bg-transparent text-center md:text-left animate-fadeIn">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-32 gap-8">
          <div className="hero-text">
            <h1 className="text-5xl font-bold font-mono uppercase tracking-wide mb-4 text-blue-500 neon-text">
              Kwankap Dinang Gilles Hermann
            </h1>
            <h2 className="text-3xl mb-8 font-mono text-gray-300 tracking-wider">
              <u className="text-blue-300">Développeur Web & Mobile Full Stack</u>
            </h2>
            <p className="lg:text-lg md:text-xl mb-8 text-gray-400 leading-relaxed">
              Développeur Web & Mobile Full Stack junior passionné par la création d'expériences web et application innovante.
              J’ai effectué plusieurs années en tant que téléconseiller dans l’expertise technique
              (SFR, par le sous-traitant INTELCIA) ce qui m’a permis d’acquérir de très bonnes compétences telles que l’organisation,
              L’écoute, le conseil ainsi que des qualités relationnelles importantes.
              Par passion j'ai continué en parallèle mon apprentissage dans le développement web et les nouvelles
              technologies en réalisant quelques projets d’étude mais aussi quelques projets professionnels pour des particuliers
              et quelques collaborations très bénéfiques pour ma montée en compétence.
              Je continue donc à travailler chaque jour avec envie, motivation et des idées
              plein la tête.
            </p>
            <div className="hero-buttons flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.mediafire.com/file/am5zf84wp5t5te8/CV_2025-03-12_GILLES_HERMANN_KWENKAP_DINANG.pdf/file"
                target='blank'
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 neon-btn transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
              >
                Télécharger mon CV
              </a>
              <a
                href="#portfolio"
                className="inline-block bg-transparent hover:bg-blue-500 text-gray-300 hover:text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 border border-blue-500 hover:border-transparent neon-btn-secondary transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
              >
                Voir mes Projets
              </a>
            </div>
          </div>
  
          <div className="text-center md:text-right justify-center py-10">
            <img src={hero}
              alt="Votre photo"
              className="rounded-full ring-2 ring-blue-500 w-96 h-96 mx-auto md:ml-auto
              object-cover transition-transform duration-500 transform hover:scale-105" // Ajout de transform et transition-transform
              style={{ objectPosition: '50% 0%' }} />
          </div>
        </div>
      </div>

{/* Skills Section */}
<section id="competences" className="container mx-auto px-4 md:py-8 lg:py-24 animate-fadeIn">
  <h2 className="md:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
    Expertise & Styles Innovants (Niveau de Maîtrise)
  </h2>
  <p className="md:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
    Visualisation de mon niveau de maîtrise pour chaque compétence clé en développement frontend et techniques de styling innovantes.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-8">
    {competences.map((competence, index) => (
      <div key={index} className="skill-progress-item">
        <span className="skill-name block font-mono text-gray-300 mb-2">{competence.name}</span>
        <div className="progress-bar-container bg-gray-700 rounded-full h-6 relative overflow-hidden">
          <div
            className="progress-bar bg-blue-500 h-full absolute left-0 top-0 neon-progress-bar"
            style={{ width: `${competence.level}%` }}
          >
            <span className="progress-level absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-100">{competence.level}%</span>
          </div>
        </div>
      </div>
    ))}
  </div>
      </section>

      </section>

      

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-24 animate-fadeIn">
  <h2 className="md:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
    Expérience Professionnelle
  </h2>
  <p className="md:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
    Un parcours professionnel
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    {experiences.map((experience, index) => (
      <div
        key={index}
        className="experience-card bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/50 transition-shadow duration-300 border-2 border-transparent hover:border-blue-500 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
      >
        <h3 className="text-xl font-bold font-mono text-blue-300 mb-2">{experience.poste}</h3>
        <p className="text-gray-300 mb-1"><span className="font-bold text-gray-400">Entreprise:</span> {experience.entreprise}</p>
        <p className="text-gray-300 mb-2"><span className="font-bold text-gray-400">Période:</span> {experience.date}</p>
        <ul className="list-disc pl-5 text-gray-300">
          {experience.missions.map((mission, missionIndex) => (
            <li key={missionIndex}>{mission}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
      </section>


 {/* Portfolio Section */}


 <section id="portfolio" className="container mx-auto px-4 py-24 animate-fadeIn">
  <h2 
    className="md:text-4xl lg:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
    Projets Phares - Portfolio 
  </h2>
  <p className="md:text-xl lg:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
    Une sélection de projets qui illustrent mon expertise en développement web/mobile.
  </p>

  <div className=''>
    <h2
      className='md:text-3xl lg:text-2xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text'>
      Projet Sur GitHub
    </h2>
    <Slider {...settings}>
      {repos.map((repo, index) => (
        <div
          key={index}
          className="portfolio-card bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/50 transition-shadow duration-300 border-2 border-transparent hover:border-blue-500 mx-4 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
        >
          <h3 className="text-xl font-bold font-mono text-blue-300 mb-2">{repo.name}</h3>
          <p className="text-gray-300 mb-1">
            <span className="font-bold text-gray-400">Description:</span> {repo.description || 'Aucune description disponible'}
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-bold text-gray-400">Langage:</span> {repo.language || 'Non spécifié'}
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-bold text-gray-400">Topic:</span> {repo.topic || 'Non spécifié'}
          </p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 neon-btn transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
          >
            Voir le Projet
          </a>

          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 mx-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
          >
            Voir la démo
          </a>
        </div>
      ))}
    </Slider>
  </div>

  <div className='my-10'>
    <h2
      className='md:text-3xl lg:text-2xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text'>
      Autres Projet web & Design 
    </h2>

    <Slider {...settings}>
      {portfolios.map((portfolio, index) => (
        <div
          key={index}
          className="portfolio-card bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/50 transition-shadow duration-300 border-2 border-transparent hover:border-blue-500 mx-4 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
        >
          <h3 className="text-xl font-bold font-mono text-blue-300 mb-2">{portfolio.nomProjet}</h3>
          <p className="text-gray-300 mb-1">
            <span className="font-bold text-gray-400">Technologies:</span> {portfolio.technologies}
          </p>
          <p className=" mb-2 text-gray-300">{portfolio.description}</p>
          {portfolio.imageSrc && (
            <img
              src={portfolio.imageSrc}
              alt={`Image du projet ${portfolio.nomProjet}`}
              className="mt-4 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
            />
          )}
          <a
            href={portfolio.lien}
            target="_blank"
            className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 neon-btn transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
          >
            Voir le Projet
          </a>
        </div>
      ))}
    </Slider>


        </div>


  
      </section>








      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24 animate-fadeIn">
  <h2 className="md:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
    Collaborons Ensemble
  </h2>
  <p className="md:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
    Prêt à donner vie à vos projets web les plus ambitieux ? Contactez-moi pour discuter de vos besoins et découvrir
    comment mon expertise et mon approche innovante peuvent faire la différence.
  </p>

  <div className="contact-info text-center">
    {/* Email */}
    <a
      href="mailto:kwenkaphermann@gmail.com"
      className="inline-flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-blue-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
      aria-label="Envoyer un email"
    >
      <FaEnvelope className="w-6 h-6" />
    </a>

    {/* Téléphone (WhatsApp) */}
    <a
      href="https://wa.me//+237690828692"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-gray-800 hover:bg-green-500 text-green-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
      aria-label="Contacter via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/gilles-hermann-kwenkap-dinang-a2730a350/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-gray-800 hover:bg-blue-600 text-blue-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
      aria-label="Visiter mon profil LinkedIn"
    >
      <FaLinkedin className="w-6 h-6" />
    </a>

    {/* GitHub (optionnel) */}
    <a
      href="https://github.com/Kwenkap"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-gray-700/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
      aria-label="Visiter mon profil GitHub"
    >
      <FaGithub className="w-6 h-6" />
    </a>
  </div>
      </section>
    </main>
  );
};

export default Content;