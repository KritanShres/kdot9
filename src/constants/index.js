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
  chronelabs
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
    title: "Spring Boot Intern",
    company_name: "Chrone Labs Technologies",
    icon: chronelabs,
    iconBg: "#383E56",
    date: "Dec-1 to Mar-1",
    points: [
      "Developed frontend interfaces using vanilla JavaScript, HTML, and CSS, handling dynamic content updates through AJAX.",
      "Integrated the frontend with Java Spring Boot REST APIs, implementing CRUD operations.",
      "Learning from senior developers to test endpoints using Swagger.UI, and align frontend data handling with backend response structures.",
      "Participating in code reviews and code refactoring.",
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
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
