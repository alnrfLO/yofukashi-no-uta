# 🌙 Yofukashi no Uta — Wiki

> Wiki non-officiel du manga/anime **Call of the Night (夜ふかしの唄)**

---

## 📖 Synopsis

*En une rencontre, la vie peut reprendre du mordant !*

La nuit où Kô Yamori, collégien et éternel insomniaque, décide de sortir se promener seul, il fait la rencontre de Nazuna Nanakusa, une jolie vampire. Sa veillée seule avec elle va bouleverser le destin de Kô...

---

## 🎯 Description du projet

Wiki interactif dédié à l'univers de *Yofukashi no Uta*, dans une ambiance visuelle nuit étoilée fidèle à l'œuvre : fond animé, effets de survol, transitions entre les pages.

Le site couvre :
- **Personnages** — humains et vampires, avec fiches détaillées (pouvoirs, lignées, relations)
- **Tomes** — les 20 volumes du manga, regroupés par arc narratif
- **Chronologie** — les grands arcs de l'histoire, du premier tome au Paradise Arc
- **Lieux** — les décors clés de la série
- **Musiques** — les openings/endings de l'anime, avec lecteur intégré

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
- [x] Interfaces TypeScript (Character, Vampire, Tome, Arc, Lieu, Musique)
- [x] Données des personnages, tomes, arcs, lieux et musiques
- [x] Animation étoiles (Canvas), sur toute la hauteur du site
- [x] Page Home (hero, personnages phares, spotlight tomes interactif)
- [x] Page liste des personnages + recherche/filtres
- [x] Page détail d'un personnage
- [x] Page Tomes (regroupés par arc, modal de résumé)
- [x] Page Chronologie
- [x] Page Lieux + fiche détail
- [x] Page Musiques (lecteur YouTube intégré)
- [x] Animations (scroll reveal, tilt 3D, transitions de page)
- [ ] Déploiement

---

## 👤 Auteur

**alnrfLO** — [GitHub](https://github.com/alnrfLO)

## 📁 Structure

```
wiki Yofukashi no Uta
├─ eslint.config.js
├─ index.html
├─ package.json
├─ public
│  ├─ favicon.svg
│  ├─ icons.svg
│  └─ images
│     ├─ characters/   (portraits des personnages)
│     └─ tomes/        (couvertures des 20 tomes)
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ components
│  │  ├─ CharacterCard.tsx
│  │  ├─ Icons.tsx
│  │  ├─ Modal.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ Reveal.tsx
│  │  └─ StarBackground.tsx
│  ├─ data
│  │  ├─ arcs.ts
│  │  ├─ characters.ts
│  │  ├─ lieux.ts
│  │  ├─ musiques.ts
│  │  └─ tomes.ts
│  ├─ hooks
│  │  └─ useTilt.ts
│  ├─ pages
│  │  ├─ CharacterDetail.tsx
│  │  ├─ Characters.tsx
│  │  ├─ Chronologie.tsx
│  │  ├─ Home.tsx
│  │  ├─ LieuDetail.tsx
│  │  ├─ Lieux.tsx
│  │  ├─ Musiques.tsx
│  │  └─ Tomes.tsx
│  └─ types
│     └─ index.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```
