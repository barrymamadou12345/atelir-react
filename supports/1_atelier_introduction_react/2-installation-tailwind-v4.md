# 🎨 Installation et Configuration de Tailwind CSS v4

Ce support vous guide pour installer et utiliser Tailwind CSS v4 dans votre projet React + Vite.

---

## 📋 Table des Matières

1. [Qu'est-ce que Tailwind CSS ?](#quest-ce-que-tailwind-css)
2. [Pourquoi Tailwind CSS ?](#pourquoi-tailwind-css)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Utilisation des Classes](#utilisation-des-classes)
6. [Classes Responsive](#classes-responsive)
7. [Exercice Pratique](#exercice-pratique)

---

## 🤔 Qu'est-ce que Tailwind CSS ?

Tailwind CSS est un framework CSS **utility-first** qui fournit des classes prédéfinies pour styliser rapidement vos composants.

### Approche Utility-First

Au lieu d'écrire du CSS personnalisé, vous utilisez des classes utilitaires :

```html
<!-- CSS traditionnel -->
<style>
  .bouton {
    background-color: blue;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
</style>
<button class="bouton">Cliquez-moi</button>

<!-- Tailwind CSS -->
<button class="bg-blue-500 text-white px-4 py-2 rounded">Cliquez-moi</button>
```

---

## 💡 Pourquoi Tailwind CSS ?

### Avantages

✅ **Rapide** : Pas besoin d'écrire du CSS personnalisé
✅ **Cohérent** : Design system intégré
✅ **Responsive** : Classes responsive intégrées
✅ **Performant** : Purge automatique du CSS inutilisé
✅ **Personnalisable** : Configuration flexible

### Inconvénients

❌ **HTML verbeux** : Beaucoup de classes dans le HTML
❌ **Courbe d'apprentissage** : Mémoriser les classes
❌ **Taille initiale** : Fichier CSS volumineux en développement

---

## 🛠️ Installation

### Étape 1 : Installer Tailwind CSS

```bash
npm install tailwindcss@next @tailwindcss/vite@next
```

**Note** : `@next` installe la version 4 (beta) de Tailwind CSS.

### Étape 2 : Configurer Vite

Modifiez `vite.config.js` :

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Étape 3 : Importer Tailwind dans votre CSS

Modifiez `src/index.css` :

```css
@import "tailwindcss";

/* Vos styles personnalisés ici */
```

### Étape 4 : Nettoyer les styles par défaut

Supprimez le contenu de `src/App.css` ou supprimez le fichier.

### Étape 5 : Tester l'installation

Modifiez `src/App.jsx` :

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind CSS fonctionne ! 🎉
        </h1>
        <p className="text-gray-600">Votre configuration est correcte.</p>
      </div>
    </div>
  );
}

export default App;
```

Lancez le serveur :

```bash
npm run dev
```

Si vous voyez un texte bleu stylisé, Tailwind est bien installé !

---

## 🎨 Utilisation des Classes

### Couleurs

```jsx
<div className="bg-blue-500">Fond bleu</div>
<div className="text-red-600">Texte rouge</div>
<div className="border-green-400">Bordure verte</div>
```

**Échelle de couleurs** : 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Espacement

**Padding** :

```jsx
<div className="p-4">Padding de 1rem (16px)</div>
<div className="px-4 py-2">Padding horizontal et vertical</div>
<div className="pt-8">Padding top de 2rem (32px)</div>
```

**Margin** :

```jsx
<div className="m-4">Margin de 1rem</div>
<div className="mx-auto">Centrer horizontalement</div>
<div className="mt-8">Margin top de 2rem</div>
```

**Échelle d'espacement** : 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64

### Typographie

```jsx
<h1 className="text-3xl font-bold">Titre</h1>
<p className="text-base font-normal">Paragraphe</p>
<p className="text-sm text-gray-600">Petit texte</p>
<p className="italic underline">Italique souligné</p>
```

**Tailles de texte** : text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl

### Flexbox

```jsx
<div className="flex items-center justify-center">
  <p>Centré verticalement et horizontalement</p>
</div>

<div className="flex flex-col gap-4">
  <div>Élément 1</div>
  <div>Élément 2</div>
</div>

<div className="flex justify-between">
  <div>Gauche</div>
  <div>Droite</div>
</div>
```

### Grid

```jsx
<div className="grid grid-cols-3 gap-4">
  <div>Colonne 1</div>
  <div>Colonne 2</div>
  <div>Colonne 3</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Responsive grid */}
</div>
```

### Bordures et Arrondis

```jsx
<div className="border border-gray-300">Bordure</div>
<div className="border-2 border-blue-500">Bordure épaisse</div>
<div className="rounded">Coins arrondis</div>
<div className="rounded-lg">Coins très arrondis</div>
<div className="rounded-full">Cercle</div>
```

### Ombres

```jsx
<div className="shadow">Ombre légère</div>
<div className="shadow-md">Ombre moyenne</div>
<div className="shadow-lg">Ombre forte</div>
<div className="shadow-xl">Ombre très forte</div>
```

---

## 📱 Classes Responsive

Tailwind utilise des préfixes pour les breakpoints :

| Préfixe | Taille d'écran | Largeur minimale |
| ------- | -------------- | ---------------- |
| (rien)  | Mobile         | 0px              |
| `sm:`   | Petit          | 640px            |
| `md:`   | Moyen          | 768px            |
| `lg:`   | Grand          | 1024px           |
| `xl:`   | Très grand     | 1280px           |
| `2xl:`  | Énorme         | 1536px           |

### Exemple

```jsx
<div className="text-sm md:text-base lg:text-lg">
  {/*
    Mobile : text-sm
    Tablette : text-base
    Desktop : text-lg
  */}
  Texte responsive
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/*
    Mobile : 1 colonne
    Tablette : 2 colonnes
    Desktop : 4 colonnes
  */}
</div>

<div className="hidden md:block">
  {/* Caché sur mobile, visible sur tablette et desktop */}
  Menu desktop
</div>
```

---

## 🎯 Exercice Pratique : Styliser la Carte de Visite

### Objectif

Reprendre le composant `CarteVisite` de l'exercice précédent et le styliser avec Tailwind CSS.

### Étape 1 : Modifier le composant

```jsx
// src/components/CarteVisite.jsx
function CarteVisite({ nom, profession, email, telephone, photo }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto border border-gray-200">
      {/* Photo de profil */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          {nom.charAt(0)}
        </div>
      </div>

      {/* Informations */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{nom}</h2>
        <p className="text-lg text-gray-600 italic">{profession}</p>
      </div>

      {/* Contact */}
      <div className="border-t border-gray-200 pt-6 space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <span className="text-2xl">📧</span>
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <span className="text-2xl">📱</span>
          <span>{telephone}</span>
        </div>
      </div>

      {/* Bouton */}
      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
        Me contacter
      </button>
    </div>
  );
}

export default CarteVisite;
```

### Étape 2 : Modifier App.jsx

```jsx
// src/App.jsx
import CarteVisite from "./components/CarteVisite";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Mon Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CarteVisite
            nom="Mamadou Barry"
            profession="Développeur Web"
            email="mamadou@example.com"
            telephone="+224 123 456 789"
          />
          <CarteVisite
            nom="Aissatou Diallo"
            profession="Designer UI/UX"
            email="aissatou@example.com"
            telephone="+224 987 654 321"
          />
          <CarteVisite
            nom="Ibrahima Sow"
            profession="Data Scientist"
            email="ibrahima@example.com"
            telephone="+224 555 123 456"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
```

### Résultat attendu

- Fond dégradé bleu-violet
- Cartes blanches avec ombres
- Avatar circulaire avec initiale
- Grille responsive (1 colonne mobile, 2 tablette, 3 desktop)
- Bouton avec effet hover

---

## 🎨 Exercice Bonus : Composant CompetenceCard

```jsx
// src/components/CompetenceCard.jsx
function CompetenceCard({ nom, niveau, icone, couleur = "blue" }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Icône */}
      <div
        className={`w-16 h-16 bg-${couleur}-100 rounded-full flex items-center justify-center text-3xl mb-4`}
      >
        {icone}
      </div>

      {/* Nom */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">{nom}</h3>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className={`bg-${couleur}-600 h-3 rounded-full transition-all duration-500`}
          style={{ width: `${niveau}%` }}
        ></div>
      </div>

      {/* Pourcentage */}
      <p className="text-right text-sm font-semibold text-gray-600">
        {niveau}%
      </p>
    </div>
  );
}

export default CompetenceCard;
```

```jsx
// src/App.jsx
import CarteVisite from "./components/CarteVisite";
import CompetenceCard from "./components/CompetenceCard";

function App() {
  const competences = [
    { nom: "React", niveau: 80, icone: "⚛️", couleur: "blue" },
    { nom: "JavaScript", niveau: 90, icone: "🟨", couleur: "yellow" },
    { nom: "CSS", niveau: 85, icone: "🎨", couleur: "pink" },
    { nom: "HTML", niveau: 95, icone: "📄", couleur: "orange" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Mon Portfolio
        </h1>

        {/* Cartes de visite */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <CarteVisite
            nom="Mamadou Barry"
            profession="Développeur Web"
            email="mamadou@example.com"
            telephone="+224 123 456 789"
          />
        </div>

        {/* Compétences */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Mes Compétences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competences.map((comp, index) => (
            <CompetenceCard
              key={index}
              nom={comp.nom}
              niveau={comp.niveau}
              icone={comp.icone}
              couleur={comp.couleur}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

---

## 📚 Classes Tailwind Essentielles

### Layout

- `container` : Conteneur centré avec max-width
- `flex`, `grid` : Flexbox et Grid
- `hidden`, `block`, `inline` : Display

### Espacement

- `p-{n}` : Padding
- `m-{n}` : Margin
- `space-x-{n}`, `space-y-{n}` : Espacement entre enfants
- `gap-{n}` : Gap pour flex/grid

### Taille

- `w-{n}`, `h-{n}` : Width et Height
- `max-w-{size}` : Max width
- `min-h-screen` : Hauteur minimale de l'écran

### Couleurs

- `bg-{color}-{shade}` : Background
- `text-{color}-{shade}` : Texte
- `border-{color}-{shade}` : Bordure

### Typographie

- `text-{size}` : Taille du texte
- `font-{weight}` : Poids de la police
- `italic`, `underline` : Styles

### Effets

- `shadow-{size}` : Ombre
- `rounded-{size}` : Coins arrondis
- `opacity-{n}` : Opacité
- `hover:`, `focus:` : États interactifs
- `transition` : Transitions CSS

---

## 📚 Résumé

Vous avez appris :

✅ Installer Tailwind CSS v4 avec Vite
✅ Configurer Tailwind dans votre projet
✅ Utiliser les classes utilitaires
✅ Créer des designs responsive
✅ Styliser des composants React

---

## 🎯 Prochaine Étape

Vous avez terminé l'Atelier 1 ! Passez maintenant à l'Atelier 2 :

**Dossier : `2_atelier_dashboard_react/`**

Vous allez construire un dashboard complet avec navigation et composants réutilisables !

---

**Bon apprentissage ! 🚀**
