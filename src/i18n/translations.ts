import type { LucideIcon } from 'lucide-react';
import { Database, Globe2, Layers3, Network, Server, Zap } from 'lucide-react';

export type Lang = 'en' | 'es' | 'pt';

export const LANGS: Lang[] = ['en', 'es', 'pt'];

export const LANG_LABELS: Record<Lang, string> = {
  en: 'EN',
  es: 'ES',
  pt: 'PT',
};

export const LANG_FULL_NAMES: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

export const LANG_HTML_TAGS: Record<Lang, string> = {
  en: 'en',
  es: 'es',
  pt: 'pt',
};

export type Category = 'all' | 'frontend' | 'microservices' | 'realtime' | 'infra';
export type SnippetKey = 'equa' | 'go' | 'elixir' | 'kamal';

export type CompetencyT = {
  category: Exclude<Category, 'all'>;
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  metric: string;
  footer: string;
  accent: 'indigo' | 'emerald' | 'cyan' | 'amber' | 'rose';
  icon: LucideIcon;
};

export type ExperienceT = {
  company: string;
  role: string;
  location: string;
  period: string;
  label: string;
  accent: 'emerald' | 'indigo' | 'slate';
  bullets: string[];
  specs: [string, string][];
};

export type BlueprintT = {
  number: string;
  title: string;
  stack: string;
  description: string;
  bullets: string[];
  footer: string;
  snippet: SnippetKey;
  accent: 'emerald' | 'indigo' | 'cyan' | 'amber' | 'rose' | 'blue';
};

export type EducationT = {
  year: string;
  title: string;
  school: string;
  mark: string;
  copy: string;
};

export type Translation = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterDescription: string;
  };
  nav: {
    profile: string;
    architecture: string;
    experience: string;
    projects: string;
    credentials: string;
    systemSpecs: string;
    copyEmail: string;
    resumePdf: string;
  };
  hero: {
    identifier: string;
    edgeLatency: string;
    name: string;
    subtitle: string;
    location: string;
    intro: string;
    inspectTimeline: string;
    architecturePlaybooks: string;
    liveTerminal: string;
    stats: [string, string, string, string][];
  };
  architecture: {
    module: string;
    title: string;
    caption: string;
    filters: [Category, string][];
    competencies: CompetencyT[];
  };
  experience: {
    module: string;
    title: string;
    caption: string;
    activeRole: string;
    expandLabel: string;
    collapseLabel: string;
    techBreakdown: string;
    experiences: ExperienceT[];
  };
  projects: {
    module: string;
    title: string;
    caption: string;
    inspectSpec: string;
    blueprints: BlueprintT[];
  };
  credentials: {
    moduleEducation: string;
    titleEducation: string;
    moduleLanguages: string;
    titleLanguages: string;
    languagesIntro: string;
    education: EducationT[];
    languages: [string, string, string, string][];
  };
  specs: {
    title: string;
    compiledIn: string;
    copyCode: string;
    placeholder: string;
    enterLabel: string;
    prompt: string;
    snippetLabels: [SnippetKey, string][];
    cli: {
      help: string;
      status: string;
      stacks: string;
      contact: string;
      benchmarks: string;
      unknown: string;
    };
    toast: {
      email: string;
      phone: string;
      code: string;
      unavailable: string;
      loaded: string;
    };
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    copyEmail: string;
    callDirect: string;
  };
  footer: {
    tagline: string;
    linkedin: string;
    github: string;
    email: string;
    backToTop: string;
    location: string;
  };
};

const sharedIcons = { Globe2, Server, Zap, Database, Layers3, Network };

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'Wellington Almeida — CTO & Polyglot Solutions Architect',
      description: 'Executive portfolio and digital resume of Wellington Almeida — Chief Technology Officer & Polyglot Solutions Architect based in Costa del Sol, Spain. Expert in Next.js, Go microservices, distributed systems, and real-time architectures.',
      ogTitle: 'Wellington Almeida — CTO & Polyglot Solutions Architect',
      ogDescription: 'Executive systems architecture, distributed microservices, luxury platforms, and modern polyglot engineering.',
      twitterDescription: 'Executive systems architecture, distributed microservices, luxury platforms, and modern polyglot engineering.',
    },
    nav: {
      profile: 'Profile',
      architecture: 'Architecture',
      experience: 'Experience',
      projects: 'Projects',
      credentials: 'Credentials',
      systemSpecs: 'System Specs',
      copyEmail: 'Copy Email',
      resumePdf: 'Resume PDF',
    },
    hero: {
      identifier: 'SYSTEM IDENTIFIER // WELLY-ALMEIDA-ARCH-v2026',
      edgeLatency: 'EDGE LATENCY < 45ms',
      name: 'Wellington Almeida',
      subtitle: 'Chief Technology Officer & Polyglot Solutions Architect',
      location: 'Estepona, Costa del Sol, Spain',
      intro: 'High-impact executive technologist with a 15-year track record leading engineering divisions, luxury real estate platforms, and distributed systems architecture. Specializes in transforming complex business domains into ultra-low-latency, resilient cloud architectures.',
      inspectTimeline: 'Inspect Career Timeline',
      architecturePlaybooks: 'Architecture Playbooks',
      liveTerminal: '$ live-terminal',
      stats: [
        ['CAREER VELOCITY', '15+ Years', 'Enterprise systems & web engineering leadership.', 'indigo'],
        ['GLOBAL FOOTPRINT', '12+ Markets', 'Multi-region platforms, localization, and currency engines.', 'emerald'],
        ['EDGE BENCHMARK', '< 180ms TTFB', 'Sub-second global delivery and 99+ Core Web Vitals.', 'cyan'],
      ],
    },
    architecture: {
      module: '02 // Capability Matrix',
      title: 'Architectural & Technical Competencies',
      caption: 'Interactive multi-stack paradigm • Select a category to inspect',
      filters: [
        ['all', 'All Stacks (6)'],
        ['frontend', 'Frontend & Edge'],
        ['microservices', 'Microservices & Enterprise'],
        ['realtime', 'Real-Time & Monoliths'],
        ['infra', 'Data & Infrastructure'],
      ],
      competencies: [
        { category: 'frontend', title: 'Frontend & Edge Stacks', eyebrow: 'EDGE & REACTIVE', description: 'High-performance client/server rendering with granular state boundaries.', tags: ['Next.js 15 (App Router)', 'React Server Components', 'SSR / SSG / ISR', 'Vite', 'Astro Islands', 'TypeScript', 'Tailwind CSS'], metric: 'Hydration Cost: Minimal', footer: 'Core Web Vitals: 99+', accent: 'indigo', icon: sharedIcons.Globe2 },
        { category: 'microservices', title: 'Microservices & Enterprise', eyebrow: 'ENTERPRISE SCALE', description: 'High-throughput RPC communication, typed domain models, and container orchestration.', tags: ['Go Microservices', 'gRPC & Protobuf', 'Apache Kafka', 'Docker & Kubernetes', 'C# / .NET 8/9', 'ASP.NET Core', 'EF Core'], metric: 'Throughput: 100k+ req/sec', footer: 'gRPC Binary Encoding', accent: 'emerald', icon: sharedIcons.Server },
        { category: 'realtime', title: 'Real-Time & Monoliths', eyebrow: 'ACTOR MODEL & CONCURRENCY', description: 'Fault-tolerant distributed nodes and productive full-stack monoliths.', tags: ['PETAL (Phoenix, Elixir)', 'Phoenix LiveView', 'Rails 8+ Hotwire', 'Kamal Deployments', 'Solid Queue', 'Alpine.js'], metric: 'Live Channels: < 2ms', footer: 'BEAM VM Supervision', accent: 'cyan', icon: sharedIcons.Zap },
        { category: 'frontend', title: 'JavaScript / BaaS Systems', eyebrow: 'MODERN JS & BAAS', description: 'Rapid architecture with secure row-level access and reactive data bindings.', tags: ['MERN / PERN', 'SvelteKit Full-Stack', 'Supabase RLS', 'PocketBase & SQLite', 'Node.js / Express', 'Firebase Rules'], metric: 'Security: Declarative RLS', footer: 'Zero-Overhead Edge', accent: 'amber', icon: sharedIcons.Database },
        { category: 'infra', title: 'Databases & Query Optimization', eyebrow: 'DATA PERSISTENCE', description: 'Relational index tuning, geospatial indices, and memory caching layers.', tags: ['PostgreSQL Indexes', 'Redis Caching & PubSub', 'MySQL Master/Replica', 'Prisma & Drizzle', 'PgBouncer Pooling'], metric: 'P99 Query Latency: < 8ms', footer: 'ACID Resilient', accent: 'cyan', icon: sharedIcons.Layers3 },
        { category: 'infra', title: 'Infrastructure & Integrations', eyebrow: 'DEVOPS & INTEGRATION', description: 'Zero-downtime pipelines, asynchronous webhooks, and enterprise CRM orchestration.', tags: ['RESTful & GraphQL APIs', 'Webhook Engines', 'Luxury CRM Feeds', 'CI/CD Automation', 'Linux / Debian Hardening'], metric: 'Uptime SLA: 99.99%', footer: 'Zero-Downtime Deploy', accent: 'rose', icon: sharedIcons.Network },
      ],
    },
    experience: {
      module: '03 // Proven Track Record',
      title: 'Executive & Engineering Timeline',
      caption: 'Click any position to expand the architecture breakdown',
      activeRole: 'Active Role',
      expandLabel: 'Expand architecture',
      collapseLabel: 'Collapse details',
      techBreakdown: 'TECHNICAL ARCHITECTURE BREAKDOWN',
      experiences: [
        { company: 'EQUA Estates', role: 'Chief Technology Officer (CTO)', location: 'Marbella / Estepona, Costa del Sol, Spain', period: '2026 – Present', label: 'Executive Leadership', accent: 'emerald', bullets: ['Spearheaded systems architecture and modern technical strategy for a premier ultra-luxury real estate portal.', 'Architected a Next.js App Router platform with React Server Components, Server Actions, and tuned PostgreSQL storage.', 'Engineered bidirectional CRM synchronization feeds with schema validation, edge caching, and intelligent lead distribution.'], specs: [['CORE RUNTIME', 'Next.js 15, Node 22 LTS, Edge Runtime'], ['PERSISTENCE', 'PostgreSQL, Redis Cache, PgBouncer'], ['DATA SYNC', 'Webhooks, CRM Feeds, S3 Image CDN']] },
        { company: 'Techno Co.', role: 'Lead Full-Stack Solutions Engineer / Tech Lead', location: 'Ibiza, Balearic Islands, Spain', period: 'Apr 2018 – Jun 2021', label: 'Engineering Team Lead', accent: 'indigo', bullets: ['Directed decoupled backend microservices and Node.js API gateways serving 12+ international markets.', 'Spearheaded database tuning, query index refactoring, and Redis caching that reduced p95 response times by 45%.', 'Supervised a 35-person cross-functional engineering team with containerized CI/CD releases and zero operational downtime.'], specs: [['TEAM SIZE', '35 Engineers & QAs Led'], ['INFRASTRUCTURE', 'Go, Docker, Kubernetes, AWS EKS'], ['PERFORMANCE', '-45% Query Latency Slashed']] },
        { company: 'Buy a Dream', role: 'Senior Frontend & Platform Engineer', location: 'Barcelona, Catalonia, Spain', period: 'Dec 2017 – Apr 2018', label: 'Platform Modernization', accent: 'slate', bullets: ['Modernized digital commerce storefront systems across 7 Tier-1 European markets with modular component design.', 'Integrated multi-currency payment gateways and asynchronous webhook dispatchers with strict mobile-first response SLAs.'], specs: [['STACK HIGHLIGHTS', 'React, Vite, Node APIs, Stripe Webhooks'], ['DEPLOYMENT REACH', '7 Tier-1 European Regional Portals']] },
        { company: 'So Portas', role: 'Full-Stack & Systems Developer', location: 'Joinville, Santa Catarina, Brazil', period: 'Mar 2010 – Jun 2012', label: 'Database & Systems', accent: 'slate', bullets: ['Executed an enterprise migration from on-premise inventory systems to MySQL cloud storage with zero operational downtime.', 'Connected real-time sales terminals to automated factory warehouse logistics through RESTful interfaces.'], specs: [['SYSTEMS', 'MySQL, RESTful APIs, Inventory'], ['OPERATIONS', 'Factory Logistics & Sales Terminals']] },
      ],
    },
    projects: {
      module: '04 // Production Case Studies',
      title: 'Featured Architecture & Project Blueprints',
      caption: '7 signature architectural implementations',
      inspectSpec: 'Inspect spec',
      blueprints: [
        { number: '01', title: 'High-End Real Estate Engine', stack: 'Next.js 15 & PostgreSQL', description: 'Dynamic CRM ingestion and edge SSG generation for luxury Costa del Sol villas, with automated imagery and geospatial catalog queries.', bullets: ['React Server Actions & RSC', 'Asynchronous CRM Feed Ingestion', 'Incremental Static Regeneration'], footer: 'EQUA Estates Tech', snippet: 'equa', accent: 'emerald' },
        { number: '02', title: 'High-Throughput Microservices', stack: 'Go & gRPC Protobuf', description: 'Distributed RPC service mesh for telemetry, orders, and payment validation with strict protocol contracts and Kafka streams.', bullets: ['Sub-millisecond gRPC IPC latency', 'Kafka partitions for event sourcing', 'OpenTelemetry distributed tracing'], footer: 'Distributed Mesh', snippet: 'go', accent: 'indigo' },
        { number: '03', title: 'Real-Time Collaborative Stack', stack: 'Elixir PETAL Stack', description: 'Ultra-low overhead state synchronization using Phoenix LiveView WebSockets for real-time bid updates and multi-agent feeds.', bullets: ['2M concurrent connections per node', 'Server-driven DOM diffing', 'OTP GenServer supervision trees'], footer: 'BEAM Concurrency', snippet: 'elixir', accent: 'cyan' },
        { number: '04', title: 'Productive Monolith Platform', stack: 'Rails 8+ & Kamal', description: 'Modern Rails deployment using bare-metal containers, Turbo morphing, Solid Queue workers, and resilient caching.', bullets: ['Zero-dependency queue via Solid Queue', 'Hotwire/Turbo Stream morphing', 'Kamal container orchestration'], footer: 'Full-Stack Lean', snippet: 'kamal', accent: 'rose' },
        { number: '05', title: 'Enterprise Services (.NET 8)', stack: '.NET 8 & ASP.NET Core', description: 'Clean Architecture Web API with Entity Framework Core, CQRS patterns, JWT authentication, and Vite-powered clients.', bullets: ['Strongly typed domain models', 'EF Core migration pipelines', 'High-concurrency async handlers'], footer: 'Corporate Grade', snippet: 'go', accent: 'blue' },
        { number: '06', title: 'Zero-JS Static Engine', stack: 'Astro Islands', description: 'Content-first architecture with partial hydration, shipping minimal runtime JavaScript while interactive widgets load on demand.', bullets: ['Selective client:visible directives', 'Markdown/MDX content collections', '100/100 Lighthouse score default'], footer: 'Edge Islands', snippet: 'equa', accent: 'amber' },
        { number: '07', title: 'Reactive Edge Suite: RLS Architecture', stack: 'SvelteKit + Supabase BaaS', description: 'Serverless application pattern using declarative tenant protection, fine-grained reactive runes, and instant database change broadcasting.', bullets: ['Supabase Auth', 'Declarative SQL RLS', 'Postgres Realtime', 'Svelte 5 Runes'], footer: 'Featured Architecture', snippet: 'equa', accent: 'emerald' },
      ],
    },
    credentials: {
      moduleEducation: '05 // Academic Foundations',
      titleEducation: 'Formal Education & Training',
      moduleLanguages: '06 // Global Operations',
      titleLanguages: 'Languages & Fluency',
      languagesIntro: 'Decades of direct executive engineering communication across North America, Europe, and Latin America.',
      education: [
        { year: '2006 – 2010 • New York City, USA', title: 'Bachelor of Arts (BA) in Advertising & Digital Communications', school: 'School of Visual Arts (SVA), NYC', mark: 'SVA', copy: '14-month technical residency at DDB New York, bridging interactive web software and international campaign design systems.' },
        { year: '2005 • Vancouver, Canada', title: 'Diploma in Web Systems & Digital Brand Technologies', school: 'Serebra Connect', mark: 'SC', copy: 'Foundational computer science, relational database engineering, network protocols, and distributed web standards.' },
      ],
      languages: [
        ['English', 'Native / C2', '100%', 'Bilingual education in NYC; technical lead for multinational teams.'],
        ['Portuguese', 'Native / C2', '100%', 'Native tongue; extensive experience leading Latin American operations.'],
        ['Spanish', 'Fluent / C1–C2', '95%', 'Resident in Spain; leads high-level stakeholder negotiations in Spanish.'],
      ],
    },
    specs: {
      title: 'ARCHITECTURAL CONFIG TELEMETRY // REPL',
      compiledIn: '● COMPILED IN 28ms',
      copyCode: 'copy code',
      placeholder: "type 'help', 'stacks', 'contact'...",
      enterLabel: 'press [Enter]',
      prompt: 'welly@architecture-portal:~$',
      snippetLabels: [['equa', 'next.config.ts'], ['go', 'server.go (gRPC)'], ['elixir', 'live_view.ex'], ['kamal', 'deploy.yml (Kamal)']],
      cli: {
        help: 'Available commands: status, stacks, contact, benchmarks, clear',
        status: 'AVAILABLE: Wellington is taking Fractional CTO & Advisory appointments for high-growth ventures.',
        stacks: 'Next.js 15, Go gRPC, Elixir Phoenix, Rails 8 Kamal, .NET 8, SvelteKit + Supabase, PostgreSQL, Redis.',
        contact: 'Email: welly.almeida@gmail.com | Phone: +34 604 286 691 | Location: Estepona, Spain',
        benchmarks: 'Core Web Vitals: 99/100 | TTFB: <180ms edge | 12+ markets scaled | 35 engineers managed',
        unknown: "Unknown command: '{cmd}'. Type 'help' for available CLI directives.",
      },
      toast: {
        email: 'Email copied to clipboard',
        phone: 'Phone number copied',
        code: 'Source configuration copied',
        unavailable: 'Copy is unavailable in this browser',
        loaded: 'Loaded blueprint: {key}',
      },
    },
    cta: {
      badge: 'OPEN FOR FRACTIONAL CTO & ADVISORY APPOINTMENTS',
      title: 'Architecting Resilient Platforms That Outperform Benchmarks',
      description: 'Available for executive CTO roles, high-throughput systems design, technology audit & restructuring, and luxury real estate portal engineering.',
      copyEmail: 'Copy Email: {email}',
      callDirect: 'Call Direct',
    },
    footer: {
      tagline: 'WELLINGTON ALMEIDA // EXECUTIVE PORTFOLIO 2026',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      backToTop: 'Back to top ↑',
      location: 'ESTEPONA, COSTA DEL SOL, SPAIN',
    },
  },

  es: {
    meta: {
      title: 'Wellington Almeida — CTO & Arquitecto de Soluciones Políglota',
      description: 'Portafolio ejecutivo y currículum digital de Wellington Almeida — Director de Tecnología (CTO) y Arquitecto de Soluciones Políglota con sede en Costa del Sol, España. Experto en Next.js, microservicios en Go, sistemas distribuidos y arquitecturas en tiempo real.',
      ogTitle: 'Wellington Almeida — CTO & Arquitecto de Soluciones Políglota',
      ogDescription: 'Arquitectura de sistemas ejecutivos, microservicios distribuidos, plataformas de lujo e ingeniería políglota moderna.',
      twitterDescription: 'Arquitectura de sistemas ejecutivos, microservicios distribuidos, plataformas de lujo e ingeniería políglota moderna.',
    },
    nav: {
      profile: 'Perfil',
      architecture: 'Arquitectura',
      experience: 'Experiencia',
      projects: 'Proyectos',
      credentials: 'Credenciales',
      systemSpecs: 'Especificaciones',
      copyEmail: 'Copiar Email',
      resumePdf: 'CV en PDF',
    },
    hero: {
      identifier: 'IDENTIFICADOR DE SISTEMA // WELLY-ALMEIDA-ARCH-v2026',
      edgeLatency: 'LATENCIA EDGE < 45ms',
      name: 'Wellington Almeida',
      subtitle: 'Director de Tecnología & Arquitecto de Soluciones Políglota',
      location: 'Estepona, Costa del Sol, España',
      intro: 'Tecnólogo ejecutivo de alto impacto con más de 15 años de experiencia liderando divisiones de ingeniería, plataformas inmobiliarias de lujo y arquitectura de sistemas distribuidos. Especializado en transformar dominios de negocio complejos en arquitecturas cloud resilientes y de latencia ultrabaja.',
      inspectTimeline: 'Ver Trayectoria Profesional',
      architecturePlaybooks: 'Playbooks de Arquitectura',
      liveTerminal: '$ terminal-en-vivo',
      stats: [
        ['TRAYECTORIA PROFESIONAL', '15+ Años', 'Liderazgo en ingeniería de sistemas empresariales y web.', 'indigo'],
        ['ALCANCE GLOBAL', '12+ Mercados', 'Plataformas multi-región, localización y motores de moneda.', 'emerald'],
        ['BENCHMARK EDGE', '< 180ms TTFB', 'Entrega global sub-segundo y 99+ Core Web Vitals.', 'cyan'],
      ],
    },
    architecture: {
      module: '02 // Matriz de Capacidades',
      title: 'Competencias Arquitectónicas y Técnicas',
      caption: 'Paradigma multi-stack interactivo • Selecciona una categoría para inspeccionar',
      filters: [
        ['all', 'Todos los Stacks (6)'],
        ['frontend', 'Frontend & Edge'],
        ['microservices', 'Microservicios & Enterprise'],
        ['realtime', 'Tiempo Real & Monolitos'],
        ['infra', 'Datos & Infraestructura'],
      ],
      competencies: [
        { category: 'frontend', title: 'Stacks Frontend & Edge', eyebrow: 'EDGE & REACTIVO', description: 'Renderizado cliente/servidor de alto rendimiento con límites de estado granulares.', tags: ['Next.js 15 (App Router)', 'React Server Components', 'SSR / SSG / ISR', 'Vite', 'Astro Islands', 'TypeScript', 'Tailwind CSS'], metric: 'Coste de Hidratación: Mínimo', footer: 'Core Web Vitals: 99+', accent: 'indigo', icon: sharedIcons.Globe2 },
        { category: 'microservices', title: 'Microservicios & Enterprise', eyebrow: 'ESCALA EMPRESARIAL', description: 'Comunicación RPC de alto rendimiento, modelos de dominio tipados y orquestación de contenedores.', tags: ['Microservicios en Go', 'gRPC & Protobuf', 'Apache Kafka', 'Docker & Kubernetes', 'C# / .NET 8/9', 'ASP.NET Core', 'EF Core'], metric: 'Throughput: 100k+ req/seg', footer: 'Codificación Binaria gRPC', accent: 'emerald', icon: sharedIcons.Server },
        { category: 'realtime', title: 'Tiempo Real & Monolitos', eyebrow: 'MODELO DE ACTORES & CONCURRENCIA', description: 'Nodos distribuidos tolerantes a fallos y monolitos full-stack productivos.', tags: ['PETAL (Phoenix, Elixir)', 'Phoenix LiveView', 'Rails 8+ Hotwire', 'Despliegues Kamal', 'Solid Queue', 'Alpine.js'], metric: 'Canales en Vivo: < 2ms', footer: 'Supervisión BEAM VM', accent: 'cyan', icon: sharedIcons.Zap },
        { category: 'frontend', title: 'Sistemas JavaScript / BaaS', eyebrow: 'JS MODERNO & BAAS', description: 'Arquitectura rápida con acceso seguro a nivel de fila y bindings de datos reactivos.', tags: ['MERN / PERN', 'SvelteKit Full-Stack', 'Supabase RLS', 'PocketBase & SQLite', 'Node.js / Express', 'Firebase Rules'], metric: 'Seguridad: RLS Declarativo', footer: 'Edge Sin Overhead', accent: 'amber', icon: sharedIcons.Database },
        { category: 'infra', title: 'Bases de Datos & Optimización de Consultas', eyebrow: 'PERSISTENCIA DE DATOS', description: 'Ajuste de índices relacionales, índices geoespaciales y capas de caché en memoria.', tags: ['Índices PostgreSQL', 'Caching Redis & PubSub', 'MySQL Master/Replica', 'Prisma & Drizzle', 'PgBouncer Pooling'], metric: 'Latencia P99: < 8ms', footer: 'Resiliencia ACID', accent: 'cyan', icon: sharedIcons.Layers3 },
        { category: 'infra', title: 'Infraestructura & Integraciones', eyebrow: 'DEVOPS & INTEGRACIÓN', description: 'Pipelines sin downtime, webhooks asíncronos y orquestación CRM empresarial.', tags: ['APIs RESTful & GraphQL', 'Motores de Webhooks', 'Feeds CRM de Lujo', 'Automatización CI/CD', 'Hardening Linux / Debian'], metric: 'SLA de Uptime: 99,99%', footer: 'Despliegue Sin Downtime', accent: 'rose', icon: sharedIcons.Network },
      ],
    },
    experience: {
      module: '03 // Trayectoria Probada',
      title: 'Cronología Ejecutiva y de Ingeniería',
      caption: 'Haz clic en cualquier posición para expandir el desglose de arquitectura',
      activeRole: 'Rol Activo',
      expandLabel: 'Expandir arquitectura',
      collapseLabel: 'Contraer detalles',
      techBreakdown: 'DESGLOSE DE ARQUITECTURA TÉCNICA',
      experiences: [
        { company: 'EQUA Estates', role: 'Director de Tecnología (CTO)', location: 'Marbella / Estepona, Costa del Sol, España', period: '2026 – Presente', label: 'Liderazgo Ejecutivo', accent: 'emerald', bullets: ['Lideré la arquitectura de sistemas y la estrategia técnica moderna para un portal inmobiliario de ultra-lujo.', 'Arquitecté una plataforma Next.js App Router con React Server Components, Server Actions y almacenamiento PostgreSQL optimizado.', 'Diseñé feeds de sincronización CRM bidireccional con validación de esquema, caché edge y distribución inteligente de leads.'], specs: [['RUNTIME NÚCLEO', 'Next.js 15, Node 22 LTS, Edge Runtime'], ['PERSISTENCIA', 'PostgreSQL, Redis Cache, PgBouncer'], ['SINCRONIZACIÓN', 'Webhooks, Feeds CRM, CDN S3 Imágenes']] },
        { company: 'Techno Co.', role: 'Ingeniero de Soluciones Full-Stack Líder / Tech Lead', location: 'Ibiza, Islas Baleares, España', period: 'Abr 2018 – Jun 2021', label: 'Líder de Equipo de Ingeniería', accent: 'indigo', bullets: ['Dirigí microservicios backend desacoplados y gateways API Node.js sirviendo a más de 12 mercados internacionales.', 'Lideré el ajuste de bases de datos, refactorización de índices de consultas y caché Redis que redujo los tiempos de respuesta p95 en un 45%.', 'Supervisé un equipo multidisciplinar de 35 ingenieros con despliegues CI/CD containerizados y cero downtime operativo.'], specs: [['TAMAÑO EQUIPO', '35 Ingenieros & QAs Liderados'], ['INFRAESTRUCTURA', 'Go, Docker, Kubernetes, AWS EKS'], ['RENDIMIENTO', '-45% Latencia Reducida']] },
        { company: 'Buy a Dream', role: 'Ingeniero Frontend & Plataforma Senior', location: 'Barcelona, Cataluña, España', period: 'Dic 2017 – Abr 2018', label: 'Modernización de Plataforma', accent: 'slate', bullets: ['Modernicé sistemas de comercio digital storefront en 7 mercados europeos Tier-1 con diseño modular de componentes.', 'Integré pasarelas de pago multi-moneda y dispatchers de webhooks asíncronos con SLAs de respuesta mobile-first estrictos.'], specs: [['HIGHLIGHTS STACK', 'React, Vite, APIs Node, Webhooks Stripe'], ['ALCANCE DESPLIEGUE', '7 Portales Regionales Europeos Tier-1']] },
        { company: 'So Portas', role: 'Desarrollador Full-Stack & de Sistemas', location: 'Joinville, Santa Catarina, Brasil', period: 'Mar 2010 – Jun 2012', label: 'Bases de Datos & Sistemas', accent: 'slate', bullets: ['Ejecuté una migración empresarial de sistemas de inventario on-premise a almacenamiento cloud MySQL con cero downtime operativo.', 'Conecté terminales de ventas en tiempo real con la logística automatizada de almacén de fábrica mediante interfaces RESTful.'], specs: [['SISTEMAS', 'MySQL, APIs RESTful, Inventario'], ['OPERACIONES', 'Logística de Fábrica & Terminales de Venta']] },
      ],
    },
    projects: {
      module: '04 // Casos de Producción',
      title: 'Arquitecturas y Proyectos Destacados',
      caption: '7 implementaciones arquitectónicas insignia',
      inspectSpec: 'Inspeccionar spec',
      blueprints: [
        { number: '01', title: 'Motor Inmobiliario de Lujo', stack: 'Next.js 15 & PostgreSQL', description: 'Ingestión dinámica CRM y generación SSG en edge para villas de lujo en Costa del Sol, con imágenes automatizadas y consultas geoespaciales de catálogo.', bullets: ['React Server Actions & RSC', 'Ingestión Asíncrona de Feeds CRM', 'Regeneración Estática Incremental'], footer: 'EQUA Estates Tech', snippet: 'equa', accent: 'emerald' },
        { number: '02', title: 'Microservicios de Alto Rendimiento', stack: 'Go & gRPC Protobuf', description: 'Malla de servicios RPC distribuidos para telemetría, pedidos y validación de pagos con contratos de protocolo estrictos y streams Kafka.', bullets: ['Latencia IPC gRPC sub-milisegundo', 'Particiones Kafka para event sourcing', 'Trazado distribuido OpenTelemetry'], footer: 'Malla Distribuida', snippet: 'go', accent: 'indigo' },
        { number: '03', title: 'Stack Colaborativo en Tiempo Real', stack: 'Elixir PETAL Stack', description: 'Sincronización de estado de overhead ultrabajo usando Phoenix LiveView WebSockets para pujas en tiempo real y feeds multi-agente.', bullets: ['2M conexiones concurrentes por nodo', 'DOM diffing dirigido por servidor', 'Árboles de supervisión OTP GenServer'], footer: 'Concurrencia BEAM', snippet: 'elixir', accent: 'cyan' },
        { number: '04', title: 'Plataforma Monolito Productiva', stack: 'Rails 8+ & Kamal', description: 'Despliegue Rails moderno usando contenedores bare-metal, Turbo morphing, workers Solid Queue y caché resiliente.', bullets: ['Cola sin dependencias vía Solid Queue', 'Morphing Hotwire/Turbo Stream', 'Orquestación de contenedores Kamal'], footer: 'Full-Stack Lean', snippet: 'kamal', accent: 'rose' },
        { number: '05', title: 'Servicios Enterprise (.NET 8)', stack: '.NET 8 & ASP.NET Core', description: 'Web API con Clean Architecture, Entity Framework Core, patrones CQRS, autenticación JWT y clientes potenciados con Vite.', bullets: ['Modelos de dominio fuertemente tipados', 'Pipelines de migración EF Core', 'Handlers asíncronos de alta concurrencia'], footer: 'Nivel Corporativo', snippet: 'go', accent: 'blue' },
        { number: '06', title: 'Motor Estático Zero-JS', stack: 'Astro Islands', description: 'Arquitectura content-first con hidratación parcial, enviando mínimo JavaScript de runtime mientras los widgets interactivos cargan bajo demanda.', bullets: ['Directivas client:visible selectivas', 'Colecciones de contenido Markdown/MDX', '100/100 Lighthouse por defecto'], footer: 'Edge Islands', snippet: 'equa', accent: 'amber' },
        { number: '07', title: 'Suite Edge Reactiva: Arquitectura RLS', stack: 'SvelteKit + Supabase BaaS', description: 'Patrón de aplicación serverless usando protección declarativa de tenants, runes reactivos de grano fino y difusión instantánea de cambios en base de datos.', bullets: ['Supabase Auth', 'RLS SQL Declarativo', 'Postgres Realtime', 'Svelte 5 Runes'], footer: 'Arquitectura Destacada', snippet: 'equa', accent: 'emerald' },
      ],
    },
    credentials: {
      moduleEducation: '05 // Fundamentos Académicos',
      titleEducation: 'Educación Formal y Formación',
      moduleLanguages: '06 // Operaciones Globales',
      titleLanguages: 'Idiomas y Fluidez',
      languagesIntro: 'Décadas de comunicación directa de ingeniería ejecutiva entre Norteamérica, Europa y América Latina.',
      education: [
        { year: '2006 – 2010 • Nueva York, EE.UU.', title: 'Licenciatura (BA) en Publicidad y Comunicaciones Digitales', school: 'School of Visual Arts (SVA), NYC', mark: 'SVA', copy: 'Residencia técnica de 14 meses en DDB Nueva York, conectando software web interactivo y sistemas de diseño de campañas internacionales.' },
        { year: '2005 • Vancouver, Canadá', title: 'Diplomatura en Sistemas Web y Tecnologías de Marca Digital', school: 'Serebra Connect', mark: 'SC', copy: 'Fundamentos de informática, ingeniería de bases de datos relacionales, protocolos de red y estándares web distribuidos.' },
      ],
      languages: [
        ['Inglés', 'Nativo / C2', '100%', 'Educación bilingüe en NYC; líder técnico para equipos multinacionales.'],
        ['Portugués', 'Nativo / C2', '100%', 'Lengua nativa; amplia experiencia liderando operaciones en América Latina.'],
        ['Español', 'Fluido / C1–C2', '95%', 'Residente en España; lidera negociaciones de alto nivel con stakeholders en español.'],
      ],
    },
    specs: {
      title: 'TELEMETRÍA DE CONFIG ARQUITECTÓNICA // REPL',
      compiledIn: '● COMPILADO EN 28ms',
      copyCode: 'copiar código',
      placeholder: "escribe 'help', 'stacks', 'contact'...",
      enterLabel: 'pulsa [Enter]',
      prompt: 'welly@architecture-portal:~$',
      snippetLabels: [['equa', 'next.config.ts'], ['go', 'server.go (gRPC)'], ['elixir', 'live_view.ex'], ['kamal', 'deploy.yml (Kamal)']],
      cli: {
        help: 'Comandos disponibles: status, stacks, contact, benchmarks, clear',
        status: 'DISPONIBLE: Wellington acepta cargas de Fractional CTO y asesoría para empresas de alto crecimiento.',
        stacks: 'Next.js 15, Go gRPC, Elixir Phoenix, Rails 8 Kamal, .NET 8, SvelteKit + Supabase, PostgreSQL, Redis.',
        contact: 'Email: welly.almeida@gmail.com | Tel: +34 604 286 691 | Ubicación: Estepona, España',
        benchmarks: 'Core Web Vitals: 99/100 | TTFB: <180ms edge | 12+ mercados escalados | 35 ingenieros gestionados',
        unknown: "Comando desconocido: '{cmd}'. Escribe 'help' para ver los directivos CLI disponibles.",
      },
      toast: {
        email: 'Email copiado al portapapeles',
        phone: 'Número de teléfono copiado',
        code: 'Configuración fuente copiada',
        unavailable: 'Copiar no está disponible en este navegador',
        loaded: 'Blueprint cargado: {key}',
      },
    },
    cta: {
      badge: 'ABIERTO A CARGOS FRACTIONAL CTO Y ASESORÍAS',
      title: 'Arquitectando Plataformas Resilientes que Superan los Benchmarks',
      description: 'Disponible para roles CTO ejecutivos, diseño de sistemas de alto rendimiento, auditoría tecnológica y reestructuración, e ingeniería de portales inmobiliarios de lujo.',
      copyEmail: 'Copiar Email: {email}',
      callDirect: 'Llamar Directo',
    },
    footer: {
      tagline: 'WELLINGTON ALMEIDA // PORTAFOLIO EJECUTIVO 2026',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      backToTop: 'Volver arriba ↑',
      location: 'ESTEPONA, COSTA DEL SOL, ESPAÑA',
    },
  },

  pt: {
    meta: {
      title: 'Wellington Almeida — CTO & Arquiteto de Soluções Poliglota',
      description: 'Portfólio executivo e currículo digital de Wellington Almeida — Diretor de Tecnologia (CTO) e Arquiteto de Soluções Poliglota baseado na Costa del Sol, Espanha. Especialista em Next.js, microsserviços em Go, sistemas distribuídos e arquiteturas em tempo real.',
      ogTitle: 'Wellington Almeida — CTO & Arquiteto de Soluções Poliglota',
      ogDescription: 'Arquitetura de sistemas executivos, microsserviços distribuídos, plataformas de luxo e engenharia poliglota moderna.',
      twitterDescription: 'Arquitetura de sistemas executivos, microsserviços distribuídos, plataformas de luxo e engenharia poliglota moderna.',
    },
    nav: {
      profile: 'Perfil',
      architecture: 'Arquitetura',
      experience: 'Experiência',
      projects: 'Projetos',
      credentials: 'Credenciais',
      systemSpecs: 'Especificações',
      copyEmail: 'Copiar Email',
      resumePdf: 'CV em PDF',
    },
    hero: {
      identifier: 'IDENTIFICADOR DE SISTEMA // WELLY-ALMEIDA-ARCH-v2026',
      edgeLatency: 'LATÊNCIA EDGE < 45ms',
      name: 'Wellington Almeida',
      subtitle: 'Diretor de Tecnologia & Arquiteto de Soluções Poliglota',
      location: 'Estepona, Costa del Sol, Espanha',
      intro: 'Tecnólogo executivo de alto impacto com mais de 15 anos de experiência liderando divisões de engenharia, plataformas imobiliárias de luxo e arquitetura de sistemas distribuídos. Especializado em transformar domínios de negócio complexos em arquiteturas cloud resilientes e de latência ultrabaixa.',
      inspectTimeline: 'Ver Trajetória Profissional',
      architecturePlaybooks: 'Playbooks de Arquitetura',
      liveTerminal: '$ terminal-ao-vivo',
      stats: [
        ['TRAJETÓRIA PROFISSIONAL', '15+ Anos', 'Liderança em engenharia de sistemas empresariais e web.', 'indigo'],
        ['ALCANCE GLOBAL', '12+ Mercados', 'Plataformas multi-região, localização e motores de moeda.', 'emerald'],
        ['BENCHMARK EDGE', '< 180ms TTFB', 'Entrega global sub-segundo e 99+ Core Web Vitals.', 'cyan'],
      ],
    },
    architecture: {
      module: '02 // Matriz de Capacidades',
      title: 'Competências Arquitetônicas e Técnicas',
      caption: 'Paradigma multi-stack interativo • Selecione uma categoria para inspecionar',
      filters: [
        ['all', 'Todos os Stacks (6)'],
        ['frontend', 'Frontend & Edge'],
        ['microservices', 'Microsserviços & Enterprise'],
        ['realtime', 'Tempo Real & Monolitos'],
        ['infra', 'Dados & Infraestrutura'],
      ],
      competencies: [
        { category: 'frontend', title: 'Stacks Frontend & Edge', eyebrow: 'EDGE & REATIVO', description: 'Renderização cliente/servidor de alto desempenho com limites de estado granulares.', tags: ['Next.js 15 (App Router)', 'React Server Components', 'SSR / SSG / ISR', 'Vite', 'Astro Islands', 'TypeScript', 'Tailwind CSS'], metric: 'Custo de Hidratação: Mínimo', footer: 'Core Web Vitals: 99+', accent: 'indigo', icon: sharedIcons.Globe2 },
        { category: 'microservices', title: 'Microsserviços & Enterprise', eyebrow: 'ESCALA EMPRESARIAL', description: 'Comunicação RPC de alto desempenho, modelos de domínio tipados e orquestração de contêineres.', tags: ['Microsserviços em Go', 'gRPC & Protobuf', 'Apache Kafka', 'Docker & Kubernetes', 'C# / .NET 8/9', 'ASP.NET Core', 'EF Core'], metric: 'Throughput: 100k+ req/seg', footer: 'Codificação Binária gRPC', accent: 'emerald', icon: sharedIcons.Server },
        { category: 'realtime', title: 'Tempo Real & Monolitos', eyebrow: 'MODELO DE ATORES & CONCORRÊNCIA', description: 'Nós distribuídos tolerantes a falhas e monolitos full-stack produtivos.', tags: ['PETAL (Phoenix, Elixir)', 'Phoenix LiveView', 'Rails 8+ Hotwire', 'Deploys Kamal', 'Solid Queue', 'Alpine.js'], metric: 'Canais ao Vivo: < 2ms', footer: 'Supervisão BEAM VM', accent: 'cyan', icon: sharedIcons.Zap },
        { category: 'frontend', title: 'Sistemas JavaScript / BaaS', eyebrow: 'JS MODERNO & BAAS', description: 'Arquitetura rápida com acesso seguro a nível de linha e bindings de dados reativos.', tags: ['MERN / PERN', 'SvelteKit Full-Stack', 'Supabase RLS', 'PocketBase & SQLite', 'Node.js / Express', 'Firebase Rules'], metric: 'Segurança: RLS Declarativo', footer: 'Edge Sem Overhead', accent: 'amber', icon: sharedIcons.Database },
        { category: 'infra', title: 'Bancos de Dados & Otimização de Consultas', eyebrow: 'PERSISTÊNCIA DE DADOS', description: 'Ajuste de índices relacionais, índices geoespaciais e camadas de cache em memória.', tags: ['Índices PostgreSQL', 'Cache Redis & PubSub', 'MySQL Master/Replica', 'Prisma & Drizzle', 'PgBouncer Pooling'], metric: 'Latência P99: < 8ms', footer: 'Resiliência ACID', accent: 'cyan', icon: sharedIcons.Layers3 },
        { category: 'infra', title: 'Infraestrutura & Integrações', eyebrow: 'DEVOPS & INTEGRAÇÃO', description: 'Pipelines sem downtime, webhooks assíncronos e orquestração CRM empresarial.', tags: ['APIs RESTful & GraphQL', 'Motores de Webhooks', 'Feeds CRM de Luxo', 'Automação CI/CD', 'Hardening Linux / Debian'], metric: 'SLA de Uptime: 99,99%', footer: 'Deploy Sem Downtime', accent: 'rose', icon: sharedIcons.Network },
      ],
    },
    experience: {
      module: '03 // Trajetória Comprovada',
      title: 'Cronologia Executiva e de Engenharia',
      caption: 'Clique em qualquer posição para expandir o detalhamento da arquitetura',
      activeRole: 'Cargo Atual',
      expandLabel: 'Expandir arquitetura',
      collapseLabel: 'Recolher detalhes',
      techBreakdown: 'DETALHAMENTO DA ARQUITETURA TÉCNICA',
      experiences: [
        { company: 'EQUA Estates', role: 'Diretor de Tecnologia (CTO)', location: 'Marbella / Estepona, Costa del Sol, Espanha', period: '2026 – Presente', label: 'Liderança Executiva', accent: 'emerald', bullets: ['Liderei a arquitetura de sistemas e a estratégia técnica moderna para um portal imobiliário de ultra-luxo.', 'Arquitetei uma plataforma Next.js App Router com React Server Components, Server Actions e armazenamento PostgreSQL otimizado.', 'Projetei feeds de sincronização CRM bidirecional com validação de esquema, cache edge e distribuição inteligente de leads.'], specs: [['RUNTIME NÚCLEO', 'Next.js 15, Node 22 LTS, Edge Runtime'], ['PERSISTÊNCIA', 'PostgreSQL, Redis Cache, PgBouncer'], ['SINCRONIZAÇÃO', 'Webhooks, Feeds CRM, CDN S3 Imagens']] },
        { company: 'Techno Co.', role: 'Engenheiro de Soluções Full-Stack Líder / Tech Lead', location: 'Ibiza, Ilhas Baleares, Espanha', period: 'Abr 2018 – Jun 2021', label: 'Líder de Equipe de Engenharia', accent: 'indigo', bullets: ['Dirigi microsserviços backend desacoplados e gateways API Node.js servindo mais de 12 mercados internacionais.', 'Liderei o ajuste de bancos de dados, refatoração de índices de consultas e cache Redis que reduziu os tempos de resposta p95 em 45%.', 'Supervisionei uma equipe multidisciplinar de 35 engenheiros com deploys CI/CD containerizados e zero downtime operacional.'], specs: [['TAMANHO EQUIPE', '35 Engenheiros & QAs Liderados'], ['INFRAESTRUTURA', 'Go, Docker, Kubernetes, AWS EKS'], ['DESEMPENHO', '-45% Latência Reduzida']] },
        { company: 'Buy a Dream', role: 'Engenheiro Frontend & Plataforma Sênior', location: 'Barcelona, Catalunha, Espanha', period: 'Dez 2017 – Abr 2018', label: 'Modernização de Plataforma', accent: 'slate', bullets: ['Modernizei sistemas de comércio digital storefront em 7 mercados europeus Tier-1 com design modular de componentes.', 'Integrei gateways de pagamento multi-moeda e dispatchers de webhooks assíncronos com SLAs de resposta mobile-first rigorosos.'], specs: [['HIGHLIGHTS STACK', 'React, Vite, APIs Node, Webhooks Stripe'], ['ALCANCE DEPLOY', '7 Portais Regionais Europeus Tier-1']] },
        { company: 'So Portas', role: 'Desenvolvedor Full-Stack & de Sistemas', location: 'Joinville, Santa Catarina, Brasil', period: 'Mar 2010 – Jun 2012', label: 'Bancos de Dados & Sistemas', accent: 'slate', bullets: ['Executei uma migração empresarial de sistemas de inventário on-premise para armazenamento cloud MySQL com zero downtime operacional.', 'Conectei terminais de vendas em tempo real com a logística automatizada de armazém de fábrica através de interfaces RESTful.'], specs: [['SISTEMAS', 'MySQL, APIs RESTful, Inventário'], ['OPERAÇÕES', 'Logística de Fábrica & Terminais de Venda']] },
      ],
    },
    projects: {
      module: '04 // Casos de Produção',
      title: 'Arquiteturas e Projetos Destacados',
      caption: '7 implementações arquitetônicas emblemáticas',
      inspectSpec: 'Inspecionar spec',
      blueprints: [
        { number: '01', title: 'Motor Imobiliário de Luxo', stack: 'Next.js 15 & PostgreSQL', description: 'Ingestão dinâmica CRM e geração SSG no edge para villas de luxo na Costa del Sol, com imagens automatizadas e consultas geoespaciais de catálogo.', bullets: ['React Server Actions & RSC', 'Ingestão Assíncrona de Feeds CRM', 'Regeneração Estática Incremental'], footer: 'EQUA Estates Tech', snippet: 'equa', accent: 'emerald' },
        { number: '02', title: 'Microsserviços de Alto Desempenho', stack: 'Go & gRPC Protobuf', description: 'Malha de serviços RPC distribuídos para telemetria, pedidos e validação de pagamentos com contratos de protocolo estritos e streams Kafka.', bullets: ['Latência IPC gRPC sub-milissegundo', 'Partições Kafka para event sourcing', 'Tracing distribuído OpenTelemetry'], footer: 'Malha Distribuída', snippet: 'go', accent: 'indigo' },
        { number: '03', title: 'Stack Colaborativo em Tempo Real', stack: 'Elixir PETAL Stack', description: 'Sincronização de estado de overhead ultrabaixo usando Phoenix LiveView WebSockets para lances em tempo real e feeds multi-agente.', bullets: ['2M conexões concorrentes por nó', 'DOM diffing dirigido por servidor', 'Árvores de supervisão OTP GenServer'], footer: 'Concorrência BEAM', snippet: 'elixir', accent: 'cyan' },
        { number: '04', title: 'Plataforma Monolito Produtiva', stack: 'Rails 8+ & Kamal', description: 'Deploy Rails moderno usando contêineres bare-metal, Turbo morphing, workers Solid Queue e cache resiliente.', bullets: ['Fila sem dependências via Solid Queue', 'Morphing Hotwire/Turbo Stream', 'Orquestração de contêineres Kamal'], footer: 'Full-Stack Lean', snippet: 'kamal', accent: 'rose' },
        { number: '05', title: 'Serviços Enterprise (.NET 8)', stack: '.NET 8 & ASP.NET Core', description: 'Web API com Clean Architecture, Entity Framework Core, padrões CQRS, autenticação JWT e clientes potenciados com Vite.', bullets: ['Modelos de domínio fortemente tipados', 'Pipelines de migração EF Core', 'Handlers assíncronos de alta concorrência'], footer: 'Nível Corporativo', snippet: 'go', accent: 'blue' },
        { number: '06', title: 'Motor Estático Zero-JS', stack: 'Astro Islands', description: 'Arquitetura content-first com hidratação parcial, enviando mínimo JavaScript de runtime enquanto widgets interativos carregam sob demanda.', bullets: ['Diretivas client:visible seletivas', 'Coleções de conteúdo Markdown/MDX', '100/100 Lighthouse por padrão'], footer: 'Edge Islands', snippet: 'equa', accent: 'amber' },
        { number: '07', title: 'Suite Edge Reativa: Arquitetura RLS', stack: 'SvelteKit + Supabase BaaS', description: 'Padrão de aplicação serverless usando proteção declarativa de tenants, runes reativos de granulação fina e difusão instantânea de mudanças no banco de dados.', bullets: ['Supabase Auth', 'RLS SQL Declarativo', 'Postgres Realtime', 'Svelte 5 Runes'], footer: 'Arquitetura Destacada', snippet: 'equa', accent: 'emerald' },
      ],
    },
    credentials: {
      moduleEducation: '05 // Fundamentos Acadêmicos',
      titleEducation: 'Educação Formal e Formação',
      moduleLanguages: '06 // Operações Globais',
      titleLanguages: 'Idiomas e Fluência',
      languagesIntro: 'Décadas de comunicação direta de engenharia executiva entre América do Norte, Europa e América Latina.',
      education: [
        { year: '2006 – 2010 • Nova York, EUA', title: 'Bacharelado (BA) em Publicidade e Comunicações Digitais', school: 'School of Visual Arts (SVA), NYC', mark: 'SVA', copy: 'Residência técnica de 14 meses na DDB Nova York, conectando software web interativo e sistemas de design de campanhas internacionais.' },
        { year: '2005 • Vancouver, Canadá', title: 'Diploma em Sistemas Web e Tecnologias de Marca Digital', school: 'Serebra Connect', mark: 'SC', copy: 'Fundamentos de ciência da computação, engenharia de bancos de dados relacionais, protocolos de rede e padrões web distribuídos.' },
      ],
      languages: [
        ['Inglês', 'Nativo / C2', '100%', 'Educação bilíngue em NYC; líder técnico para equipes multinacionais.'],
        ['Português', 'Nativo / C2', '100%', 'Língua nativa; ampla experiência liderando operações na América Latina.'],
        ['Espanhol', 'Fluente / C1–C2', '95%', 'Residente na Espanha; lidera negociações de alto nível com stakeholders em espanhol.'],
      ],
    },
    specs: {
      title: 'TELEMETRIA DE CONFIG ARQUITETÔNICA // REPL',
      compiledIn: '● COMPILADO EM 28ms',
      copyCode: 'copiar código',
      placeholder: "digite 'help', 'stacks', 'contact'...",
      enterLabel: 'pressione [Enter]',
      prompt: 'welly@architecture-portal:~$',
      snippetLabels: [['equa', 'next.config.ts'], ['go', 'server.go (gRPC)'], ['elixir', 'live_view.ex'], ['kamal', 'deploy.yml (Kamal)']],
      cli: {
        help: 'Comandos disponíveis: status, stacks, contact, benchmarks, clear',
        status: 'DISPONÍVEL: Wellington está aceitando cargas de Fractional CTO e assessoria para empresas de alto crescimento.',
        stacks: 'Next.js 15, Go gRPC, Elixir Phoenix, Rails 8 Kamal, .NET 8, SvelteKit + Supabase, PostgreSQL, Redis.',
        contact: 'Email: welly.almeida@gmail.com | Tel: +34 604 286 691 | Localização: Estepona, Espanha',
        benchmarks: 'Core Web Vitals: 99/100 | TTFB: <180ms edge | 12+ mercados escalados | 35 engenheiros gerenciados',
        unknown: "Comando desconhecido: '{cmd}'. Digite 'help' para ver as diretivas CLI disponíveis.",
      },
      toast: {
        email: 'Email copiado para a área de transferência',
        phone: 'Número de telefone copiado',
        code: 'Configuração fonte copiada',
        unavailable: 'Copiar não está disponível neste navegador',
        loaded: 'Blueprint carregado: {key}',
      },
    },
    cta: {
      badge: 'ABERTO A CARGOS FRACTIONAL CTO E ASSESSORIAS',
      title: 'Arquitetando Plataformas Resilientes que Superam os Benchmarks',
      description: 'Disponível para cargos CTO executivos, design de sistemas de alto desempenho, auditoria tecnológica e reestruturação, e engenharia de portais imobiliários de luxo.',
      copyEmail: 'Copiar Email: {email}',
      callDirect: 'Ligar Direto',
    },
    footer: {
      tagline: 'WELLINGTON ALMEIDA // PORTFÓLIO EXECUTIVO 2026',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      backToTop: 'Voltar ao topo ↑',
      location: 'ESTEPONA, COSTA DEL SOL, ESPANHA',
    },
  },
};

export const snippets: Record<SnippetKey, { filename: string; code: string }> = {
  equa: { filename: 'equa-estates // architecture/next.config.ts', code: `import type { NextConfig } from 'next';\n\nconst nextConfig: NextConfig = {\n  reactStrictMode: true,\n  poweredByHeader: false,\n  compress: true,\n  experimental: {\n    serverActions: { bodySizeLimit: '4mb' },\n    optimizePackageImports: ['lucide-react', 'date-fns'],\n  },\n  images: {\n    formats: ['image/avif', 'image/webp'],\n    minimumCacheTTL: 86400,\n    remotePatterns: [{ protocol: 'https', hostname: 'crm.equa-estates.com' }],\n  },\n};\n\nexport default nextConfig;` },
  go: { filename: 'techno-services // cmd/telemetry/server.go', code: `package main\n\nimport (\n    "net"\n    "google.golang.org/grpc"\n    pb "github.com/technoco/services/proto/v1"\n)\n\ntype TelemetryServer struct {\n    pb.UnimplementedTelemetryServiceServer\n}\n\nfunc main() {\n    lis, _ := net.Listen("tcp", ":50051")\n    grpcServer := grpc.NewServer()\n    pb.RegisterTelemetryServiceServer(grpcServer, &TelemetryServer{})\n    grpcServer.Serve(lis)\n}` },
  elixir: { filename: 'realtime_bid // lib/realtime_bid_web/live/auction_live.ex', code: `defmodule RealtimeBidWeb.AuctionLive do\n  use RealtimeBidWeb, :live_view\n  alias RealtimeBid.Auctions\n\n  @impl true\n  def mount(%{"id" => id}, _session, socket) do\n    if connected?(socket), do: Auctions.subscribe("auction:#{id}")\n    {:ok, assign(socket, auction: Auctions.get!(id), latency_ms: 1.4)}\n  end\n\n  @impl true\n  def handle_info({:bid_placed, new_bid}, socket) do\n    {:noreply, update(socket, :auction, fn a -> %{a | current_bid: new_bid} end)}\n  end\nend` },
  kamal: { filename: 'monolith-app // config/deploy.yml', code: `service: enterprise-portal\nimage: welly/enterprise-portal\n\nservers:\n  web:\n    hosts:\n      - 195.201.34.82\n      - 195.201.34.83\n\nproxy:\n  ssl: true\n  host: equa-estates.com\n\nbuilder:\n  arch: amd64\n\nenv:\n  secret:\n    - RAILS_MASTER_KEY\n    - DATABASE_URL\n    - REDIS_URL` },
};

export const accentClasses = {
  emerald: { text: 'text-emerald-300', border: 'border-emerald-500/30', soft: 'bg-emerald-500/10', dot: 'bg-emerald-400', hover: 'group-hover:text-emerald-300' },
  indigo: { text: 'text-indigo-300', border: 'border-indigo-500/30', soft: 'bg-indigo-500/10', dot: 'bg-indigo-400', hover: 'group-hover:text-indigo-300' },
  cyan: { text: 'text-cyan-300', border: 'border-cyan-500/30', soft: 'bg-cyan-500/10', dot: 'bg-cyan-400', hover: 'group-hover:text-cyan-300' },
  amber: { text: 'text-amber-300', border: 'border-amber-500/30', soft: 'bg-amber-500/10', dot: 'bg-amber-400', hover: 'group-hover:text-amber-300' },
  rose: { text: 'text-rose-300', border: 'border-rose-500/30', soft: 'bg-rose-500/10', dot: 'bg-rose-400', hover: 'group-hover:text-rose-300' },
  blue: { text: 'text-sky-300', border: 'border-sky-500/30', soft: 'bg-sky-500/10', dot: 'bg-sky-400', hover: 'group-hover:text-sky-300' },
  slate: { text: 'text-slate-300', border: 'border-slate-500/30', soft: 'bg-slate-500/10', dot: 'bg-slate-400', hover: 'group-hover:text-slate-200' },
};
