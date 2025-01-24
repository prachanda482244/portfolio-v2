export const navbarItems = [
  {
    id: "01",
    name: "About",
  },
  {
    id: "02",
    name: "Experience",
  },
  {
    id: "03",
    name: "Work",
  },
  {
    id: "04",
    name: "Contact",
  },
];

export const technologies = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "React" },
  { id: 4, name: "Shopify" },
  { id: 5, name: "Node.js" },
  { id: 6, name: "MongoDB" },
];

export const experiences = [
  {
    company: "Cartmade",
    role: "Shopify Developer",
    duration: "May 2024 – Present",
    details: [
      "Deliver high-quality, robust production code for custom Shopify apps and integrations for a diverse array of clients.",
      "Work alongside project stakeholders to research, design, and develop scalable Shopify solutions.",
      "Collaborate with designers, project managers, and other developers to transform concepts into functional Shopify apps",
      "Provide leadership within the Shopify development team through mentorship and sharing knowledge of Shopify APIs, GraphQL, Liquid, and best practices",
    ],
    link: "https://www.cartmade.com",
  },
  {
    company: "Angel Wings",
    role: "Senior Engineer",
    duration: "Sept 2022 – Mar 2024",
    details: [
      "Developed scalable and reliable drone software solutions for real-time data processing and analysis.",
      "Collaborated with cross-functional teams to design and deliver impactful drone-based solutions for various industrie",
      "Optimized drone navigation and control systems, improving flight efficiency and reducing operational latency by 40%",
    ],
    link: "https://www.angelswing.io",
  },
  {
    company: "Tech Crafts",
    role: "Engineer",
    duration: "May 2018 – Sept 2022",
    details: [
      "Designed and implemented scalable software solutions using modern development frameworks.",
      "Collaborated with cross-functional teams to enhance system architecture and improve overall performance.",
      "Applied industry best practices in software development, resulting in improved code quality and system efficiency.",
    ],
    link: "https://techkraftinc.com/",
  },
  {
    company: "Deer Hold",
    role: "Mern Developer",
    duration: "July 2017 – April 2018",
    details: [
      "Created interactive user interfaces with modern frameworks.",
      "Collaborated with designers to improve the overall user experience.",
      "Implemented best practices for frontend development, boosting site performance.",
    ],
    link: "https://deerhold.com/",
  },
];

export const projects = [
  {
    title: "Library Management System",
    description: `Library Management System streamlines book management with features like "Add to Cart," chat support, order tracking, and data visualization, improving user experience and operational efficiency.`,
    image: "/projects/lms.png",
    tech: ["react", "node", "mongoDB", "express", "docker", "socket"],
    links: {
      github:
        "https://github.com/prachanda482244/library-management-system-frontend",
      external: "https://library-management-system-frontent.vercel.app/",
    },
    reverse: false,
  },
  {
    title: "Brain Wave",
    description: `Brainwave is a dynamic static website showcasing the power of AI and the latest in technology and design, offering visitors a glimpse into AI's transformative capabilities across various fields.`,
    image: "/projects/brain-wave.png",
    tech: ["react", "UI UX", "Tailwind", "SCSS"],
    links: {
      github: "https://github.com/prachanda482244/brain-wave",
      external: "https://brain-wave-ai-web.vercel.app/",
    },
    reverse: true,
  },
  {
    title: "Movie Flex Hub",
    description: `Movie Flex Hub is a React app that uses external APIs to fetch and display movie data. Users can browse, discover, and access detailed information about various movies for an enhanced movie-watching experience.`,
    image: "/projects/movie-flex-hub.png",
    tech: ["react", "API", "Tailwind", "Responsive Design"],
    links: {
      github: "https://github.com/prachanda482244/movie-flex-hub",
      external: "https://movie-flex-hub-itachi.vercel.app/",
    },
    reverse: false,
  },
  {
    title: "Online Rental Market Place",
    description: `Online Rental Market is a MERN stack platform where users can create property listings for rent or sale, and contact owners to rent or buy, streamlining real estate transactions.`,
    image: "/projects/rental.png",
    tech: ["react", "node", "mongoDB", "firebase"],
    links: {
      github:
        "https://github.com/prachanda482244/Online-rental-market-place-BCA-6th-sem",
      external: "https://mern-estate-bca.onrender.com/",
    },
    reverse: true,
  },
  {
    title: "Nike Store",
    description: `Nike Store is an e-commerce website designed to showcase and sell Nike's latest shoe collections. Built with React and Tailwind CSS, it provides an intuitive shopping experience with product details, filtering options, and an easy checkout process.`,
    image: "/projects/nike-store.png",
    tech: ["Modern UI", "react", "e-commerce", "node", "mongoDB"],
    links: {
      github: "https://github.com/prachanda482244/nike-store",
      external: "https://nike-store-steel.vercel.app/",
    },
    reverse: false,
  },
];
