import { useState } from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";

const TermsAndConditionsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const termsContent = (
    <div>
      <div className="flex flex-row mb-3">
        <p className="text-xl font-semibold text-gray-900">
          Termes et Conditions
        </p>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          onClick={closeModal}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="p-4 md:p-5 space-y-4 border-t border-gray-200">
        <h3 className="text-lg font-medium mb-2">1. Objet</h3>
        <p className="text-gray-700 mb-4">Ce site web vous permet de :</p>
        <ul className="list-disc pl-4 ml-4">
          <li className="text-gray-700">
            Consulter une base de données de bières ;
          </li>
          <li className="text-gray-700">Créer des listes de bières ;</li>
          <li className="text-gray-700">
            Laisser des commentaires sur les bières.
          </li>
        </ul>
        <h3 className="text-lg font-medium mb-2">2. Inscription</h3>
        <p className="text-gray-700 mb-4">
          L'inscription est gratuite et requise pour accéder à certaines
          fonctionnalités du site. Lors de l'inscription, vous devrez fournir :
        </p>
        <ul className="list-disc pl-4 ml-4">
          <li className="text-gray-700">
            Votre adresse e-mail (utilisée pour la connexion et les
            notifications optionnelles) ;
          </li>
          <li className="text-gray-700">
            Votre date de naissance (pour vérifier votre majorité) ;
          </li>
          <li className="text-gray-700">
            Un mot de passe (pour sécuriser votre compte) ;
          </li>
          <li className="text-gray-700">
            Optionnellement, vous pouvez activer la fonction "Se souvenir de
            moi" pour une connexion simplifiée.
          </li>
        </ul>
        <p className="text-gray-700 mb-4 font-italic">
          **Vous vous engagez à fournir des informations exactes et complètes.
          La confidentialité de votre mot de passe vous incombe.**
        </p>
        <h3 className="text-lg font-medium mb-2">3. Contenu et commentaires</h3>
        <p className="text-gray-700 mb-4">
          Vous êtes seul responsable des commentaires que vous publiez.
          Assurez-vous de respecter les points suivants :
        </p>
        <ul className="list-disc pl-4 ml-4">
          <li className="text-gray-700">
            Pas de propos diffamatoires, insultants, racistes, sexistes ou
            contraires à l'ordre public.
          </li>
          <li className="text-gray-700">Pas de fausses informations.</li>
          <li className="text-gray-700">
            Respect des droits de propriété intellectuelle d'autrui.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Le site se réserve le droit de supprimer tout commentaire non conforme
          à ces règles.
        </p>
        <h3 className="text-lg font-medium mb-2">
          4. Propriété intellectuelle
        </h3>
        <p className="text-gray-700 mb-4">
          L'ensemble du contenu du site (textes, images, logos, etc.) est
          protégé par le droit de la propriété intellectuelle. Toute
          reproduction, modification ou diffusion sans autorisation est
          interdite.
        </p>
        <h3 className="text-lg font-medium mb-2">5. Données personnelles</h3>
        <p className="text-gray-700 mb-4">
          Nous respectons votre vie privée et protégeons vos données
          personnelles conformément à la réglementation en vigueur.
        </p>
        <p className="text-gray-700 mb-4">
          Les informations collectées lors de l'inscription servent à :
        </p>
        <ul className="list-disc pl-4 ml-4">
          <li className="text-gray-700">Gérer votre compte utilisateur ;</li>
          <li className="text-gray-700">
            Améliorer votre expérience sur le site ;
          </li>
          <li className="text-gray-700">
            Vous envoyer des notifications par e-mail (uniquement si vous
            activez l'option).
          </li>
        </ul>
        <p className="text-gray-700 mb-4 font-italic">
          **Vous disposez d'un droit d'accès, de rectification, de suppression
          et de portabilité de vos données personnelles. Vous pouvez également
          vous opposer à l'utilisation de vos données à des fins de prospection
          commerciale.**
        </p>
        <p className="text-gray-700 mb-4">
          Pour exercer vos droits, contactez-nous par e-mail à l'adresse
          dico.beer@gmail.com.
        </p>
        <h3 className="text-lg font-medium mb-2">6. Responsabilité</h3>
        <p className="text-gray-700 mb-4">
          Nous mettons tout en œuvre pour assurer la sécurité du site et de vos
          données. Cependant, nous ne pouvons garantir l'absence de bugs ou
          d'erreurs. Nous ne sommes pas tenus responsables des dommages directs
          ou indirects causés par l'utilisation du site.
        </p>
        <h3 className="text-lg font-medium mb-2">7. Modification des CGU</h3>
        <p className="text-gray-700 mb-4">
          Nous nous réservons le droit de modifier les CGU à tout moment. Les
          modifications prennent effet dès leur publication sur le site.
          Consultez régulièrement les CGU pour prendre connaissance des mises à
          jour.
        </p>
        <h3 className="text-lg font-medium mb-2">
          8. Loi applicable et juridiction compétente
        </h3>
        <p className="text-gray-700 mb-4">
          Les CGU sont soumises au droit français. En cas de litige, seuls les
          tribunaux français seront compétents.
        </p>
      </div>
      <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200">
        <button
          onClick={closeModal}
          className="text-white bg-[#2EBB77] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Fermer
        </button>
      </div>
    </div>
  );

  return (
    <>
      <a className="font-medium hover:underline" onClick={openModal}>
        Termes et Conditions
      </a>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
            },
          }}
        >
          {termsContent}
        </Modal>
      )}
    </>
  );
};

export default TermsAndConditionsModal;
