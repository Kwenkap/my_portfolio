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
  </section> */