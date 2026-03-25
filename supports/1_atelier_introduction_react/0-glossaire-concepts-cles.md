# 📖 Glossaire - Concepts Clés de React

Ce document explique les termes essentiels à connaître avant de commencer avec React.

---

## 🌐 1. DOM (Document Object Model)

### Définition

Le DOM est une représentation en arbre de la structure HTML d'une page web. C'est une interface de programmation qui permet à JavaScript de manipuler le contenu, la structure et le style d'une page.

### Exemple

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ma Page</title>
  </head>
  <body>
    <h1 id="titre">Bonjour</h1>
    <p class="texte">Bienvenue</p>
  </body>
</html>
```

**Représentation en arbre DOM :**

```
Document
└── html
    ├── head
    │   └── title
    │       └── "Ma Page"
    └── body
        ├── h1#titre
        │   └── "Bonjour"
        └── p.texte
            └── "Bienvenue"
```

### Manipulation du DOM avec JavaScript

```javascript
// Sélectionner un élément
const titre = document.getElementById("titre");

// Modifier le contenu
titre.textContent = "Bonjour le monde !";

// Ajouter une classe
titre.classList.add("actif");

// Créer un nouvel élément
const nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Nouveau texte";
document.body.appendChild(nouveauParagraphe);
```

### Problème du DOM

Manipuler le DOM directement est **lent** car chaque modification déclenche un recalcul et un redessin de la page (reflow et repaint).

---

## ⚡ 2. Virtual DOM (DOM Virtuel)

### Définition

Le Virtual DOM est une copie légère du DOM réel, stockée en mémoire JavaScript. React utilise cette copie pour optimiser les mises à jour.

### Comment ça fonctionne ?

1. **État initial** : React crée un Virtual DOM qui représente l'interface
2. **Changement** : Quand les données changent, React crée un nouveau Virtual DOM
3. **Comparaison (Diffing)** : React compare l'ancien et le nouveau Virtual DOM
4. **Mise à jour minimale** : React met à jour uniquement les parties du DOM réel qui ont changé

### Analogie

Imaginez que vous voulez rénover votre maison :

- **Sans Virtual DOM** : Vous démolissez toute la maison et la reconstruisez à chaque petit changement
- **Avec Virtual DOM** : Vous faites un plan (Virtual DOM), comparez avec l'existant, et ne rénovez que les pièces qui ont changé

### Exemple

```jsx
// État initial
<div>
  <h1>Compteur : 0</h1>
  <button>Incrémenter</button>
</div>

// Après clic sur le bouton
<div>
  <h1>Compteur : 1</h1>  {/* Seul ce texte change */}
  <button>Incrémenter</button>
</div>
```

React ne met à jour que le texte "0" → "1", pas tout le DOM.

---

## 🧩 3. JSX (JavaScript XML)

### Définition

JSX est une extension de syntaxe JavaScript qui permet d'écrire du HTML dans du JavaScript. C'est la syntaxe utilisée par React pour décrire l'interface utilisateur.

### Syntaxe

```jsx
// JSX
const element = <h1 className="titre">Bonjour React !</h1>;

// Équivalent JavaScript pur (ce que Babel compile)
const element = React.createElement(
  "h1",
  { className: "titre" },
  "Bonjour React !",
);
```

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

// ✅ Correct avec Fragment
return (
  <>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </>
);
```

2. **className au lieu de class**

```jsx
// ❌ Incorrect
<div class="container">Contenu</div>

// ✅ Correct
<div className="container">Contenu</div>
```

3. **Balises auto-fermantes**

```jsx
// ❌ Incorrect
<img src="photo.jpg">

// ✅ Correct
<img src="photo.jpg" />
```

4. **Expressions JavaScript avec {}**

```jsx
const nom = "Mamadou";
const age = 25;

return (
  <div>
    <h1>Bonjour {nom} !</h1>
    <p>Tu as {age} ans</p>
    <p>Dans 5 ans, tu auras {age + 5} ans</p>
  </div>
);
```

---

## 🎨 4. Déclaratif vs Impératif

### Programmation Impérative

Vous décrivez **comment** faire quelque chose, étape par étape.

```javascript
// Impératif : Créer une liste de nombres
const nombres = [1, 2, 3, 4, 5];
const doubles = [];

for (let i = 0; i < nombres.length; i++) {
  doubles.push(nombres[i] * 2);
}

console.log(doubles); // [2, 4, 6, 8, 10]
```

### Programmation Déclarative

Vous décrivez **ce que** vous voulez, pas comment le faire.

```javascript
// Déclaratif : Créer une liste de nombres
const nombres = [1, 2, 3, 4, 5];
const doubles = nombres.map((n) => n * 2);

console.log(doubles); // [2, 4, 6, 8, 10]
```

### React est Déclaratif

**Impératif (JavaScript pur) :**

```javascript
// Créer un bouton qui incrémente un compteur
const button = document.createElement("button");
button.textContent = "Compteur : 0";
let count = 0;

button.addEventListener("click", () => {
  count++;
  button.textContent = `Compteur : ${count}`;
});

document.body.appendChild(button);
```

**Déclaratif (React) :**

```jsx
function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Compteur : {count}</button>
  );
}
```

Avec React, vous décrivez **à quoi doit ressembler l'interface** selon l'état, et React s'occupe des mises à jour.

---

## 📦 5. Webpack vs Rollup vs Vite

### Webpack

- **Bundler** (empaqueteur) de modules JavaScript
- Combine tous vos fichiers JS, CSS, images en un seul fichier
- Très configurable mais complexe
- Utilisé par Create React App (CRA)

### Rollup

- Bundler plus moderne et rapide
- Optimisé pour les bibliothèques
- Produit des bundles plus petits

### Vite

- **Build tool** moderne et ultra-rapide
- Utilise ES modules natifs en développement (pas de bundling)
- Utilise Rollup pour la production
- Démarrage instantané (< 1 seconde)
- Hot Module Replacement (HMR) ultra-rapide

**Comparaison de vitesse :**

```
Create React App (Webpack) : ~30 secondes de démarrage
Vite : ~0.5 seconde de démarrage
```

**C'est pourquoi nous utilisons Vite dans cette formation !**

---

## 📚 6. Bibliothèque vs Framework

### Bibliothèque (Library)

Une collection de fonctions que **vous appelez** quand vous en avez besoin.

**Exemple : React**

```jsx
// Vous contrôlez le flux
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Mon App</h1>;
}

// Vous décidez quand et comment utiliser React
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### Framework

Un cadre qui **contrôle le flux** de votre application. Vous remplissez les blancs.

**Exemple : Angular**

```typescript
// Angular contrôle le flux
@Component({
  selector: "app-root",
  template: "<h1>Mon App</h1>",
})
export class AppComponent {
  // Angular décide comment et quand exécuter ce code
}
```

### Analogie

- **Bibliothèque** : Une boîte à outils. Vous choisissez les outils dont vous avez besoin.
- **Framework** : Une maison préfabriquée. La structure est déjà là, vous décorez l'intérieur.

### React : Bibliothèque ou Framework ?

React est officiellement une **bibliothèque**, mais avec React Router, Redux, etc., il ressemble à un framework complet.

---

## 🧱 7. Composant (Component)

### Définition

Un composant est un bloc de code réutilisable qui retourne du JSX. C'est comme une fonction qui produit de l'interface utilisateur.

### Types de Composants

**1. Composant Fonction (moderne)**

```jsx
function Bouton() {
  return <button>Cliquez-moi</button>;
}
```

**2. Composant Classe (ancien, moins utilisé)**

```jsx
class Bouton extends React.Component {
  render() {
    return <button>Cliquez-moi</button>;
  }
}
```

### Composants Réutilisables

```jsx
function Carte({ titre, description }) {
  return (
    <div className="carte">
      <h2>{titre}</h2>
      <p>{description}</p>
    </div>
  );
}

// Utilisation
<Carte titre="React" description="Bibliothèque JavaScript" />
<Carte titre="Vite" description="Build tool rapide" />
```

---

## 🔄 8. Props (Properties)

### Définition

Les props sont des données passées d'un composant parent à un composant enfant. Elles sont **immuables** (ne peuvent pas être modifiées par l'enfant).

### Exemple

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
  return (
    <div>
      <Salutation nom="Mamadou" age={25} />
      <Salutation nom="Aissatou" age={22} />
    </div>
  );
}
```

---

## 🔧 9. State (État)

### Définition

Le state est une donnée **interne** à un composant qui peut changer au fil du temps. Quand le state change, React re-rend le composant.

### Exemple

```jsx
import { useState } from "react";

function Compteur() {
  // Déclaration du state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

### Props vs State

| Props                     | State                         |
| ------------------------- | ----------------------------- |
| Données reçues du parent  | Données internes au composant |
| Immuables (lecture seule) | Mutables (peuvent changer)    |
| Passées en paramètre      | Déclarées avec useState       |
| Contrôlées par le parent  | Contrôlées par le composant   |

---

## 🎣 10. Hooks

### Définition

Les Hooks sont des fonctions spéciales qui permettent d'utiliser des fonctionnalités React dans les composants fonction.

### Hooks Principaux

**1. useState** : Gérer l'état

```jsx
const [count, setCount] = useState(0);
```

**2. useEffect** : Effets de bord (API, timers, etc.)

```jsx
useEffect(() => {
  document.title = `Compteur : ${count}`;
}, [count]);
```

**3. useContext** : Partager des données globales

```jsx
const theme = useContext(ThemeContext);
```

### Règles des Hooks

1. Appeler les Hooks uniquement au niveau racine (pas dans des boucles ou conditions)
2. Appeler les Hooks uniquement dans des composants React ou des Hooks personnalisés

---

## 📝 Résumé

| Concept     | Définition Simple                                   |
| ----------- | --------------------------------------------------- |
| DOM         | Structure HTML de la page                           |
| Virtual DOM | Copie légère du DOM pour optimiser les mises à jour |
| JSX         | HTML dans JavaScript                                |
| Déclaratif  | Décrire ce qu'on veut, pas comment le faire         |
| Composant   | Bloc de code réutilisable qui retourne du JSX       |
| Props       | Données passées du parent à l'enfant                |
| State       | Données internes qui peuvent changer                |
| Hooks       | Fonctions pour utiliser React dans les composants   |

---

## 🎯 Prochaine Étape

Maintenant que vous connaissez le vocabulaire, passez au support suivant :

**1-introduction-react.md** : Créer votre première application React !

---

**Bon apprentissage ! 🚀**
