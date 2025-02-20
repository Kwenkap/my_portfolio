import React from 'react';
import hero from '../image/hero.png';
import call from '../image/call.jpg';

const Content = () => {
  const competences = [
    "Infographie (Figma, Photoshop, Illustrator)",
    "Design d'applications et montage UI/UX (Ionic)",
    "Gestion de versions (GIT, Github, Gitlab)",
    "Bases de données (MySQL, MongoDB)",
    "Développement Front-end (Javascript, HTML, SCSS, TypeScript, React.js, Angular)",
    "Développement Back-end (Node.js, Python, Django, PHP)",
    "CMS (Wordpress)"
  ];

  const experiences = [
    {
      poste: "Responsable Informatique",
      entreprise: "TCHONANG HIGHER INSTITUTE OF BAFOUSSAM (THIB)",
      date: "Juillet 2021 - Août 2022",
      missions: [
        "Gestion et maintenance du matériel informatique et réseau",
        "Administration du logiciel de gestion d'établissement",
        "Conception et administration du site web et des réseaux sociaux",
        "Gestion des laboratoires informatiques"
      ]
    },
    {
      poste: "Stage Professionnelle Développeur Full Stack",
      entreprise: "Clear Solutions 237",
      date: "Septembre 2022 - Décembre 2022",
      missions: [
        "Développement d'une application hybride de gestion de restaurant Implémentation du frontend des différentes pages (Angular, Ionic) "
      ]
    }, 

    {
      poste: "Conseille Technique ",
      entreprise: "Intelcia",
      date: "Novembre 2023 - ",
      missions: [
        "Développement d'une application hybride de gestion de restaurant Implémentation du frontend des différentes pages (Angular, Ionic) "
      ]
    }

  ];

  const portfolios = [
    {
      poste: "Développeur Android",
      entreprise: "QMerchand Clear Solutions 237",
      date: "Janvier 2023 - Février 2023",
      missions: [
        "Développement d'une application Android d'administration (Java, Android Studio)"
      ]
    },
        {
      poste: "Développeur Full Stack",
      entreprise: "HELEP 237 Clear Solutions 237",
      date: "Février 2023 - Mai 2023",
      missions: [
        "Conversion d'une application Android en application hybride (Ionic)",
        "Implémentation du frontend et du dashboard (Node.js, Angular)"
      ]
    },
        {
      poste: "Développeur Freelance",
      entreprise: "MarketPlace All Body",
      date: "Mai 2023",
      missions: [
        "Création du design d'une application E-commerce (Figma)"
      ]
    },
        {
      poste: "Développeur Freelance",
      entreprise: "D&M Sweet Event",
      date: "Mai 2023",
      missions: [
        "Design de site web (Figma)"
      ]
    },
        {
      poste: "Développeur Freelance",
      entreprise: "LocationsZen",
      date: "Mai 2023 - Juin 2023",
      missions: [
        "Développement d'une application web de gestion des locataires (React.js, Node.js, MongoDB)"
      ]
    },
            {
      poste: "Développeur Freelance",
      entreprise: "Laboratoire Peau de rêve",
      date: "Depuis Juillet 2023",
      missions: [
        "Création et gestion d'un site web e-commerce (Wix)",
        "Optimisation du référencement et mise en place d'un système de paiement sécurisé"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section id='hero' className="hero min-h-screen bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-96 gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-serif font-bold mb-4">Kwankap Dinang Gilles Hermann</h1>
              <h2 className="text-2xl mb-8"><u>Développeur Web Full Stack</u></h2>
              <p className="xl:text-lg lg:text-2xl mb-8">
                Hello ! Je m’appelle Gilles Hermann, développeur Web/Mobile junior.
                Passionné par le développement web et mobile, je suis constamment à la recherche de nouvelles
                opportunités pour améliorer mes compétences et créer des expériences utilisateur
                exceptionnelles.
              </p>
              <a href="#" className="bg-blue-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                Télécharger mon CV
              </a>
            </div>
            <div className="text-center lg:text-right justify-center">
              <img src={hero} alt="Votre photo" className="rounded-full ring-2 ring-blue-500 w-96 h-96 mx-auto lg:ml-auto" />
            </div>
          </div>
        </div>

{/* Skills Section */}
<div id="competences" className="container mx-auto px-4 py-8">
        <h2 className="lg:text-2xl xl:text-3xl font-bold text-center font-serif mb-4">COMPÉTENCES</h2>
        <p className='lg:text-1xl xl:text-2xl mb-8 text-center'>
          Elles sont en constantes améliorations car pour moi la joie de 
          ce métier fait que l’on en apprend tous les jours, d’autant plus 
          en étant impliqué, curieux et passionné.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {competences.map((competence, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <p className="text-lg">{competence}</p>
            </div>
          ))}
        </div>
      </div>



      </section>

      


      {/* experience Section */}
      <section id="experience" className="container mx-auto px-4 py-8">
        <h2 className="lg:text-2xl xl:text-3xl font-bold text-center font-serif mb-4">EXPERIENCE PROFESSIONNELLE</h2>
        <p className='lg:text-1xl xl:text-2xl mb-8 text-center'>
          Ci-dessous, quelques exemples de réalisations 
          effectuées durant la formation, le stage et plus encore :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <p className="text-lg">{experience.poste}</p>
              <p className="text-lg">{experience.date}</p>
              <p className="text-lg">{experience.entreprise}</p>
              <p className="text-lg">{experience.missions}</p>
            </div>
            ))}
          </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-8">
        <h2 className="lg:text-2xl xl:text-3xl font-bold text-center font-serif mb-4">PORTFOLIO</h2>
        <p className='lg:text-1xl xl:text-2xl mb-8 text-center'>
          Ci-dessous, quelques exemples de réalisations 
          effectuées durant la formation, le stage et plus encore :
        </p>
        {/* Add your portfolio items here */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-8">
        <h2 className="lg:text-2xl xl:text-3xl font-bold text-center font-serif mb-4">CONTACTEZ-MOI</h2>
        <p className='lg:text-1xl xl:text-2xl mb-8 text-center'>
          N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
        </p>
        {/* Add your contact form or information here */}
      </section>
    </main>
  );
};

export default Content;