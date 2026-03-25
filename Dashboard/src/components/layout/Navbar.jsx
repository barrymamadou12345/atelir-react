/**
 * Composant Navbar - Barre de navigation en haut
 *
 * Classes importantes:
 * - fixed: Position fixe (ne bouge pas au scroll)
 * - top-0: Collé en haut de la page
 * - left-0 right-0: Prend toute la largeur
 * - z-30: Au-dessus du contenu
 */

import { FaBell, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-surface border-b border-border shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">Mon Dashboard</div>

      {/* Actions à droite */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative text-text-light hover:text-primary transition">
          <FaBell className="w-6 h-6" />
          {/* Badge de notification */}
          <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profil utilisateur */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <FaUser className="w-5 h-5 text-primary" />
          </div>
          <span className="hidden md:block text-text font-medium">
            Mamadou Barry
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
