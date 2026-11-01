import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  springboot,
  github,
  american,
  dp,
  chronelabs,
  remotework
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: ""
  }
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Spring Boot",
    icon: springboot
  }
];

const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    company_name: "Self-Employed",
    icon: remotework, // placeholder: add your own icon import
    iconBg: "#383E56",
    date: "June 2026 - July 2026",
    points: [
      "Delivered full-stack websites with admin control panels for two clients, Himal Saccoss (Illam) and Illam Baptist Church, handling requirements, development, and deployment end-to-end.",
      "Built responsive React frontends and Node.js backends, using Supabase (PostgreSQL + object storage) for data and media management.",
      "Deployed backends on Render and frontends on Vercel, establishing a reliable production workflow for both projects.",
      "Designed role-based admin dashboards so non-technical staff can manage website content without a developer.",
    ],
  },
  {
    title: "Java Web Development Intern",
    company_name: "Chronelabs Technologies",
    icon: chronelabs,
    iconBg: "#383E56",
    date: "Dec 2025 - Mar 2026",
    points: [
      "Contributed to the HPB (Hepato-Pancreato-Biliary) Disease Management System, a clinical research platform built with Spring Boot, MySQL, and an HTML/CSS/JavaScript frontend.",
      "Worked with the Senior Developer to implement client-requested features, including new MySQL tables and their UI views, from requirements through integration.",
      "Identified and fixed frontend JavaScript bugs and carried out small refactoring tasks to keep the codebase clean and consistent.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: github,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Digital Pratilipi",
    description:
      "Transformer based Devnagari Handwritten text OCR system.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: 'blue-text-gradient'
      },
      { 
        name: "NodeJS",
        color: "yellow-text-gradient"
      }
    ],
    image: dp,
    source_code_link: "https://github.com/KritanShres/DigitalPratilipi",
  },
  {
    name: "American Sign Language Detection",
    description:
      "Simple Convolutional NN based ASL detection system.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: american,
    source_code_link: "https://github.com/KritanShres/AmericanSignLanguage",
  },
];

export { services, technologies, experiences, testimonials, projects };
