/**
 * Composant Card réutilisable pour afficher des statistiques
 *
 * Props:
 * - titre: Titre de la carte (ex: "Utilisateurs")
 * - valeur: Valeur à afficher (ex: "1,234")
 * - icone: Composant React Icon à afficher
 * - couleur: Couleur de l'icône (primary, success, danger, warning, info)
 */

function Card({ titre, valeur, icone: Icon, couleur = "primary" }) {
  // Mapping des couleurs vers les classes Tailwind
  const couleurClasses = {
    primary: "text-primary bg-primary/10",
    success: "text-success bg-success/10",
    danger: "text-danger bg-danger/10",
    warning: "text-warning bg-warning/10",
    info: "text-info bg-info/10",
  };

  return (
    <div className="bg-surface rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 border border-border">
      <div className="flex items-center justify-between">
        {/* Texte */}
        <div>
          <p className="text-text-light text-sm mb-1">{titre}</p>
          <p className="text-3xl font-bold text-text">{valeur}</p>
        </div>

        {/* Icône avec fond coloré */}
        <div className={`p-4 rounded-full ${couleurClasses[couleur]}`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Card;
