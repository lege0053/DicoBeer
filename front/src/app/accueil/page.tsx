import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accueil",
};

export default function Page() {
  return (<>
    <div className="grid grid-cols-2 h-screen">
      {/* Premier carré */}
      <div className="relative h-3/5 bg-gradient-to-b from-green-100 to-green-50">
        {/* Contenu du premier carré */}
        <div className="relative grid grid-cols-2">
          <div className="flex flex-col justify-center m-8 relative z-10">
            <p className="text-black font-bold text-2xl mb-2">
              Découvrez la bière du mois
            </p>
            <p className="text-gray-500 mb-2">
              Hoffenberg, le goût délicieux de la boisson
            </p>
            <a href="bieres">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Explorer
              </button>
            </a>
          </div>
          <div className="flex items-center justify-center relative z-20">
            <Image
              src="/beer_month.png"
              width={200}
              height={200}
              alt="bière du mois"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            {/* Ajustement de la taille du cercle en pourcentage */}
            <div className="w-3/5 h-5/6 rounded-full bg-gradient-to-b from-purple-200 to-green-50"></div>
          </div>
        </div>
      </div>
      {/* Deuxième carré */}
      <div className="flex-1 bg-gray-300 h-3/5">
        {/* Contenu du deuxième carré */}
        <div className="relative grid grid-cols-2">
          <div className="flex flex-col m-8">
            <p className="text-black font-bold text-2xl mb-2">
              Créez vos listes personnalisées
            </p>
            <p className="text-gray-500 mb-2">
              Une liste de favoris, de bières à découvrir et plus
            </p>
            <a href="listes">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Créer
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Ne ratez plus rien</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">Souscrivez à notre newsletter pour recevoir les nouveautés chaque semaine.</p>
          <div className="mb-6">
            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Votre adresse mail" />
          </div>
          <a href="#" className="inline-flex items-center bg-green-300 hover:bg-green-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Souscire maintenant
          </a>
        </div>
        <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
      </div>
    </div>
  </>);
}
