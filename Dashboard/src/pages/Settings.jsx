/**
 * Page Settings - Page de paramètres
 * Exemple de formulaire avec inputs
 */

import { FaSave } from "react-icons/fa";

function Settings() {
  return (
    <div>
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-2">Paramètres</h1>
        <p className="text-text-light">Configurer votre application</p>
      </div>

      <div className="space-y-6">
        {/* Section Profil */}
        <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
          <h2 className="text-xl font-bold text-text mb-4">
            Informations du profil
          </h2>

          <div className="space-y-4">
            {/* Champ Nom */}
            <div>
              <label className="block text-text font-medium mb-2">
                Nom complet
              </label>
              <input
                type="text"
                defaultValue="Mamadou Barry"
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            {/* Champ Email */}
            <div>
              <label className="block text-text font-medium mb-2">Email</label>
              <input
                type="email"
                defaultValue="mamadou@example.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            {/* Champ Téléphone */}
            <div>
              <label className="block text-text font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                defaultValue="784296313"
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            {/* Bouton Enregistrer */}
            <button className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg transition flex items-center gap-2">
              <FaSave className="w-5 h-5" />
              Enregistrer les modifications
            </button>
          </div>
        </div>

        {/* Section Notifications */}
        <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
          <h2 className="text-xl font-bold text-text mb-4">
            Préférences de notification
          </h2>

          <div className="space-y-3">
            {/* Checkbox 1 */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="text-text">
                Recevoir les notifications par email
              </span>
            </label>

            {/* Checkbox 2 */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="text-text">Notifications push</span>
            </label>

            {/* Checkbox 3 */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="text-text">Newsletter hebdomadaire</span>
            </label>
          </div>
        </div>

        {/* Section Apparence */}
        <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
          <h2 className="text-xl font-bold text-text mb-4">Apparence</h2>

          <div className="space-y-3">
            {/* Radio 1 */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                defaultChecked
                className="w-5 h-5 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-text">Thème clair</span>
            </label>

            {/* Radio 2 */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                className="w-5 h-5 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-text">Thème sombre</span>
            </label>

            {/* Radio 3 */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                className="w-5 h-5 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-text">Automatique (selon le système)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
