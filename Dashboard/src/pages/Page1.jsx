/**
 * Page 1 - Exemple de page avec liste d'utilisateurs
 * Démontre l'utilisation de map() pour afficher des données dynamiques
 */

import { FaEdit, FaTrash } from "react-icons/fa";

function Page1() {
  // Données des utilisateurs (tableau d'objets)
  const utilisateurs = [
    {
      id: 1,
      nom: "Mamadou Barry",
      email: "mamadou@example.com",
      role: "Admin",
    },
    {
      id: 2,
      nom: "Aissatou Diallo",
      email: "aissatou@example.com",
      role: "Utilisateur",
    },
    {
      id: 3,
      nom: "Ibrahima Sow",
      email: "ibrahima@example.com",
      role: "Utilisateur",
    },
    {
      id: 4,
      nom: "Fatoumata Bah",
      email: "fatoumata@example.com",
      role: "Modérateur",
    },
  ];

  return (
    <div>
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-2">
          Page 1 - Utilisateurs
        </h1>
        <p className="text-text-light">
          Liste des utilisateurs avec leurs informations
        </p>
      </div>

      {/* Tableau des utilisateurs */}
      <div className="bg-surface rounded-lg shadow-md overflow-hidden border border-border">
        <table className="w-full">
          {/* En-tête du tableau */}
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase">
                Rôle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase">
                Actions
              </th>
            </tr>
          </thead>

          {/* Corps du tableau - Boucle map() */}
          <tbody className="divide-y divide-border">
            {utilisateurs.map((user) => (
              <tr key={user.id} className="hover:bg-background transition">
                <td className="px-6 py-4 text-text">{user.nom}</td>
                <td className="px-6 py-4 text-text-light">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-secondary mr-3 transition inline-flex items-center gap-1">
                    <FaEdit className="w-4 h-4" />
                    Modifier
                  </button>
                  <button className="text-danger hover:text-danger/80 transition inline-flex items-center gap-1">
                    <FaTrash className="w-4 h-4" />
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page1;
