// Данные о проектах для портфолио
export const projectsData = [
  {
    id: 1,
    title: "E-commerce платформа",
    description: "Современный интернет-магазин с админ-панелью и системой платежей",
    category: "web-development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/projects/ecommerce.jpg",
    status: "completed",
    year: 2024,
    isFeatured: true,
    link: "https://example.com",
    github: "https://github.com/user/project"
  },
  {
    id: 2,
    title: "Дизайн-система для стартапа",
    description: "Комплексная UI/UX система с компонентами и гайдлайнами",
    category: "design",
    technologies: ["Figma", "Design Tokens", "Storybook"],
    image: "/images/projects/design-system.jpg",
    status: "completed",
    year: 2024,
    isFeatured: true,
    link: "https://example.com"
  },
  {
    id: 3,
    title: "Мобильное приложение для фитнеса",
    description: "React Native приложение с трекингом тренировок",
    category: "web-development",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "/images/projects/fitness-app.jpg",
    status: "in-progress",
    year: 2024,
    isFeatured: false,
    github: "https://github.com/user/fitness-app"
  },
  {
    id: 4,
    title: "Фотосессия для бренда",
    description: "Коммерческая съемка продукции для модного бренда",
    category: "photography",
    technologies: ["Canon 5D", "Lightroom", "Photoshop"],
    image: "/images/projects/brand-photo.jpg",
    status: "completed",
    year: 2023,
    isFeatured: false,
    link: "https://behance.net/project"
  },
  // Side projects (pet)
  {
    id: 's1',
    title: 'CLI Utils',
    description: 'Набор скриптов для рутины.',
    category: 'side',
    technologies: ['Node'],
    image: '/images/projects/cli-utils.jpg',
    status: 'wip',
    year: 2024,
    isFeatured: false,
    github: 'https://github.com/user/cli-utils'
  },
  {
    id: 's2',
    title: 'Micro Animations',
    description: 'Коллекция паттернов анимаций.',
    category: 'side',
    technologies: ['CSS'],
    image: '/images/projects/micro-animations.jpg',
    status: 'live',
    year: 2023,
    isFeatured: true,
    link: 'https://example.com/micro-animations'
  }
];

// Категории проектов
export const projectCategories = [
  { id: "all", name: "Все проекты", count: projectsData.length },
  {
    id: "web-development",
    name: "Веб-разработка",
    count: projectsData.filter(p => p.category === "web-development").length
  },
  {
    id: "design",
    name: "Дизайн",
    count: projectsData.filter(p => p.category === "design").length
  },
  {
    id: "photography",
    name: "Фотография",
    count: projectsData.filter(p => p.category === "photography").length
  },
  {
    id: 'side',
    name: 'Side projects',
    count: projectsData.filter(p => p.category === 'side').length
  }
];
