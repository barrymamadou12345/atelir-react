# 📚 Guide Pédagogique - Dashboard React

Ce guide est un **résumé rapide** des concepts utilisés dans ce projet Dashboard.

Pour des explications détaillées et des exercices pratiques, consultez les **supports pédagogiques** dans le dossier `supports/`.

---

## 📂 Structure de la Formation

### Atelier 1 : Introduction à React

📁 `supports/1_atelier_introduction_react/`

- **0-glossaire-concepts-cles.md** : Vocabulaire React (DOM, Virtual DOM, JSX, etc.)
- **1-introduction-react.md** : Créer une app React avec Vite, comprendre la structure
- **2-installation-tailwind-v4.md** : Installer et configurer Tailwind CSS v4

### Atelier 2 : Dashboard React

📁 `supports/2_atelier_dashboard_react/`

- **1-installation-react-icons.md** : Installer et utiliser React Icons
- **2-configuration-couleurs-tailwind.md** : Personnaliser les couleurs avec Tailwind
- **3-props-composants-reutilisables.md** : Créer des composants réutilisables (Button, Card, Layout)
- **4-react-router-dom-navigation.md** : Configurer la navigation entre pages

---

## 🎯 Concepts Clés du Projet

Les **props** permettent de passer des données d'un composant parent à un enfant.

**Exemple dans ce projet :**

```jsx
// src/components/ui/Button.jsx
<Button variant="primary" onClick={() => alert("Cliqué")}>
  Mon Bouton
</Button>
```

📚 **Voir le support détaillé** : `supports/2_atelier_dashboard_react/3-props-composants-reutilisables.md`

---

### 🔄 2. La méthode map()

Transforme un tableau en liste de composants React.

**Exemple dans ce projet :**

```jsx
// src/pages/Home.jsx
{
  stats.map((stat, index) => (
    <Card key={index} titre={stat.titre} valeur={stat.valeur} />
  ));
}
```

⚠️ **Important** : Toujours ajouter une prop `key` unique !

📚 **Voir le support détaillé** : `supports/2_atelier_dashboard_react/3-props-composants-reutilisables.md`

---

### 🧩 3. Composants Réutilisables

Un composant créé une fois, utilisé plusieurs fois avec des props différentes.

**Composants dans ce projet :**

- `Button.jsx` : 4 variants (primary, secondary, success, danger)
- `Card.jsx` : Cartes statistiques avec icônes React Icons

📚 **Voir le support détaillé** : `supports/2_atelier_dashboard_react/3-props-composants-reutilisables.md`

---

### 🗺️ 4. React Router DOM

Gère la navigation entre pages sans recharger l'application.

**Routes dans ce projet :**

- `/` → Home (Dashboard)
- `/page1` → Liste d'utilisateurs
- `/page2` → Grille de produits
- `/page3` → Timeline d'activités
- `/settings` → Paramètres

**Composants clés :**

- `BrowserRouter` : Active le routing
- `Routes` / `Route` : Définit les routes
- `Link` : Navigation (remplace `<a>`)
- `Outlet` : Affiche les pages enfants
- `useLocation` : Détecte la page active

📚 **Voir le support détaillé** : `supports/2_atelier_dashboard_react/4-react-router-dom-navigation.md`

---

### 🏗️ 5. Structure Layout

Le Layout contient la structure commune : Navbar + Sidebar + Contenu.

**Fichiers :**

- `Layout.jsx` : Structure principale avec `<Outlet />`
- `Navbar.jsx` : Barre de navigation en haut
- `Sidebar.jsx` : Menu latéral avec navigation active

📚 **Voir le support détaillé** : `supports/2_atelier_dashboard_react/3-props-composants-reutilisables.md`

---

### 🎨 6. Tailwind CSS v4

Système de design avec couleurs personnalisées.

**Couleurs du projet :**

- `primary` : #6366f1 (Indigo)
- `success` : #10b981 (Émeraude)
- `danger` : #ef4444 (Rouge)
- `warning` : #f59e0b (Ambre)
- `info` : #3b82f6 (Bleu)

**Classes responsive :**

- Mobile : par défaut
- Tablette : `md:` (≥768px)
- Desktop : `lg:` (≥1024px)

📚 **Voir le support détaillé** : `supports/2_atelier_dashboard_react/2-configuration-couleurs-tailwind.md`

---

### 🎭 7. React Icons

Bibliothèque d'icônes modernes (Font Awesome).

**Utilisation dans ce projet :**

```jsx
import { FaUsers, FaDollarSign } from "react-icons/fa";

<FaUsers className="w-8 h-8 text-primary" />;
```

📚 **Voir le support détaillé** : `supports/2_atelier_dashboard_react/1-installation-react-icons.md`

---

## 📁 Structure du Projet

```
Dashboard/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Sidebar, Layout
│   │   └── ui/              # Button, Card (composants réutilisables)
│   ├── pages/               # Home, Page1, Page2, Page3, Settings
│   ├── App.jsx              # Configuration des routes
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles Tailwind + couleurs personnalisées
├── package.json
└── vite.config.js
```

---

## 🚀 Démarrage Rapide

```bash
# 1. Installer les dépendances
cd Dashboard
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:5173
```

---

## 🎓 Pour Aller Plus Loin

### Exercices suggérés :

1. **Créer un nouveau composant** : Badge coloré avec props
2. **Ajouter une page** : Créer Page4 avec sa route
3. **Modifier les données** : Ajouter une carte statistique dans Home
4. **Personnaliser les couleurs** : Changer la palette dans `index.css`

### Prochaines étapes :

- Ajouter des formulaires avec gestion d'état (useState)
- Connecter une API pour des données réelles
- Ajouter l'authentification
- Créer des routes dynamiques (ex: `/users/:id`)

---

## 📚 Ressources

- **React** : [react.dev](https://react.dev)
- **React Router** : [reactrouter.com](https://reactrouter.com)
- **Tailwind CSS** : [tailwindcss.com](https://tailwindcss.com)
- **React Icons** : [react-icons.github.io](https://react-icons.github.io/react-icons)

---

**Bon apprentissage ! Consultez les supports détaillés pour des explications complètes et des exercices pratiques. 🚀**
