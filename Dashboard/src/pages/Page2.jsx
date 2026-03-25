/**
 * Page 2 - Exemple de page avec grille de produits
 * Démontre l'utilisation de map() avec des cartes
 */

import { FaEdit, FaTrash } from "react-icons/fa";

function Page2() {
  // Données des produits (tableau d'objets)
  const produits = [
    {
      id: 1,
      nom: "Produit A",
      prix: 29.99,
      stock: 45,
      categorie: "Électronique",
    },
    { id: 2, nom: "Produit B", prix: 49.99, stock: 23, categorie: "Vêtements" },
    { id: 3, nom: "Produit C", prix: 19.99, stock: 67, categorie: "Livres" },
    {
      id: 4,
      nom: "Produit D",
      prix: 99.99,
      stock: 12,
      categorie: "Électronique",
    },
    { id: 5, nom: "Produit E", prix: 39.99, stock: 34, categorie: "Sport" },
    { id: 6, nom: "Produit F", prix: 59.99, stock: 18, categorie: "Maison" },
  ];

  return (
    <div>
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-2">Page 2 - Produits</h1>
        <p className="text-text-light">Catalogue de produits disponibles</p>
      </div>

      {/* Grille de produits - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Boucle map() pour afficher chaque produit */}
        {produits.map((produit) => (
          <div
            key={produit.id}
            className="bg-surface rounded-lg shadow-md p-6 hover:shadow-lg transition border border-border"
          >
            {/* En-tête de la carte */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-text">{produit.nom}</h3>
              <span className="text-2xl font-bold text-primary">
                {produit.prix} €
              </span>
            </div>

            {/* Informations du produit */}
            <div className="space-y-2 mb-4">
              <p className="text-text-light">
                <span className="font-medium text-text">Catégorie:</span>{" "}
                {produit.categorie}
              </p>
              <p className="text-text-light">
                <span className="font-medium text-text">Stock:</span>{" "}
                {produit.stock} unités
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-2">
              <button className="flex-1 bg-primary hover:bg-secondary text-white py-2 rounded-lg transition flex items-center justify-center gap-2">
                <FaEdit className="w-4 h-4" />
                Modifier
              </button>
              <button className="flex-1 bg-danger hover:bg-danger/90 text-white py-2 rounded-lg transition flex items-center justify-center gap-2">
                <FaTrash className="w-4 h-4" />
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
