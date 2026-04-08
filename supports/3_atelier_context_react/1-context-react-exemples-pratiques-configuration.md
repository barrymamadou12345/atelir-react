# 🛠️ React Context - Exemples Pratiques et Configuration Complète

Ce support montre comment mettre React Context en pratique dans une application inspirée de vos ateliers précédents.

Nous allons construire une logique simple et réaliste autour d'un dashboard avec :

- un thème global
- un utilisateur connecté
- des composants qui consomment ces données
- une structure de fichiers claire

L'objectif n'est pas seulement de voir du code, mais surtout de comprendre **pourquoi chaque fichier existe**, **quel rôle il joue** et **comment tous les composants collaborent**.

---

## 📋 Table des Matières

1. [Objectif du mini projet](#objectif-du-mini-projet)
2. [Structure des fichiers](#structure-des-fichiers)
3. [Étape 1 - Créer le dossier context](#étape-1---créer-le-dossier-context)
4. [Étape 2 - Créer ThemeContext](#étape-2---créer-themecontext)
5. [Étape 3 - Créer AuthContext](#étape-3---créer-authcontext)
6. [Étape 4 - Envelopper l'application](#étape-4---envelopper-lapplication)
7. [Étape 5 - Consommer le contexte dans les composants](#étape-5---consommer-le-contexte-dans-les-composants)
8. [Étape 6 - Ajouter une action utilisateur](#étape-6---ajouter-une-action-utilisateur)
9. [Version avancée avec reducer et context](#version-avancée-avec-reducer-et-context)
10. [Résumé pratique](#résumé-pratique)

---

## 🎯 Objectif du mini projet

Dans vos ateliers précédents, vous avez vu :

- les composants simples
- les props
- `useState`
- le dashboard avec `Layout`, `Navbar`, `Sidebar` et plusieurs pages

Maintenant, imaginons ce besoin :

- `Navbar` doit afficher l'utilisateur connecté
- `Sidebar` doit adapter son style au thème
- `Home` et `Settings` doivent également connaître le thème
- un bouton dans `Navbar` doit pouvoir changer le thème

Si nous passons ces données avec des props, nous allons rapidement multiplier :

- `theme`
- `setTheme`
- `user`
- `logout`

dans plusieurs composants intermédiaires.

Context est donc ici une solution naturelle.

---

## 📂 Structure des fichiers

Voici une structure claire et pédagogique, proche de votre projet `Dashboard` :

```text
src/
├── components/
│   └── layout/
│       ├── Layout.jsx
│       ├── Navbar.jsx
│       └── Sidebar.jsx
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── hooks/
│   ├── useAuth.jsx
│   └── useTheme.jsx
├── pages/
│   ├── Home.jsx
│   └── Settings.jsx
├── App.jsx
└── main.jsx
```

### Rôle de chaque dossier

| Élément | Rôle |
| ------- | ---- |
| `context/` | Contient les contextes et leurs providers |
| `hooks/` | Contient des hooks personnalisés pour simplifier `useContext` |
| `components/layout/` | Contient la structure visuelle du dashboard |
| `pages/` | Contient les écrans de l'application |
| `App.jsx` | Définit les routes ou la structure globale |
| `main.jsx` | Point d'entrée qui monte l'application React |

---

## 1️⃣ Étape 1 - Créer le dossier context

On crée un dossier :

```text
src/context/
```

Pourquoi ?

- pour centraliser les contextes
- pour éviter de mélanger logique globale et composants visuels
- pour garder une architecture propre et évolutive

Dans une application réelle, ce dossier peut contenir plusieurs contextes :

- thème
- authentification
- panier
- préférences
- dashboard state

---

## 2️⃣ Étape 2 - Créer ThemeContext

Le thème est un excellent premier exemple de contexte, car plusieurs composants peuvent en dépendre.

### Fichier : `src/context/ThemeContext.jsx`

```jsx
import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}
```

### Explication détaillée

#### `createContext(null)`

```jsx
export const ThemeContext = createContext(null);
```

Cette ligne crée le contexte.

Nous utilisons `null` comme valeur par défaut car :

- cela indique qu'un provider est attendu
- cela évite de croire qu'une fausse valeur par défaut serait une vraie configuration

#### `ThemeProvider`

```jsx
export function ThemeProvider({ children }) {
```

Le provider est un composant React normal.

Son rôle est de :

- gérer l'état
- préparer la valeur partagée
- envelopper les composants enfants

#### `useState("light")`

```jsx
const [theme, setTheme] = useState("light");
```

Le thème change dans le temps. C'est donc un **state**, pas une simple constante.

#### `toggleTheme`

```jsx
const toggleTheme = () => {
  setTheme((currentTheme) =>
    currentTheme === "light" ? "dark" : "light",
  );
};
```

Cette fonction inverse le thème.

Elle est fournie dans le contexte pour que n'importe quel composant descendant puisse déclencher le changement.

#### `useMemo`

```jsx
const value = useMemo(() => {
  return {
    theme,
    toggleTheme,
  };
}, [theme]);
```

Pourquoi utiliser `useMemo` ?

- parce que la valeur transmise au contexte est un objet
- un nouvel objet recréé inutilement peut provoquer des re-rendus supplémentaires
- cela devient intéressant quand l'application grandit

#### Fournir la valeur

```jsx
return <ThemeContext value={value}>{children}</ThemeContext>;
```

Avec React 19, cette syntaxe est moderne et recommandée.

Si vous lisez un ancien tutoriel, vous pourrez aussi rencontrer :

```jsx
return (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);
```

---

## 3️⃣ Étape 3 - Créer AuthContext

Prenons maintenant un deuxième contexte utile : l'utilisateur connecté.

### Fichier : `src/context/AuthContext.jsx`

```jsx
import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "Mamadou Barry",
    role: "Administrateur",
    email: "mamadou@example.com",
  });

  const logout = () => {
    setUser(null);
  };

  const loginAsDemo = () => {
    setUser({
      name: "Aissatou Diallo",
      role: "Étudiante",
      email: "aissatou@example.com",
    });
  };

  const value = useMemo(() => {
    return {
      user,
      logout,
      loginAsDemo,
    };
  }, [user]);

  return <AuthContext value={value}>{children}</AuthContext>;
}
```

### Pourquoi séparer `ThemeContext` et `AuthContext` ?

Parce que ce sont deux responsabilités différentes :

- le thème concerne l'apparence
- l'authentification concerne l'utilisateur

Cette séparation rend le code :

- plus lisible
- plus maintenable
- plus facile à tester

---

## 4️⃣ Étape 4 - Envelopper l'application

Il faut maintenant placer les providers à un niveau suffisamment haut pour que tous les composants concernés puissent lire les données.

### Fichier : `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
```

### Pourquoi `main.jsx` est un bon endroit ?

Parce que :

- c'est le point d'entrée de l'application
- cela rend les contextes disponibles partout dans `App`
- cela évite de répéter la même configuration ailleurs

### Ordre des providers

Ici :

```jsx
<ThemeProvider>
  <AuthProvider>
    <App />
  </AuthProvider>
</ThemeProvider>
```

Cela signifie que tous les composants de `App` peuvent lire :

- le thème
- les données utilisateur

Si un contexte dépend d'un autre, l'ordre peut devenir important.

---

## 5️⃣ Étape 5 - Consommer le contexte dans les composants

Pour garder le code propre, nous allons créer des hooks personnalisés.

## A. Hook `useTheme`

### Fichier : `src/hooks/useTheme.jsx`

```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme doit être utilisé dans ThemeProvider");
  }

  return context;
}
```

### Pourquoi ce hook est utile ?

- il évite de répéter les imports dans tous les composants
- il sécurise l'utilisation du contexte
- il rend les composants plus lisibles

## B. Hook `useAuth`

### Fichier : `src/hooks/useAuth.jsx`

```jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth doit être utilisé dans AuthProvider");
  }

  return context;
}
```

---

## 6️⃣ Étape 6 - Utiliser les hooks dans les composants

Maintenant, regardons comment plusieurs composants peuvent consommer le même contexte.

## A. `Navbar.jsx`

### Fichier : `src/components/layout/Navbar.jsx`

```jsx
import { useAuth } from "../../hooks/useAuth.jsx";
import { useTheme } from "../../hooks/useTheme.jsx";

function Navbar() {
  const { user, logout, loginAsDemo } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`navbar navbar-${theme}`}>
      <div>
        <h1>Dashboard React</h1>
        <p>{user ? `${user.name} - ${user.role}` : "Aucun utilisateur"}</p>
      </div>

      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Activer dark mode" : "Activer light mode"}
        </button>

        {user ? (
          <button onClick={logout}>Déconnexion</button>
        ) : (
          <button onClick={loginAsDemo}>Connexion démo</button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
```

### Ce que ce composant montre

- un seul composant peut consommer plusieurs contextes
- `Navbar` lit l'utilisateur connecté
- `Navbar` lit aussi le thème
- `Navbar` déclenche des actions exposées par les providers

## B. `Sidebar.jsx`

### Fichier : `src/components/layout/Sidebar.jsx`

```jsx
import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme.jsx";

function Sidebar() {
  const { theme } = useTheme();

  return (
    <aside className={`sidebar sidebar-${theme}`}>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/settings">Paramètres</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
```

### Ce qu'il faut comprendre

`Sidebar` n'a besoin ni de `user` ni de `toggleTheme`.

Il lit uniquement ce qui lui est utile.

C'est un avantage important de Context :

- chaque composant consomme seulement la partie dont il a besoin

## C. `Home.jsx`

### Fichier : `src/pages/Home.jsx`

```jsx
import { useAuth } from "../hooks/useAuth.jsx";
import { useTheme } from "../hooks/useTheme.jsx";

function Home() {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <section>
      <h2>Accueil</h2>
      <p>Thème actif : {theme}</p>
      <p>
        Utilisateur : {user ? user.name : "Invité"}
      </p>
    </section>
  );
}

export default Home;
```

## D. `Settings.jsx`

### Fichier : `src/pages/Settings.jsx`

```jsx
import { useTheme } from "../hooks/useTheme.jsx";

function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section>
      <h2>Paramètres</h2>
      <p>Thème courant : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </section>
  );
}

export default Settings;
```

---

## 🧩 Exemple de `Layout.jsx`

### Fichier : `src/components/layout/Layout.jsx`

```jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
```

### Idée clé

`Layout` n'a pas besoin de recevoir `theme` ou `user` en props pour les redistribuer.

Sans Context, on aurait souvent ceci :

```jsx
<Layout
  theme={theme}
  toggleTheme={toggleTheme}
  user={user}
  logout={logout}
/>
```

Puis :

- `Layout` aurait transmis ces props à `Navbar`
- `Layout` aurait transmis `theme` à `Sidebar`

Avec Context, on supprime cette transmission intermédiaire.

---

## 🔁 Étape 7 - Ajouter une action utilisateur

L'un des intérêts majeurs de Context est de partager non seulement une valeur, mais aussi des fonctions.

Exemple :

- `toggleTheme`
- `logout`
- `loginAsDemo`

### Pourquoi est-ce puissant ?

Parce qu'un composant profondément imbriqué peut :

- lire une donnée
- demander une mise à jour

sans que les composants intermédiaires aient besoin de connaître cette logique.

### Exemple mental

```text
ThemeProvider
└── App
    └── Layout
        └── Navbar
            └── bouton → toggleTheme()
```

Le bouton ne modifie pas son propre state local.

Il appelle une fonction fournie par un contexte supérieur.

---

## 🧪 Exemple complet minimal

Voici une version compacte pour voir le mécanisme global :

```jsx
import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  const value = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme doit être utilisé dans ThemeProvider");
  }

  return context;
}

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <p>Theme : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </header>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
```

---

## 🚀 Version avancée avec reducer et context

Quand l'état devient plus riche, on peut combiner `useReducer` et Context.

### Cas typiques

- panier e-commerce
- gestion de tâches
- filtres complexes
- dashboard avec plusieurs actions métier

### Exemple d'idée

```jsx
import { createContext, useContext, useMemo, useReducer } from "react";

const DashboardStateContext = createContext(null);
const DashboardDispatchContext = createContext(null);

function dashboardReducer(state, action) {
  switch (action.type) {
    case "toggleSidebar":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setFilter":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      throw new Error(`Action inconnue : ${action.type}`);
  }
}

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, {
    isSidebarOpen: true,
    filter: "all",
  });

  const memoizedState = useMemo(() => state, [state]);

  return (
    <DashboardStateContext value={memoizedState}>
      <DashboardDispatchContext value={dispatch}>
        {children}
      </DashboardDispatchContext>
    </DashboardStateContext>
  );
}

export function useDashboardState() {
  const context = useContext(DashboardStateContext);

  if (!context) {
    throw new Error(
      "useDashboardState doit être utilisé dans DashboardProvider",
    );
  }

  return context;
}

export function useDashboardDispatch() {
  const context = useContext(DashboardDispatchContext);

  if (!context) {
    throw new Error(
      "useDashboardDispatch doit être utilisé dans DashboardProvider",
    );
  }

  return context;
}
```

### Pourquoi deux contextes ?

Une bonne pratique consiste souvent à séparer :

- le contexte de lecture de l'état
- le contexte d'écriture avec `dispatch`

Cela aide à mieux organiser le code et à rendre les responsabilités plus explicites.

---

## ⚠️ Pièges pratiques à éviter

### 1. Mettre le provider trop bas

Si `Navbar` et `Settings` doivent lire le thème, le provider doit être placé au-dessus des deux.

### 2. Oublier `children`

Un provider doit presque toujours rendre ses enfants :

```jsx
export function ThemeProvider({ children }) {
  return <ThemeContext value={{ theme: "light" }}>{children}</ThemeContext>;
}
```

### 3. Créer un contexte mais continuer à faire du prop drilling

Si vous utilisez Context, l'idée est justement d'éviter de retransmettre inutilement les mêmes données par props.

### 4. Tout mettre dans un seul contexte

Préférez plusieurs contextes ciblés quand les responsabilités sont différentes.

### 5. Oublier que tous les consommateurs sont mis à jour quand la valeur change

Si le provider reçoit une nouvelle valeur, React met à jour les composants qui lisent ce contexte.

Il faut donc structurer ses contextes intelligemment.

---

## 🧠 Résumé pratique

### Configuration complète à retenir

1. créer un fichier de contexte avec `createContext`
2. créer un provider qui contient l'état partagé
3. transmettre une valeur avec `<MonContext value={...}>`
4. envelopper l'application dans `main.jsx` ou un niveau supérieur adapté
5. lire la valeur avec `useContext`
6. idéalement créer un hook personnalisé comme `useTheme()` ou `useAuth()`

### Fichiers essentiels

| Fichier | Utilité |
| ------- | ------- |
| `ThemeContext.jsx` | Gère le thème global |
| `AuthContext.jsx` | Gère l'utilisateur connecté |
| `useTheme.jsx` | Simplifie l'accès au thème |
| `useAuth.jsx` | Simplifie l'accès à l'utilisateur |
| `main.jsx` | Monte les providers autour de l'application |
| `Navbar.jsx` | Lit le thème et l'utilisateur |
| `Sidebar.jsx` | Lit le thème |
| `Home.jsx` | Lit le thème et l'utilisateur |
| `Settings.jsx` | Modifie le thème |

### Ce que les étudiants doivent comprendre

- un contexte n'est pas magique, c'est une donnée fournie en haut et lue en bas
- un provider est un composant React normal
- `useContext` lit le provider le plus proche
- Context sert à éviter le prop drilling quand une donnée est utilisée à plusieurs endroits
- pour un projet sérieux, il faut une bonne architecture de fichiers

---

## 📝 Exercice pratique proposé

À partir du dashboard déjà réalisé :

1. créez un `ThemeContext`
2. ajoutez un bouton dans `Navbar` pour changer de thème
3. appliquez le thème dans `Sidebar`
4. affichez le thème actif dans `Home`
5. ajoutez un `AuthContext` pour afficher l'utilisateur connecté dans `Navbar`

### Résultat attendu

- plus besoin de passer `theme` et `user` dans tous les composants intermédiaires
- le code devient plus propre
- la logique partagée est centralisée

---

## 🔚 Conclusion

React Context est particulièrement utile dans la suite logique de vos ateliers :

- après les props
- après `useState`
- après la construction d'un layout
- après la séparation en pages et composants

Il prépare les étudiants à construire des applications React plus structurées, plus maintenables et plus proches des projets professionnels.
