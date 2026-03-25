/**
 * Composant Sidebar - Barre latérale avec menu de navigation
 *
 * Props:
 * - menuItems: Tableau d'objets contenant les éléments du menu
 *   Chaque item contient : { nom, icone (composant React Icon), lien }
 *
 * Classes importantes:
 * - fixed: Position fixe (ne bouge pas au scroll)
 * - top-16: Commence sous la navbar (64px)
 * - bottom-0: Va jusqu'en bas de la page
 * - left-0: Collé à gauche
 * - w-64: Largeur de 256px
 * - overflow-y-auto: Scroll vertical si le menu est trop long
 */

import { Link, useLocation } from "react-router-dom";

function Sidebar({ menuItems }) {
  // Hook pour obtenir l'URL actuelle
  const location = useLocation();

  return (
    <aside className="fixed top-16 bottom-0 left-0 w-64 bg-sidebar text-white overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-8">Menu</h2>

        {/* Navigation - Boucle sur les éléments du menu */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            // Vérifier si le lien est actif (correspond à l'URL actuelle)
            const isActive = location.pathname === item.lien;

            // Stocker le composant icône dans une variable avec majuscule
            const Icon = item.icone;

            return (
              <Link
                key={index}
                to={item.lien}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200
                  ${isActive ? "bg-sidebar-active text-white" : "hover:bg-sidebar-hover"}
                `}
              >
                {/* Icône React Icons */}
                <Icon className="text-xl" />
                {/* Nom du menu */}
                <span className="font-medium">{item.nom}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
