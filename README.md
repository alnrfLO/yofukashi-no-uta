# 🌙 Yofukashi no Uta — Wiki

> Wiki non-officiel de l'anime **Call of the Night (夜ふかしの唄)**

---

## 📖 Synopsis

*En une rencontre, la vie peut reprendre du mordant !*

La nuit où Kô Yamori, collégien et éternel insomniaque, décide de sortir se promener seul, il fait la rencontre de Nazuna Nanakusa, une jolie vampire. Sa veillée seule avec elle va bouleverser le destin de Kô...

---

## 🎯 Description du projet

Ce projet est un wiki interactif dédié à l'univers de *Yofukashi no Uta*. Il recense les personnages, vampires et informations clés de l'anime, dans une ambiance visuelle nuit étoilée fidèle à l'œuvre.

Projet réalisé dans le but d'apprendre **TypeScript** en conditions réelles, avec une architecture React moderne.

🔗 [Voir le repo](https://github.com/alnrfLO/yofukashi-no-uta)

---

## 🛠️ Stack technique

| Technologie | Usage |
|---|---|
| React | Interface utilisateur |
| TypeScript | Typage statique |
| Vite | Bundler / dev server |
| React Router | Navigation entre les pages |
| Canvas API | Animation étoiles en arrière-plan |

---

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/alnrfLO/yofukashi-no-uta.git

# Aller dans le dossier
cd yofukashi-no-uta

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans le navigateur.

---

## 🗺️ Roadmap

- [x] Setup React + TypeScript + Vite
- [x] Interfaces TypeScript (Character, Vampire)
- [x] Données JSON des personnages
- [x] Animation étoiles (Canvas)
- [x] Page Home
- [ ] Page liste des personnages
- [ ] Page détail d'un personnage
- [ ] Barre de recherche / filtres
- [ ] Déploiement sur Vercel + Render

---

## 👤 Auteur

**alnrfLO** — [GitHub](https://github.com/alnrfLO)

```
wiki Yofukashi no Uta
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ components
│  │  ├─ CharacterCard.tsx
│  │  ├─ Navbar.css
│  │  ├─ Navbar.tsx
│  │  └─ StarBackground.tsx
│  ├─ data
│  │  ├─ characters.ts
│  │  └─ tomes.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ CharacterDetail.tsx
│  │  ├─ Characters.css
│  │  ├─ Characters.tsx
│  │  ├─ Home.css
│  │  └─ Home.tsx
│  └─ types
│     └─ index.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```