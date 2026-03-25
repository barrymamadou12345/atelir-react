/**
 * Page 3 - Exemple de page avec activités récentes
 * Démontre l'utilisation de map() avec une timeline
 */

import {
  FaBox,
  FaComment,
  FaShoppingCart,
  FaTrash,
  FaUser,
} from "react-icons/fa";

function Page3() {
  // Données des activités (tableau d'objets) avec React Icons (Font Awesome)
  const activites = [
    {
      id: 1,
      utilisateur: "Mamadou",
      action: "a créé un nouveau produit",
      temps: "Il y a 5 min",
      icone: FaBox,
      couleur: "primary",
    },
    {
      id: 2,
      utilisateur: "Aissatou",
      action: "a passé une commande",
      temps: "Il y a 15 min",
      icone: FaShoppingCart,
      couleur: "success",
    },
    {
      id: 3,
      utilisateur: "Ibrahima",
      action: "a mis à jour son profil",
      temps: "Il y a 1 heure",
      icone: FaUser,
      couleur: "info",
    },
    {
      id: 4,
      utilisateur: "Fatoumata",
      action: "a ajouté un commentaire",
      temps: "Il y a 2 heures",
      icone: FaComment,
      couleur: "warning",
    },
    {
      id: 5,
      utilisateur: "Moussa",
      action: "a supprimé un produit",
      temps: "Il y a 3 heures",
      icone: FaTrash,
      couleur: "danger",
    },
  ];

  // Mapping des couleurs
  const couleurClasses = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    danger: "bg-danger/10 text-danger",
    warning: "bg-warning/10 text-warning",
    info: "bg-info/10 text-info",
  };

  return (
    <div>
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-2">
          Page 3 - Activités récentes
        </h1>
        <p className="text-text-light">
          Historique des dernières actions effectuées
        </p>
      </div>

      {/* Timeline des activités */}
      <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
        <h2 className="text-xl font-bold text-text mb-6">Timeline</h2>

        <div className="space-y-4">
          {/* Boucle map() pour afficher chaque activité */}
          {activites.map((activite) => {
            const Icon = activite.icone;

            return (
              <div
                key={activite.id}
                className="flex items-start gap-4 p-4 hover:bg-background rounded-lg transition"
              >
                {/* Icône avec fond coloré */}
                <div
                  className={`p-3 rounded-full ${couleurClasses[activite.couleur]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <p className="text-text font-medium">
                    <span className="font-bold text-primary">
                      {activite.utilisateur}
                    </span>{" "}
                    {activite.action}
                  </p>
                  <p className="text-text-light text-sm mt-1">
                    {activite.temps}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page3;
