import Image from "next/image";
import LoginModal from "./loginModal";

export default function NavBar() {
  return (
    <nav className="p-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <span className="text-2xl font-bold text-white">
            Castor Culture Club
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="#" className="text-lg text-white hover:text-gray-500">
            Accueil
          </a>
          <LoginModal />
        </div>
      </div>
    </nav>
  );
}
