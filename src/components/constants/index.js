export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Jagruthi Pulumati",
  role: "AI/ML, full-stack, and backend-focused developer building practical products across web, data, and real-world client work.",
  summary:
    "I work across AI/ML, backend systems, and full-stack products, while still caring about clean user experience and polished interfaces. My recent work spans machine learning apps, data analytics, live client projects, and modern web platforms built with practical engineering in mind.",
  headline: [
    "Currently interning with Hebrix in AI/ML",
    "Ex-Intern: Frontend and UI/UX Developer at Artizence",
    "Freelance client work delivered through real-world web projects",
  ],
  location: "India",
  email: "jagruthi.pulumati2024@nst.rishihood.edu.in",
  resumeUrl: "https://drive.google.com/file/d/1zRzbcq3hcZHA3C4jfS6L7tGiDxSJsl-l/view?usp=drive_link",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Jag2007",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jagruthi-pulumati-087b69305/",
      icon: "linkedin",
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1zRzbcq3hcZHA3C4jfS6L7tGiDxSJsl-l/view?usp=drive_link",
      icon: "resume",
    },
    {
      label: "Email",
      href: "mailto:jagruthi.pulumati2024@nst.rishihood.edu.in",
      icon: "email",
    },
  ],
};

export const ABOUT = {
  intro:
    "My work is centered on AI/ML, full-stack development, and backend systems, with a strong frontend layer when the product needs it.",
  body: [
    "At Artizence, I worked across UI design and frontend delivery, helping translate business requirements into responsive React interfaces with cleaner data presentation and better usability.",
    "I am also currently interning with Hebrix in AI/ML, where my focus is closer to machine learning, data-oriented workflows, and practical problem solving.",
    "Alongside internships, I have worked with freelance clients on real-world websites, which is important to me because it reflects shipping work for actual users and business needs.",
  ],
  stats: [
    { label: "Focus", value: "AI/ML, Full-Stack, Backend" },
    { label: "Core Stack", value: "React, TypeScript, Node, Express" },
    { label: "Data + ML", value: "Python, Data Analytics, AI/ML" },
  ],
};

export const EXPERIENCE = [
  {
    title: "AI/ML Intern",
    company: "Hebrix",
    period: "Current",
    points: [
      "Currently working in AI/ML with a focus on applied machine learning workflows, data understanding, and practical experimentation.",
      "Building stronger hands-on depth in analytics, model-driven thinking, and real problem framing through internship work.",
    ],
  },
  {
    title: "Frontend and UI/UX Developer Intern",
    company: "Artizence",
    period: "May 2025 - July 2025",
    points: [
      "Completed a UI-focused internship centered on wireframing, prototyping, and interaction design, then extended into frontend development work.",
      "Built React and Tailwind interfaces backed by REST APIs, improving responsiveness, browser consistency, and overall usability.",
      "Turned raw business data into clearer product experiences by structuring information architecture and simplifying user-facing flows.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Client Projects",
    period: "2025 - Present",
    points: [
      "Delivered real-world client websites with attention to usability, branding, and production-ready frontend implementation.",
      "Worked directly on business-facing requirements, polishing interfaces and shipping experiences that supported actual client goals.",
      "The Nail Artist Website is one of the strongest examples of this freelance work and is intentionally featured in the portfolio.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "B.Tech in Artificial Intelligence",
    meta: "Newton School of Technology x Rishihood University",
    detail: "Current program focused on software engineering, product building, and applied problem solving.",
  },
  {
    title: "Intermediate",
    meta: "FIITJEE Junior College",
    detail: "Built a strong base in math, problem solving, and competitive academic preparation.",
  },
  {
    title: "Matriculation",
    meta: "Slate The School",
    detail: "Early foundation in academics, communication, and analytical thinking.",
  },
];

export const TECHNOLOGIES = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Postgres",
  "Tailwind",
  "SQL",
  "Python",
  "Data Analysis",
  "AI/ML",
];

export const PROJECTS = [
  {
    title: "Nail Artist Website",
    period: "June 2025",
    tagline: "Freelance project and real-world client website for a beauty brand.",
    description:
      "Created a responsive portfolio platform for a beauty business with polished navigation, service presentation, and lightweight inquiry flows tailored for conversion.",
    highlights: [
      "Built for a real client requirement rather than as a demo-only project.",
      "Balanced visual branding with straightforward content structure so the site feels premium without slowing users down.",
      "Integrated API-driven interaction patterns and tested flows with Postman during development.",
    ],
    technologies: ["React", "Tailwind", "REST APIs", "Postman", "Freelance Project"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jag2007/Getnailedbyaish",
        icon: "github",
      },
      {
        label: "Live Demo",
        href: "https://getnailedbyaish.vercel.app",
        icon: "external",
      },
      {
        label: "Live Demo",
        href: "https://getnailedbyaish-catalog.vercel.app",
        icon: "external",
      },
    ],
  },
  {
    title: "NearGlow",
    period: "November 2025",
    tagline: "Glow-on-demand discovery and booking experience for beauty services.",
    description:
      "Designed and built a responsive interface for finding salons by location, rating, and service type, making discovery and comparison faster for users who need quick decisions.",
    highlights: [
      "Structured the booking journey to reduce search friction and improve service comparison.",
      "Focused the UX on mobile-friendly discovery, clarity, and a cleaner decision path.",
      "Shipped as a live project with an actual deployed experience.",
    ],
    technologies: ["React", "Tailwind", "Responsive UI", "Booking UX"],
    links: [
      {
        label: "Live Demo",
        href: "https://near-glow.vercel.app/",
        icon: "external",
      },
    ],
  },
  {
    title: "Property Price Prediction",
    period: "2026",
    tagline: "Machine learning system for estimating property prices from listing and location data.",
    description:
      "Built an ML project that applies machine learning techniques to historical listing data and location attributes to predict property values and study the drivers behind market pricing.",
    highlights: [
      "Worked on data preparation, feature-driven prediction, and analysis of market factors that influence price movement.",
      "Deployed the project as an interactive Streamlit application for direct exploration.",
    ],
    technologies: ["Python", "Machine Learning", "Streamlit", "Data Analytics"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jag2007/property-price-prediction",
        icon: "github",
      },
      {
        label: "Live Demo",
        href: "https://property-price-prediction-real-estate.streamlit.app/",
        icon: "external",
      },
    ],
  },
  {
    title: "Pregnant Women COVID-19 Analysis",
    period: "2026",
    tagline: "Data-led health analysis project focused on pregnant women and COVID-19 outcomes.",
    description:
      "Worked on a data analytics project around COVID-19 outcomes related to pregnant women, focusing on structuring data, extracting insights, and studying health-related patterns.",
    highlights: [
      "Built experience handling domain-specific datasets, interpretation, and insight extraction.",
      "Strengthened data analytics and reporting skills through healthcare-oriented problem framing.",
    ],
    technologies: ["Python", "Data Analytics", "Research Workflow", "Health Data"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jag2007/SectionC_Group6_Pregnant_Women_COVID19",
        icon: "github",
      },
    ],
  },
];
