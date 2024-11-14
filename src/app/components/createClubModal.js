"use client";
import { useState } from "react";

export default function CreateClubModal() {
  const [showPopup, setShowPopup] = useState(false);
  function handleClick() {
    console.log("Open Login Popup");
    setShowPopup(!showPopup);
  }
  return (
    <div>
      <button
        id="open-login-popup"
        className="inline-flex text-lg duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current rounded-md text-white bg-blue-500 hover:bg-blue-700 px-4 py-2"
        onClick={handleClick}
      >
        Créer mon club
      </button>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Ceci est une Modal</h2>
            <p className="mb-4">Tu peux ajouter du contenu ici.</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleClick}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
