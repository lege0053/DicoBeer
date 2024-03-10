import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accueil",
};

export default function Page() {
  return (<>

    <div className="grid grid-cols-1 md:grid-cols-2">
      
      {/* Carré 1 */}
      <div className="justify-center items-center flex h-[522px] md:h-[722px] bg-[#E5F4ED] from-purple-200 to-green-50 before:absolute before:h-[420px] before:w-[400px] md:before:h-[620px] md:before:w-[600px] before:rounded-full before:bg-gradient-to-b">
        <div className="grid mx-10 grid-cols-2 gap-2 md:gap-16">
          <div className="z-20 my-auto md:max-w-64">
            <p className="text-black font-bold text-3xl mb-4">Découvrez la bière du mois</p>
            <p className="text-gray-500 mb-8 text-lg">Hoffenberg, le goût délicieux de la boisson</p>
            <a href="bieres">
              <button className="bg-[#2EBB77] font-medium text-white px-16 md:px-20 py-4 rounded-xl">Explorer</button>
            </a>
          </div>
          <div className="z-20 md:mt-40">
            <Image src="/beer_month.png" width={350} height={520} alt="bière du mois" />
          </div>
        </div>
      </div>

      {/* Carré 2 */}
      <div id="carre-2" className="justify-center items-center flex h-[522px] md:h-[722px]">
        <div className="grid mx-10 grid-cols-2 gap-8 mb:gap-16">
          <div className="z-20 my-auto md:max-w-64">
            <p className="text-black font-bold text-3xl mb-4">Créez vos listes personnalisées</p>
            <p className="text-gray-500 mb-8 text-lg">Une liste de favoris, de bières à découvrir et plus</p>
            <a href="listes">
              <button className="bg-[#2EBB77] font-medium text-white px-16 md:px-20 py-4 rounded-xl">Créer</button>
            </a>
          </div>
          <div className="z-20 md:mt-40 h-[520px]"/>
        </div>
      </div>

    </div>

    <div className="bg-white">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Ne ratez plus rien</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">Souscrivez à notre newsletter pour recevoir les nouveautés chaque semaine.</p>
          <div className="flex flex-row mb-6">
            <input type="email" className="bg-gray-50 border border-[#2EBB77] text-gray-900 focus:outline-none text-sm rounded-s-xl w-full p-2.5" placeholder="Votre adresse mail" />
            <a href="#">
              <button className="bg-[#2EBB77] font-medium text-white border border-[#2EBB77] text-sm py-2.5 px-6 md:px-20 rounded-e-xl">Souscire</button>
            </a>
          </div>
        </div>
        <img className="w-full" src="/newsletter.png" alt="dashboard image" />
      </div>
    </div>
  </>);
}
