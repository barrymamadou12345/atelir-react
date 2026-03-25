# 🧩 Props et Composants Réutilisables

Ce support approfondit les props et vous guide pour créer le Layout du Dashboard avec des composants réutilisables.

---

## 📋 Table des Matières

1. [Comprendre les Props en Profondeur](#comprendre-les-props-en-profondeur)
2. [Composants Réutilisables](#composants-réutilisables)
3. [La Méthode map()](#la-méthode-map)
4. [Construire le Layout](#construire-le-layout)
5. [Exercice Pratique](#exercice-pratique)

---

## 🎯 1. Comprendre les Props en Profondeur

### Qu'est-ce que les Props ?

Les props (properties) sont des données passées d'un composant parent à un composant enfant. Elles permettent de rendre les composants réutilisables et dynamiques.

### Syntaxe de Base

```jsx
// Composant enfant
function Salutation({ nom, age }) {
  return (
    <div>
      <h1>Bonjour {nom} !</h1>
      <p>Tu as {age} ans</p>
    </div>
  );
}

// Composant parent
function App() {
  return <Salutation nom="Mamadou" age={25} />;
}
```

### Types de Props

**1. Props simples (string, number, boolean)**

```jsx
<Bouton texte="Cliquez-moi" taille={16} actif={true} />
```

**2. Props objet**

```jsx
const utilisateur = {
  nom: "Mamadou",
  age: 25,
  email: "mamadou@example.com",
};

<Profil utilisateur={utilisateur} />;
```

**3. Props tableau**

```jsx
const fruits = ["Pomme", "Banane", "Orange"];

<Liste items={fruits} />;
```

**4. Props fonction (callback)**

```jsx
<Bouton onClick={() => alert("Cliqué !")} />
```

**5. Props composant (React Icon)**

```jsx
import { FaUser } from "react-icons/fa";

<Carte icone={FaUser} />;
```

### Destructuration des Props

**Sans destructuration :**

```jsx
function Bouton(props) {
  return <button>{props.texte}</button>;
}
```

**Avec destructuration (recommandé) :**

```jsx
function Bouton({ texte, couleur, onClick }) {
  return (
    <button style={{ backgroundColor: couleur }} onClick={onClick}>
      {texte}
    </button>
  );
}
```

### Props par Défaut

```jsx
function Bouton({ texte = "Cliquez-moi", variant = "primary" }) {
  return <button className={`btn-${variant}`}>{texte}</button>;
}

// Utilisation
<Bouton />  {/* Utilise les valeurs par défaut */}
<Bouton texte="Envoyer" variant="success" />
```

### Props Children

`children` est une prop spéciale qui contient le contenu entre les balises du composant.

```jsx
function Carte({ children }) {
  return <div className="carte">{children}</div>;
}

// Utilisation
<Carte>
  <h2>Titre</h2>
  <p>Contenu de la carte</p>
</Carte>;
```

---

## 🔄 2. Composants Réutilisables

### Principe

Un composant réutilisable est créé une fois et utilisé plusieurs fois avec des props différentes.

### Exemple : Composant Button

```jsx
// src/components/ui/Button.jsx
function Button({ children, variant = "primary", onClick }) {
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
```

**Utilisation :**

```jsx
import { FaPlus, FaCheck, FaTrash } from "react-icons/fa";
import Button from "./components/ui/Button";

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert("Primary")}>
        <FaPlus /> Ajouter
      </Button>

      <Button variant="success" onClick={() => alert("Success")}>
        <FaCheck /> Valider
      </Button>

      <Button variant="danger" onClick={() => alert("Danger")}>
        <FaTrash /> Supprimer
      </Button>
    </div>
  );
}
```

### Exemple : Composant Card

```jsx
// src/components/ui/Card.jsx
function Card({ titre, valeur, icone: Icon, couleur = "primary" }) {
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
        <div>
          <p className="text-text-light text-sm mb-1">{titre}</p>
          <p className="text-3xl font-bold text-text">{valeur}</p>
        </div>
        <div className={`p-4 rounded-full ${couleurClasses[couleur]}`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Card;
```

**Utilisation :**

```jsx
import { FaUsers, FaDollarSign } from "react-icons/fa";
import Card from "./components/ui/Card";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        titre="Utilisateurs"
        valeur="1,234"
        icone={FaUsers}
        couleur="primary"
      />
      <Card
        titre="Revenus"
        valeur="45,678 €"
        icone={FaDollarSign}
        couleur="success"
      />
    </div>
  );
}
```

---

## 🔁 3. La Méthode map()

### Principe

`map()` transforme un tableau en liste de composants React. C'est essentiel pour afficher des données dynamiques.

### Syntaxe

```javascript
const nouveauTableau = tableau.map((element, index) => {
  return /* transformation */;
});
```

### Exemple Simple

```jsx
function ListeFruits() {
  const fruits = ["Pomme", "Banane", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### Avec des Objets

```jsx
function ListeUtilisateurs() {
  const utilisateurs = [
    { id: 1, nom: "Mamadou", age: 25 },
    { id: 2, nom: "Aissatou", age: 22 },
    { id: 3, nom: "Ibrahima", age: 28 },
  ];

  return (
    <div>
      {utilisateurs.map((user) => (
        <div key={user.id} className="carte">
          <h3>{user.nom}</h3>
          <p>{user.age} ans</p>
        </div>
      ))}
    </div>
  );
}
```

### Avec des Composants

```jsx
import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import Card from "./components/ui/Card";

function Dashboard() {
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
}
```

### Importance de la Prop key

React utilise `key` pour identifier les éléments et optimiser les mises à jour.

```jsx
// ❌ Incorrect : Pas de key
{
  fruits.map((fruit) => <li>{fruit}</li>);
}

// ⚠️ Acceptable : Index comme key (si la liste ne change pas)
{
  fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
}

// ✅ Idéal : ID unique comme key
{
  utilisateurs.map((user) => <div key={user.id}>{user.nom}</div>);
}
```

---

## 🏗️ 4. Construire le Layout

### Structure du Layout

Le Layout contient la structure commune à toutes les pages :

- Navbar (barre de navigation en haut)
- Sidebar (menu latéral)
- Main (contenu des pages)

### Étape 1 : Créer la Navbar

Créez `src/components/layout/Navbar.jsx` :

```jsx
import { FaBell, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-surface border-b border-border shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">Mon Dashboard</div>

      {/* Actions à droite */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative text-text-light hover:text-primary transition">
          <FaBell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profil utilisateur */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <FaUser className="w-5 h-5 text-primary" />
          </div>
          <span className="hidden md:block text-text font-medium">
            Mamadou Barry
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
```

### Étape 2 : Créer la Sidebar

Créez `src/components/layout/Sidebar.jsx` :

```jsx
import { Link, useLocation } from "react-router-dom";

function Sidebar({ menuItems }) {
  const location = useLocation();

  return (
    <aside className="fixed top-16 bottom-0 left-0 w-64 bg-sidebar text-white overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-8">Menu</h2>

        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.lien;
            const Icon = item.icone;

            return (
              <Link
                key={index}
                to={item.lien}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200
                  ${isActive ? "bg-sidebar-active text-white" : "hover:bg-sidebar-hover"}
                `}
              >
                <Icon className="text-xl" />
                <span className="font-medium">{item.nom}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
```

### Étape 3 : Créer le Layout

Créez `src/components/layout/Layout.jsx` :

```jsx
import { FaBox, FaChartLine, FaCog, FaFileAlt, FaHome } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const menuItems = [
    { nom: "Accueil", icone: FaHome, lien: "/" },
    { nom: "Page 1", icone: FaFileAlt, lien: "/page1" },
    { nom: "Page 2", icone: FaBox, lien: "/page2" },
    { nom: "Page 3", icone: FaChartLine, lien: "/page3" },
    { nom: "Paramètres", icone: FaCog, lien: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <Sidebar menuItems={menuItems} />

        <main className="flex-1 p-6 mt-16 ml-64 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
```

### Explication des Classes CSS

| Classe            | Effet                                  |
| ----------------- | -------------------------------------- |
| `fixed`           | Position fixe (ne bouge pas au scroll) |
| `top-0`           | Collé en haut (0px du haut)            |
| `top-16`          | 64px du haut (sous la navbar)          |
| `left-0`          | Collé à gauche                         |
| `right-0`         | Collé à droite                         |
| `bottom-0`        | Collé en bas                           |
| `z-30`            | Au-dessus du contenu (z-index: 30)     |
| `w-64`            | Largeur de 256px                       |
| `mt-16`           | Margin-top de 64px                     |
| `ml-64`           | Margin-left de 256px                   |
| `overflow-y-auto` | Scroll vertical si nécessaire          |

---

## 🎯 5. Exercice Pratique : Composant ActivityItem

### Objectif

Créer un composant `ActivityItem` pour afficher une liste d'activités récentes.

### Étape 1 : Créer le Composant

Créez `src/components/ActivityItem.jsx` :

```jsx
function ActivityItem({
  icone: Icon,
  titre,
  description,
  temps,
  couleur = "primary",
}) {
  const couleurClasses = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    danger: "bg-danger/10 text-danger",
    warning: "bg-warning/10 text-warning",
  };

  return (
    <div className="flex items-start gap-4 p-4 hover:bg-background rounded-lg transition">
      {/* Icône */}
      <div className={`p-3 rounded-full ${couleurClasses[couleur]}`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Contenu */}
      <div className="flex-1">
        <h4 className="text-text font-semibold mb-1">{titre}</h4>
        <p className="text-text-light text-sm">{description}</p>
        <p className="text-text-lighter text-xs mt-1">{temps}</p>
      </div>
    </div>
  );
}

export default ActivityItem;
```

### Étape 2 : Utiliser le Composant

```jsx
import {
  FaUser,
  FaShoppingCart,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";
import ActivityItem from "./components/ActivityItem";

function Page3() {
  const activites = [
    {
      icone: FaUser,
      titre: "Nouvel utilisateur",
      description: "Mamadou Barry s'est inscrit",
      temps: "Il y a 5 minutes",
      couleur: "primary",
    },
    {
      icone: FaShoppingCart,
      titre: "Nouvelle commande",
      description: "Commande #1234 reçue",
      temps: "Il y a 15 minutes",
      couleur: "success",
    },
    {
      icone: FaCheck,
      titre: "Paiement validé",
      description: "Paiement de 150 € confirmé",
      temps: "Il y a 1 heure",
      couleur: "success",
    },
    {
      icone: FaExclamationTriangle,
      titre: "Alerte stock",
      description: "Produit X en rupture de stock",
      temps: "Il y a 2 heures",
      couleur: "warning",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-text mb-8">Activités Récentes</h1>

      <div className="bg-surface rounded-lg shadow-md border border-border divide-y divide-border">
        {activites.map((activite, index) => (
          <ActivityItem
            key={index}
            icone={activite.icone}
            titre={activite.titre}
            description={activite.description}
            temps={activite.temps}
            couleur={activite.couleur}
          />
        ))}
      </div>
    </div>
  );
}

export default Page3;
```

---

## 📚 Résumé

Vous avez appris :

✅ Comprendre les props en profondeur
✅ Créer des composants réutilisables (Button, Card)
✅ Utiliser map() pour afficher des listes
✅ Passer des composants comme props (icônes)
✅ Construire un Layout avec Navbar et Sidebar
✅ Utiliser useLocation pour détecter la page active

---

## 🎯 Prochaine Étape

Passez au support suivant :

**4-react-router-dom-navigation.md** : Configurer la navigation entre les pages !

---

