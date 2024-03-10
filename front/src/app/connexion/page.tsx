"use client";

import { useState } from 'react';
// import { useRouter } from 'next/router';

export default function Page() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [error, setError] = useState('');
  // const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Validation des champs
    if (!email || !motDePasse) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          motDePasse,
        }),
      });

      // Vérifier la réponse de l'API (jeton d'authentification?)
      if (response.status === 200) {
        const data = await response.json();
        if (data.success) {
          // Stocker le token (local storage par exemple)
          localStorage.setItem('token', data.token);
          // router.push('/');
          console.log("connecté!")
        } else {
          setError(data.message || 'Une erreur est survenue'); // Message d'erreur plus précis
        }
      } else {
        setError('Une erreur est survenue');
      }
    } catch (error) {
      console.error(error);
      setError('Une erreur est survenue');
    }
  };

  return (
<section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Connexion au compte
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Votre email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required={true} />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true} />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required={true} />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500">Se rappeler de moi</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Mot de passe oublié ?</a>
                  </div>
                  <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Connexion</button>
                  <p className="text-sm font-light text-gray-500">
                      Pas encore de compte ? <a href="inscription" className="font-medium text-primary-600 hover:underline">Inscription</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  );
}
