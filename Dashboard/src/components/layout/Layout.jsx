/**
 * Composant Layout - Structure principale de l'application
 * Contient la Navbar, Sidebar et le contenu des pages
 *
 * Structure:
 * - Navbar: Fixed en haut (top-0)
 * - Sidebar: Fixed à gauche (top-16 pour éviter la navbar)
 * - Main: Scrollable avec marges pour éviter navbar et sidebar
 */

import { FaBox, FaChartLine, FaCog, FaFileAlt, FaHome } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  // Données du menu (dynamiques) avec React Icons (Font Awesome)
  const menuItems = [
    { nom: "Accueil", icone: FaHome, lien: "/" },
    { nom: "Page 1", icone: FaFileAlt, lien: "/page1" },
    { nom: "Page 2", icone: FaBox, lien: "/page2" },
    { nom: "Page 3", icone: FaChartLine, lien: "/page3" },
    { nom: "Paramètres", icone: FaCog, lien: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar fixe en haut */}
      <Navbar />

      <div className="flex">
        {/* Sidebar fixe à gauche */}
        <Sidebar menuItems={menuItems} />

        {/* Contenu principal - Scrollable avec padding pour navbar et sidebar */}
        {/* mt-16: margin-top pour éviter la navbar (64px) */}
        {/* ml-64: margin-left pour éviter la sidebar (256px) */}
        {/* overflow-y-auto: permet le scroll vertical */}
        <main className="flex-1 p-6 mt-16 ml-64 overflow-y-auto">
          {/* Outlet = Emplacement où React Router affiche les pages */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
