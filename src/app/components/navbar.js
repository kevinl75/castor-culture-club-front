export default function NavBar() {
  return (
    <nav className="p-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-white">Barrage Culture</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-white hover:text-yellow-300">
            Accueil
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            Articles
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            Podcasts
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            Vidéos
          </a>
        </div>
      </div>
    </nav>
  );
}
