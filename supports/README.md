# 📚 Supports Pédagogiques - Formation React

Ce dossier contient tous les supports de formation pour apprendre React de manière progressive.

---

## 🎯 Parcours de Formation

### 📘 Atelier 1 : Introduction à React (4h)

**Objectif** : Comprendre les bases de React et créer sa première application

**Supports** :

1. **0-glossaire-concepts-cles.md** (30 min)
   - Vocabulaire React : DOM, Virtual DOM, JSX, Déclaratif vs Impératif
   - Webpack vs Rollup, Bibliothèque vs Framework

2. **1-introduction-react.md** (2h30)
   - Qu'est-ce que React et pourquoi l'utiliser ?
   - Installation de Node.js, npm, Vite
   - Créer une application React avec Vite
   - Structure d'un projet React
   - Comprendre les dépendances (node_modules, package.json)
   - Architecture par composants et JSX
   - Imports/Exports
   - Flux de l'application (index.html → main.jsx → App.jsx)
   - Exercice pratique : Carte de visite

3. **2-installation-tailwind-v4.md** (1h)
   - Installer Tailwind CSS v4
   - Configuration avec Vite
   - Utiliser les classes Tailwind
   - Exercice pratique : Styliser la carte de visite

**Prérequis** : Connaissances de base en HTML, CSS, JavaScript

**Livrables** : Application "Carte de Visite" stylisée avec Tailwind

---

### 📗 Atelier 2 : Dashboard React (6h)

**Objectif** : Construire un dashboard complet avec navigation et composants réutilisables

**Supports** :

1. **0-concepts-fondamentaux-react.md** (1h) ⭐ **NOUVEAU**
   - Événements en React (onClick, onChange)
   - State avec useState
   - Hooks (useState, useEffect, useLocation, useNavigate)
   - Style conditionnel
   - Flux de données (parent → enfant)
   - Remonter les événements

2. **1-installation-react-icons.md** (30 min)
   - Installer React Icons
   - Utiliser les icônes Font Awesome
   - Passer des icônes comme props

3. **2-configuration-couleurs-tailwind.md** (30 min)
   - Personnaliser les couleurs Tailwind
   - Créer une palette cohérente
   - Utiliser les couleurs personnalisées

4. **3-props-composants-reutilisables.md** (2h)
   - Comprendre les props en profondeur
   - Créer des composants réutilisables (Button, Card)
   - Construire un Layout (Navbar + Sidebar + Contenu)
   - Utiliser map() pour afficher des listes
   - Exercice pratique : Composant ActivityItem

5. **4-react-router-dom-navigation.md** (2h)
   - Installer React Router DOM
   - Configurer les routes
   - Navigation avec Link
   - Détecter la page active avec useLocation
   - Navigation programmatique avec useNavigate
   - Routes dynamiques avec paramètres
   - Exercice pratique : Ajouter une page détail utilisateur

**Prérequis** : Avoir suivi l'Atelier 1

**Livrables** : Dashboard complet avec 5 pages et navigation

---

## 📂 Organisation des Fichiers

```
supports/
├── README.md (ce fichier)
│
├── 1_atelier_introduction_react/
│   ├── 0-glossaire-concepts-cles.md
│   ├── 1-introduction-react.md
│   └── 2-installation-tailwind-v4.md
│
└── 2_atelier_dashboard_react/
    ├── 0-concepts-fondamentaux-react.md ⭐ NOUVEAU
    ├── 1-installation-react-icons.md
    ├── 2-configuration-couleurs-tailwind.md
    ├── 3-props-composants-reutilisables.md
    └── 4-react-router-dom-navigation.md
```

---

## 🎓 Ordre de Lecture Recommandé

### Pour les Débutants Complets

1. `1_atelier_introduction_react/0-glossaire-concepts-cles.md`
2. `1_atelier_introduction_react/1-introduction-react.md`
3. `1_atelier_introduction_react/2-installation-tailwind-v4.md`
4. `2_atelier_dashboard_react/0-concepts-fondamentaux-react.md` ⭐
5. `2_atelier_dashboard_react/1-installation-react-icons.md`
6. `2_atelier_dashboard_react/2-configuration-couleurs-tailwind.md`
7. `2_atelier_dashboard_react/3-props-composants-reutilisables.md`
8. `2_atelier_dashboard_react/4-react-router-dom-navigation.md`

### Pour ceux qui connaissent déjà React

Commencer directement par l'Atelier 2 :

1. `2_atelier_dashboard_react/0-concepts-fondamentaux-react.md` (révision)
2. `2_atelier_dashboard_react/3-props-composants-reutilisables.md`
3. `2_atelier_dashboard_react/4-react-router-dom-navigation.md`

---

## 🎯 Concepts Clés par Support

### Atelier 1

| Support        | Concepts Clés                                             |
| -------------- | --------------------------------------------------------- |
| 0-glossaire    | DOM, Virtual DOM, JSX, Déclaratif, Webpack, Rollup        |
| 1-introduction | Composants, Props, JSX, Imports/Exports, Structure projet |
| 2-tailwind     | Classes utility-first, Responsive, Configuration          |

### Atelier 2

| Support                 | Concepts Clés                                                    |
| ----------------------- | ---------------------------------------------------------------- |
| 0-concepts-fondamentaux | Événements, useState, Hooks, Style conditionnel, Flux de données |
| 1-react-icons           | Bibliothèque d'icônes, Props avec composants                     |
| 2-couleurs-tailwind     | Personnalisation, Palette, Variables CSS                         |
| 3-props-composants      | Props, Composants réutilisables, map(), Layout                   |
| 4-react-router          | Routes, Navigation, Link, useLocation, useNavigate               |

---

## 📊 Projet de Référence

Le projet **Dashboard** dans le dossier `../Dashboard/` est le projet de référence qui implémente tous les concepts enseignés.

**Structure du Dashboard** :

```
Dashboard/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout, Navbar, Sidebar
│   │   └── ui/              # Button, Card
│   ├── pages/               # Home, Page1, Page2, Page3, Settings
│   ├── App.jsx              # Routes
│   └── main.jsx             # Point d'entrée
└── GUIDE_PEDAGOGIQUE.md     # Résumé des concepts
```

---

## 🎨 Exercices Pratiques

### Atelier 1

- Créer une carte de visite personnelle
- Créer un composant CompetenceCard réutilisable

### Atelier 2

- Créer un composant Badge coloré
- Ajouter une nouvelle page au Dashboard
- Créer un composant ActivityItem
- Ajouter une page détail utilisateur avec route dynamique

---

## 🔍 Points d'Attention pour les Formateurs

### Concepts Difficiles

1. **Virtual DOM** : Utiliser l'analogie du plan de maison
2. **Props vs State** : Props = données reçues, State = données internes
3. **map() et key** : Toujours expliquer pourquoi key est obligatoire
4. **Hooks** : Expliquer les règles (niveau racine, pas dans conditions)
5. **Flux unidirectionnel** : Dessiner des schémas parent → enfant

### Erreurs Courantes des Apprenants

1. Oublier la prop `key` dans map()
2. Modifier le state directement au lieu d'utiliser le setter
3. Confondre `onClick={maFonction}` et `onClick={maFonction()}`
4. Oublier d'importer les composants
5. Utiliser `class` au lieu de `className` en JSX

### Conseils Pédagogiques

- Toujours montrer le code en live
- Faire des exercices pratiques après chaque concept
- Encourager à expérimenter et casser le code
- Utiliser des analogies du monde réel
- Montrer les erreurs courantes et comment les résoudre

---

## 📚 Ressources Complémentaires

### Documentation Officielle

- [React](https://react.dev) - Documentation officielle React
- [React Router](https://reactrouter.com) - Documentation React Router
- [Tailwind CSS](https://tailwindcss.com) - Documentation Tailwind
- [Vite](https://vite.dev) - Documentation Vite
- [React Icons](https://react-icons.github.io/react-icons) - Catalogue d'icônes

### Tutoriels Vidéo

- [React Tutorial for Beginners](https://www.youtube.com/watch?v=SqcY0GlETPk) - Programming with Mosh
- [React Course - Beginner's Tutorial](https://www.youtube.com/watch?v=bMknfKXIFA8) - freeCodeCamp

### Outils Utiles

- [CodeSandbox](https://codesandbox.io) - Éditeur en ligne pour React
- [React DevTools](https://react.dev/learn/react-developer-tools) - Extension navigateur
- [Tailwind Play](https://play.tailwindcss.com) - Playground Tailwind

---

## 🚀 Prochaines Étapes

Après avoir terminé ces ateliers, les apprenants peuvent :

1. **Approfondir React**
   - Context API pour l'état global
   - useReducer pour la gestion d'état complexe
   - Custom Hooks
   - React.memo et optimisation

2. **Ajouter des Fonctionnalités**
   - Formulaires avec validation
   - Appels API avec fetch/axios
   - Authentification
   - Gestion d'erreurs

3. **Aller Plus Loin**
   - Next.js (framework React)
   - TypeScript avec React
   - Tests avec Jest et React Testing Library
   - Déploiement (Vercel, Netlify)

---

## 📝 Notes de Version

**Version 1.0** (Mars 2026)

- Création des supports Atelier 1 et 2
- Ajout du support "Concepts Fondamentaux React" ⭐
- Centralisation de la documentation
- Suppression des fichiers redondants dans Dashboard/
- Mise à jour du GUIDE_PEDAGOGIQUE.md

---

**Bonne formation ! N'hésitez pas à adapter ces supports selon vos besoins. 🚀**
