# 🎯 Concepts Fondamentaux de React

Ce support couvre les concepts essentiels de React que vous devez maîtriser avant de construire le Dashboard.

---

## 📋 Table des Matières

1. [Événements en React](#événements-en-react)
2. [State avec useState](#state-avec-usestate)
3. [Les Hooks React](#les-hooks-react)
4. [Style Conditionnel](#style-conditionnel)
5. [Flux de Données](#flux-de-données)
6. [Remonter les Événements](#remonter-les-événements)

---

## 🖱️ 1. Événements en React

### Événements Courants

React utilise des événements similaires au JavaScript natif, mais avec une syntaxe camelCase.

```jsx
function Bouton() {
  // Fonction gestionnaire d'événement
  const handleClick = () => {
    alert("Bouton cliqué !");
  };

  return <button onClick={handleClick}>Cliquez-moi</button>;
}
```

### Liste des Événements Principaux

| Événement React | Événement HTML | Description                |
| --------------- | -------------- | -------------------------- |
| `onClick`       | `onclick`      | Clic sur un élément        |
| `onChange`      | `onchange`     | Changement de valeur input |
| `onSubmit`      | `onsubmit`     | Soumission de formulaire   |
| `onMouseEnter`  | `onmouseenter` | Souris entre dans élément  |
| `onMouseLeave`  | `onmouseleave` | Souris sort de l'élément   |
| `onFocus`       | `onfocus`      | Élément reçoit le focus    |
| `onBlur`        | `onblur`       | Élément perd le focus      |

### Syntaxes d'Événements

```jsx
function ExemplesEvenements() {
  // ✅ Correct : Passer la référence de la fonction
  const handleClick = () => {
    console.log("Cliqué !");
  };

  // ✅ Correct : Fonction fléchée inline
  return (
    <div>
      <button onClick={handleClick}>Méthode 1</button>

      <button onClick={() => console.log("Cliqué !")}>Méthode 2</button>

      {/* ❌ Incorrect : Appel immédiat de la fonction */}
      <button onClick={handleClick()}>Ne faites pas ça !</button>
    </div>
  );
}
```

### Événement avec Paramètres

```jsx
function ListeBoutons() {
  const handleClick = (nom) => {
    alert(`Bonjour ${nom} !`);
  };

  return (
    <div>
      <button onClick={() => handleClick("Mamadou")}>Mamadou</button>
      <button onClick={() => handleClick("Aissatou")}>Aissatou</button>
    </div>
  );
}
```

### Objet Event

```jsx
function Formulaire() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log("Formulaire soumis");
  };

  const handleChange = (event) => {
    console.log("Valeur :", event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Tapez quelque chose"
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

---

## 🔄 2. State avec useState

### Qu'est-ce que le State ?

Le state est une donnée **interne** à un composant qui peut changer au fil du temps. Quand le state change, React re-rend automatiquement le composant.

### Syntaxe de useState

```jsx
import { useState } from "react";

function Compteur() {
  // [valeur actuelle, fonction pour modifier]
  const [count, setCount] = useState(0);
  //     ↑          ↑              ↑
  //   state    setter      valeur initiale

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

### Règles du State

1. **Ne jamais modifier le state directement**

```jsx
// ❌ Incorrect
count = count + 1;

// ✅ Correct
setCount(count + 1);
```

2. **Le state est asynchrone**

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // Affiche encore 0 !
  // Le state n'est pas encore mis à jour
};
```

3. **Utiliser la forme fonctionnelle pour les mises à jour basées sur l'état précédent**

```jsx
// ❌ Peut causer des bugs
setCount(count + 1);
setCount(count + 1); // Ne fait qu'incrémenter de 1

// ✅ Correct
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1); // Incrémente bien de 2
```

### Types de State

**State simple (nombre, string, boolean) :**

```jsx
const [nom, setNom] = useState("");
const [age, setAge] = useState(0);
const [estConnecte, setEstConnecte] = useState(false);
```

**State objet :**

```jsx
const [utilisateur, setUtilisateur] = useState({
  nom: "Mamadou",
  age: 25,
  email: "mamadou@example.com",
});

// Mise à jour d'une propriété
setUtilisateur({
  ...utilisateur,
  age: 26,
});
```

**State tableau :**

```jsx
const [fruits, setFruits] = useState(["Pomme", "Banane"]);

// Ajouter un élément
setFruits([...fruits, "Orange"]);

// Supprimer un élément
setFruits(fruits.filter((fruit) => fruit !== "Banane"));
```

### Exemple Complet : Formulaire

```jsx
import { useState } from "react";

function FormulaireInscription() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Données :", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        placeholder="Nom"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Âge"
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
```

---

## 🎣 3. Les Hooks React

### Qu'est-ce qu'un Hook ?

Les Hooks sont des fonctions spéciales qui permettent d'utiliser des fonctionnalités React dans les composants fonction.

### Hooks Principaux

#### useState - Gérer l'état local

```jsx
const [count, setCount] = useState(0);
```

#### useEffect - Effets de bord

```jsx
import { useEffect } from "react";

function Exemple() {
  const [count, setCount] = useState(0);

  // S'exécute après chaque rendu
  useEffect(() => {
    document.title = `Compteur : ${count}`;
  });

  // S'exécute uniquement au montage
  useEffect(() => {
    console.log("Composant monté");
  }, []);

  // S'exécute quand count change
  useEffect(() => {
    console.log("Count a changé :", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

#### useLocation - Détecter la route actuelle (React Router)

```jsx
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <a href="/" className={location.pathname === "/" ? "active" : ""}>
        Accueil
      </a>
    </nav>
  );
}
```

#### useNavigate - Navigation programmatique (React Router)

```jsx
import { useNavigate } from "react-router-dom";

function Connexion() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logique de connexion...
    navigate("/dashboard"); // Redirection
  };

  return <button onClick={handleLogin}>Se connecter</button>;
}
```

### Règles des Hooks

1. **Appeler les Hooks uniquement au niveau racine**

```jsx
// ❌ Incorrect
if (condition) {
  const [count, setCount] = useState(0);
}

// ✅ Correct
const [count, setCount] = useState(0);
if (condition) {
  // Utiliser count ici
}
```

2. **Appeler les Hooks uniquement dans des composants React**

```jsx
// ❌ Incorrect
function maFonction() {
  const [count, setCount] = useState(0);
}

// ✅ Correct
function MonComposant() {
  const [count, setCount] = useState(0);
}
```

---

## 🎨 4. Style Conditionnel

### Classes CSS Conditionnelles

**Avec opérateur ternaire :**

```jsx
function Bouton({ actif }) {
  return (
    <button className={actif ? "btn-actif" : "btn-inactif"}>
      {actif ? "Actif" : "Inactif"}
    </button>
  );
}
```

**Avec template literals :**

```jsx
function Carte({ type }) {
  return <div className={`carte carte-${type}`}>Contenu</div>;
}
```

**Avec conditions multiples :**

```jsx
function Bouton({ variant, taille, actif }) {
  const classes = `
    btn 
    btn-${variant} 
    btn-${taille} 
    ${actif ? "btn-actif" : ""}
  `.trim();

  return <button className={classes}>Bouton</button>;
}
```

### Styles Inline Conditionnels

```jsx
function BarreProgression({ pourcentage }) {
  return (
    <div className="barre-container">
      <div
        className="barre"
        style={{
          width: `${pourcentage}%`,
          backgroundColor: pourcentage > 50 ? "green" : "red",
        }}
      />
    </div>
  );
}
```

### Exemple Complet : Navigation Active

```jsx
import { useLocation } from "react-router-dom";

function NavItem({ to, children }) {
  const location = useLocation();
  const estActif = location.pathname === to;

  return (
    <a
      href={to}
      className={`
        nav-item 
        ${estActif ? "nav-item-actif bg-primary text-white" : "text-gray-600"}
      `}
    >
      {children}
    </a>
  );
}
```

---

## 🔄 5. Flux de Données

### Flux Unidirectionnel

En React, les données circulent **du parent vers l'enfant** via les props.

```jsx
// Parent
function App() {
  const utilisateur = {
    nom: "Mamadou",
    age: 25,
  };

  return <Profil utilisateur={utilisateur} />;
}

// Enfant
function Profil({ utilisateur }) {
  return (
    <div>
      <h1>{utilisateur.nom}</h1>
      <p>{utilisateur.age} ans</p>
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

### Exemple : Compteur avec Props

```jsx
// Parent gère le state
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Affichage count={count} />
      <Boutons onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

// Enfants reçoivent les props
function Affichage({ count }) {
  return <h1>Compteur : {count}</h1>;
}

function Boutons({ onIncrement }) {
  return <button onClick={onIncrement}>+1</button>;
}
```

---

## ⬆️ 6. Remonter les Événements

### Principe

Quand un composant enfant doit modifier le state du parent, on passe une fonction callback via les props.

### Exemple Simple

```jsx
// Parent
function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (nouveauMessage) => {
    setMessage(nouveauMessage);
  };

  return (
    <div>
      <p>Message : {message}</p>
      <Formulaire onEnvoyer={handleMessage} />
    </div>
  );
}

// Enfant
function Formulaire({ onEnvoyer }) {
  const [texte, setTexte] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnvoyer(texte); // Remonte l'événement au parent
    setTexte("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={texte} onChange={(e) => setTexte(e.target.value)} />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

### Exemple Avancé : Liste de Tâches

```jsx
function App() {
  const [taches, setTaches] = useState([
    { id: 1, texte: "Apprendre React", terminee: false },
    { id: 2, texte: "Construire un projet", terminee: false },
  ]);

  const toggleTache = (id) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
      ),
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((tache) => tache.id !== id));
  };

  return (
    <div>
      <h1>Mes Tâches</h1>
      {taches.map((tache) => (
        <Tache
          key={tache.id}
          tache={tache}
          onToggle={toggleTache}
          onSupprimer={supprimerTache}
        />
      ))}
    </div>
  );
}

function Tache({ tache, onToggle, onSupprimer }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => onToggle(tache.id)}
      />
      <span
        style={{ textDecoration: tache.terminee ? "line-through" : "none" }}
      >
        {tache.texte}
      </span>
      <button onClick={() => onSupprimer(tache.id)}>Supprimer</button>
    </div>
  );
}
```

---

## 📚 Résumé

Vous avez appris :

✅ Gérer les événements en React (onClick, onChange, etc.)
✅ Utiliser useState pour gérer l'état local
✅ Comprendre les Hooks (useState, useEffect, useLocation, useNavigate)
✅ Appliquer des styles conditionnels
✅ Comprendre le flux de données (parent → enfant)
✅ Remonter les événements (enfant → parent)

---

## 🎯 Prochaine Étape

Passez au support suivant :

**1-installation-react-icons.md** : Ajouter des icônes à votre application !

---

**Bon apprentissage ! 🚀**
