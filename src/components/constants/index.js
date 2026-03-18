export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Jagruthi Pulumati",
  role: "AI/ML, full-stack, and backend-focused developer building practical products with strong frontend execution.",
  summary:
    "I work across machine learning, full-stack applications, and backend fundamentals, while still caring a lot about how products feel in the hands of real users. My recent work spans ML prediction projects, data-driven health analysis, caption tooling, and web applications with clean interfaces.",
  headline: [
    "Frontend and UI/UX Developer Intern at Artizence",
    "Tech stack: React, JavaScript, Tailwind, SQL, Python, TensorFlow",
    "Projects across ML prediction, health data analysis, caption tooling, and client websites",
  ],
  location: "India",
  email: "jagruthi.pulumati2024@nst.rishihood.edu.in",
  resumeUrl: "https://pdf.ac/3I9eEF",
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
      href: "https://pdf.ac/3I9eEF",
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
    "My work is centered on AI/ML, full-stack applications, and backend understanding, with a strong frontend layer when the product needs it.",
  body: [
    "At Artizence, I worked across UI design and frontend delivery, helping translate business requirements into responsive React interfaces with cleaner data presentation and better usability.",
    "My tech stack mainly includes React, JavaScript, and Tailwind for frontend, SQL and basic APIs for backend understanding, and Python with TensorFlow for machine learning projects.",
    "I want the portfolio to reflect the actual work in my resume: ML projects, full-stack builds, backend-oriented experiments, and applied product work rather than generic showcase copy.",
  ],
  stats: [
    { label: "Focus", value: "AI/ML, Full-Stack, Backend" },
    { label: "Frontend", value: "React, JavaScript, Tailwind" },
    { label: "ML Stack", value: "Python, TensorFlow, Data Workflows" },
  ],
};

export const EXPERIENCE = [
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
  "Python",
  "TensorFlow",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "SQL",
  "Basic APIs",
  "Node.js",
  "REST APIs",
  "Postman",
  "Framer Motion",
  "HTML",
  "CSS",
  "Git",
  "Machine Learning",
  "Data Analysis",
];

export const PROJECTS = [
  {
    title: "NearGlow",
    period: "November 2025",
    tagline: "Glow-on-demand discovery and booking experience for beauty services.",
    description:
      "Designed and built a responsive interface for finding salons by location, rating, and service type, making discovery and comparison faster for users who need quick decisions.",
    highlights: [
      "Structured the booking journey to reduce search friction and improve service comparison.",
      "Focused the UX on mobile-friendly discovery, clarity, and a cleaner decision path.",
    ],
    technologies: ["React", "Tailwind CSS", "Responsive UI", "Booking UX"],
    links: [
      {
        label: "Resume Feature",
        href: "https://pdf.ac/3I9eEF",
        icon: "external",
      },
    ],
  },
  {
    title: "Whisprite",
    period: "September 2025",
    tagline: "Caption generation and video rendering workflow powered by Whisper and Remotion.",
    description:
      "Built a full-stack captioning app that accepts MP4 uploads, generates speech-to-text captions, supports style presets, and exports rendered videos through an automated workflow.",
    highlights: [
      "Reduced manual caption editing by automating generation and render steps.",
      "Designed the review flow around caption accuracy, styling flexibility, and a cleaner export experience.",
    ],
    technologies: ["React", "JavaScript", "Remotion", "Whisper", "Video Tooling"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jag2007/Whisprite",
        icon: "github",
      },
      {
        label: "Live Demo",
        href: "https://simora-caption-generator.vercel.app",
        icon: "external",
      },
    ],
  },
  {
    title: "Property Price Prediction",
    period: "2026",
    tagline: "Machine learning system for estimating property prices from listing and location data.",
    description:
      "Built an ML project that applies classical machine learning techniques to historical listing data and location attributes to predict property values and study the drivers behind market pricing.",
    highlights: [
      "Worked on data preparation, feature-driven prediction, and analysis of market factors that influence price movement.",
      "Used the project to strengthen practical ML workflow skills beyond model training alone.",
    ],
    technologies: ["Python", "Machine Learning", "Jupyter Notebook", "Data Analysis"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jag2007/property-price-prediction",
        icon: "github",
      },
    ],
  },
  {
    title: "Pregnant Women COVID-19 Analysis",
    period: "2026",
    tagline: "Data-led health analysis project focused on pregnant women and COVID-19 outcomes.",
    description:
      "Worked on a project analyzing COVID-19 data related to pregnant women, focusing on organizing data, extracting insights, and studying health-related patterns through a structured analytical workflow.",
    highlights: [
      "Built experience handling domain-specific datasets, interpretation, and insight extraction.",
      "Extended my data analysis work toward healthcare-oriented problem framing and reporting.",
    ],
    technologies: ["Python", "Data Analysis", "Research Workflow", "Health Data"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jag2007/SectionC_Group6_Pregnant_Women_COVID19",
        icon: "github",
      },
    ],
  },
  {
    title: "Nail Artist Website",
    period: "June 2025",
    tagline: "Fast client-facing portfolio and inquiry flow for a nail artist brand.",
    description:
      "Created a responsive portfolio platform for a beauty business with polished navigation, service presentation, and lightweight inquiry flows tailored for conversion.",
    highlights: [
      "Integrated API-driven interaction patterns and tested flows with Postman during development.",
      "Balanced visual branding with straightforward content structure so the site feels premium without slowing users down.",
    ],
    technologies: ["React", "Tailwind CSS", "REST APIs", "Postman", "WhatsApp API"],
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
        label: "Catalog Demo",
        href: "https://getnailedbyaish-catalog.vercel.app",
        icon: "external",
      },
    ],
  },
];
