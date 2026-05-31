/**
 * Données des projets
 * Pour ajouter un projet : copie un objet, modifie les champs, c'est tout.
 */
export const projects = [
  {
    id: 1,
    title: "Bibliothèque de jeux",
    slug: "game-library",
    description:
      "Bibliothèque Python orientée objet regroupant plusieurs jeux jouables en terminal. Conçue avec une architecture modulaire et une logique de classes réutilisables.",
    longDescription:
      "Projet réalisé de septembre à avril, en partant de zéro en Python. Chaque jeu hérite d'une classe de base Game pour partager la logique commune (score, boucle de jeu, affichage). Publié sur GitHub.",
    tech: ["Python", "POO", "CLI"],
    github: "https://https://github.com/aubinfringant/Projets",
    demo: "https://aubinfringant.itch.io",
    status: "En ligne",
    featured: true,
    date: "2026",
  },
  {
    id: 2,
    title: "Analyseur d'échecs",
    slug: "chess-analyzer",
    description:
      "Application full-stack d'analyse de parties d'échecs à trois joueurs. API REST PHP, base SQLite, interface JS dynamique.",
    longDescription:
      "Projet réalisé en PHP avec une API REST complète, une base de données SQLite, et un front en HTML/CSS/JS pur. L'application permet d'enregistrer, analyser et rejouer des parties d'échecs à trois. Architecture MVC côté back.",
    tech: ["PHP", "SQLite", "API REST", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Wilfried-Hennuyer/SLAM/tree/main/Chess",
    demo: null,
    status: "En cours de déploiement",
    featured: true,
    date: "2026",
  },
]
