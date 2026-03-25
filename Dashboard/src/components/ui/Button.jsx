/**
 * Composant Button réutilisable
 *
 * Props:
 * - children: Contenu du bouton (texte, icône, etc.)
 * - variant: Type de bouton (primary, secondary, danger, success)
 * - onClick: Fonction à exécuter au clic
 */

function Button({ children, variant = "primary", onClick }) {
  // Styles selon le variant (type de bouton)
  const styles = {
    primary: "bg-primary hover:bg-secondary text-white",
    secondary: "bg-text-light hover:bg-text text-white",
    danger: "bg-danger hover:bg-danger/90 text-white",
    success: "bg-success hover:bg-success/90 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${styles[variant]} px-4 py-2 rounded-lg font-medium transition duration-200 flex items-center gap-2`}
    >
      {children}
    </button>
  );
}

export default Button;
