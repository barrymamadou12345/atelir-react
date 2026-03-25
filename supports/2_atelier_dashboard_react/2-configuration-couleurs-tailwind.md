# 🎨 Configuration des Couleurs Personnalisées avec Tailwind CSS v4

Ce support vous guide pour personnaliser les couleurs de votre application avec Tailwind CSS v4.

---

## 📋 Table des Matières

1. [Pourquoi Personnaliser les Couleurs ?](#pourquoi-personnaliser-les-couleurs)
2. [Configuration avec @theme](#configuration-avec-theme)
3. [Palette de Couleurs du Dashboard](#palette-de-couleurs-du-dashboard)
4. [Utiliser les Couleurs Personnalisées](#utiliser-les-couleurs-personnalisées)
5. [Exercice Pratique](#exercice-pratique)

---

## 🤔 Pourquoi Personnaliser les Couleurs ?

### Avantages

✅ **Cohérence** : Toutes les couleurs au même endroit
✅ **Maintenabilité** : Changer une couleur partout en un seul endroit
✅ **Branding** : Adapter les couleurs à votre marque
✅ **Accessibilité** : Contrôler les contrastes

### Exemple

Au lieu d'utiliser `bg-blue-600` partout, vous utilisez `bg-primary`. Si vous changez de couleur principale, vous modifiez uniquement la configuration.

---

## ⚙️ Configuration avec @theme

### Tailwind CSS v4

Tailwind v4 utilise la directive `@theme` dans votre fichier CSS pour définir des couleurs personnalisées.

### Syntaxe

```css
@theme {
  --color-nom-couleur: #valeur-hex;
}
```

### Configuration Complète

Modifiez `src/index.css` :

```css
/* Import Tailwind CSS */
@import "tailwindcss";

/* === CONFIGURATION DES COULEURS PERSONNALISÉES === */
@theme {
  /* Couleurs principales - Palette moderne */
  --color-primary: #6366f1; /* Indigo moderne */
  --color-secondary: #8b5cf6; /* Violet */
  --color-accent: #f59e0b; /* Ambre */

  /* États */
  --color-success: #10b981; /* Émeraude */
  --color-danger: #ef4444; /* Rose-rouge */
  --color-warning: #f59e0b; /* Ambre */
  --color-info: #3b82f6; /* Bleu */

  /* Fond et surface */
  --color-background: #f9fafb; /* Gris 50 */
  --color-surface: #ffffff; /* Blanc */

  /* Texte */
  --color-text: #111827; /* Gris 900 */
  --color-text-light: #6b7280; /* Gris 500 */
  --color-text-lighter: #9ca3af; /* Gris 400 */

  /* Bordures */
  --color-border: #e5e7eb; /* Gris 200 */
  --color-border-dark: #d1d5db; /* Gris 300 */

  /* Sidebar */
  --color-sidebar: #1f2937; /* Gris 800 */
  --color-sidebar-hover: #374151; /* Gris 700 */
  --color-sidebar-active: #6366f1; /* Primary */
}

/* Styles globaux personnalisés */
body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background);
  color: var(--color-text);
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

---

## 🎨 Palette de Couleurs du Dashboard

### Couleurs Principales

| Nom         | Valeur    | Couleur                                      | Usage                   |
| ----------- | --------- | -------------------------------------------- | ----------------------- |
| `primary`   | `#6366f1` | <span style="color: #6366f1">●</span> Indigo | Boutons, liens, accents |
| `secondary` | `#8b5cf6` | <span style="color: #8b5cf6">●</span> Violet | Boutons secondaires     |
| `accent`    | `#f59e0b` | <span style="color: #f59e0b">●</span> Ambre  | Éléments d'accentuation |

### Couleurs d'État

| Nom       | Valeur    | Couleur                                      | Usage                 |
| --------- | --------- | -------------------------------------------- | --------------------- |
| `success` | `#10b981` | <span style="color: #10b981">●</span> Vert   | Succès, validation    |
| `danger`  | `#ef4444` | <span style="color: #ef4444">●</span> Rouge  | Erreurs, suppressions |
| `warning` | `#f59e0b` | <span style="color: #f59e0b">●</span> Orange | Avertissements        |
| `info`    | `#3b82f6` | <span style="color: #3b82f6">●</span> Bleu   | Informations          |

### Couleurs de Fond

| Nom          | Valeur    | Couleur                                     | Usage                 |
| ------------ | --------- | ------------------------------------------- | --------------------- |
| `background` | `#f9fafb` | <span style="color: #f9fafb">●</span> Gris  | Fond de l'application |
| `surface`    | `#ffffff` | <span style="color: #ffffff">●</span> Blanc | Cartes, modales       |

### Couleurs de Texte

| Nom            | Valeur    | Couleur                                    | Usage            |
| -------------- | --------- | ------------------------------------------ | ---------------- |
| `text`         | `#111827` | <span style="color: #111827">●</span> Noir | Texte principal  |
| `text-light`   | `#6b7280` | <span style="color: #6b7280">●</span> Gris | Texte secondaire |
| `text-lighter` | `#9ca3af` | <span style="color: #9ca3af">●</span> Gris | Texte tertiaire  |

### Couleurs de Bordure

| Nom           | Valeur    | Couleur                                    | Usage                  |
| ------------- | --------- | ------------------------------------------ | ---------------------- |
| `border`      | `#e5e7eb` | <span style="color: #e5e7eb">●</span> Gris | Bordures légères       |
| `border-dark` | `#d1d5db` | <span style="color: #d1d5db">●</span> Gris | Bordures plus visibles |

---

## 🎯 Utiliser les Couleurs Personnalisées

### Classes Tailwind Générées

Une fois les couleurs définies dans `@theme`, Tailwind génère automatiquement toutes les classes utilitaires :

```jsx
// Background
<div className="bg-primary">Fond primary</div>
<div className="bg-success">Fond success</div>
<div className="bg-surface">Fond surface</div>

// Texte
<p className="text-primary">Texte primary</p>
<p className="text-danger">Texte danger</p>
<p className="text-text-light">Texte secondaire</p>

// Bordures
<div className="border border-primary">Bordure primary</div>
<div className="border-2 border-danger">Bordure danger</div>

// Hover
<button className="bg-primary hover:bg-secondary">
  Bouton avec hover
</button>
```

### Opacité

Tailwind génère aussi des classes avec opacité :

```jsx
<div className="bg-primary/10">Fond primary à 10%</div>
<div className="bg-primary/50">Fond primary à 50%</div>
<div className="bg-primary/90">Fond primary à 90%</div>

<div className="text-danger/80">Texte danger à 80%</div>
```

### Exemple : Bouton

```jsx
function Bouton() {
  return (
    <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition duration-200">
      Cliquez-moi
    </button>
  );
}
```

### Exemple : Carte

```jsx
function Carte() {
  return (
    <div className="bg-surface border border-border rounded-lg shadow-md p-6">
      <h2 className="text-text text-xl font-bold mb-2">Titre</h2>
      <p className="text-text-light">Description de la carte</p>
    </div>
  );
}
```

---

## 🎯 Exercice Pratique : Composant Button

### Objectif

Créer un composant `Button` réutilisable avec plusieurs variants utilisant les couleurs personnalisées.

### Étape 1 : Créer le Composant

Créez `src/components/ui/Button.jsx` :

```jsx
/**
 * Composant Button réutilisable
 *
 * Props:
 * - children: Contenu du bouton (texte, icône, etc.)
 * - variant: Type de bouton (primary, secondary, danger, success)
 * - onClick: Fonction à exécuter au clic
 */

function Button({ children, variant = "primary", onClick }) {
  // Styles selon le variant (type de bouton)
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

### Étape 2 : Utiliser le Composant

Modifiez `src/App.jsx` :

```jsx
import { FaPlus, FaCheck, FaTrash, FaEye } from "react-icons/fa";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-text mb-8">Composants Button</h1>

        <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
          <h2 className="text-xl font-bold text-text mb-4">
            Variants de Boutons
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => alert("Primary cliqué !")}>
              <FaPlus className="w-5 h-5" />
              Primary
            </Button>

            <Button variant="success" onClick={() => alert("Success cliqué !")}>
              <FaCheck className="w-5 h-5" />
              Success
            </Button>

            <Button
              variant="secondary"
              onClick={() => alert("Secondary cliqué !")}
            >
              <FaEye className="w-5 h-5" />
              Secondary
            </Button>

            <Button variant="danger" onClick={() => alert("Danger cliqué !")}>
              <FaTrash className="w-5 h-5" />
              Danger
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

---

## 🎨 Exercice Bonus : Composant Card

Créez un composant `Card` qui utilise les couleurs personnalisées :

```jsx
// src/components/ui/Card.jsx
/**
 * Composant Card réutilisable pour afficher des statistiques
 *
 * Props:
 * - titre: Titre de la carte (ex: "Utilisateurs")
 * - valeur: Valeur à afficher (ex: "1,234")
 * - icone: Composant React Icon à afficher
 * - couleur: Couleur de l'icône (primary, success, danger, warning, info)
 */

function Card({ titre, valeur, icone: Icon, couleur = "primary" }) {
  // Mapping des couleurs vers les classes Tailwind
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
        {/* Texte */}
        <div>
          <p className="text-text-light text-sm mb-1">{titre}</p>
          <p className="text-3xl font-bold text-text">{valeur}</p>
        </div>

        {/* Icône avec fond coloré */}
        <div className={`p-4 rounded-full ${couleurClasses[couleur]}`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Card;
```

```jsx
// src/App.jsx
import { FaUsers, FaDollarSign, FaShoppingCart, FaBox } from "react-icons/fa";
import Card from "./components/ui/Card";

function App() {
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
    {
      titre: "Produits",
      valeur: "89",
      icone: FaBox,
      couleur: "warning",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-text mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}

export default App;
```

---

## 🎨 Changer la Palette de Couleurs

### Exemple : Thème Vert

Modifiez `src/index.css` :

```css
@theme {
  --color-primary: #059669; /* Vert émeraude */
  --color-secondary: #10b981; /* Vert plus clair */
  --color-accent: #f59e0b; /* Ambre */

  /* Le reste reste identique */
}
```

Tous vos composants utilisant `bg-primary` seront automatiquement verts !

### Exemple : Thème Sombre

```css
@theme {
  --color-background: #111827; /* Gris 900 */
  --color-surface: #1f2937; /* Gris 800 */
  --color-text: #f9fafb; /* Gris 50 */
  --color-text-light: #d1d5db; /* Gris 300 */
  --color-border: #374151; /* Gris 700 */
}
```

---

## 📚 Résumé

Vous avez appris :

✅ Configurer des couleurs personnalisées avec `@theme`
✅ Créer une palette cohérente
✅ Utiliser les couleurs dans les composants
✅ Créer des composants réutilisables (Button, Card)
✅ Changer facilement de thème

---

## 🎯 Prochaine Étape

Passez au support suivant :

**3-props-composants-reutilisables.md** : Approfondir les props et créer le Layout du Dashboard !

---

**Bon apprentissage ! 🚀**
