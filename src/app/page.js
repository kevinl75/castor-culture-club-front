import Image from "next/image";
import NavBar from "./components/navbar";
import LoginModal from "./components/loginModal";
import CreateClubModal from "./components/createClubModal";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section>
        <div className="py-10 flex-col place-items-center text-center ">
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
          <h1 className="title-font text-5xl mb-8 text-white">
            Partager vos recommendations <br />
            culturelles avec votre Club
          </h1>
          <p className="text-xl mb-8 text-gray-400 max-w-prose">
            Marre d&apos;oublier le nom du film dont on vous a parlé lors du
            dernier repas de famille ou de votre après midi avec vos amis? Créer
            votre club sur Castor Culture Club et partager les ici pour ne plus
            rien oublier.
          </p>
          <div className="flex gap-12 justify-center">
            <CreateClubModal />
            {/* <button className="inline-flex text-md sm:text-xl transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-white bg-blue-500 hover:bg-blue-700 px-4 py-2">
              Créer mon club
            </button> */}
            <LoginModal />
          </div>
        </div>
      </section>
    </div>
  );
}
