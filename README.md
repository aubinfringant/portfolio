# Portfolio — Aubin Fringant

Portfolio personnel de développeur web junior, BTS SIO option SLAM.

## Stack
- **Front** : React 18 + Vite · HTML/CSS/JS
- **Back** : PHP (formulaire de contact)
- **Déploiement** : VPS ou Vercel (front) + hébergeur PHP (back)

## Lancer en local

```bash
# 1. Installer les dépendances
npm install

# 2. Copier les variables d'environnement
cp .env.example .env

# 3. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur http://localhost:3000

## Structure
```
portfolio/
├── public/          # Assets statiques (index.html, favicon)
├── src/
│   ├── components/  # Composants React réutilisables
│   ├── pages/       # Pages (Home, ProjectDetail, NotFound)
│   ├── data/        # Données projets et compétences (JS)
│   └── styles/      # CSS global, variables, animations
├── api/             # Back PHP (contact)
└── vite.config.js
```

## Ajouter un projet
Éditer `src/data/projects.js` et ajouter un objet dans le tableau.

## Sécurité
- CORS restreint côté PHP
- Sanitisation + validation de toutes les entrées
- Headers HTTP de sécurité via .htaccess
- Aucune donnée sensible dans le code (utiliser .env)
