import { CardProps } from "../types/types";

export const navbarItems = [
  {
    id: "01",
    name: "About",
    link: "#about",
  },
  {
    id: "02",
    name: "Experience",
    link: "#experience",
  },
  {
    id: "03",
    name: "Work",
    link: "#work",
  },
  {
    id: "04",
    name: "Contact",
    link: "#contact",
  },
];

export const technologies = [
  { id: 1, name: "JavaScript (ES6+)" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "React" },
  { id: 4, name: "Shopify" },
  { id: 5, name: "Node.js" },
  { id: 6, name: "MongoDB" },
  { id: 7, name: "Docker" },
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

//
export const projects = [
  {
    title: "Catalog2Cart‑Shoppable PDF",
    description: `Published on the Shopify App Store, this tool adds clickable hotspots to PDFs, turning them into interactive shopping experiences. It simplifies navigation, boosts engagement, and has been shown to increase sales by 20%.`,
    image: "/projects/pdf.webp",
    tech: ["remix", "node", "shopify", "graphQL", "heroku"],
    links: {
      github: null,
      external:
        "https://apps.shopify.com/pdf-converter?search_id=0ff553ac-5d34-463f-a854-819b32452900&surface_detail=cm&surface_inter_position=1&surface_intra_position=10&surface_type=search",
    },
    reverse: false,
  },
  {
    title: "Library Management System",
    description: `Library Management System streamlines book management with features like "Add to Cart," chat support, order tracking, and data visualization, improving user experience and operational efficiency.`,
    image: "/projects/lms.png",
    tech: ["react", "node", "mongoDB", "express", "socket"],
    links: {
      github:
        "https://github.com/prachanda482244/library-management-system-frontend",
      external: "https://library-management-system-frontent.vercel.app/",
    },
    reverse: true,
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
    reverse: false,
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
    reverse: true,
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
    reverse: false,
  },
  {
    title: "Nike Store",
    description: `Nike Store is an e-commerce website designed to showcase and sell Nike's latest shoe collections. Built with React and Tailwind CSS, it provides an intuitive shopping experience with product details, filtering options, and an easy checkout process.`,
    image: "/projects/nike-store.png",
    tech: ["UI UX", "react", "e-commerce", "node", "mongoDB"],
    links: {
      github: "https://github.com/prachanda482244/nike-store",
      external: "https://nike-store-steel.vercel.app/",
    },
    reverse: true,
  },
];

export const otherWorthyProject: CardProps[] = [
  {
    title: "Integrate Salesforce with Shopify",
    description: `Integrated Salesforce and Shopify for seamless data synchronization, automating order management and enhancing customer insights.`,
    tech: ["salesforce", "shopify", "CMS"],
    githubLink:
      "https://github.com/prachanda482244/salesforce-backend-integration",
    externalLink: "https://www.salesforce.com/ap/?ir=1",
  },
  {
    title: "Credit Card Details Change with Sudsy",
    description: `Developed a Shopify app that allows customers to securely update credit card details on-site, streamlining payment processing and improving user experience.`,
    tech: ["shopify", "CMS", "Node"],
    githubLink: null,
    externalLink:
      "https://www.sudsybear.com/?srsltid=AfmBOooVAj8pf_PtEEHSQFF4HjGwt-oHhSGf1Nk1TL32hUX6Fw9HQmGr",
  },
  {
    title: "Defend Chart Implementation",
    description: `Implemented a custom data visualization solution using Apex and Highcharts to display dynamic charts, while creating custom APIs to securely store and manage data.`,
    tech: ["shopify", "node", "apex", "charts"],
    githubLink: "https://github.com/prachanda482244/defend-backend-integration",
    externalLink: "https://defent.com/pages/reporting",
  },
  {
    title: "Shopify App Frame Fusion",
    description: `Built a Shopify app that allows merchants to upload videos and assign products directly to those videos, boosting customer engagement and increasing sales.`,
    tech: ["shopify", "remix", "File System", "API"],
    githubLink: null,
    externalLink: "https://frame-fusion-ce1e3d4c2ecb.herokuapp.com/",
  },
  {
    title: "Shopify Cash on Delivery App",
    description: `Developed a Shopify app that creates draft orders using Shopify APIs, allowing merchants to securely store customer information for cash-on-delivery transactions.`,
    tech: ["shopify", "remix", "liquid", "graphql"],
    githubLink: null,
    externalLink: null,
  },
];
