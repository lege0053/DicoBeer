import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Inscription',
}

export default function Page() {
    return (
      <section className="bg-[#E5F4ED]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Créer un compte
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Votre email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="nom@dicobeer.com" required />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                      </div>
                      <div>
                          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirmer le mot de passe</label>
                          <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                      </div>
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500">J'accepte les <a className="font-medium text-primary-600 hover:underline" href="#">Termes et Conditions</a></label>
                          </div>
                      </div>
                      <button type="submit" className="w-full border border-[#2EBB77] focus:outline-none text-[#2EBB77] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Créer un compte</button>
                      <p className="text-sm font-light text-gray-500 ">
                          Vous avez déjà un compte ? <a href="connexion" className="font-medium text-primary-600 hover:underline">Connexion</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
      )
  }