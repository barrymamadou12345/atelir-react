# 🗺️ React Router DOM - Navigation entre Pages

Ce support vous guide pour configurer la navigation dans votre application React avec React Router DOM.

---

## 📋 Table des Matières

1. [Qu'est-ce que React Router ?](#quest-ce-que-react-router)
2. [Installation](#installation)
3. [Concepts Clés](#concepts-clés)
4. [Configuration des Routes](#configuration-des-routes)
5. [Navigation avec Link](#navigation-avec-link)
6. [Hooks de React Router](#hooks-de-react-router)
7. [Routes Dynamiques](#routes-dynamiques)
8. [Exercice Pratique](#exercice-pratique)

---

## 🤔 Qu'est-ce que React Router ?

React Router est une bibliothèque qui permet de gérer la navigation entre différentes pages dans une application React **sans recharger la page**.

### Avantages

✅ **Navigation fluide** : Pas de rechargement de page
✅ **URLs propres** : `/accueil`, `/profil`, `/settings`
✅ **Historique** : Boutons précédent/suivant du navigateur fonctionnent
✅ **Routes dynamiques** : `/utilisateur/:id`
✅ **Routes imbriquées** : Layouts avec sous-pages

---

## 🛠️ Installation

```bash
npm install react-router-dom
```

---

## 🎯 Concepts Clés

### 1. BrowserRouter

Composant racine qui active le routing dans l'application.

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>{/* Votre application */}</BrowserRouter>;
```

### 2. Routes et Route

Définissent les chemins et les composants à afficher.

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>;
```

### 3. Link

Remplace `<a>` pour la navigation sans rechargement.

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Accueil</Link>
<Link to="/about">À propos</Link>
```

### 4. Outlet

Emplacement où les pages enfants sont affichées dans un layout.

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Les pages s'affichent ici */}
    </div>
  );
}
```

---

## 🏗️ Configuration des Routes

### Étape 1 : Créer les Pages

Créez les fichiers de pages dans `src/pages/` :

**src/pages/Home.jsx :**

```jsx
function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-text mb-4">Accueil</h1>
      <p className="text-text-light">Bienvenue sur le Dashboard !</p>
    </div>
  );
}

export default Home;
```

**src/pages/Page1.jsx :**

```jsx
function Page1() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-text mb-4">Page 1</h1>
      <p className="text-text-light">Contenu de la page 1</p>
    </div>
  );
}

export default Page1;
```

**src/pages/Settings.jsx :**

```jsx
function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-text mb-4">Paramètres</h1>
      <p className="text-text-light">Configuration de l'application</p>
    </div>
  );
}

export default Settings;
```

### Étape 2 : Configurer les Routes dans App.jsx

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route parent avec le Layout */}
        <Route path="/" element={<Layout />}>
          {/* Route index = page par défaut (/) */}
          <Route index element={<Home />} />

          {/* Routes pour chaque page */}
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Explication

| Élément                | Rôle                                  |
| ---------------------- | ------------------------------------- |
| `<BrowserRouter>`      | Active le routing dans l'application  |
| `<Routes>`             | Contient toutes les routes            |
| `<Route path="/">`     | Route parent (Layout)                 |
| `<Route index>`        | Page par défaut pour le chemin `/`    |
| `<Route path="page1">` | Page accessible via `/page1`          |
| `element={<Home />}`   | Composant à afficher pour cette route |

---

## 🔗 Navigation avec Link

### Remplacer les Balises <a>

```jsx
// ❌ Incorrect : Recharge la page
<a href="/about">À propos</a>

// ✅ Correct : Navigation sans rechargement
<Link to="/about">À propos</Link>
```

### Exemple : Menu de Navigation

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/settings">Paramètres</Link>
    </nav>
  );
}
```

### Navigation Active

Utiliser `useLocation` pour détecter la page active :

```jsx
import { Link, useLocation } from "react-router-dom";

function NavItem({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        px-4 py-2 rounded-lg transition
        ${isActive ? "bg-primary text-white" : "text-text-light hover:bg-background"}
      `}
    >
      {children}
    </Link>
  );
}
```

---

## 🎣 Hooks de React Router

### 1. useLocation

Obtient l'URL actuelle.

```jsx
import { useLocation } from "react-router-dom";

function MonComposant() {
  const location = useLocation();

  console.log(location.pathname); // "/page1"
  console.log(location.search); // "?id=123"
  console.log(location.hash); // "#section"

  return <div>URL actuelle : {location.pathname}</div>;
}
```

### 2. useNavigate

Navigation programmatique (redirection).

```jsx
import { useNavigate } from "react-router-dom";

function Connexion() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logique de connexion...

    // Redirection vers le dashboard
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Se connecter</button>;
}
```

**Options de navigate :**

```jsx
// Navigation simple
navigate("/page1");

// Navigation avec remplacement (pas d'historique)
navigate("/page1", { replace: true });

// Navigation arrière
navigate(-1);

// Navigation avant
navigate(1);
```

### 3. useParams

Récupère les paramètres d'URL dynamiques.

```jsx
import { useParams } from "react-router-dom";

function DetailUtilisateur() {
  const { id } = useParams();

  return <div>Utilisateur ID : {id}</div>;
}

// Route : <Route path="/utilisateur/:id" element={<DetailUtilisateur />} />
// URL : /utilisateur/123
// Résultat : id = "123"
```

---

## 🔀 Routes Dynamiques

### Paramètres d'URL

```jsx
// Configuration de la route
<Route path="/utilisateur/:id" element={<DetailUtilisateur />} />;

// Composant
import { useParams } from "react-router-dom";

function DetailUtilisateur() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails de l'utilisateur {id}</h1>
    </div>
  );
}

// Navigation
<Link to="/utilisateur/123">Voir utilisateur 123</Link>;
```

### Plusieurs Paramètres

```jsx
// Route
<Route path="/blog/:categorie/:slug" element={<Article />} />;

// Composant
function Article() {
  const { categorie, slug } = useParams();

  return (
    <div>
      <p>Catégorie : {categorie}</p>
      <p>Article : {slug}</p>
    </div>
  );
}

// URL : /blog/tech/react-hooks
// Résultat : categorie = "tech", slug = "react-hooks"
```

---

## 🎯 Exercice Pratique : Page Détail Utilisateur

### Objectif

Créer une page qui affiche les détails d'un utilisateur en fonction de son ID dans l'URL.

### Étape 1 : Créer la Page Liste

Modifiez `src/pages/Page1.jsx` :

```jsx
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function Page1() {
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
      <h1 className="text-3xl font-bold text-text mb-8">
        Liste des Utilisateurs
      </h1>

      <div className="bg-surface rounded-lg shadow-md overflow-hidden border border-border">
        <table className="w-full">
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
                  <Link
                    to={`/utilisateur/${user.id}`}
                    className="text-primary hover:text-secondary transition inline-flex items-center gap-1"
                  >
                    <FaEye className="w-4 h-4" />
                    Voir détails
                  </Link>
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
```

### Étape 2 : Créer la Page Détail

Créez `src/pages/DetailUtilisateur.jsx` :

```jsx
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEnvelope, FaUser, FaShieldAlt } from "react-icons/fa";

function DetailUtilisateur() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simuler la récupération des données
  const utilisateurs = [
    {
      id: 1,
      nom: "Mamadou Barry",
      email: "mamadou@example.com",
      role: "Admin",
      telephone: "+224 123 456 789",
    },
    {
      id: 2,
      nom: "Aissatou Diallo",
      email: "aissatou@example.com",
      role: "Utilisateur",
      telephone: "+224 987 654 321",
    },
    {
      id: 3,
      nom: "Ibrahima Sow",
      email: "ibrahima@example.com",
      role: "Utilisateur",
      telephone: "+224 555 123 456",
    },
    {
      id: 4,
      nom: "Fatoumata Bah",
      email: "fatoumata@example.com",
      role: "Modérateur",
      telephone: "+224 111 222 333",
    },
  ];

  const utilisateur = utilisateurs.find((u) => u.id === parseInt(id));

  if (!utilisateur) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-danger mb-4">
          Utilisateur non trouvé
        </h1>
        <button
          onClick={() => navigate("/page1")}
          className="text-primary hover:text-secondary"
        >
          Retour à la liste
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Bouton retour */}
      <button
        onClick={() => navigate("/page1")}
        className="flex items-center gap-2 text-primary hover:text-secondary mb-6 transition"
      >
        <FaArrowLeft />
        Retour à la liste
      </button>

      {/* Carte utilisateur */}
      <div className="bg-surface rounded-lg shadow-md p-8 border border-border max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <FaUser className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-text">{utilisateur.nom}</h1>
            <p className="text-text-light">ID : {utilisateur.id}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-text">
            <FaEnvelope className="w-5 h-5 text-primary" />
            <span>{utilisateur.email}</span>
          </div>

          <div className="flex items-center gap-3 text-text">
            <FaShieldAlt className="w-5 h-5 text-primary" />
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {utilisateur.role}
            </span>
          </div>

          <div className="flex items-center gap-3 text-text">
            <span className="text-2xl">📱</span>
            <span>{utilisateur.telephone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUtilisateur;
```

### Étape 3 : Ajouter la Route

Modifiez `src/App.jsx` :

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import DetailUtilisateur from "./pages/DetailUtilisateur";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="utilisateur/:id" element={<DetailUtilisateur />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 📚 Résumé

Vous avez appris :

✅ Installer React Router DOM
✅ Configurer les routes avec BrowserRouter, Routes, Route
✅ Naviguer avec Link
✅ Utiliser useLocation pour détecter la page active
✅ Utiliser useNavigate pour la navigation programmatique
✅ Créer des routes dynamiques avec useParams
✅ Construire un Dashboard complet avec navigation

---

## 🎯 Projet Complet

Vous avez maintenant un Dashboard fonctionnel avec :

- ✅ Navigation entre pages
- ✅ Layout avec Navbar et Sidebar
- ✅ Composants réutilisables (Button, Card)
- ✅ Couleurs personnalisées
- ✅ Icônes React Icons
- ✅ Routes dynamiques
- ✅ Design responsive avec Tailwind CSS

---

## 🚀 Pour Aller Plus Loin

### Fonctionnalités à Ajouter

1. **Authentification**
   - Page de connexion
   - Routes protégées
   - Gestion de session

2. **Formulaires**
   - Ajouter/Modifier des utilisateurs
   - Validation des données
   - Gestion d'erreurs

3. **API**
   - Récupérer des données réelles
   - Utiliser fetch ou axios
   - Gérer le loading et les erreurs

4. **État Global**
   - Context API
   - Redux ou Zustand
   - Partager l'état entre composants

---

**Félicitations ! Vous avez terminé l'Atelier 2 ! 🎉**

**Bon apprentissage ! 🚀**
