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
      'Developed an AI-powered deployment automation assistant that orchestrates Terraform plans, control-plane APIs, and provisioning workflows for customer onboarding.',
      'Created evaluation and testing frameworks to validate agent responses against deployment scenarios, improving troubleshooting accuracy and reducing incorrect remediation recommendations.',
      'Implemented multi-step API chaining across SaaS control-plane services to retrieve onboarding status, customer configuration, deployment metadata, and instance details for provisioning workflows.',
      'Served as an Intern Ambassador, representing the internship cohort and fostering cross-team collaboration.',
    ],
    stack: ['AI Agents', 'Terraform', 'Control-plane APIs', 'Evaluation', 'SaaS'],
  },
  {
    company: 'Amdocs @ AT&T',
    position: 'Generative AI Engineer',
    period: 'Aug 2025 – Dec 2025',
    location: 'Plano, TX',
    details: [
      'Built an agentic chatbot using LangGraph Studio to automatically generate AT&T cloud-connection configuration JSONs for NetBond Advanced Chat.',
      'Designed and integrated a modular workflow with REST API calls to an MCP server to retrieve context from ingested domain files and support dynamic configuration recommendations.',
      'Implemented a React.js and Node.js interface that visualized generated configurations in real time for engineers and stakeholders.',
      'Migrated and refactored REST APIs into an updated service architecture, improving compatibility and performance across environments.',
      'Deployed application code through Azure DevOps pipelines and used KQL/ADX logs to diagnose system issues and accelerate root-cause analysis.',
    ],
    stack: ['LangGraph', 'MCP', 'REST APIs', 'React', 'Node.js', 'Azure DevOps'],
  },
  {
    company: 'Amdocs @ AT&T',
    position: 'Generative AI / Data Science Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Plano, TX',
    details: [
      'Built an AI-driven agentic workflow system for the AT&T Marketing Team using LangGraph and LangChain with GPT-4o for prompt engineering, accessibility optimization, and brand-voice alignment.',
      'Designed modular AI agents with domain-specific logic and semantic similarity scoring to ensure campaign outputs matched creative blueprints and compliance standards.',
      'Developed a secure FastAPI RAG API with OAuth2/JWT authentication, enabling internal teams to query Gen-Z advertising research documents through natural language.',
      'Automated data ingestion pipelines, including JSON extraction from PDFs and PPTs, and built research-to-PPTX generation workflows to reduce manual curation time from hours to minutes.',
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
      'Built an agentic chatbot using LangGraph Studio to automatically generate AT&T cloud-connection configuration JSONs and deliver context-aware deployment recommendations.',
    stack: ['LangGraph', 'REST APIs', 'MCP', 'React', 'Node.js'],
  },
  {
    name: 'AskVoice',
    category: 'Backend API',
    description:
      'Modernized REST APIs and deployed application code through Azure DevOps pipelines, then used KQL and ADX logs to diagnose production issues and accelerate root-cause analysis.',
    stack: ['REST APIs', 'Azure DevOps', 'KQL', 'ADX'],
  },
  {
    name: 'AT&T Marketing Agentic Workflow',
    category: 'AI Agent',
    description:
      'Built an AI workflow system that generated campaign assets aligned with brand voice, accessibility, and creative blueprint requirements using GPT-4o and semantic similarity scoring.',
    stack: ['LangGraph', 'LangChain', 'GPT-4o', 'Semantic Similarity'],
  },
  {
    name: 'FastAPI RAG Research API',
    category: 'Backend API',
    description:
      'Developed a secure FastAPI RAG API with OAuth2/JWT authentication, enabling internal teams to query Gen-Z advertising research documents through natural language.',
    stack: ['FastAPI', 'OAuth2', 'JWT', 'RAG', 'Python'],
  },
  {
    name: 'OptiClarity / Keratoconus Detection',
    category: 'Machine Learning',
    description:
      'Trained a ResNet50 model in Google Colab on Kaggle OCT scans to support AI-assisted keratoconus detection and clinical decision support.',
    stack: ['Python', 'PyTorch', 'ResNet50', 'Google Colab', 'Kaggle'],
  },
  {
    name: 'Gradeview Academic Dashboard',
    category: 'Full Stack',
    description:
      'Built a full-stack academic dashboard with React, Node.js, Express, and MySQL to help students calculate GPA, analyze grades, manage transcripts, and explore what-if scenarios.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'],
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
