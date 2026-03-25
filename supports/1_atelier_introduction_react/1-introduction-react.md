# 🚀 Introduction à React

Ce support vous guide pas à pas pour créer votre première application React avec Vite.

---

## 📋 Table des Matières

1. [Qu'est-ce que React ?](#quest-ce-que-react)
2. [Pourquoi utiliser React ?](#pourquoi-utiliser-react)
3. [Prérequis](#prérequis)
4. [Installation de Node.js et npm](#installation-de-nodejs-et-npm)
5. [Créer une application React avec Vite](#créer-une-application-react-avec-vite)
6. [Structure d'un projet React](#structure-dun-projet-react)
7. [Comprendre les dépendances](#comprendre-les-dépendances)
8. [Architecture par composants](#architecture-par-composants)
9. [Le JSX en pratique](#le-jsx-en-pratique)
10. [Imports et Exports](#imports-et-exports)
11. [Flux de l'application](#flux-de-lapplication)
12. [Exercice Pratique](#exercice-pratique)

---

## 🤔 Qu'est-ce que React ?

React est une **bibliothèque JavaScript** créée par Facebook (Meta) en 2013 pour construire des interfaces utilisateur interactives.

### Caractéristiques principales

- **Composants réutilisables** : Construire l'interface par blocs
- **Virtual DOM** : Mises à jour ultra-rapides
- **Déclaratif** : Décrire ce qu'on veut, pas comment le faire
- **Unidirectionnel** : Les données circulent du parent vers l'enfant

---

## 💡 Pourquoi utiliser React ?

### Avantages

✅ **Performance** : Virtual DOM optimise les mises à jour
✅ **Réutilisabilité** : Composants utilisables partout
✅ **Écosystème riche** : Des milliers de bibliothèques
✅ **Communauté active** : Support et ressources abondantes
✅ **Demandé sur le marché** : Compétence très recherchée

### Cas d'usage

- Applications web modernes (Facebook, Instagram, Netflix)
- Dashboards et interfaces d'administration
- Applications mobiles (avec React Native)
- Sites e-commerce
- Plateformes SaaS

---

## 📚 Prérequis

Avant de commencer, vous devez connaître :

- **HTML** : Structure des pages web
- **CSS** : Stylisation
- **JavaScript** : Variables, fonctions, tableaux, objets
  - `const`, `let`
  - Fonctions fléchées : `() => {}`
  - Destructuration : `const { nom } = objet`
  - Spread operator : `...`
  - Template literals : `` `Bonjour ${nom}` ``
  - Méthodes de tableaux : `map()`, `filter()`

---

## 🛠️ Installation de Node.js et npm

### Qu'est-ce que Node.js ?

Node.js est un environnement d'exécution JavaScript côté serveur. Il permet d'exécuter du JavaScript en dehors du navigateur.

### Qu'est-ce que npm ?

npm (Node Package Manager) est le gestionnaire de paquets de Node.js. Il permet d'installer des bibliothèques JavaScript.

### Installation

1. **Télécharger Node.js**
   - Aller sur [nodejs.org](https://nodejs.org)
   - Télécharger la version LTS (Long Term Support)
   - Installer en suivant les instructions

2. **Vérifier l'installation**

```bash
# Vérifier la version de Node.js
node --version
# Exemple de sortie : v20.11.0

# Vérifier la version de npm
npm --version
# Exemple de sortie : 10.2.4
```

---

## 🎯 Créer une application React avec Vite

### Pourquoi Vite ?

- ⚡ **Ultra-rapide** : Démarrage en < 1 seconde
- 🔥 **Hot Module Replacement** : Mises à jour instantanées
- 📦 **Moderne** : Utilise ES modules natifs
- 🛠️ **Simple** : Configuration minimale

### Commandes de création

```bash
# 1. Créer un nouveau projet React avec Vite
npm create vite@latest mon-app-react -- --template react

# 2. Entrer dans le dossier du projet
cd mon-app-react

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

### Résultat

```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Ouvrez votre navigateur sur `http://localhost:5173/` et vous verrez votre application React !

---

## 📂 Structure d'un projet React

```
mon-app-react/
├── node_modules/          # Dépendances installées (ne pas modifier)
├── public/                # Fichiers statiques (images, favicon)
│   └── vite.svg
├── src/                   # Code source de l'application
│   ├── assets/            # Images, fonts, etc.
│   │   └── react.svg
│   ├── App.css            # Styles du composant App
│   ├── App.jsx            # Composant principal
│   ├── index.css          # Styles globaux
│   └── main.jsx           # Point d'entrée de l'application
├── .gitignore             # Fichiers à ignorer par Git
├── index.html             # Page HTML principale
├── package.json           # Configuration du projet et dépendances
├── package-lock.json      # Versions exactes des dépendances
├── vite.config.js         # Configuration de Vite
└── README.md              # Documentation du projet
```

### Fichiers importants

| Fichier          | Rôle                              |
| ---------------- | --------------------------------- |
| `index.html`     | Page HTML de base                 |
| `src/main.jsx`   | Point d'entrée JavaScript         |
| `src/App.jsx`    | Composant racine de l'application |
| `package.json`   | Liste des dépendances et scripts  |
| `vite.config.js` | Configuration de Vite             |

---

## 📦 Comprendre les dépendances

### package.json

```json
{
  "name": "mon-app-react",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0"
  }
}
```

### Scripts npm

```bash
# Lancer le serveur de développement
npm run dev

# Créer une version de production
npm run build

# Prévisualiser la version de production
npm run preview
```

### node_modules/

Ce dossier contient toutes les bibliothèques installées. Il peut être très volumineux (plusieurs centaines de Mo).

**Important** : Ne jamais modifier ou commiter `node_modules/` dans Git !

Pour réinstaller les dépendances :

```bash
npm install
```

---

## 🧩 Architecture par composants

### Qu'est-ce qu'un composant ?

Un composant est une fonction JavaScript qui retourne du JSX (HTML dans JavaScript).

### Exemple simple

```jsx
function Salutation() {
  return <h1>Bonjour le monde !</h1>;
}
```

### Composant avec props

```jsx
function Salutation({ nom }) {
  return <h1>Bonjour {nom} !</h1>;
}

// Utilisation
<Salutation nom="Mamadou" />;
```

### Composition de composants

```jsx
function Carte({ titre, description }) {
  return (
    <div className="carte">
      <h2>{titre}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Mes Compétences</h1>
      <Carte titre="React" description="Bibliothèque JavaScript" />
      <Carte titre="JavaScript" description="Langage de programmation" />
      <Carte titre="CSS" description="Stylisation web" />
    </div>
  );
}
```

---

## 📝 Le JSX en pratique

### Règles JSX

1. **Un seul élément parent**

```jsx
// ❌ Incorrect
return (
  <h1>Titre</h1>
  <p>Paragraphe</p>
);

// ✅ Correct
return (
  <div>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </div>
);
```

2. **className au lieu de class**

```jsx
<div className="container">Contenu</div>
```

3. **Balises auto-fermantes**

```jsx
<img src="photo.jpg" alt="Photo" />
<input type="text" />
<br />
```

4. **Expressions JavaScript avec {}**

```jsx
const nom = "Mamadou";
const age = 25;

return (
  <div>
    <h1>Bonjour {nom}</h1>
    <p>Tu as {age} ans</p>
    <p>Dans 5 ans : {age + 5} ans</p>
  </div>
);
```

5. **Conditions**

```jsx
const estConnecte = true;

return (
  <div>{estConnecte ? <p>Bienvenue !</p> : <p>Veuillez vous connecter</p>}</div>
);
```

6. **Listes avec map()**

```jsx
const fruits = ["Pomme", "Banane", "Orange"];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

---

## 📥 Imports et Exports

### Export par défaut

```jsx
// Bouton.jsx
function Bouton() {
  return <button>Cliquez-moi</button>;
}

export default Bouton;
```

```jsx
// App.jsx
import Bouton from "./Bouton";

function App() {
  return <Bouton />;
}
```

### Export nommé

```jsx
// utils.js
export function addition(a, b) {
  return a + b;
}

export function soustraction(a, b) {
  return a - b;
}
```

```jsx
// App.jsx
import { addition, soustraction } from "./utils";

const resultat = addition(5, 3); // 8
```

### Import de bibliothèques

```jsx
// Import de React
import React from "react";

// Import de hooks
import { useState, useEffect } from "react";

// Import de React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

---

## 🔄 Flux de l'application

### Ordre d'exécution

```
1. index.html
   ↓
2. src/main.jsx
   ↓
3. src/App.jsx
   ↓
4. Composants enfants
```

### index.html

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mon App React</title>
  </head>
  <body>
    <!-- React va injecter l'application ici -->
    <div id="root"></div>

    <!-- Point d'entrée JavaScript -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### src/main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Créer la racine React et rendre l'application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### src/App.jsx

```jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bienvenue dans React !</h1>
      <p>Votre première application</p>
    </div>
  );
}

export default App;
```

---

## 🎨 Exercice Pratique : Carte de Visite

### Objectif

Créer un composant `CarteVisite` qui affiche vos informations personnelles.

### Étape 1 : Créer le composant

Créez un fichier `src/components/CarteVisite.jsx` :

```jsx
function CarteVisite({ nom, profession, email, telephone }) {
  return (
    <div className="carte-visite">
      <h2>{nom}</h2>
      <p className="profession">{profession}</p>
      <div className="contact">
        <p>📧 {email}</p>
        <p>📱 {telephone}</p>
      </div>
    </div>
  );
}

export default CarteVisite;
```

### Étape 2 : Utiliser le composant

Modifiez `src/App.jsx` :

```jsx
import CarteVisite from "./components/CarteVisite";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Mon Portfolio</h1>
      <CarteVisite
        nom="Mamadou Barry"
        profession="Développeur Web"
        email="mamadou@example.com"
        telephone="+224 123 456 789"
      />
    </div>
  );
}

export default App;
```

### Étape 3 : Styliser

Ajoutez dans `src/App.css` :

```css
.App {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.carte-visite {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 400px;
}

.carte-visite h2 {
  color: #333;
  margin-bottom: 0.5rem;
}

.profession {
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
}

.contact {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  text-align: left;
}

.contact p {
  margin: 0.5rem 0;
}
```

### Résultat attendu

Une carte de visite élégante avec :

- Votre nom en grand
- Votre profession
- Vos coordonnées

---

## 🎯 Exercice Bonus : Liste de Compétences

Ajoutez un composant `CompetenceCard` qui affiche vos compétences.

```jsx
// src/components/CompetenceCard.jsx
function CompetenceCard({ nom, niveau, icone }) {
  return (
    <div className="competence-card">
      <span className="icone">{icone}</span>
      <h3>{nom}</h3>
      <div className="niveau">
        <div className="barre" style={{ width: `${niveau}%` }}></div>
      </div>
      <p>{niveau}%</p>
    </div>
  );
}

export default CompetenceCard;
```

```jsx
// src/App.jsx
import CarteVisite from "./components/CarteVisite";
import CompetenceCard from "./components/CompetenceCard";
import "./App.css";

function App() {
  const competences = [
    { nom: "React", niveau: 80, icone: "⚛️" },
    { nom: "JavaScript", niveau: 90, icone: "🟨" },
    { nom: "CSS", niveau: 85, icone: "🎨" },
    { nom: "HTML", niveau: 95, icone: "📄" },
  ];

  return (
    <div className="App">
      <h1>Mon Portfolio</h1>

      <CarteVisite
        nom="Mamadou Barry"
        profession="Développeur Web"
        email="mamadou@example.com"
        telephone="+224 123 456 789"
      />

      <h2>Mes Compétences</h2>
      <div className="competences-grid">
        {competences.map((comp, index) => (
          <CompetenceCard
            key={index}
            nom={comp.nom}
            niveau={comp.niveau}
            icone={comp.icone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

---

## 📚 Résumé

Vous avez appris :

✅ Créer une application React avec Vite
✅ Comprendre la structure d'un projet React
✅ Créer des composants réutilisables
✅ Utiliser les props pour passer des données
✅ Écrire du JSX
✅ Utiliser map() pour afficher des listes
✅ Importer et exporter des composants

---

## 🎯 Prochaine Étape

Passez au support suivant :

**2-installation-tailwind-v4.md** : Styliser votre application avec Tailwind CSS !

---

**Bon apprentissage ! 🚀**
