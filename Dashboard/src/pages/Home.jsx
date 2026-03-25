/**
 * Page Home - Page d'accueil du dashboard
 * Affiche des cartes statistiques et des boutons d'action
 */

import {
  FaBox,
  FaCheck,
  FaDollarSign,
  FaEye,
  FaPlus,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

function Home() {
  // Données des statistiques (tableau d'objets) avec React Icons (Font Awesome)
  const stats = [
    {
      titre: "Utilisateurs",
      valeur: "1,234",
      icone: FaUsers,
      couleur: "primary",
    },
    {
      titre: "Revenus",
      valeur: "45,678 €",
      icone: FaDollarSign,
      couleur: "success",
    },
    {
      titre: "Commandes",
      valeur: "567",
      icone: FaShoppingCart,
      couleur: "info",
    },
    { titre: "Produits", valeur: "89", icone: FaBox, couleur: "warning" },
  ];

  return (
    <div>
      {/* En-tête de la page */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-2">Tableau de bord</h1>
        <p className="text-text-light">
          Bienvenue sur votre dashboard ! Voici un aperçu de vos statistiques.
        </p>
      </div>

      {/* Grille de cartes statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Boucle map() pour afficher chaque carte */}
        {stats.map((stat, index) => (
          <Card
            key={index}
            titre={stat.titre}
            valeur={stat.valeur}
            icone={stat.icone}
            couleur={stat.couleur}
          />
        ))}
      </div>

      {/* Section actions rapides */}
      <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
        <h2 className="text-xl font-bold text-text mb-4">Actions rapides</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            onClick={() => alert("Bouton Primary cliqué !")}
          >
            <FaPlus className="w-5 h-5" />
            Action Primary
          </Button>
          <Button
            variant="success"
            onClick={() => alert("Bouton Success cliqué !")}
          >
            <FaCheck className="w-5 h-5" />
            Action Success
          </Button>
          <Button
            variant="secondary"
            onClick={() => alert("Bouton Secondary cliqué !")}
          >
            <FaEye className="w-5 h-5" />
            Action Secondary
          </Button>
          <Button
            variant="danger"
            onClick={() => alert("Bouton Danger cliqué !")}
          >
            <FaBox className="w-5 h-5" />
            Action Danger
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
