import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accueil",
};

export default function Page() {
  return (<>

<div className="grid grid-cols-2">

  {/* Carré 1 */}
  <div className="justify-center items-center relative flex h-[722px] bg-[#E5F4ED] from-purple-200 to-green-50 before:absolute before:h-[620px] before:w-[600px] before:rounded-full before:bg-gradient-to-b">
    <div className="grid grid-cols-2 gap-16">
      <div className="z-20 mt-96 max-w-64">
        <p className="text-black font-bold text-[32px] mb-4">Découvrez la bière du mois</p>
        <p className="text-gray-500 mb-8 text-lg">Hoffenberg, le goût délicieux de la boisson</p>
        <a href="bieres">
          <button className="bg-[#2EBB77] font-medium text-white px-20 py-4 rounded-xl">Explorer</button>
        </a>
      </div>
      <div className="z-20 mt-40 row-span-2">
        <Image src="/beer_month.png" width={350} height={520} alt="bière du mois" />
      </div>
    </div>
  </div>

  {/* Carré 2 */}
  <div id="carre-2" className="justify-center items-center relative flex h-[722px]">
    <div className="grid grid-cols-2 gap-16">
      <div className="z-20 mt-96 max-w-64">
        <p className="text-black font-bold text-[32px] mb-4">Créez vos listes personnalisées</p>
        <p className="text-gray-500 mb-8 text-lg">Une liste de favoris, de bières à découvrir et plus</p>
        <a href="listes">
          <button className="bg-[#2EBB77] font-medium text-white px-20 py-4 rounded-xl">Créer</button>
        </a>
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
