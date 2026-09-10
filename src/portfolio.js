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
  resume: `${process.env.PUBLIC_URL}/SaraswathiMenon.pdf`,
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
      'Developed an AI-powered Azure deployment automation platform using agentic workflows, specialized AI workers, and LLM reasoning to orchestrate Terraform infrastructure and production deployment workflows, increasing enterprise deployment automation by 40% and improving operational decision-making.',
      'Developed production-grade AI microservices and agentic workflows integrating SaaS APIs, deployment metadata, and REST services to automate enterprise workflows and reduce manual input correction by 20%.',
      'Collaborated with cross-functional engineers to build backend orchestration and control-plane integrations for multi-agent deployment workflows, improving reliability and routing accuracy by 30%.',
      'Served as an Intern Ambassador, representing the internship cohort and fostering cross-team collaboration.',
    ],
    stack: ['Azure', 'Agentic Workflows', 'LLM Reasoning', 'Terraform', 'Control-plane APIs', 'SaaS'],
  },
  {
    company: 'MATH-101',
    website: 'https://math-101.com/',
    websiteLabel: 'Website',
    position: 'Full-Stack Web Developer',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    details: [
      'Developed and deployed a responsive tutoring and course-management platform supporting **7 math courses** using **Next.js, React, TypeScript, and Tailwind CSS**, building reusable UI components and integrating Firebase Authentication, Firestore, Storage, and Hosting.',
      'Implemented **role-based access control** across three access groups—administrators, students, and pending users—including protected routes, account approval, course assignment, suspension, and automated email workflows.',
      'Built an administrative dashboard for managing users, courses, permissions, and account lifecycle operations.',
      'Hardened the platform with seven defense-in-depth controls, including **Firebase Security Rules and server-side token verification**, granular file permissions, input validation, rate limiting, bot protection, and emulator-based security testing across three surfaces: APIs, databases, and file storage.',
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
          'Developed an enterprise agentic AI platform using **LangGraph Studio, Model Context Protocol (MCP), and transformer models** to orchestrate AI agents and automate secure cloud-configuration generation.',
          'Engineered modular **RAG pipelines** integrating MCP servers, Python FastAPI REST APIs, and enterprise knowledge sources, enabling AI agents to retrieve domain context and execute external tools for accurate cloud-configuration recommendations.',
          'Designed an end-to-end AI application combining LLM reasoning, prompt engineering, and a **React and Node.js interface** for real-time generation, validation, and editing of cloud configurations.',
          'Applied prompt engineering, structured reasoning, and RAG techniques to produce secure, compliant, and accurate outputs aligned with AT&T connection standards.',
        ],
        stack: ['LangGraph', 'Transformer LLMs', 'RAG', 'MCP', 'Python', 'FastAPI', 'React', 'Node.js'],
      },
      {
        name: 'AskVoice',
        details: [
          'Migrated and refactored **Python FastAPI REST APIs and MongoDB data integrations** to an updated service architecture, ensuring compatibility and improving performance across deployment environments.',
          'Deployed applications through **Azure DevOps CI/CD pipelines**, supporting integration testing and production validation.',
          'Used **KQL and Azure Data Explorer logs** to diagnose system issues and accelerate root-cause identification.',
        ],
        stack: ['Python', 'FastAPI', 'MongoDB', 'REST APIs', 'Azure DevOps', 'CI/CD', 'KQL', 'Azure Data Explorer'],
      },
    ],
  },
  {
    company: 'Amdocs @ AT&T',
    position: 'Generative AI / Data Science Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Plano, TX',
    details: [
      'Built cloud-agnostic agentic AI workflows with **LangGraph, LangChain, GPT-4o, and prompt engineering** to automate enterprise marketing content generation across prompt generation, accessibility optimization, and brand-voice alignment.',
      'Designed modular agents that encapsulated domain-specific logic and combined semantic similarity scoring with LLM reasoning to validate campaign assets against creative-blueprint and compliance requirements.',
      'Developed a secure **FastAPI RAG API** with OAuth2/JWT authentication, enabling internal teams to query Gen-Z advertising research documents through natural language.',
      'Designed scalable **AI data pipelines** that transformed unstructured PDFs and PowerPoint documents into structured JSON datasets for downstream retrieval, analysis, and automated content generation, reducing document-processing time by 30%.',
    ],
    stack: ['LangGraph', 'LangChain', 'FastAPI', 'RAG', 'OAuth2/JWT', 'Python'],
  },
  {
    company: 'Amdocs',
    position: 'Software Engineer Intern',
    period: 'Jun 2024 – Aug 2024',
    location: 'Plano, TX',
    details: [
      'Delivered two AI prototypes: a **Streamlit document-query application** and a personalized recommendation system for user-specific guidance.',
      'Combined GPT-3.5 with a **pre-trained Random Forest model** to blend generated explanations with model-driven recommendations.',
      'Explored LangChain agent design, custom chatbots, and prompt templates to improve AI workflow reliability.',
    ],
    stack: ['Streamlit', 'GPT-3.5', 'LangChain', 'Python', 'Machine Learning'],
  },
]

const projects = [
  {
    name: 'TCP-Actuated Robotic Hand Research',
    category: 'Robotics Research',
    description:
      'Fabricated and tested Twisted and Coiled Polymer muscles for a low-cost robotic hand orthosis, using controlled pulse experiments and OSP Tracker displacement analysis to optimize the test fixture and identify 12 A for 0.125 seconds with a 10-second cooling interval as the best tested actuation-recovery balance.',
    stack: ['Experimental Design', 'Data Analysis', 'TCP Actuators', 'OSP Tracker', 'Robotics'],
    livePreview: `${process.env.PUBLIC_URL}/Kunju_Menon_ECS1192_Final_2025.pdf`,
    livePreviewLabel: 'Research report',
  },
  {
    name: 'OptiClarity — Deep Learning Eye Health Platform',
    category: 'Machine Learning',
    description:
      'Developed an AI-powered eye health platform using PyTorch, TensorFlow, and ResNet50 CNN architectures to analyze four types of retinal scans across four deep learning models, including an ensemble model for multimodal disease classification. Built an end-to-end diagnostic workflow with a LangChain-based RAG assistant for image-based disease prediction and context-aware eye-health guidance through a React and Python web application.',
    stack: ['Python', 'React', 'PyTorch', 'TensorFlow', 'ResNet50', 'LangChain', 'RAG'],
  },
  {
    name: 'Gradeview Academic Dashboard',
    category: 'Full Stack',
    description:
      'Built a scalable academic-performance platform with React, Node.js, Express, and MySQL, designing REST APIs, relational database schemas, and reusable UI components for GPA analytics, transcript management, and what-if academic planning.',
    stack: ['React', 'Node.js', 'Express', 'REST APIs', 'MySQL'],
    sourceCode: 'https://github.com/Tomigames/Team10',
  },
]

const certifications = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    brand: 'aws',
    issued: 'August 15, 2026',
    expires: 'August 15, 2029',
    status: 'Active',
    certificate: `${process.env.PUBLIC_URL}/AWS-Certified-AI-Practitioner.pdf`,
  },
  {
    name: 'Academy Accreditation - Databricks Fundamentals',
    issuer: 'Databricks',
    brand: 'databricks',
    issued: 'August 12, 2024',
    expires: 'May 2027',
    status: 'Active',
    credentialId: '111921208',
    certificate:
      'https://credentials.databricks.com/5e84370c-73b1-4d39-a14f-d07689caeb9c',
  },
  {
    name: 'Academy Accreditation - Generative AI Fundamentals',
    issuer: 'Databricks',
    brand: 'databricks',
    issued: 'August 4, 2024',
    expires: 'May 2027',
    status: 'Active',
    credentialId: '111300048',
    certificate:
      'https://credentials.databricks.com/b28f1d46-227d-4474-8470-3ca38045023d#acc.a8fJ7TNB',
  },
]

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'Frameworks/Libraries',
    items: [
      'PyTorch',
      'LangChain',
      'LangGraph',
      'GPT-4o',
      'Retrieval-Augmented Generation (RAG)',
      'Transformer-based LLMs',
      'Prompt Engineering',
      'Computer Vision',
      'React',
      'Node.js',
      'FastAPI',
      'NumPy',
      'Pandas',
      'Firestore',
      'PostgreSQL',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'Azure DevOps',
      'Terraform',
      'MCP',
      'OAuth2/JWT',
      'Docker',
      'Kubernetes',
      'GitHub Copilot',
      'Codex',
      'Windsurf',
      'CI/CD',
      'AWS',
    ],
  },
]

const honors = [
  'Eugene McDermott Scholarship',
  'National Merit Scholarship',
  'Dean’s List: Fall 2023, Spring 2024, Fall 2024, Spring 2025, Fall 2025, Spring 2026',
]

const contact = {
  email: 'sxm220267@utdallas.edu',
  linkedin: 'https://www.linkedin.com/in/saraswathi-menon-678259248/',
  location: 'Flower Mound, TX',
}

export {
  header,
  about,
  education,
  experience,
  projects,
  certifications,
  skills,
  honors,
  contact,
}
