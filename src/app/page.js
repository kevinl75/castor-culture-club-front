import NavBar from "./components/navbar";
import OpenLoginPopupButton from "./components/loginButton";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section>
        <div className="py-20 px-20 text-center">
          <h1 className="title-font text-3xl sm:text-5xl lg:text-6xl leading-none tracking-tight mb-8 text-white">
            Partager vos recommendations culturelles avec votre communauté
          </h1>
          <p className="text-lg sm:text-2xl sm:leading-10 space-y-6 mb-6 text-gray-500">
            Marre d'oublier le nom du film qui votre collègue ou votre cousines
            vous a recommendez ? Créer votre groupe sur Castor Club et garder
            une trace de toutes les recommendation culturel que vous avez faites
            à vos amis, votre famille, votre communauté.
          </p>
          <div className="flex gap-12 justify-center">
            <button className="inline-flex text-md sm:text-xl transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-white bg-blue-500 hover:bg-blue-700 px-4 py-2">
              Button
            </button>
            <OpenLoginPopupButton />
          </div>
        </div>
      </section>
    </div>
  );
}
