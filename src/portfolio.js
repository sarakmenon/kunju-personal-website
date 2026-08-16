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
      'Developed an AI-powered deployment assistant using **agentic workflows and Terraform** to orchestrate specialized AI workers, reusable skills, control-plane APIs, and customer provisioning, increasing deployment automation by 60%.',
      'Designed an **LLM evaluation framework** that measured response quality, remediation accuracy, and end-to-end workflow correctness across diverse deployment scenarios.',
      'Engineered **SaaS API orchestration** across specialized workers, unifying four provisioning data domains—onboarding status, customer configuration, deployment metadata, and instance data—to support autonomous reasoning throughout the deployment lifecycle.',
      'Served as an Intern Ambassador, representing the internship cohort and fostering cross-team collaboration.',
    ],
    stack: ['Agentic Workflows', 'LLM Evaluation', 'Terraform', 'Control-plane APIs', 'SaaS'],
  },
  {
    company: 'MATH-101',
    website: 'https://math-101.com/',
    websiteLabel: 'Website',
    position: 'Full-Stack Web Developer',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    details: [
      'Developed and deployed a production-grade tutoring and course-management platform using **Next.js, React, and TypeScript**, integrating four Firebase services: Authentication, Firestore, Storage, and Hosting.',
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
          'Developed an agentic AI assistant using LangGraph Studio and transformer-based LLMs to automatically generate secure AT&T cloud-connection configurations.',
          'Designed a three-stage **RAG and MCP workflow** that retrieved enterprise documentation, grounded transformer-LLM reasoning in the retrieved context, and generated cloud-configuration recommendations through REST APIs.',
          'Implemented a **React.js and Node.js interface** that allows users to visualize generated configurations in real time.',
          'Applied prompt engineering, structured reasoning, and RAG techniques to produce secure, compliant, and accurate outputs aligned with AT&T connection standards.',
        ],
        stack: ['LangGraph', 'Transformer LLMs', 'RAG', 'MCP', 'React', 'Node.js'],
      },
      {
        name: 'AskVoice',
        details: [
          'Migrated and refactored **REST APIs and service architecture** into one standardized implementation, preserving cross-environment compatibility while simplifying integration testing and maintenance.',
          'Deployed application updates to development environments through Azure DevOps pipelines for integration testing.',
          'Used **KQL and Azure Data Explorer logs** to diagnose system issues and accelerate root-cause identification.',
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
      'Built a modular agentic workflow with **LangGraph, LangChain, and GPT-4o** that coordinated three content-quality stages—prompt generation, accessibility optimization, and brand-voice alignment.',
      'Designed modular agents that encapsulated domain-specific logic and combined semantic similarity scoring with LLM reasoning to validate campaign assets against creative-blueprint and compliance requirements.',
      'Developed a secure **FastAPI RAG API** with OAuth2/JWT authentication, enabling internal teams to query Gen-Z advertising research documents through natural language.',
      'Engineered **structured document-ingestion pipelines** across two source formats, PDF and PowerPoint, extracting JSON for automated research-to-PPTX generation and reducing manual curation from hours to minutes.',
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
