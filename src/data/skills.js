/**
 * Données des compétences
 * level : 1 à 5 (5 = expert, 3 = opérationnel, 1 = notions)
 */
export const skills = [
  {
    category: "Langages",
    items: [
      { name: "Python",     level: 4, icon: "🐍" },
      { name: "PHP",        level: 3, icon: "🐘" },
      { name: "JavaScript", level: 3, icon: "⚡" },
      { name: "HTML/CSS",   level: 4, icon: "🎨" },
      { name: "SQL",        level: 3, icon: "🗄️" },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "POO",        level: 4, icon: "📦" },
      { name: "API REST",   level: 3, icon: "🔌" },
      { name: "MVC",        level: 3, icon: "🏗️" },
      { name: "Git",        level: 3, icon: "🌿" },
    ],
  },
  {
    category: "Outils & Frameworks",
    items: [
      { name: "React",      level: 2, icon: "⚛️" },
      { name: "Vite",       level: 2, icon: "⚡" },
      { name: "SQLite",     level: 3, icon: "💾" },
      { name: "VS Code",    level: 4, icon: "💻" },
    ],
  },
]
