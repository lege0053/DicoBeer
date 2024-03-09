import React from 'react';

const Footbar = () => {
  return (
    <footer className="py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:justify-start">
          {/* DicoBeer */}
          <div className="w-full sm:auto md:auto lg:auto xl:auto">
            <div className="flex items-center mb-6 justify-center sm:justify-start">
              <img src="/dicobeer-logo.png" alt="DicoBeer Logo" className='h-6' />
            </div>
            <p className="text-gray-500 text-center sm:text-left">dico.beer@gmail.com</p>
          </div>

          {/* Informations */}
          <div className="w-full sm:auto md:auto lg:auto xl:auto">
            <p className="font-bold mb-6 text-center sm:text-left">Informations</p>
            <div className="text-center sm:text-left">
              <a href="contact" className="text-gray-500">Contactez-nous</a>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="w-full sm:auto md:auto lg:auto xl:auto">
            <p className="font-bold mb-6 text-center sm:text-left">Liens utiles</p>
            <ul className="text-center sm:text-left">
              <li><a href="profil" className="text-gray-500">Mon Compte</a></li>
              <li className='mt-4'><a href="listes" className="text-gray-500">Mes Listes</a></li>
              <li className='mt-4'><a href="bieres" className="text-gray-500">Bières</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:auto md:auto lg:auto xl:auto">
            <div className="mb-4 md:mb-0 text-center sm:text-left">
              <p className="font-bold">Newsletter</p>
              <p className="text-md text-gray-500 mt-6">Souscrivez à notre newsletter</p>
              <div className="flex flex-col">
                  <input type="email" placeholder="Votre e-mail..." className="flex-1 bg-gray-200 border rounded py-2 px-4 mt-4 focus:outline-none" />
                  <button className="bg-green-500 text-white border rounded py-2 px-4 mt-2">Souscrire gratuitement</button>        
              </div>
            </div>
          </div>
        </div>
        <br/>
        <hr className="my-4 border-gray-100" />
        <div className="text-center text-gray-500">© 2024 DicoBeer. Tous droits réservés.</div>
      </div>
    </footer>
  );
};

export default Footbar;
