# 🌍 React Context - Définitions, Explications et Cas d'Utilisation

Ce support vous aide à comprendre **pourquoi**, **quand** et **comment** utiliser React Context dans une application moderne avec React 19.

Il s'appuie sur les notions déjà vues dans vos ateliers précédents :

- composants
- props
- `useState`
- architecture par dossiers
- navigation avec React Router
- layouts réutilisables

L'objectif est simple : apprendre à partager une donnée entre plusieurs composants **sans faire passer cette donnée manuellement à chaque niveau**.

---

## 📋 Table des Matières

1. [Qu'est-ce que React Context ?](#quest-ce-que-react-context-)
2. [Le problème que Context résout](#le-problème-que-context-résout)
3. [Définitions essentielles](#définitions-essentielles)
4. [Comment fonctionne Context ?](#comment-fonctionne-context-)
5. [Les 3 étapes pour utiliser Context](#les-3-étapes-pour-utiliser-context)
6. [Cas d'utilisation concrets](#cas-dutilisation-concrets)
7. [Quand ne pas utiliser Context](#quand-ne-pas-utiliser-context)
8. [Bonnes pratiques 2026](#bonnes-pratiques-2026)
9. [Erreurs fréquentes](#erreurs-fréquentes)
10. [Résumé pédagogique](#résumé-pédagogique)

---

## 🤔 Qu'est-ce que React Context ?

React Context est un mécanisme intégré à React qui permet de **partager une donnée avec tout un sous-arbre de composants** sans devoir transmettre cette donnée via les props à chaque niveau intermédiaire.

En d'autres termes :

- les **props** transmettent une donnée de parent à enfant
- **Context** permet à un parent plus haut dans l'arbre de rendre une donnée disponible plus bas, même très loin

### Définition simple

React Context est une solution pour rendre une information accessible à plusieurs composants descendants, même lorsqu'ils sont profondément imbriqués.

### Exemples de données souvent partagées avec Context

- le thème de l'application : clair ou sombre
- l'utilisateur connecté
- la langue courante
- des préférences globales
- un état partagé de dashboard
- une fonction de connexion ou de déconnexion

---

## 🧱 Le problème que Context résout

Avant Context, lorsqu'une donnée doit traverser plusieurs composants, on utilise souvent les props.

### Exemple avec props

```jsx
function App() {
  const theme = "dark";

  return <Layout theme={theme} />;
}

function Layout({ theme }) {
  return <Sidebar theme={theme} />;
}

function Sidebar({ theme }) {
  return <SidebarItem theme={theme} />;
}

function SidebarItem({ theme }) {
  return <button>{theme}</button>;
}
```

Ici, `Layout` et `Sidebar` ne font que **transporter** la prop `theme`.

Ce problème s'appelle :

## 🪛 Prop Drilling

Le **prop drilling** est le fait de passer une donnée à travers plusieurs composants intermédiaires qui n'en ont pas réellement besoin, simplement pour qu'un composant plus profond puisse la recevoir.

### Pourquoi c'est un problème ?

- le code devient plus verbeux
- les composants intermédiaires reçoivent des props inutiles
- la maintenance devient plus difficile
- une modification du flux de données impacte plusieurs fichiers

### Avec Context

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext value="dark">
      <Layout />
    </ThemeContext>
  );
}

function Layout() {
  return <Sidebar />;
}

function Sidebar() {
  return <SidebarItem />;
}

function SidebarItem() {
  const theme = useContext(ThemeContext);

  return <button>{theme}</button>;
}
```

Le composant `SidebarItem` lit directement la valeur dont il a besoin.

---

## 📚 Définitions essentielles

### 1. `createContext`

`createContext` permet de créer un contexte.

```jsx
import { createContext } from "react";

const ThemeContext = createContext("light");
```

La valeur `"light"` est une **valeur par défaut** utilisée uniquement si aucun provider correspondant n'est trouvé plus haut dans l'arbre.

### 2. Le Provider

Le provider est le composant qui **fournit la valeur** du contexte aux composants enfants.

En React 19, on peut écrire directement :

```jsx
<ThemeContext value="dark">
  <App />
</ThemeContext>
```

Dans les anciennes versions de React, on écrivait :

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

### 3. `useContext`

`useContext` permet de **lire** la valeur du contexte.

```jsx
import { useContext } from "react";

const theme = useContext(ThemeContext);
```

React cherche alors le **provider le plus proche au-dessus** du composant.

### 4. Valeur par défaut

La valeur passée à `createContext(defaultValue)` :

- sert de solution de secours
- ne change pas dans le temps
- n'est utilisée que s'il n'existe aucun provider correspondant

Exemple :

```jsx
const AuthContext = createContext(null);
```

Si un composant lit `AuthContext` sans provider au-dessus, il recevra `null`.

---

## ⚙️ Comment fonctionne Context ?

Context repose sur une idée simple :

1. on **crée** un contexte
2. on **fournit** une valeur en haut d'une partie de l'arbre
3. les composants descendants peuvent **consommer** cette valeur

### Schéma mental

```text
App
└── ThemeContext value="dark"
    └── Layout
        └── Sidebar
            └── Button
                └── useContext(ThemeContext) => "dark"
```

### Règle importante

`useContext()` lit toujours le **provider le plus proche situé au-dessus**.

Exemple :

```jsx
const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext value="dark">
      <Page />
    </ThemeContext>
  );
}

function Page() {
  return (
    <>
      <Card />

      <ThemeContext value="light">
        <Footer />
      </ThemeContext>
    </>
  );
}

function Card() {
  const theme = useContext(ThemeContext);
  return <p>{theme}</p>;
}

function Footer() {
  const theme = useContext(ThemeContext);
  return <p>{theme}</p>;
}
```

Résultat :

- `Card` reçoit `"dark"`
- `Footer` reçoit `"light"`

On dit alors qu'un provider **redéfinit** ou **surcharge** la valeur du contexte sur une sous-partie de l'interface.

---

## 🧭 Les 3 étapes pour utiliser Context

## 1. Créer le contexte

```jsx
import { createContext } from "react";

export const UserContext = createContext(null);
```

## 2. Fournir le contexte

```jsx
import { useState } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState({
    name: "Mamadou",
    role: "Admin",
  });

  return (
    <UserContext value={user}>
      <Dashboard />
    </UserContext>
  );
}
```

## 3. Lire le contexte

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h2>{user.name}</h2>;
}
```

---

## 🎯 Cas d'utilisation concrets

Voici les cas où Context est pertinent dans une vraie application.

### 1. Thème global

Exemple :

- mode clair
- mode sombre
- couleurs accessibles partout

Pourquoi Context ?

- plusieurs composants ont besoin du thème
- on évite d'envoyer `theme` à travers `Layout`, `Navbar`, `Sidebar`, `Card`, `Button`

### 2. Utilisateur connecté

Exemple :

- nom de l'utilisateur
- rôle
- avatar
- permissions

Pourquoi Context ?

- `Navbar`, `Sidebar`, `Profile`, `Settings` et certaines pages ont besoin des mêmes infos

### 3. Langue ou localisation

Exemple :

- français
- anglais
- arabe

Pourquoi Context ?

- plusieurs composants affichent du texte dépendant de la langue choisie

### 4. Dashboard partagé

Exemple :

- état de la sidebar : ouverte ou fermée
- filtre courant
- vue active
- préférences d'affichage

Pourquoi Context ?

- plusieurs composants du layout doivent lire et parfois modifier ces données

### 5. Reducer + Context

Dans une application plus grande, on peut combiner :

- `useReducer` pour centraliser la logique métier
- Context pour exposer `state` et `dispatch`

C'est utile quand :

- beaucoup de composants doivent lire le même état
- plusieurs actions modifient cet état
- on veut éviter trop de props et trop de logique dispersée

---

## 🚫 Quand ne pas utiliser Context

Context est très utile, mais il ne faut pas l'utiliser partout.

### N'utilisez pas Context si :

- la donnée n'est utilisée que par un seul composant
- la donnée ne descend que d'un ou deux niveaux
- les props suffisent et rendent le flux plus clair
- vous voulez juste éviter une petite prop isolée

### Exemple où les props restent meilleures

```jsx
function Card({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

Ici, utiliser Context serait inutile. Les props sont plus simples et plus explicites.

### Bonne règle pédagogique

Commencez toujours par vous demander :

> Est-ce que plusieurs composants éloignés dans l'arbre ont besoin de la même donnée ?

Si la réponse est **oui**, Context peut être un bon choix.

---

## ✅ Bonnes pratiques 2026

### 1. Créer les contextes dans des fichiers séparés

Exemple :

```text
src/
├── context/
│   ├── ThemeContext.jsx
│   └── AuthContext.jsx
```

Cela permet :

- une meilleure organisation
- des imports plus propres
- une réutilisation plus simple

### 2. Donner une vraie responsabilité à chaque contexte

Évitez de créer un contexte géant avec toutes les données de l'application.

Préférez :

- `ThemeContext`
- `AuthContext`
- `DashboardContext`

Plutôt que :

- `GlobalContext` avec 25 propriétés mélangées

### 3. Mémoriser les objets et fonctions si nécessaire

Quand on passe un objet ou une fonction dans un contexte, il peut être recréé à chaque rendu.

Exemple :

```jsx
const value = {
  user,
  logout,
};
```

Dans une petite application, ce n'est pas forcément grave.

Dans une application plus grande, on préfère souvent :

```jsx
import { useCallback, useMemo } from "react";

const logout = useCallback(() => {
  setUser(null);
}, []);

const value = useMemo(() => {
  return { user, logout };
}, [user, logout]);
```

Pourquoi ?

- cela limite des re-rendus inutiles
- cela rend le contexte plus stable

### 4. Utiliser des hooks personnalisés

Au lieu d'écrire partout :

```jsx
const theme = useContext(ThemeContext);
```

on peut créer :

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  return useContext(ThemeContext);
}
```

Avantages :

- code plus lisible
- imports centralisés
- validation plus facile

### 5. Adapter le code à React 19

Dans vos projets actuels, vous utilisez React 19.

La syntaxe moderne recommandée est :

```jsx
<ThemeContext value={theme}>
  <App />
</ThemeContext>
```

Mais il faut connaître aussi la syntaxe historique, car beaucoup de tutoriels ou anciens projets utilisent encore :

```jsx
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

---

## ⚠️ Erreurs fréquentes

### 1. Oublier d'entourer les composants avec le provider

```jsx
const UserContext = createContext(null);

function Profile() {
  const user = useContext(UserContext);
  return <h2>{user.name}</h2>;
}
```

Si aucun provider n'existe au-dessus, `user` vaudra `null` ici.

### 2. Croire que la valeur par défaut est dynamique

```jsx
const ThemeContext = createContext("light");
```

Cette valeur n'est pas un state. Elle ne change pas automatiquement.

### 3. Fournir un provider sans `value`

```jsx
<ThemeContext>
  <App />
</ThemeContext>
```

Cela est incorrect. Il faut toujours fournir `value`.

### 4. Lire le contexte au mauvais endroit

`useContext()` ne lit pas un provider créé plus bas dans le même composant.

### Exemple problématique

```jsx
function Page() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext value="dark">
      <p>{theme}</p>
    </ThemeContext>
  );
}
```

Ici, `theme` n'utilise pas ce provider, car le hook est exécuté avant le rendu du provider interne.

### 5. Mettre trop de choses dans un seul contexte

Plus un contexte contient d'informations, plus il devient difficile à maintenir.

---

## 🧠 Résumé pédagogique

### Ce qu'il faut retenir

- React Context sert à partager une donnée dans un sous-arbre de composants
- il évite le prop drilling quand plusieurs composants éloignés ont besoin de la même information
- on crée un contexte avec `createContext`
- on fournit une valeur avec un provider
- on lit cette valeur avec `useContext`
- le provider le plus proche gagne
- Context est utile pour le thème, l'utilisateur connecté, la langue et certains états globaux
- il ne faut pas l'utiliser pour remplacer toutes les props

### Formule simple à retenir

> Props = communication directe parent → enfant  
> Context = communication partagée parent → sous-arbre entier

### Progression logique

Dans vos ateliers précédents, vous avez appris :

- à créer des composants
- à passer des données avec les props
- à gérer un état local avec `useState`
- à structurer une application avec un layout et plusieurs pages

Le contexte est l'étape suivante :

- il permet de partager proprement certaines données entre plusieurs zones de l'application
- il prépare les étudiants à des applications plus grandes et plus réalistes

---

## 📝 Mini exercice de réflexion

Pour chaque cas, dites si vous utiliseriez plutôt **props** ou **Context** :

1. Le texte d'un seul bouton
2. Le nom de l'utilisateur affiché dans `Navbar`, `Sidebar` et `Settings`
3. La couleur d'un composant enfant direct
4. La langue utilisée par tout le dashboard

### Correction

1. Props
2. Context
3. Props
4. Context

---

## 🚀 Transition vers le prochain support

Maintenant que vous comprenez les concepts, le prochain support vous montre :

- comment organiser les fichiers
- comment créer un contexte étape par étape
- comment connecter plusieurs composants
- comment utiliser Context dans un mini dashboard React moderne
