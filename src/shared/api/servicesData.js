// Данные об услугах
export const servicesData = [
  {
    id: 1,
    title: "Веб-разработка",
    description: "Создание современных веб-приложений и сайтов с использованием актуальных технологий",
    technologies: ["React", "Vue.js", "Node.js", "TypeScript", "Next.js"],
    icon: "🚀",
    features: [
      "Адаптивная верстка",
      "SPA приложения",
      "SEO оптимизация",
      "Интеграция с API"
    ],
    price: "от 50 000 ₽"
  },
  {
    id: 2,
    title: "UI/UX Дизайн",
    description: "Проектирование пользовательских интерфейсов и создание дизайн-систем",
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
    icon: "🎨",
    features: [
      "Пользовательские исследования",
      "Прототипирование",
      "Дизайн-системы",
      "Usability тестирование"
    ],
    price: "от 30 000 ₽"
  },
  {
    id: 3,
    title: "Техническая консультация",
    description: "Консультации по архитектуре проектов и выбору технологического стека",
    technologies: ["Architecture", "Code Review", "Performance", "Security"],
    icon: "💡",
    features: [
      "Аудит кода",
      "Архитектурные решения",
      "Оптимизация производительности",
      "Менторинг команды"
    ],
    price: "от 3 000 ₽/час"
  }
];

// Данные о навыках
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, experience: "3+ года" },
      { name: "JavaScript", level: 95, experience: "4+ года" },
      { name: "TypeScript", level: 85, experience: "2+ года" },
      { name: "CSS/SCSS", level: 90, experience: "4+ года" },
      { name: "Vue.js", level: 75, experience: "1+ год" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, experience: "2+ года" },
      { name: "Express", level: 85, experience: "2+ года" },
      { name: "MongoDB", level: 75, experience: "1+ год" },
      { name: "PostgreSQL", level: 70, experience: "1+ год" },
      { name: "REST API", level: 85, experience: "2+ года" }
    ]
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", level: 90, experience: "3+ года" },
      { name: "Adobe Photoshop", level: 80, experience: "5+ лет" },
      { name: "UI/UX Design", level: 85, experience: "3+ года" },
      { name: "Prototyping", level: 80, experience: "2+ года" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90, experience: "4+ года" },
      { name: "Webpack", level: 75, experience: "2+ года" },
      { name: "Vite", level: 85, experience: "1+ год" },
      { name: "Docker", level: 60, experience: "6 месяцев" }
    ]
  }
];
