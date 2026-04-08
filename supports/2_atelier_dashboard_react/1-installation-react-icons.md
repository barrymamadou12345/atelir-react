# 🎨 Installation et Utilisation de React Icons

Ce support vous guide pour installer et utiliser React Icons dans votre projet React.

---

## 📋 Table des Matières

1. [Qu'est-ce que React Icons ?](#quest-ce-que-react-icons)
2. [Installation](#installation)
3. [Utilisation de Base](#utilisation-de-base)
4. [Bibliothèques d'Icônes Disponibles](#bibliothèques-dicônes-disponibles)
5. [Styliser les Icônes](#styliser-les-icônes)
6. [Passer des Icônes comme Props](#passer-des-icônes-comme-props)
7. [Exercice Pratique](#exercice-pratique)

---

## 🤔 Qu'est-ce que React Icons ?

React Icons est une bibliothèque qui regroupe des milliers d'icônes populaires (Font Awesome, Material Design, etc.) sous forme de composants React.

### Avantages

✅ **Tout-en-un** : Plusieurs bibliothèques d'icônes en un seul package

✅ **Composants React** : Utilisation native avec React

✅ **Personnalisable** : Taille, couleur, style facilement modifiables

✅ **Léger** : Import uniquement des icônes utilisées

✅ **TypeScript** : Support complet de TypeScript

---

## 🛠️ Installation

```bash
npm install react-icons
```

C'est tout ! Aucune configuration supplémentaire n'est nécessaire.

---

## 🎯 Utilisation de Base

### Import et Utilisation

```jsx
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1>
        J'aime React <FaHeart />
      </h1>
    </div>
  );
}
```

### Plusieurs Icônes

```jsx
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <p>
        <FaUser /> Mamadou Barry
      </p>
      <p>
        <FaEnvelope /> mamadou@example.com
      </p>
      <p>
        <FaPhone /> +224 123 456 789
      </p>
      <p>
        <FaMapMarkerAlt /> Conakry, Guinée
      </p>
    </div>
  );
}
```

---

## 📚 Bibliothèques d'Icônes Disponibles

React Icons regroupe plusieurs bibliothèques populaires :

| Préfixe | Bibliothèque    | Nombre d'icônes | Exemple d'import                              |
| ------- | --------------- | --------------- | --------------------------------------------- |
| `Fa`    | Font Awesome    | ~1,600          | `import { FaHeart } from 'react-icons/fa'`    |
| `Md`    | Material Design | ~1,000          | `import { MdHome } from 'react-icons/md'`     |
| `Ai`    | Ant Design      | ~700            | `import { AiFillStar } from 'react-icons/ai'` |
| `Bs`    | Bootstrap Icons | ~1,800          | `import { BsHeart } from 'react-icons/bs'`    |
| `Bi`    | BoxIcons        | ~1,500          | `import { BiHeart } from 'react-icons/bi'`    |
| `Io`    | Ionicons        | ~1,300          | `import { IoMdHeart } from 'react-icons/io'`  |
| `Hi`    | Heroicons       | ~460            | `import { HiHeart } from 'react-icons/hi'`    |

### Icônes Font Awesome Courantes

```jsx
import {
  FaHome, // Maison
  FaUser, // Utilisateur
  FaUsers, // Utilisateurs
  FaCog, // Paramètres
  FaShoppingCart, // Panier
  FaHeart, // Cœur
  FaStar, // Étoile
  FaEnvelope, // Enveloppe
  FaPhone, // Téléphone
  FaMapMarkerAlt, // Marqueur de carte
  FaSearch, // Recherche
  FaBell, // Cloche
  FaEdit, // Éditer
  FaTrash, // Poubelle
  FaCheck, // Coche
  FaTimes, // Croix
  FaPlus, // Plus
  FaMinus, // Moins
  FaArrowRight, // Flèche droite
  FaArrowLeft, // Flèche gauche
  FaEye, // Œil
  FaEyeSlash, // Œil barré
  FaDownload, // Télécharger
  FaUpload, // Uploader
  FaCalendar, // Calendrier
  FaClock, // Horloge
  FaDollarSign, // Dollar
  FaBox, // Boîte
  FaChartBar, // Graphique
  FaDatabase, // Base de données
} from "react-icons/fa";
```

### Trouver des Icônes

Visitez le site officiel : [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons)

Vous pouvez rechercher par nom et voir toutes les icônes disponibles.

---

## 🎨 Styliser les Icônes

### Taille avec Tailwind CSS

```jsx
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <div>
      <FaHeart className="w-4 h-4" /> {/* Petit */}
      <FaHeart className="w-6 h-6" /> {/* Moyen */}
      <FaHeart className="w-8 h-8" /> {/* Grand */}
      <FaHeart className="w-12 h-12" /> {/* Très grand */}
    </div>
  );
}
```

### Couleur avec Tailwind CSS

```jsx
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <div>
      <FaHeart className="text-red-500" />
      <FaHeart className="text-blue-600" />
      <FaHeart className="text-green-500" />
      <FaHeart className="text-purple-600" />
    </div>
  );
}
```

### Combinaison de Styles

```jsx
import { FaShoppingCart } from "react-icons/fa";

function Bouton() {
  return (
    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      <FaShoppingCart className="w-5 h-5" />
      Ajouter au panier
    </button>
  );
}
```

### Styles Inline

```jsx
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <FaHeart
      style={{
        color: "red",
        fontSize: "32px",
        cursor: "pointer",
      }}
    />
  );
}
```

---

## 🔄 Passer des Icônes comme Props

### Principe

Vous pouvez passer un composant d'icône comme prop à un autre composant.

### Exemple Simple

```jsx
import { FaUser, FaCog, FaHome } from "react-icons/fa";

function Bouton({ icone: Icone, texte }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded">
      <Icone className="w-5 h-5" />
      {texte}
    </button>
  );
}

function App() {
  return (
    <div>
      <Bouton icone={FaHome} texte="Accueil" />
      <Bouton icone={FaUser} texte="Profil" />
      <Bouton icone={FaCog} texte="Paramètres" />
    </div>
  );
}
```

**Important** : Notez la syntaxe `icone: Icone` dans la destructuration. On renomme `icone` en `Icone` (avec majuscule) car React exige que les composants commencent par une majuscule.

### Exemple Avancé : Carte avec Icône

```jsx
import { FaUsers, FaDollarSign, FaShoppingCart, FaBox } from "react-icons/fa";

function Carte({ titre, valeur, icone: Icone, couleur }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{titre}</p>
          <h3 className="text-2xl font-bold text-gray-800">{valeur}</h3>
        </div>
        <div
          className={`w-12 h-12 bg-${couleur}-100 rounded-full flex items-center justify-center`}
        >
          <Icone className={`w-6 h-6 text-${couleur}-600`} />
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Carte
        titre="Utilisateurs"
        valeur="1,234"
        icone={FaUsers}
        couleur="blue"
      />
      <Carte
        titre="Revenus"
        valeur="45,678 €"
        icone={FaDollarSign}
        couleur="green"
      />
      <Carte
        titre="Commandes"
        valeur="567"
        icone={FaShoppingCart}
        couleur="purple"
      />
      <Carte titre="Produits" valeur="89" icone={FaBox} couleur="orange" />
    </div>
  );
}
```

---

## 🎯 Exercice Pratique : Cartes Statistiques

### Objectif

Créer un composant `StatCard` qui affiche des statistiques avec des icônes.

### Étape 1 : Créer le Composant

Créez `src/components/StatCard.jsx` :

```jsx
function StatCard({ titre, valeur, icone: Icone, couleur }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300">
      {/* En-tête avec icône */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{titre}</h3>
        <div
          className={`w-10 h-10 bg-${couleur}-100 rounded-full flex items-center justify-center`}
        >
          <Icone className={`w-5 h-5 text-${couleur}-600`} />
        </div>
      </div>

      {/* Valeur */}
      <p className="text-3xl font-bold text-gray-800">{valeur}</p>

      {/* Indicateur de tendance */}
      <div className="mt-4 flex items-center gap-1 text-sm">
        <span className="text-green-600 font-semibold">↑ 12%</span>
        <span className="text-gray-500">vs mois dernier</span>
      </div>
    </div>
  );
}

export default StatCard;
```

### Étape 2 : Utiliser le Composant

Modifiez `src/App.jsx` :

```jsx
import { FaUsers, FaDollarSign, FaShoppingCart, FaBox } from "react-icons/fa";
import StatCard from "./components/StatCard";

function App() {
  const stats = [
    {
      titre: "Utilisateurs",
      valeur: "1,234",
      icone: FaUsers,
      couleur: "blue",
    },
    {
      titre: "Revenus",
      valeur: "45,678 €",
      icone: FaDollarSign,
      couleur: "green",
    },
    {
      titre: "Commandes",
      valeur: "567",
      icone: FaShoppingCart,
      couleur: "purple",
    },
    {
      titre: "Produits",
      valeur: "89",
      icone: FaBox,
      couleur: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tableau de Bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            titre={stat.titre}
            valeur={stat.valeur}
            icone={stat.icone}
            couleur={stat.couleur}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

---

## 🎨 Exercice Bonus : Boutons avec Icônes

Créez un composant `IconButton` :

```jsx
// src/components/IconButton.jsx
function IconButton({ icone: Icone, texte, variant = "primary", onClick }) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg
        font-semibold transition duration-200
        ${variants[variant]}
      `}
    >
      <Icone className="w-5 h-5" />
      {texte}
    </button>
  );
}

export default IconButton;
```

```jsx
// src/App.jsx
import { FaPlus, FaEdit, FaTrash, FaDownload } from "react-icons/fa";
import IconButton from "./components/IconButton";

function App() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Actions</h2>
      <div className="flex flex-wrap gap-4">
        <IconButton
          icone={FaPlus}
          texte="Ajouter"
          variant="primary"
          onClick={() => alert("Ajouter")}
        />
        <IconButton
          icone={FaEdit}
          texte="Modifier"
          variant="secondary"
          onClick={() => alert("Modifier")}
        />
        <IconButton
          icone={FaTrash}
          texte="Supprimer"
          variant="danger"
          onClick={() => alert("Supprimer")}
        />
        <IconButton
          icone={FaDownload}
          texte="Télécharger"
          variant="success"
          onClick={() => alert("Télécharger")}
        />
      </div>
    </div>
  );
}
```

---

## 📚 Résumé

Vous avez appris :

✅ Installer React Icons
✅ Importer et utiliser des icônes
✅ Styliser les icônes avec Tailwind CSS
✅ Passer des icônes comme props
✅ Créer des composants réutilisables avec icônes

---

## 🎯 Prochaine Étape

Passez au support suivant :

**2-configuration-couleurs-tailwind.md** : Personnaliser les couleurs de votre application !

---

**Bon apprentissage ! 🚀**
