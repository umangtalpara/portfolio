/**
 * Site content and configuration
 * Centralized data source for the portfolio
 */

export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  location: string
  phone: string
  email: string
  linkedin: string
  resumePath: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string[]
  tech: string[]
  metrics?: {
    label: string
    value: string
  }[]
}

export interface Project {
  id: string
  title: string
  problem: string
  approach: string
  result: string
  tech: string[]
  highlights: string[]
}

export interface SkillCategory {
  id: string
  name: string
  skills: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface SEO {
  title: string
  description: string
  keywords: string[]
}

export interface SiteContent {
  personal: PersonalInfo
  summary: string[]
  experience: Experience[]
  projects: Project[]
  skills: SkillCategory[]
  education: Education[]
  seo: SEO
}

export const siteContent: SiteContent = {
  personal: {
    name: 'Umang Talpara',
    title: 'Backend-Focused Full Stack Developer',
    tagline: '4+ years building scalable, high-performance apps for SaaS, e-commerce, and recruitment.',
    location: 'Ahmedabad, Gujarat, India',
    phone: '+91 99999 99999',
    email: 'patelumang607@gmail.com',
    linkedin: 'www.linkedin.com/in/umang-talpara',
    resumePath: '/assets/umang_talpara_resume.pdf',
  },
  summary: [
    'Backend-first engineer focusing on system architecture, RESTful APIs, data flow optimization, and reliability.',
    'Delivered and scaled platforms serving **95,000+ users** and **700,000+ orders** with microservices and robust caching.',
    'Built automation with **webhooks** and **cron jobs**, plus third-party integrations (ATS, email).',
    'Hands-on with **Node.js, Express.js, Nest.js, MongoDB, MySQL, Redis, Elasticsearch, RabbitMQ**, **AWS/Vercel**, and CI/CD.',
    'Comfortable crafting pragmatic UIs with **Vue/Vuetify** and modern tooling when needed.',
  ],
  experience: [
    {
      id: 'sproutsai',
      company: 'SproutsAI',
      role: 'Software Developer',
      period: 'Jan 2025 – Present',
      description: [
        'Architected scalable backend services with **Node.js, Express, Nest.js, MongoDB, Elasticsearch, RabbitMQ**.',
        'Integrated third-party **ATS** platforms; built automation via **webhooks/cron** and **email** outreach features.',
        'Delivered candidate pool with powerful search/filter; collaborated via **Jira**.',
      ],
      tech: ['Node.js', 'Express', 'Nest.js', 'MongoDB', 'Elasticsearch', 'RabbitMQ'],
    },
    {
      id: 'frendy',
      company: 'Frendy',
      role: 'Full Stack Developer',
      period: 'Dec 2021 – Jan 2025',
      description: [
        'Built **WMS, CRM, POS, delivery apps**; engineered **7+ microservices**, **2 user-facing apps**, **7 admin panels**.',
        'Scaled to **95k+ users / 700k orders**; implemented Redis caching, Sentry, and microservice orchestration.',
        'Stack used: **Node, Express, Nest, Vue, Vuetify, MySQL**.',
      ],
      tech: ['Node.js', 'Express', 'Nest.js', 'Vue.js', 'Vuetify', 'MySQL', 'Redis'],
      metrics: [
        { label: 'Users', value: '95,000+' },
        { label: 'Orders', value: '700,000+' },
        { label: 'Microservices', value: '7+' },
      ],
    },
    {
      id: 'binbytes',
      company: 'Binbytes',
      role: 'Full Stack Developer',
      period: 'Feb 2021 – Nov 2021',
      description: [
        'Implemented REST APIs with **Node.js**; delivered multiple websites/admin panels; strong debugging/problem-solving.',
      ],
      tech: ['Node.js', 'Express', 'MongoDB'],
    },
  ],
  projects: [
    {
      id: 'wms',
      title: 'Warehouse Management System (WMS)',
      problem: 'Complex inventory management across multiple warehouses with real-time stock tracking, promotions, and multi-level stock management requirements.',
      approach: 'Built scalable backend APIs with Node.js and Nest.js, implemented queue-based processing with RabbitMQ for order fulfillment, and integrated Redis caching for high-performance stock queries. Designed flexible promotion engine and SKU management system.',
      result: 'Streamlined warehouse operations with real-time inventory visibility, reduced order processing time by 40%, and supported 700,000+ orders with 99.9% uptime.',
      tech: ['Node.js', 'Nest.js', 'MongoDB', 'Redis', 'RabbitMQ', 'MySQL'],
      highlights: [
        'Multi-level stock management across warehouses',
        'Real-time SKU tracking and inventory updates',
        'Queue-based order processing for scalability',
        'Redis caching for sub-100ms query response times',
        'Flexible promotion and discount engine',
        'Comprehensive reporting and analytics',
      ],
    },
    {
      id: 'crm-pos',
      title: 'CRM & POS Suite',
      problem: 'Need for integrated customer relationship management and point-of-sale system with order pipeline management, customer data centralization, and real-time reporting.',
      approach: 'Developed unified CRM and POS backend with RESTful APIs, implemented customer data aggregation, order pipeline with status tracking, and automated reporting. Built offer/combo management system with validation logic.',
      result: 'Centralized customer data management, improved order processing efficiency by 35%, and enabled data-driven decision making through comprehensive reporting dashboard.',
      tech: ['Node.js', 'Express', 'Nest.js', 'MySQL', 'Redis', 'Vue.js', 'Vuetify'],
      highlights: [
        'Unified customer data management system',
        'Real-time order pipeline tracking',
        'Automated offer and combo management',
        'Comprehensive reporting and analytics',
        'High-throughput API design for POS operations',
        'Redis caching for customer data and offers',
      ],
    },
    {
      id: 'recruitment-automation',
      title: 'Recruitment Automation',
      problem: 'Manual candidate sourcing and management, lack of integration with ATS platforms, and inefficient search capabilities across large candidate pools.',
      approach: 'Integrated multiple ATS platforms via APIs, implemented Elasticsearch for powerful candidate search and filtering, built automated email campaign system, and created webhook/cron-based automation for candidate pipeline management.',
      result: 'Reduced time-to-hire by 50%, improved candidate search efficiency with full-text search capabilities, and automated 80% of manual recruitment tasks through integrations and workflows.',
      tech: ['Node.js', 'Nest.js', 'MongoDB', 'Elasticsearch', 'RabbitMQ'],
      highlights: [
        'Multi-ATS platform integration',
        'Elasticsearch-powered candidate search',
        'Automated email campaign system',
        'Webhook-based candidate pipeline automation',
        'Cron job scheduling for recurring tasks',
        'Advanced filtering and search capabilities',
      ],
    },
  ],
  skills: [
    {
      id: 'backend',
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs', 'Jest'],
    },
    {
      id: 'data-infra',
      name: 'Data/Infra',
      skills: ['MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Kafka', 'AWS', 'Vercel'],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      skills: ['Vue.js', 'Vuetify'],
    },
    {
      id: 'devops-collab',
      name: 'DevOps/Collab',
      skills: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'Postman', 'Sentry', 'Jira', 'VS Code', 'Cursor', 'DBeaver', 'MongoDB Compass'],
    },
  ],
  education: [
    {
      degree: 'B.Tech, Computer Science & Engineering',
      institution: 'Parul University',
      period: '2017–2021',
    },
    {
      degree: 'HSC, Science',
      institution: 'Elite International School',
      period: '2015–2017',
    },
  ],
  seo: {
    title: 'Umang Talpara - Backend-Focused Full Stack Developer',
    description: '4+ years building scalable, high-performance apps for SaaS, e-commerce, and recruitment. Expert in Node.js, microservices, and system architecture.',
    keywords: [
      'Umang Talpara',
      'Backend Developer',
      'Full Stack Developer',
      'Node.js',
      'Microservices',
      'Software Engineer',
      'Ahmedabad',
      'India',
    ],
  },
}

