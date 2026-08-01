const header = {
  homepage: '#top',
  title: 'Kunju.',
}

const about = {
  name: 'Saraswathi (Kunju) Menon',
  role: 'Building AI agents, automation systems, and developer tools.',
  picture: `${process.env.PUBLIC_URL}/images/headshot.jpg`,
  description:
    'I’m a Computer Science student at The University of Texas at Dallas with a 4.0 GPA, graduating in May 2027. My work focuses on software engineering, generative AI, agentic systems, RAG, full-stack development, and applied machine learning. I’ve built AI agents, secure APIs, React/Node interfaces, automation workflows, and research-driven ML tools across internships, research labs, and student projects.',
  resume: `${process.env.PUBLIC_URL}/Saraswathi.Menon.Resume.docx`,
  social: {
    linkedin: 'https://www.linkedin.com/in/saraswathi-menon-678259248/',
  },
}

const education = [
  {
    institution: 'The University of Texas at Dallas',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Expected Graduation: May 2027',
    location: 'Richardson, TX',
    details: ['GPA: 4.0', 'Activities: Student Government, McDermott Scholars Council, Collegium V Honors'],
  },
]

const experience = [
  {
    company: 'Toshiba Global Commerce Solutions',
    position: 'Agentic Software Engineer Intern',
    period: 'May 2026 – Present',
    location: 'Frisco, TX',
    details: [
      'Developed an AI-powered deployment assistant using agentic workflows, specialized AI workers, and reusable skills to orchestrate Terraform plans, control-plane APIs, and customer provisioning, increasing deployment automation by 60%.',
      'Designed LLM evaluation frameworks that measured response quality, remediation accuracy, and end-to-end workflow correctness across diverse deployment scenarios.',
      'Engineered backend orchestration across specialized workers and SaaS APIs, chaining onboarding status, customer configuration, deployment metadata, and instance data to support autonomous reasoning throughout the provisioning lifecycle.',
      'Served as an Intern Ambassador, representing the internship cohort and fostering cross-team collaboration.',
    ],
    stack: ['Agentic Workflows', 'LLM Evaluation', 'Terraform', 'Control-plane APIs', 'SaaS'],
  },
  {
    company: 'MATH-101',
    website: 'https://math-101.com/',
    position: 'Full-Stack Web Developer',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    details: [
      'Developed and deployed a production-grade tutoring and course-management platform using Next.js, React, TypeScript, Tailwind CSS, and Firebase Authentication, Firestore, Storage, and Hosting.',
      'Implemented role-based access control for administrators, students, and pending users, including protected routes, account approval, course assignment, suspension, and automated email workflows.',
      'Built an administrative dashboard for managing users, courses, permissions, and account lifecycle operations.',
      'Hardened the platform with Firebase Security Rules, server-side token verification, granular file permissions, input validation, rate limiting, bot protection, and emulator-based API, database, and storage security tests.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'RBAC'],
  },
  {
    company: 'Amdocs @ AT&T',
    position: 'Generative AI Engineer',
    period: 'Aug 2025 – Dec 2025',
    location: 'Plano, TX',
    projects: [
      {
        name: 'NetBond Advanced Chat',
        details: [
          'Developed an agentic AI assistant using LangGraph Studio and transformer-based LLMs to automatically generate secure AT&T cloud-connection configurations.',
          'Designed modular RAG workflows using REST APIs and an MCP server to retrieve domain knowledge and generate context-aware cloud-configuration recommendations.',
          'Implemented a React.js and Node.js interface that allows users to visualize generated configurations in real time.',
          'Applied prompt engineering, structured reasoning, and RAG techniques to produce secure, compliant, and accurate outputs aligned with AT&T connection standards.',
        ],
        stack: ['LangGraph', 'Transformer LLMs', 'RAG', 'MCP', 'React', 'Node.js'],
      },
      {
        name: 'AskVoice',
        details: [
          'Migrated and refactored REST APIs to an updated service architecture, ensuring compatibility and improved performance across environments.',
          'Deployed application updates to development environments through Azure DevOps pipelines for integration testing.',
          'Used Kusto Query Language (KQL) to analyze Azure Data Explorer (ADX) logs, diagnose system issues, and accelerate root-cause identification.',
        ],
        stack: ['REST APIs', 'Azure DevOps', 'KQL', 'Azure Data Explorer'],
      },
    ],
  },
  {
    company: 'Amdocs @ AT&T',
    position: 'Generative AI / Data Science Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Plano, TX',
    details: [
      'Built an agentic workflow system for the AT&T Marketing Team with LangGraph, LangChain, and GPT-4o, coordinating prompt generation, accessibility optimization, and brand-voice alignment.',
      'Designed modular agents that encapsulated domain-specific logic and combined semantic similarity scoring with LLM reasoning to validate campaign assets against creative-blueprint and compliance requirements.',
      'Developed a secure FastAPI RAG API with OAuth2/JWT authentication, enabling internal teams to query Gen-Z advertising research documents through natural language.',
      'Engineered data pipelines that extracted structured JSON from PDFs and PowerPoint files and fed automated research-to-PPTX generation workflows, reducing manual curation from hours to minutes.',
    ],
    stack: ['LangGraph', 'LangChain', 'FastAPI', 'RAG', 'OAuth2/JWT', 'Python'],
  },
  {
    company: 'Amdocs',
    position: 'Software Engineer Intern',
    period: 'Jun 2024 – Aug 2024',
    location: 'Plano, TX',
    details: [
      'Developed a Streamlit application enabling users to query PDFs and extract insights through an AI-backed interface.',
      'Built a personalized AI recommender using GPT-3.5 and a pre-trained Random Forest model to support user-specific guidance.',
      'Explored LangChain agent design, custom chatbots, and prompt templates to improve AI workflow reliability.',
    ],
    stack: ['Streamlit', 'GPT-3.5', 'LangChain', 'Python', 'Machine Learning'],
  },
  {
    company: 'HBS Lab',
    position: 'Undergraduate Researcher',
    period: 'Jan 2025 – May 2025',
    location: 'UT Dallas',
    details: [
      'Fabricated and tested Twisted Coiled Polymer muscles for a robotic orthotic hand.',
      'Applied OSP Tracker video analysis to measure and graph actuator displacement.',
      'Helped identify actuation parameters that maximized finger deflection while avoiding overheating.',
    ],
    stack: ['Research', 'Data Analysis', 'Actuator Testing', 'OSP Tracker'],
  },
]

const projects = [
  {
    name: 'NetBond Advanced Chat',
    category: 'AI Agent',
    description:
      'Engineered a LangGraph-based AI assistant that used transformer LLMs and modular RAG calls to an MCP server to retrieve domain context and generate secure, standards-compliant AT&T cloud-connection configurations, surfaced through a real-time React and Node.js interface.',
    stack: ['LangGraph', 'Transformer LLMs', 'RAG', 'REST APIs', 'MCP', 'React', 'Node.js'],
  },
  {
    name: 'AskVoice',
    category: 'Backend API',
    description:
      'Migrated and refactored REST APIs for an updated service architecture, validated deployments across environments through Azure DevOps pipelines, and queried Azure Data Explorer logs with KQL to isolate failures and accelerate root-cause analysis.',
    stack: ['REST APIs', 'Azure DevOps', 'KQL', 'ADX'],
  },
  {
    name: 'AT&T Marketing Agentic Workflow',
    category: 'AI Agent',
    description:
      'Built a multi-agent LangGraph and LangChain workflow around GPT-4o that encapsulated domain-specific marketing logic and combined LLM reasoning with semantic similarity scoring to validate campaign assets for brand voice, accessibility, and creative-blueprint compliance.',
    stack: ['LangGraph', 'LangChain', 'GPT-4o', 'LLM Reasoning', 'Semantic Similarity'],
  },
  {
    name: 'FastAPI RAG Research API',
    category: 'Backend API',
    description:
      'Developed a secure FastAPI RAG service with OAuth2/JWT authentication and document-ingestion pipelines that extracted structured JSON from PDFs and PowerPoint files, enabling natural-language research queries and automated research-to-presentation generation.',
    stack: ['FastAPI', 'OAuth2', 'JWT', 'RAG', 'Python'],
  },
  {
    name: 'OptiClarity / Keratoconus Detection',
    category: 'Machine Learning',
    description:
      'Developed an AI-assisted ophthalmology diagnostic system and trained a ResNet50 convolutional neural network in PyTorch on medical-imaging data to classify keratoconus and support clinical recommendations.',
    stack: ['Python', 'PyTorch', 'ResNet50', 'Google Colab', 'Kaggle'],
  },
  {
    name: 'Gradeview Academic Dashboard',
    category: 'Full Stack',
    description:
      'Built a scalable academic-performance platform with React, Node.js, Express, and MySQL, designing REST APIs, relational database schemas, and reusable UI components for GPA analytics, transcript management, and what-if academic planning.',
    stack: ['React', 'Node.js', 'Express', 'REST APIs', 'MySQL'],
  },
]

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'Frameworks/Libraries',
    items: ['React', 'Node.js', 'NumPy', 'Pandas', 'PyTorch', 'LangChain', 'LangGraph', 'FastAPI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Azure DevOps', 'Terraform', 'MCP', 'OAuth2/JWT'],
  },
]

const honors = [
  'Eugene McDermott Scholarship',
  'National Merit Scholarship',
  'Dean’s List: Fall 2023, Spring 2024, Fall 2024, Spring 2025',
]

const contact = {
  email: 'sxm220267@utdallas.edu',
  linkedin: 'https://www.linkedin.com/in/saraswathi-menon-678259248/',
  location: 'Flower Mound, TX',
}

export { header, about, education, experience, projects, skills, honors, contact }
