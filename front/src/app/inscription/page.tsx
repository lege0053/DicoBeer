"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

type Error = {
  field?: string;
  message: string;
};

export default function Page() {
  const router = useRouter();
  const [errors, setErrors] = useState<Error[]>([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const birthdate = formData.get("date");
    const email = formData.get("email");
    const pseudo = email?.toString().split("@")[0];
    const role = { admin: 0 };

    setErrors([]);

    const validationErrors = validateUserInput(
      email!,
      password!,
      confirmPassword!,
      birthdate!
    );
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await fetch("http://localhost:9000/api/users/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, pseudo, birthdate, role }),
    });

    if (response.ok) {
      // router.push('/profil')
    } else {
      const errorData = await response.json();
      setErrors([{ field: "error", message: errorData.message }]);
    }

    function validateUserInput(
      email: FormDataEntryValue,
      password: FormDataEntryValue,
      confirmPassword: FormDataEntryValue,
      birthdate: FormDataEntryValue
    ): Error[] {
      const errors: Error[] = [];

      // confirm password
      console.log(confirmPassword);
      if (password !== confirmPassword) {
        errors.push({
          field: "confirmPassword",
          message: "Les mots de passe ne correspondent pas",
        });
      }

      // minimum age 18
      const birthDate = new Date(birthdate.toString());
      const eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
      if (birthDate > eighteenYearsAgo) {
        errors.push({
          field: "date",
          message: "Vous devez être âgé(e) de 18 ans ou plus",
        });
      }

      // valid email
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(email.toString())) {
        errors.push({
          field: "email",
          message: "Format d'email invalide",
        });
      }

      return errors;
    }
  }

  return (
    <section className="bg-[#E5F4ED]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Créer un compte
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {errors.length > 0 && (
                <div className="text-red-500 space-y-2">
                  {errors.map((error) => (
                    <p key={error.field}>{error.message}</p>
                  ))}
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="nom@dicobeer.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Votre date de naissance
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                    required
                  />
                  <span
                    className={`absolute inset-y-3 right-3 cursor-pointer ${
                      passwordVisible ? "text-blue-500" : "text-gray-400"
                    }`}
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <AiOutlineEye size={18} />
                    ) : (
                      <AiOutlineEyeInvisible size={18} />
                    )}
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                  <span
                    className={`absolute inset-y-3 right-3 cursor-pointer ${
                      // Use right-3 for consistency
                      confirmPasswordVisible ? "text-blue-500" : "text-gray-400"
                    }`}
                    onClick={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                  >
                    {confirmPasswordVisible ? (
                      <AiOutlineEye size={18} />
                    ) : (
                      <AiOutlineEyeInvisible size={18} />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    J'accepte les{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Termes et Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full border border-[#2EBB77] focus:outline-none text-[#2EBB77] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Créer un compte
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Vous avez déjà un compte ?{" "}
                <a
                  href="connexion"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Connexion
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
