import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
}

export default function Page() {
    return (
      <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contactez Nous</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Vous avez un problème technique ? Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ? Faites le nous savoir.</p>
          <form action="#" className="space-y-8">
              <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="nom@dicobeer.com" required />
              </div>
              <div>
                  <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Sujet</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Laissez-nous savoir comment pouvons-nous vous aider" required />
              </div>
              <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">Votre message</label>
                  <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Laissez un message..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Envoyer</button>
          </form>
      </div>
    </section>
    )
  }


  