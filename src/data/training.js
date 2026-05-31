/**
 * Données des TP et projets de formation
 * Pour ajouter un TP : copie un objet et modifie les champs.
 */
export const training = [
  {
    id: 1,
    period: "Sept — Février 2026",
    language: "Python",
    color: "#3b82f6",
    icon: "🐍",
    title: "Apprentissage Python - de zéro à la POO",
    steps: [
      {
        label: "Types de variables & structures de données",
        detail: "Premiers pas : types primitifs, listes, dictionnaires, tuples.",
        tags: ["variables", "types", "structures"],
      },
      {
        label: "Conditions & boucles",
        detail: "Logique conditionnelle, boucles for/while, imbrication.",
        tags: ["if/else", "for", "while"],
      },
      {
        label: "Fonctions",
        detail: "Découpage du code, paramètres, valeurs de retour, portée des variables.",
        tags: ["fonctions", "scope", "return"],
      },
      {
        label: "Premier programme réel",
        detail: "Trieur de liste, manipulations algorithmiques, logique de tri.",
        tags: ["algo", "listes", "tri"],
      },
      {
        label: "Jeux simples en terminal",
        detail: "Mastermind, Juste Prix, Solitaire, Memory — introduction à la logique de jeu et aux boucles événementielles.",
        tags: ["POO", "CLI", "logique de jeu"],
      },
      {
        label: "Jeux complexes multijoueurs",
        detail: "Uno, Belote, Blackjack, Snake — architecture orientée objet, héritage, gestion d'état, boucle de jeu avancée. Publiés sur GitHub et itch.io.",
        tags: ["POO avancée", "héritage", "GitHub", "itch.io"],
        highlight: true,
      },
    ],
  },
  {
    id: 2,
    period: "Jan - Juin 2026",
    language: "PHP, HTML, MySQLite, CSS, JS",
    color: "#8b5cf6",
    icon: "🐘",
    title: "Projet fil rouge - Analyseur d'échecs",
    steps: [
      {
        label: "Reprise des bases en accéléré",
        detail: "Transition Python → PHP : syntaxe, typage, gestion des erreurs, paradigmes communs.",
        tags: ["PHP", "syntaxe", "transition"],
      },
      {
        label: "Lancement du projet fil rouge",
        detail: "Cadrage du projet analyseur d'échecs à 3 joueurs, choix de l'architecture, répartition des tâches en équipe de 3.",
        tags: ["architecture", "travail en équipe", "cahier des charges"],
      },
      {
        label: "Logique métier back-end",
        detail: "Assignation des fonctions : règles du jeu, validation des coups, gestion des tours.",
        tags: ["back-end", "logique métier", "PHP"],
      },
      {
        label: "Parseur de notation échecs",
        detail: "Création d'un parseur capable de lire et interpréter la notation algébrique des coups.",
        tags: ["parsing", "algo", "chaînes"],
      },
      {
        label: "Base de données & tests unitaires",
        detail: "Modélisation SQLite, requêtes préparées, premiers tests unitaires pour valider la logique.",
        tags: ["SQLite", "SQL", "tests unitaires"],
      },
      {
        label: "Front-end de l'application",
        detail: "Interface HTML/CSS/JS consommant l'API REST PHP, affichage dynamique de l'échiquier.",
        tags: ["HTML", "CSS", "JavaScript", "API REST"],
      },
      {
        label: "Lancement local & tests",
        detail: "Serveur local back + front, tests de bout en bout, correction des bugs d'intégration.",
        tags: ["serveur local", "intégration", "debug"],
      },
      {
        label: "Travail en branches Git & merge",
        detail: "Ajout de fonctionnalités en parallèle à 3 — gestion des conflits de merge, code review, résolution de divergences.",
        tags: ["Git", "branches", "merge", "conflits"],
        highlight: true,
      },
      {
        label: "Mode Agile & nouvelles fonctionnalités",
        detail: "Sprints courts, backlog, ajout itératif de fonctionnalités, rétrospectives d'équipe.",
        tags: ["Agile", "sprints", "backlog", "équipe"],
        highlight: true,
      },
    ],
  },
]
