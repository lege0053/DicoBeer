import React from 'react'

const Footbar = () => {
return (
    <footer className="py-4 absolute bottom-0 w-full">
    <div className="container mx-auto grid grid-cols-4 gap-4">
        {/* DicoBeer */}
        <div className="col-span-1">
        <div className="flex items-center">
            <img src="/dicobeer-logo.png" alt="DicoBeer Logo" />
        </div>
        <p className="text-gray-500">dico.beer@gmail.com</p>
        </div>

        {/* Informations */}
        <div className="col-span-1">
        <p className="font-bold">Informations</p>
        <a href="contact" className="text-gray-500">Contactez-nous</a>
        </div>

        {/* Liens utiles */}
        <div className="col-span-1">
        <p className="font-bold">Liens utiles</p>
        <ul>
            <li><a href="profil" className="text-gray-500">Mon Compte</a></li>
            <li><a href="lists" className="text-gray-500">Mes Listes</a></li>
            <li><a href="bieres" className="text-gray-500">Bières</a></li>
        </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1">
        <div>
            <p className="font-bold">Newsletter</p>
            <p className="text-md text-gray-500">Souscrivez à notre newsletter</p>
        </div>
        <div>
            <input type="email" placeholder="Entrez votre adresse e-mail" className="bg-gray-200 border rounded py-2 px-4" />
            <button className="bg-green-500 text-white px-3 rounded">Souscrire gratuitement</button>
        </div>
        </div>
    </div>
    </footer>
);
};

export default Footbar
