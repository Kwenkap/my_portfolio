// components/Content.js
import React from 'react';
import hero from '../image/hero.png'
import call2 from '../image/call2.png'
import call from '../image/call.jpg'



const Content = () => {
  return (
<main className="min-h-screen bg-gray-900 text-gray-100">
  
  <section id='hero' className="hero min-h-screen bg-gray-900 text-gray-100">

{/* SECTION HERO */}
    <div className="container mx-auto px-4 py-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-serif font-bold  mb-4 ">Kwankap Dinang Gilles Hermann</h1>
          <h2 className="text-2xl mb-8">Développeur Web Full Stack</h2>
          <p className="text-lg mb-8 ">
          Hello ! Je m’appelle Julien Dahy, développeur Web junior devenu Tech Manager.
          Auparavant, j’ai effectué plusieurs années en tant que téléconseiller dans l’expertise technique 
          (Canal+ / Orange) ce qui m’a permis d’acquérir de très bonnes compétences telles que l’organisation, 
          l’écoute, le conseil ainsi que des qualités relationnelles importantes.
          J’ai profité du retour à mon Alsace natale pour effectuer une reconversion 
          professionnelle dans le Développement Web, domaine qui m’intéressait depuis
          de nombreuses années.
          J’ai donc suivi la formation Développeur Intégrateur au sein du CCI Campus de
          Colmar. Suite à l’obtention du Bac+2, j’ai obtenu la confiance d’Annei qui m’a
            embauché en septembre 2020 et chez qui je suis devenu Tech Manager en 2022.
            Je continue donc à travailler chaque jour avec envie, motivation et des idées
           plein la tête.
          </p>
          <a href="#" className="bg-blue-500  hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
            Télécharger mon CV
          </a>
        </div>
        <div className="text-center md:text-right justify-center py-10  ">
          <img src={hero} alt="Votre photo" className="rounded-full ring-2 ring-blue-500 w-96 h-96 mx-auto md:ml-auto" />
        </div>
      </div>
    </div>


{/* POSTE ACTUELLE */}
    <div className='py-4'>
      <img className='brightness-50 w-full h-auto' src={call} /> 
    </div>


{/*  COMPETENCE */}

    <div className="container mx-auto px-4 py-4 text-center items-center justify-center">
        <h2 className="text-4xl font-bold text-center font-serif">COMPETENCES</h2>
          <p className='text-2xl mb-8'>Elles sont en constantes améliorations car pour moi la joie de 
            ce métier fait que l’on en apprend tous les jours, d’autant plus 
            en étant impliqué, curieux et passionné.</p>

    </div>


{/*  PORTFOLIO */}

    <div className="container mx-auto px-4 py-4 text-center items-center justify-center">
        <h2 className="text-4xl font-bold text-center font-serif">PORTFOLIO</h2>
          <p className='text-2xl mb-8'>Ci-dessous, quelques exemples de réalisations 
            effectuées durant la formation, le stage et plus encore :</p>

    </div>

{/*  CONTACT */}

        <div className="container mx-auto px-4 py-4 text-center items-center justify-center">
        <h2 className="text-4xl font-bold text-center font-serif">CONTACTEZ-MOI </h2>
          <p className='text-2xl mb-8'>N'hésitez pas à me contacter, 
            je vous répondrai dans les plus brefs délais.</p>

    </div>

  </section>

  <div>
    <h3 className='font-serif'> hermann</h3>
  </div>

  
  
</main>




  );
};

export default Content;


    {/* <main className="flex-grow p-4">
      <section id="about" className="mb-8">
        <h2 className="text-2xl font-bold">À Propos</h2>
        <p>Je suis un développeur web mobile full stack passionné par la création d'applications innovantes.</p>
      </section>
      <section id="projects" className="mb-8">
        <h2 className="text-2xl font-bold">Projets</h2>
        <ul>
          <li>Projet 1: Application de gestion de tâches</li>
          <li>Projet 2: Site e-commerce</li>
          <li>Projet 3: Blog personnel</li>
        </ul>
      </section>
      <section id="contact">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>Vous pouvez me contacter à l'adresse email suivante: exemple@mail.com</p>
      </section>
    </main> */}


    // code hero
/*     <section className="hero min-h-screen bg-gray-900 text-gray-100 ">
    <div className="container mx-80 px-4 py-16 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Kwankap Dinang Gilles Hermann</h1>
          <h2 className="text-2xl mb-8">Développeur Web Full Stack</h2>
          <p className="text-lg mb-8">
            Passionné par la création de sites web performants et esthétiques. 
            Spécialisé dans les technologies React, Node.js et MongoDB.
          </p>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Télécharger mon CV
          </a>
        </div>
        <div className="text-center md:text-right">
          <img src={hero} alt="Votre photo" className="rounded-full w-60 h-60 mx-auto md:ml-auto" />
        </div>
      </div>
    </div>
  </section> */import React from 'react';
import hero from '../image/hero.png';
import call from '../image/call.jpg';

const Content = () => {
  const competences = [
    { name: "React.js & Angular", level: 90 },
    { name: "TypeScript / JavaScript", level: 85 },
    { name: "HTML5 / CSS3 / SCSS", level: 95 },
    { name: "Figma, Photoshop, Illustrator", level: 80 },
    { name: "UI/UX Design & Prototypage", level: 88 },
    { name: "Animations CSS / JavaScript", level: 75 },
    { name: "Performance Web & Optimisation", level: 70 },
    { name: "Responsive Design", level: 92 },
    { name: "Tests Unitaires & E2E", level: 65 },
    { name: "Git & GitHub / GitLab", level: 85 },
    { name: "Bases de données NoSQL (MongoDB)", level: 70 },
    { name: "Node.js / Express", level: 60 },
    { name: "CMS (Wordpress, etc.)", level: 75 },
    { name: "Accessibilité Web (WCAG)", level: 68 },
    { name: "Design Systems & Component Libraries", level: 82 },
  ];

  const experiences = [
    {
      poste: "Architecte Frontend & Responsable UI/UX",
      entreprise: "Tech Startup Innovante [Confidentiel]",
      date: "Janvier 2024 - Présent",
      missions: [
        "Direction de la stratégie frontend et UI/UX pour l'ensemble des produits web.",
        "Conception et implémentation d'un Design System réutilisable et évolutif.",
        "Optimisation des performances frontend, amélioration de la vitesse de chargement de 40%.",
        "Mentoring d'une équipe de 5 développeurs frontend juniors et médiums.",
        "Introduction de techniques d'animation et de styling innovantes pour améliorer l'engagement utilisateur."
      ]
    },
    {
      poste: "Développeur Frontend Senior",
      entreprise: "Agence Web de Pointe - Clear Solutions 237",
      date: "Septembre 2022 - Décembre 2023",
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

  const portfolios = [
    {
      nomProjet: "Plateforme SaaS d'Analyse de Données",
      technologies: "React.js, TypeScript, SCSS, Recharts, Framer Motion",
      description: "Développement d'une interface utilisateur riche et interactive pour une plateforme d'analyse de données en temps réel.  Intégration de graphiques animés et de visualisations de données complexes avec Recharts et Framer Motion.  Focus sur la performance et l'expérience utilisateur.",
      imageSrc: "/images/projet-saas.png" // Placeholder, replace with actual image path
    },
    {
      nomProjet: "Site Web E-commerce avec Animations Innovantes",
      technologies: "Angular, TypeScript, Tailwind CSS, GSAP",
      description: "Création d'un site e-commerce moderne et performant avec des animations GSAP pour une expérience utilisateur engageante et mémorable.  Design responsive et optimisé pour la conversion.",
      imageSrc: "/images/projet-ecommerce.png" // Placeholder
    },
    {
      nomProjet: "Application Mobile Hybride de Productivité",
      technologies: "Ionic, Angular, Capacitor, SCSS",
      description: "Développement d'une application mobile multiplateforme pour améliorer la productivité des équipes.  Interface utilisateur intuitive et design soigné, animations subtiles pour une navigation fluide.",
      imageSrc: "/images/projet-mobile.png" // Placeholder
    },
    {
      nomProjet: "Portfolio Personnel V3 - Refonte Stylistique",
      technologies: "React.js, Tailwind CSS, CSS Animations",
      description: "Refonte complète de mon portfolio personnel avec un style futuriste et des animations CSS avancées.  Mise en avant de mes compétences en frontend et de mon approche créative du design web.",
      imageSrc: "/images/projet-portfolio-v3.png" // Placeholder
    }
  ];


  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans antialiased">
      {/* Hero Section */}
      <section id='hero' className="hero min-h-screen bg-transparent text-center lg:text-left">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-32 gap-8">
            <div className="hero-text">
              <h1 className="text-5xl font-bold font-mono uppercase tracking-wide mb-4 text-blue-500 neon-text">
                Kwankap Dinang Gilles Hermann
              </h1>
              <h2 className="text-3xl mb-8 font-mono text-gray-300 tracking-wider">
                <u className="text-blue-300">Architecte Frontend & UI Innovateur</u>
              </h2>
              <p className="xl:text-lg lg:text-xl mb-8 text-gray-400 leading-relaxed">
                Développeur frontend senior passionné par la création d'expériences web exceptionnelles et innovantes.
                Spécialisé dans les technologies frontend modernes et les techniques de styling avancées, je transforme
                les visions créatives en réalité digitale performante et accessible.  Expertise en React.js, Angular,
                animations web, optimisation de performance et UI/UX design.
              </p>
              <div className="hero-buttons flex justify-center lg:justify-start space-x-4">
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 neon-btn"
                >
                  Télécharger mon CV
                </a>
                <a
                  href="#portfolio"
                  className="inline-block bg-transparent hover:bg-blue-500 text-gray-300 hover:text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 border border-blue-500 hover:border-transparent neon-btn-secondary"
                >
                  Voir mes Projets
                </a>
              </div>
            </div>
            <div className="hero-image flex justify-center lg:justify-end">
            <div className="absolute text-center lg:text-right justify-center">

                <img 
                src={hero} 
                alt="Votre photo" 
                className="rounded-full ring-2 ring-blue-500 w-96 h-96 mx-auto lg:ml-auto 
                object-cover transition-transform duration-500 transform hover:scale-105" />


                <div className="overlay absolute inset-0 opacity-20 rounded-full pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>


      </section>




{/* Skills Section */}
<section id="competences" className="container mx-auto px-4 py-4">
                <h2 className="lg:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
                  Expertise Frontend & Styles Innovants (Niveau de Maîtrise)
                </h2>
                <p className="lg:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
                  Visualisation de mon niveau de maîtrise pour chaque compétence clé en développement frontend et techniques de styling innovantes.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-12 gap-x-8">
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
      

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-24">
        <h2 className="lg:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
          Expérience Professionnelle Senior
        </h2>
        <p className="lg:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
          Un parcours professionnel axé sur le frontend, l'innovation UI/UX et le leadership technique.  Des expériences
          significatives dans des environnements variés, de startups innovantes à des agences web de renom.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experience-card bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/50 transition-shadow duration-300 border-2 border-transparent hover:border-blue-500"
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
      <section id="portfolio" className="container mx-auto px-4 py-24">
        <h2 className="lg:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
          Projets Phares - Portfolio Frontend Innovant
        </h2>
        <p className="lg:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
          Une sélection de projets qui illustrent mon expertise en développement frontend, mon souci du détail et mon
          approche innovante du styling et des animations web.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="portfolio-card bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/50 transition-shadow duration-300 border-2 border-transparent hover:border-blue-500"
            >
              <h3 className="text-xl font-bold font-mono text-blue-300 mb-2">{portfolio.nomProjet}</h3>
              <p className="text-gray-300 mb-1"><span className="font-bold text-gray-400">Technologies:</span> {portfolio.technologies}</p>
              <p className="text-gray-300 mb-2 text-gray-300">{portfolio.description}</p>
              {portfolio.imageSrc && (
                <img src={portfolio.imageSrc} alt={`Image du projet ${portfolio.nomProjet}`} className="mt-4 rounded-md shadow-md" />
              )}
              <a href="#" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 neon-btn">
                Voir le Projet
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <h2 className="lg:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
          Collaborons Ensemble
        </h2>
        <p className="lg:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
          Prêt à donner vie à vos projets web les plus ambitieux ?  Contactez-moi pour discuter de vos besoins et découvrir
          comment mon expertise en frontend et mon approche innovante peuvent faire la différence.
        </p>
        <div className="contact-info text-center">
          <p className="text-gray-300 mb-4">
            <span className="font-bold text-gray-400">Email:</span> <a href="mailto:your-email@example.com" className="text-blue-300 hover:underline neon-text-link">your-email@example.com</a>
          </p>
          <p className="text-gray-300 mb-4">
            <span className="font-bold text-gray-400">Téléphone:</span> <a href="tel:+1234567890" className="text-blue-300 hover:underline neon-text-link">+123 456 7890</a>
          </p>
          <p className="text-gray-300">
            <span className="font-bold text-gray-400">LinkedIn:</span> <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline neon-text-link">linkedin.com/in/your-linkedin</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Content;