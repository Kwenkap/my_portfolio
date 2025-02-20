import React from 'react';
import hero from '../image/hero.png';
import call from '../image/call.jpg';

const Content = () => {
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
    { name: "Design Systems & Component Libraries", level: 80 },
  ];

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
        "Contribuer à l'amélioration continue des processus et des outils, en partageant les retours d'expérience et en proposant des solutions innovantes."      ]
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
                <u className="text-blue-300">Développeur Web & Mobile Full Stack</u>
              </h2>
              <p className="xl:text-lg lg:text-xl mb-8 text-gray-400 leading-relaxed">
              Développeur Web & Mobile Full Stack junior passionné par la création d'expériences web et application innovante.
                J’ai effectué plusieurs années en tant que téléconseiller dans l’expertise technique 
                (SFR, par le sous-traitant INTELCIA) ce qui m’a permis d’acquérir de très bonnes compétences telles que l’organisation, 
                L’écoute, le conseil ainsi que des qualités relationnelles importantes.
                Par passion j'ai continué en parallèle mon apprentissage dans le développement web et les nouvelle 
                technologie en réalisant quelques projet d’étude mais aussi quelque un professionnel pour des particuliers
                 et quelques collaborations très bénéfiques pour ma monté en compétence.
                 Je continue donc à travailler chaque jour avec envie, motivation et des idées
                 plein la tête.

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


            <div className="text-center md:text-right justify-center py-10  ">
                <img src={hero} 
                alt="Votre photo" 
                className="rounded-full ring-2 ring-blue-500 w-96 h-96 mx-auto lg:ml-auto 
                object-cover transition-transform duration-500 transform hover:scale-105" />
            </div>


          </div>
        </div>

{/* Skills Section */}
<section id="competences" className="container mx-auto px-4 py-4">
                <h2 className="lg:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
                  Expertise Frontend & Styles Innovants (Niveau de Maîtrise)
                </h2>
                <p className="lg:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
                  Visualisation de mon niveau de maîtrise pour chaque compétence clé en développement frontend et techniques de styling innovantes.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-8">
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
      <section id="experience" className="container mx-auto px-4 py-24">
        <h2 className="lg:text-4xl xl:text-5xl font-bold text-center font-mono uppercase tracking-wide mb-12 text-blue-500 neon-text">
          Expérience Professionnelle
        </h2>
        <p className="lg:text-xl xl:text-2xl mb-16 text-center text-gray-400 leading-relaxed">
          Un parcours professionnel axé sur le frontend, l'innovation UI/UX et le leadership technique.  Des expériences
          significatives dans des environnements variés, de startups innovantes à des agences web de renom.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
            <span className="font-bold text-gray-400">Email:</span> <a href="mailto:kwenkaphermann@gmail.com" className="text-blue-300 hover:underline neon-text-link">kwenkaphermann@gmail.com</a>
          </p>
          <p className="text-gray-300 mb-4">
            <span className="font-bold text-gray-400">Téléphone:</span> <a href="wa.me//+237690828692" className="text-blue-300 hover:underline neon-text-link">+237 690828692</a>
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