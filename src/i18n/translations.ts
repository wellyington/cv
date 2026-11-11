import type { LucideIcon } from 'lucide-react';
import { Globe2, Languages, Layers3, MapPin, Network, Search } from 'lucide-react';

export type Lang = 'en' | 'es' | 'pt';

export const LANGS: Lang[] = ['en', 'es', 'pt'];

export const LANG_HTML: Record<Lang, string> = {
  en: 'en',
  es: 'es',
  pt: 'pt-BR',
};

export const OG_LOCALE: Record<Lang, string> = {
  en: 'en_GB',
  es: 'es_ES',
  pt: 'pt_BR',
};

export const links = {
  site: 'https://wellyington.github.io/',
  cv: 'https://wellyington.github.io/cv/',
  featured: 'https://wellyington.github.io/#featured',
  x: 'https://x.com/wellyington',
  instagram: 'https://instagram.com/wellyington',
  facebook: 'https://facebook.com/wellyington/',
  linkedin: 'https://www.linkedin.com/in/wellyington/',
  github: 'https://github.com/wellyington',
  email: 'mailto:welly.almeida@gmail.com',
  phone: 'tel:+34604286691',
  whatsapp: 'https://wa.me/34604286691',
};

export type Category = 'all' | 'build' | 'design' | 'strategy' | 'reach';
export type SnippetKey = 'profile' | 'services' | 'contact' | 'reach';

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
  href: string;
  accent: 'emerald' | 'indigo' | 'cyan' | 'amber' | 'rose' | 'blue';
};

export type EducationT = {
  year: string;
  title: string;
  school: string;
  mark: string;
  copy: string;
};

export type FaqItem = { question: string; answer: string };

export type Translation = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    keywords: string;
  };
  nav: {
    profile: string;
    services: string;
    practice: string;
    work: string;
    background: string;
    questions: string;
    mainSite: string;
    copyEmail: string;
    resumePdf: string;
    skip: string;
  };
  hero: {
    identifier: string;
    reach: string;
    name: string;
    subtitle: string;
    location: string;
    intro: string;
    viewWork: string;
    services: string;
    contact: string;
    stats: [string, string, string, string][];
  };
  services: {
    module: string;
    title: string;
    caption: string;
    filters: [Category, string][];
    competencies: CompetencyT[];
  };
  practice: {
    module: string;
    title: string;
    caption: string;
    activeRole: string;
    expandLabel: string;
    collapseLabel: string;
    detailLabel: string;
    items: ExperienceT[];
  };
  projects: {
    module: string;
    title: string;
    caption: string;
    viewWork: string;
    items: BlueprintT[];
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
  faq: {
    module: string;
    title: string;
    items: FaqItem[];
  };
  specs: {
    title: string;
    status: string;
    copyCode: string;
    placeholder: string;
    enterLabel: string;
    prompt: string;
    snippetLabels: [SnippetKey, string][];
    cli: {
      help: string;
      status: string;
      services: string;
      contact: string;
      reach: string;
      unknown: string;
    };
    toast: {
      email: string;
      phone: string;
      code: string;
      unavailable: string;
    };
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    email: string;
    call: string;
    whatsapp: string;
  };
  footer: {
    tagline: string;
    site: string;
    linkedin: string;
    github: string;
    x: string;
    instagram: string;
    facebook: string;
    email: string;
    backToTop: string;
    location: string;
  };
};

const icons = { Globe2, Layers3, Network, Search, Languages, MapPin };

const featured = links.featured;

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'Wellyington | Freelance Web Developer & Designer, UK & Europe',
      description:
        'Wellington Almeida (Wellyington), freelance web developer, digital designer and SEO/AEO consultant in Estepona, Spain. Remote across the UK, Portugal and Europe.',
      ogTitle: 'Wellyington — Freelance web developer, designer and strategist',
      ogDescription:
        'Freelance web development, digital design, strategy and SEO/AEO consulting. Based in Estepona, working remotely across the UK and Europe.',
      keywords:
        'Wellyington, Wellington Almeida, freelance web developer, web designer, digital strategist, SEO consultant, AEO, remote, UK, Europe',
    },
    nav: {
      profile: 'Profile',
      services: 'Services',
      practice: 'Practice',
      work: 'Work',
      background: 'Background',
      questions: 'Questions',
      mainSite: 'Main site',
      copyEmail: 'Copy email',
      resumePdf: 'Print CV',
      skip: 'Skip to content',
    },
    hero: {
      identifier: 'WELLYINGTON // FREELANCE',
      reach: 'UK · EUROPE · REMOTE',
      name: 'Wellington Almeida',
      subtitle: 'Freelance web developer, digital designer and strategist',
      location: 'Estepona, Málaga, Spain — UK, Europe and remote',
      intro:
        'Wellyington is the name I work under. I am a freelance web developer, digital designer and strategist, and I consult on SEO and AEO. Brazilian-born and raised in London, I studied advertising, film and photography at the School of Visual Arts in New York. Across 15+ years I have built custom websites and digital work for clients from Brazil to Barcelona, Ibiza and southern Spain. I am based in Estepona and I work in English, Portuguese and Spanish, including remotely across the UK, Portugal and Europe.',
      viewWork: 'Selected work',
      services: 'Services',
      contact: 'Contact',
      stats: [
        ['PRACTICE', '15+ years', 'Freelance web development, design and strategy.', 'indigo'],
        ['LANGUAGES', 'EN · PT · ES', 'English, Portuguese and Spanish.', 'emerald'],
        ['REACH', 'UK & Europe', 'Remote, and on the ground in southern Spain.', 'cyan'],
      ],
    },
    services: {
      module: '02 // Services',
      title: 'Web development, design, strategy, SEO and AEO',
      caption: 'Filter by the kind of work',
      filters: [
        ['all', 'All'],
        ['build', 'Development'],
        ['design', 'Design'],
        ['strategy', 'Strategy'],
        ['reach', 'Reach'],
      ],
      competencies: [
        {
          category: 'build',
          title: 'Web development',
          eyebrow: 'BUILD',
          description:
            'Custom websites and web applications shaped around a real business. From WordPress and WooCommerce to bespoke front-end work, with care for speed, usability and upkeep.',
          tags: ['Custom sites', 'Web applications', 'WordPress', 'WooCommerce', 'CMS and integrations'],
          metric: 'Freelance development',
          footer: 'Clear to maintain',
          accent: 'indigo',
          icon: icons.Globe2,
        },
        {
          category: 'design',
          title: 'Digital design',
          eyebrow: 'DESIGN',
          description:
            'Visual systems and straightforward user journeys. Brand direction, information architecture and interface design so a business is distinctive and easy to use.',
          tags: ['Visual identity', 'UX and UI', 'Brand systems'],
          metric: 'Design with a job to do',
          footer: 'Easy to understand',
          accent: 'emerald',
          icon: icons.Layers3,
        },
        {
          category: 'strategy',
          title: 'Digital strategy',
          eyebrow: 'STRATEGY',
          description:
            'Positioning, audience, content and the path a customer actually takes. Help deciding what to build, how to present it and where to focus.',
          tags: ['Positioning', 'Content', 'Customer journeys', 'Growth planning'],
          metric: 'Before the build',
          footer: 'Tied to the business',
          accent: 'cyan',
          icon: icons.Network,
        },
        {
          category: 'strategy',
          title: 'SEO and AEO consulting',
          eyebrow: 'SEARCH & ANSWERS',
          description:
            'Consulting so a business can be found in search and in answer engines: clear pages, plain language and a structure people and machines can follow.',
          tags: ['SEO', 'AEO', 'Page structure', 'Plain language'],
          metric: 'Findable on purpose',
          footer: 'Search and answer engines',
          accent: 'amber',
          icon: icons.Search,
        },
        {
          category: 'reach',
          title: 'English, Portuguese and Spanish',
          eyebrow: 'LANGUAGES',
          description:
            'I work in all three. Useful for teams and customers who mix languages, in the UK, in Iberia and further across Europe.',
          tags: ['English', 'Portuguese', 'Spanish'],
          metric: 'Three working languages',
          footer: 'Raised in London',
          accent: 'rose',
          icon: icons.Languages,
        },
        {
          category: 'reach',
          title: 'UK, Europe and remote',
          eyebrow: 'WHERE',
          description:
            'Based in Estepona, Málaga. Available for remote freelance work in London, the UK, Spain, Portugal and the EU, and in person along the Costa del Sol.',
          tags: ['London', 'United Kingdom', 'Spain', 'Portugal', 'Remote'],
          metric: 'Remote-friendly',
          footer: 'Estepona, Spain',
          accent: 'indigo',
          icon: icons.MapPin,
        },
      ],
    },
    practice: {
      module: '03 // Practice',
      title: 'Where I work',
      caption: 'An independent practice, not a list of employers',
      activeRole: 'Based here',
      expandLabel: 'More detail',
      collapseLabel: 'Hide detail',
      detailLabel: 'AT A GLANCE',
      items: [
        {
          company: 'Wellyington',
          role: 'Freelance web developer, designer and strategist',
          location: 'Estepona, Málaga, Spain',
          period: '15+ years',
          label: 'Independent practice',
          accent: 'emerald',
          bullets: [
            'Freelance web development, digital design, digital strategy, and SEO/AEO consulting.',
            'Custom websites and digital work for clients, from first conversation through to a site people can use.',
            'In English, Portuguese and Spanish.',
          ],
          specs: [
            ['BASED', 'Estepona, Málaga, Spain'],
            ['LANGUAGES', 'English, Portuguese, Spanish'],
            ['REACH', 'UK, Europe and remote'],
          ],
        },
        {
          company: 'Brazil, Barcelona, Ibiza',
          role: 'Client work',
          location: 'And southern Spain',
          period: '15+ years',
          label: 'International clients',
          accent: 'indigo',
          bullets: [
            'Clients from Brazil to Barcelona, Ibiza and the south of Spain.',
            'Selected projects are published on the main site, including property, interiors, editorial, wellness and relocation.',
          ],
          specs: [
            ['BRAZIL', 'Client work'],
            ['BARCELONA & IBIZA', 'Client work'],
            ['SOUTHERN SPAIN', 'Costa del Sol and nearby'],
          ],
        },
        {
          company: 'United Kingdom & Europe',
          role: 'Remote freelance',
          location: 'London, the UK, Portugal and the EU',
          period: 'Remote',
          label: 'Available at a distance',
          accent: 'slate',
          bullets: [
            'Raised in London. Available for remote work with clients in the UK and across Europe.',
            'Spain and Portugal included, in person on the Costa del Sol or at a distance.',
          ],
          specs: [
            ['LONDON', 'Raised in the UK'],
            ['EUROPE', 'Remote freelance'],
            ['PORTUGAL', 'In Portuguese, remote'],
          ],
        },
      ],
    },
    projects: {
      module: '04 // Selected work',
      title: 'Work published on the main site',
      caption: 'Short notes only — the full projects live on wellyington.github.io',
      viewWork: 'Open on the main site',
      items: [
        {
          number: '01',
          title: 'Equa Estates',
          stack: 'Property website',
          description:
            'Luxury property and relocation in Marbella. EQUA Estates helps international clients buy, rent and relocate to Marbella and the Costa del Sol, with property search, curated collections, area guidance and relocation support.',
          bullets: ['Property search', 'Curated collections', 'Relocation support'],
          footer: 'Costa del Sol',
          href: featured,
          accent: 'emerald',
        },
        {
          number: '02',
          title: 'Mirela B Interiors',
          stack: 'Interior design website',
          description: 'Interior design website, published with the selected work on the main site.',
          bullets: ['Interior design', 'Published on the main site'],
          footer: 'Selected work',
          href: featured,
          accent: 'indigo',
        },
        {
          number: '03',
          title: 'Mistral & Marea',
          stack: 'Editorial website',
          description: 'Editorial website, published with the selected work on the main site.',
          bullets: ['Editorial', 'Published on the main site'],
          footer: 'Selected work',
          href: featured,
          accent: 'cyan',
        },
        {
          number: '04',
          title: 'Chill and Heal Hub',
          stack: 'Wellness practice website',
          description: 'Wellness practice website, published with the selected work on the main site.',
          bullets: ['Wellness', 'Published on the main site'],
          footer: 'Selected work',
          href: featured,
          accent: 'amber',
        },
        {
          number: '05',
          title: 'Your New Life in Spain',
          stack: 'Relocation coaching website',
          description: 'Relocation coaching website, published with the selected work on the main site.',
          bullets: ['Relocation coaching', 'Published on the main site'],
          footer: 'Selected work',
          href: featured,
          accent: 'rose',
        },
      ],
    },
    credentials: {
      moduleEducation: '05 // Studies',
      titleEducation: 'Studies',
      moduleLanguages: '06 // Languages',
      titleLanguages: 'Languages',
      languagesIntro: 'I work in English, Portuguese and Spanish. Brazilian-born, raised in London, based in Spain.',
      education: [
        {
          year: 'New York, USA',
          title: 'Advertising, film and photography',
          school: 'School of Visual Arts (SVA)',
          mark: 'SVA',
          copy: 'Studied advertising, film and photography at the School of Visual Arts in New York.',
        },
      ],
      languages: [
        ['English', 'Working language', '100%', 'Raised in London. Used with clients in the UK and across Europe.'],
        ['Portuguese', 'Working language', '100%', 'Brazilian-born. Used with clients in Brazil and in Portuguese.'],
        ['Spanish', 'Working language', '100%', 'Based in Spain. Used from Barcelona and Ibiza to southern Spain.'],
      ],
    },
    faq: {
      module: '07 // Questions',
      title: 'For clients and recruiters',
      items: [
        {
          question: 'Do you work with clients in the UK and Europe?',
          answer:
            'Yes. I am based in Estepona, Málaga, Spain, and I work remotely with clients in London, the UK, Spain, Portugal and across Europe. I also meet in person along the Costa del Sol.',
        },
        {
          question: 'What do you do?',
          answer:
            'I am a freelance web developer, digital designer and strategist, and an SEO/AEO consultant. The work covers custom websites, design, positioning and being found in search and in answer engines.',
        },
        {
          question: 'Which languages do you work in?',
          answer: 'English, Portuguese and Spanish.',
        },
        {
          question: 'How can I get in touch?',
          answer:
            'Email welly.almeida@gmail.com, or call or WhatsApp +34 604 286 691. The main site is wellyington.github.io, and this CV lives at wellyington.github.io/cv.',
        },
      ],
    },
    specs: {
      title: 'PUBLIC PROFILE // NOTES',
      status: '● PUBLIC FACTS ONLY',
      copyCode: 'copy',
      placeholder: "type 'help', 'services', 'contact', 'reach'...",
      enterLabel: 'press [Enter]',
      prompt: 'wellyington@cv:~$',
      snippetLabels: [
        ['profile', 'profile.json'],
        ['services', 'services'],
        ['contact', 'contact'],
        ['reach', 'reach'],
      ],
      cli: {
        help: 'Commands: status, services, contact, reach, clear',
        status: 'Available for freelance web development, design, strategy, and SEO/AEO consulting, including remote work across the UK and Europe.',
        services: 'Web development, digital design, digital strategy, SEO consulting, AEO consulting. WordPress, WooCommerce and custom front-end work.',
        contact: 'Email: welly.almeida@gmail.com | Phone / WhatsApp: +34 604 286 691 | Site: https://wellyington.github.io/',
        reach: 'Based in Estepona, Málaga, Spain. Clients from Brazil to Barcelona, Ibiza and southern Spain. Remote across the UK, Portugal and Europe.',
        unknown: "Unknown command: '{cmd}'. Type 'help'.",
      },
      toast: {
        email: 'Email copied',
        phone: 'Phone number copied',
        code: 'Note copied',
        unavailable: 'Copy is unavailable in this browser',
      },
    },
    cta: {
      badge: 'OPEN FOR FREELANCE AND REMOTE WORK',
      title: 'A freelance partner for the UK, Europe and beyond',
      description:
        'Web development, digital design, strategy, and SEO/AEO consulting. Based in Estepona. English, Portuguese and Spanish.',
      email: 'Email {email}',
      call: 'Call',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'WELLYINGTON // ESTEPONA, MÁLAGA',
      site: 'Main site',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      x: 'X',
      instagram: 'Instagram',
      facebook: 'Facebook',
      email: 'Email',
      backToTop: 'Back to top ↑',
      location: 'UK · EUROPE · REMOTE',
    },
  },
  es: {
    meta: {
      title: 'Wellyington | Desarrollador web freelance y diseñador, Reino Unido y Europa',
      description:
        'Wellington Almeida (Wellyington), desarrollador web freelance, diseñador digital y consultor SEO/AEO en Estepona. Trabajo en remoto en el Reino Unido, Portugal y Europa.',
      ogTitle: 'Wellyington — Desarrollador web freelance, diseñador y estratega',
      ogDescription:
        'Desarrollo web, diseño digital, estrategia y consultoría SEO/AEO. Con base en Estepona y en remoto por el Reino Unido y Europa.',
      keywords:
        'Wellyington, Wellington Almeida, desarrollador web freelance, diseñador web, estratega digital, consultor SEO, AEO, remoto, Reino Unido, Europa',
    },
    nav: {
      profile: 'Perfil',
      services: 'Servicios',
      practice: 'Práctica',
      work: 'Trabajo',
      background: 'Formación',
      questions: 'Preguntas',
      mainSite: 'Sitio principal',
      copyEmail: 'Copiar email',
      resumePdf: 'Imprimir CV',
      skip: 'Saltar al contenido',
    },
    hero: {
      identifier: 'WELLYINGTON // FREELANCE',
      reach: 'REINO UNIDO · EUROPA · REMOTO',
      name: 'Wellington Almeida',
      subtitle: 'Desarrollador web freelance, diseñador digital y estratega',
      location: 'Estepona, Málaga, España — Reino Unido, Europa y en remoto',
      intro:
        'Wellyington es el nombre con el que trabajo. Soy desarrollador web freelance, diseñador digital y estratega, y consultor de SEO y AEO. Nací en Brasil, crecí en Londres y estudié publicidad, cine y fotografía en la School of Visual Arts de Nueva York. En más de 15 años he hecho webs y trabajo digital para clientes desde Brasil hasta Barcelona, Ibiza y el sur de España. Vivo en Estepona y trabajo en inglés, portugués y español, también en remoto en el Reino Unido, Portugal y Europa.',
      viewWork: 'Trabajo seleccionado',
      services: 'Servicios',
      contact: 'Contacto',
      stats: [
        ['PRÁCTICA', '15+ años', 'Desarrollo web, diseño y estrategia por cuenta propia.', 'indigo'],
        ['IDIOMAS', 'EN · PT · ES', 'Inglés, portugués y español.', 'emerald'],
        ['ALCANCE', 'RU y Europa', 'En remoto, y en persona en el sur de España.', 'cyan'],
      ],
    },
    services: {
      module: '02 // Servicios',
      title: 'Desarrollo web, diseño, estrategia, SEO y AEO',
      caption: 'Filtra por tipo de trabajo',
      filters: [
        ['all', 'Todo'],
        ['build', 'Desarrollo'],
        ['design', 'Diseño'],
        ['strategy', 'Estrategia'],
        ['reach', 'Alcance'],
      ],
      competencies: [
        {
          category: 'build',
          title: 'Desarrollo web',
          eyebrow: 'CONSTRUIR',
          description:
            'Webs y aplicaciones a medida, pensadas para un negocio real. De WordPress y WooCommerce a un front-end propio, con atención a la velocidad, el uso y el mantenimiento.',
          tags: ['Webs a medida', 'Aplicaciones web', 'WordPress', 'WooCommerce', 'CMS e integraciones'],
          metric: 'Desarrollo freelance',
          footer: 'Fácil de mantener',
          accent: 'indigo',
          icon: icons.Globe2,
        },
        {
          category: 'design',
          title: 'Diseño digital',
          eyebrow: 'DISEÑO',
          description:
            'Sistemas visuales y recorridos claros. Dirección de marca, arquitectura de la información y diseño de interfaz para que un negocio se distinga y se entienda.',
          tags: ['Identidad visual', 'UX y UI', 'Sistemas de marca'],
          metric: 'Diseño con una función',
          footer: 'Fácil de entender',
          accent: 'emerald',
          icon: icons.Layers3,
        },
        {
          category: 'strategy',
          title: 'Estrategia digital',
          eyebrow: 'ESTRATEGIA',
          description:
            'Posicionamiento, audiencia, contenido y el camino real del cliente. Ayuda para decidir qué construir, cómo presentarlo y dónde poner el foco.',
          tags: ['Posicionamiento', 'Contenido', 'Recorridos', 'Plan de crecimiento'],
          metric: 'Antes de construir',
          footer: 'Atada al negocio',
          accent: 'cyan',
          icon: icons.Network,
        },
        {
          category: 'strategy',
          title: 'Consultoría SEO y AEO',
          eyebrow: 'BÚSQUEDA Y RESPUESTAS',
          description:
            'Consultoría para que un negocio se encuentre en buscadores y en motores de respuesta: páginas claras, lenguaje llano y una estructura que se pueda seguir.',
          tags: ['SEO', 'AEO', 'Estructura', 'Lenguaje claro'],
          metric: 'Encontrable a propósito',
          footer: 'Buscadores y respuestas',
          accent: 'amber',
          icon: icons.Search,
        },
        {
          category: 'reach',
          title: 'Inglés, portugués y español',
          eyebrow: 'IDIOMAS',
          description:
            'Trabajo en los tres. Sirve para equipos y clientes que mezclan idiomas, en el Reino Unido, en Iberia y en el resto de Europa.',
          tags: ['Inglés', 'Portugués', 'Español'],
          metric: 'Tres idiomas de trabajo',
          footer: 'Criado en Londres',
          accent: 'rose',
          icon: icons.Languages,
        },
        {
          category: 'reach',
          title: 'Reino Unido, Europa y en remoto',
          eyebrow: 'DÓNDE',
          description:
            'Con base en Estepona, Málaga. Disponible para trabajo freelance en remoto en Londres, el Reino Unido, España, Portugal y la UE, y en persona en la Costa del Sol.',
          tags: ['Londres', 'Reino Unido', 'España', 'Portugal', 'Remoto'],
          metric: 'También en remoto',
          footer: 'Estepona, España',
          accent: 'indigo',
          icon: icons.MapPin,
        },
      ],
    },
    practice: {
      module: '03 // Práctica',
      title: 'Dónde trabajo',
      caption: 'Una práctica independiente, no una lista de empleadores',
      activeRole: 'Con base aquí',
      expandLabel: 'Más detalle',
      collapseLabel: 'Ocultar detalle',
      detailLabel: 'DE UN VISTAZO',
      items: [
        {
          company: 'Wellyington',
          role: 'Desarrollador web, diseñador y estratega freelance',
          location: 'Estepona, Málaga, España',
          period: '15+ años',
          label: 'Práctica independiente',
          accent: 'emerald',
          bullets: [
            'Desarrollo web, diseño digital, estrategia digital y consultoría SEO/AEO por cuenta propia.',
            'Webs y trabajo digital para clientes, de la primera conversación a un sitio que se pueda usar.',
            'En inglés, portugués y español.',
          ],
          specs: [
            ['BASE', 'Estepona, Málaga, España'],
            ['IDIOMAS', 'Inglés, portugués, español'],
            ['ALCANCE', 'Reino Unido, Europa y remoto'],
          ],
        },
        {
          company: 'Brasil, Barcelona, Ibiza',
          role: 'Trabajo con clientes',
          location: 'Y el sur de España',
          period: '15+ años',
          label: 'Clientes internacionales',
          accent: 'indigo',
          bullets: [
            'Clientes desde Brasil hasta Barcelona, Ibiza y el sur de España.',
            'Los proyectos seleccionados están en el sitio principal: propiedad, interiores, editorial, bienestar y relocalización.',
          ],
          specs: [
            ['BRASIL', 'Trabajo con clientes'],
            ['BARCELONA E IBIZA', 'Trabajo con clientes'],
            ['SUR DE ESPAÑA', 'Costa del Sol y alrededores'],
          ],
        },
        {
          company: 'Reino Unido y Europa',
          role: 'Freelance en remoto',
          location: 'Londres, el Reino Unido, Portugal y la UE',
          period: 'En remoto',
          label: 'Disponible a distancia',
          accent: 'slate',
          bullets: [
            'Crecí en Londres. Disponible para trabajo en remoto con clientes en el Reino Unido y en Europa.',
            'España y Portugal incluidos, en persona en la Costa del Sol o a distancia.',
          ],
          specs: [
            ['LONDRES', 'Criado en el Reino Unido'],
            ['EUROPA', 'Freelance en remoto'],
            ['PORTUGAL', 'En portugués, en remoto'],
          ],
        },
      ],
    },
    projects: {
      module: '04 // Trabajo seleccionado',
      title: 'Trabajo publicado en el sitio principal',
      caption: 'Notas breves — los proyectos completos están en wellyington.github.io',
      viewWork: 'Abrir en el sitio principal',
      items: [
        {
          number: '01',
          title: 'Equa Estates',
          stack: 'Web inmobiliaria',
          description:
            'Propiedad de lujo y relocalización en Marbella. EQUA Estates ayuda a clientes internacionales a comprar, alquilar y trasladarse a Marbella y la Costa del Sol, con búsqueda de propiedades, colecciones, guía de zonas y apoyo a la relocalización.',
          bullets: ['Búsqueda de propiedades', 'Colecciones', 'Apoyo a la relocalización'],
          footer: 'Costa del Sol',
          href: featured,
          accent: 'emerald',
        },
        {
          number: '02',
          title: 'Mirela B Interiors',
          stack: 'Web de interiorismo',
          description: 'Web de interiorismo, publicada con el trabajo seleccionado del sitio principal.',
          bullets: ['Interiorismo', 'Publicado en el sitio principal'],
          footer: 'Trabajo seleccionado',
          href: featured,
          accent: 'indigo',
        },
        {
          number: '03',
          title: 'Mistral & Marea',
          stack: 'Web editorial',
          description: 'Web editorial, publicada con el trabajo seleccionado del sitio principal.',
          bullets: ['Editorial', 'Publicado en el sitio principal'],
          footer: 'Trabajo seleccionado',
          href: featured,
          accent: 'cyan',
        },
        {
          number: '04',
          title: 'Chill and Heal Hub',
          stack: 'Web de bienestar',
          description: 'Web de un espacio de bienestar, publicada con el trabajo seleccionado del sitio principal.',
          bullets: ['Bienestar', 'Publicado en el sitio principal'],
          footer: 'Trabajo seleccionado',
          href: featured,
          accent: 'amber',
        },
        {
          number: '05',
          title: 'Your New Life in Spain',
          stack: 'Web de coaching de relocalización',
          description: 'Web de coaching de relocalización, publicada con el trabajo seleccionado del sitio principal.',
          bullets: ['Coaching de relocalización', 'Publicado en el sitio principal'],
          footer: 'Trabajo seleccionado',
          href: featured,
          accent: 'rose',
        },
      ],
    },
    credentials: {
      moduleEducation: '05 // Estudios',
      titleEducation: 'Estudios',
      moduleLanguages: '06 // Idiomas',
      titleLanguages: 'Idiomas',
      languagesIntro: 'Trabajo en inglés, portugués y español. Nací en Brasil, crecí en Londres y vivo en España.',
      education: [
        {
          year: 'Nueva York, EE. UU.',
          title: 'Publicidad, cine y fotografía',
          school: 'School of Visual Arts (SVA)',
          mark: 'SVA',
          copy: 'Estudié publicidad, cine y fotografía en la School of Visual Arts de Nueva York.',
        },
      ],
      languages: [
        ['Inglés', 'Idioma de trabajo', '100%', 'Crecí en Londres. Lo uso con clientes en el Reino Unido y en Europa.'],
        ['Portugués', 'Idioma de trabajo', '100%', 'Nací en Brasil. Lo uso con clientes en Brasil y en portugués.'],
        ['Español', 'Idioma de trabajo', '100%', 'Vivo en España. Lo uso de Barcelona e Ibiza al sur de España.'],
      ],
    },
    faq: {
      module: '07 // Preguntas',
      title: 'Para clientes y equipos',
      items: [
        {
          question: '¿Trabajas con clientes en el Reino Unido y en Europa?',
          answer:
            'Sí. Vivo en Estepona, Málaga, España, y trabajo en remoto con clientes en Londres, el Reino Unido, España, Portugal y el resto de Europa. También me reúno en persona en la Costa del Sol.',
        },
        {
          question: '¿A qué te dedicas?',
          answer:
            'Soy desarrollador web freelance, diseñador digital y estratega, y consultor SEO/AEO. El trabajo incluye webs a medida, diseño, posicionamiento y hacerse encontrar en buscadores y en motores de respuesta.',
        },
        {
          question: '¿En qué idiomas trabajas?',
          answer: 'Inglés, portugués y español.',
        },
        {
          question: '¿Cómo contactar?',
          answer:
            'Email welly.almeida@gmail.com, o llamada y WhatsApp +34 604 286 691. El sitio principal es wellyington.github.io y este CV está en wellyington.github.io/cv.',
        },
      ],
    },
    specs: {
      title: 'PERFIL PÚBLICO // NOTAS',
      status: '● SOLO HECHOS PÚBLICOS',
      copyCode: 'copiar',
      placeholder: "escribe 'help', 'services', 'contact', 'reach'...",
      enterLabel: 'pulsa [Enter]',
      prompt: 'wellyington@cv:~$',
      snippetLabels: [
        ['profile', 'profile.json'],
        ['services', 'servicios'],
        ['contact', 'contacto'],
        ['reach', 'alcance'],
      ],
      cli: {
        help: 'Comandos: status, services, contact, reach, clear',
        status: 'Disponible para desarrollo web, diseño, estrategia y consultoría SEO/AEO, también en remoto en el Reino Unido y Europa.',
        services: 'Desarrollo web, diseño digital, estrategia digital, consultoría SEO y AEO. WordPress, WooCommerce y front-end a medida.',
        contact: 'Email: welly.almeida@gmail.com | Teléfono / WhatsApp: +34 604 286 691 | Sitio: https://wellyington.github.io/',
        reach: 'Con base en Estepona, Málaga, España. Clientes desde Brasil hasta Barcelona, Ibiza y el sur de España. En remoto en el Reino Unido, Portugal y Europa.',
        unknown: "Comando desconocido: '{cmd}'. Escribe 'help'.",
      },
      toast: {
        email: 'Email copiado',
        phone: 'Teléfono copiado',
        code: 'Nota copiada',
        unavailable: 'Copiar no está disponible en este navegador',
      },
    },
    cta: {
      badge: 'ABIERTO A TRABAJO FREELANCE Y EN REMOTO',
      title: 'Un freelance para el Reino Unido, Europa y más allá',
      description:
        'Desarrollo web, diseño digital, estrategia y consultoría SEO/AEO. Con base en Estepona. Inglés, portugués y español.',
      email: 'Email {email}',
      call: 'Llamar',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'WELLYINGTON // ESTEPONA, MÁLAGA',
      site: 'Sitio principal',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      x: 'X',
      instagram: 'Instagram',
      facebook: 'Facebook',
      email: 'Email',
      backToTop: 'Volver arriba ↑',
      location: 'REINO UNIDO · EUROPA · REMOTO',
    },
  },
  pt: {
    meta: {
      title: 'Wellyington | Desenvolvedor web freelancer e designer, Reino Unido e Europa',
      description:
        'Wellington Almeida (Wellyington), desenvolvedor web freelancer, designer digital e consultor de SEO/AEO em Estepona. Trabalho remoto no Reino Unido, em Portugal e na Europa.',
      ogTitle: 'Wellyington — Desenvolvedor web freelancer, designer e estrategista',
      ogDescription:
        'Desenvolvimento web, design digital, estratégia e consultoria de SEO/AEO. Base em Estepona, trabalho remoto no Reino Unido e na Europa.',
      keywords:
        'Wellyington, Wellington Almeida, desenvolvedor web freelancer, web designer, estrategista digital, consultor SEO, AEO, remoto, Reino Unido, Europa',
    },
    nav: {
      profile: 'Perfil',
      services: 'Serviços',
      practice: 'Atuação',
      work: 'Trabalhos',
      background: 'Formação',
      questions: 'Perguntas',
      mainSite: 'Site principal',
      copyEmail: 'Copiar email',
      resumePdf: 'Imprimir CV',
      skip: 'Ir para o conteúdo',
    },
    hero: {
      identifier: 'WELLYINGTON // FREELANCE',
      reach: 'REINO UNIDO · EUROPA · REMOTO',
      name: 'Wellington Almeida',
      subtitle: 'Desenvolvedor web freelancer, designer digital e estrategista',
      location: 'Estepona, Málaga, Espanha — Reino Unido, Europa e remoto',
      intro:
        'Wellyington é o nome com que trabalho. Sou desenvolvedor web freelancer, designer digital e estrategista, e consultor de SEO e AEO. Nasci no Brasil, cresci em Londres e estudei publicidade, cinema e fotografia na School of Visual Arts, em Nova York. Em mais de 15 anos fiz sites e trabalho digital para clientes do Brasil a Barcelona, Ibiza e o sul da Espanha. Moro em Estepona e trabalho em inglês, português e espanhol, inclusive remoto no Reino Unido, em Portugal e na Europa.',
      viewWork: 'Trabalhos selecionados',
      services: 'Serviços',
      contact: 'Contato',
      stats: [
        ['ATUAÇÃO', '15+ anos', 'Desenvolvimento web, design e estratégia por conta própria.', 'indigo'],
        ['IDIOMAS', 'EN · PT · ES', 'Inglês, português e espanhol.', 'emerald'],
        ['ALCANCE', 'RU e Europa', 'Remoto, e presencial no sul da Espanha.', 'cyan'],
      ],
    },
    services: {
      module: '02 // Serviços',
      title: 'Desenvolvimento web, design, estratégia, SEO e AEO',
      caption: 'Filtre pelo tipo de trabalho',
      filters: [
        ['all', 'Tudo'],
        ['build', 'Desenvolvimento'],
        ['design', 'Design'],
        ['strategy', 'Estratégia'],
        ['reach', 'Alcance'],
      ],
      competencies: [
        {
          category: 'build',
          title: 'Desenvolvimento web',
          eyebrow: 'CONSTRUIR',
          description:
            'Sites e aplicações sob medida, pensados para um negócio real. De WordPress e WooCommerce a um front-end próprio, com cuidado com velocidade, uso e manutenção.',
          tags: ['Sites sob medida', 'Aplicações web', 'WordPress', 'WooCommerce', 'CMS e integrações'],
          metric: 'Desenvolvimento freelancer',
          footer: 'Fácil de manter',
          accent: 'indigo',
          icon: icons.Globe2,
        },
        {
          category: 'design',
          title: 'Design digital',
          eyebrow: 'DESIGN',
          description:
            'Sistemas visuais e percursos claros. Direção de marca, arquitetura da informação e interface para um negócio ser distinto e fácil de usar.',
          tags: ['Identidade visual', 'UX e UI', 'Sistemas de marca'],
          metric: 'Design com função',
          footer: 'Fácil de entender',
          accent: 'emerald',
          icon: icons.Layers3,
        },
        {
          category: 'strategy',
          title: 'Estratégia digital',
          eyebrow: 'ESTRATÉGIA',
          description:
            'Posicionamento, público, conteúdo e o caminho real do cliente. Ajuda para decidir o que construir, como apresentar e onde concentrar o esforço.',
          tags: ['Posicionamento', 'Conteúdo', 'Jornadas', 'Plano de crescimento'],
          metric: 'Antes de construir',
          footer: 'Ligado ao negócio',
          accent: 'cyan',
          icon: icons.Network,
        },
        {
          category: 'strategy',
          title: 'Consultoria de SEO e AEO',
          eyebrow: 'BUSCA E RESPOSTAS',
          description:
            'Consultoria para um negócio ser encontrado em buscadores e em motores de resposta: páginas claras, linguagem simples e uma estrutura que dê para seguir.',
          tags: ['SEO', 'AEO', 'Estrutura', 'Linguagem clara'],
          metric: 'Encontrável de propósito',
          footer: 'Busca e motores de resposta',
          accent: 'amber',
          icon: icons.Search,
        },
        {
          category: 'reach',
          title: 'Inglês, português e espanhol',
          eyebrow: 'IDIOMAS',
          description:
            'Trabalho nos três. Serve para equipas e clientes que misturam idiomas, no Reino Unido, na Península Ibérica e no resto da Europa.',
          tags: ['Inglês', 'Português', 'Espanhol'],
          metric: 'Três idiomas de trabalho',
          footer: 'Criado em Londres',
          accent: 'rose',
          icon: icons.Languages,
        },
        {
          category: 'reach',
          title: 'Reino Unido, Europa e remoto',
          eyebrow: 'ONDE',
          description:
            'Base em Estepona, Málaga. Disponível para trabalho freelancer remoto em Londres, no Reino Unido, na Espanha, em Portugal e na UE, e presencialmente na Costa del Sol.',
          tags: ['Londres', 'Reino Unido', 'Espanha', 'Portugal', 'Remoto'],
          metric: 'Também remoto',
          footer: 'Estepona, Espanha',
          accent: 'indigo',
          icon: icons.MapPin,
        },
      ],
    },
    practice: {
      module: '03 // Atuação',
      title: 'Onde trabalho',
      caption: 'Uma prática independente, não uma lista de empregadores',
      activeRole: 'Base aqui',
      expandLabel: 'Mais detalhe',
      collapseLabel: 'Ocultar detalhe',
      detailLabel: 'EM RESUMO',
      items: [
        {
          company: 'Wellyington',
          role: 'Desenvolvedor web, designer e estrategista freelancer',
          location: 'Estepona, Málaga, Espanha',
          period: '15+ anos',
          label: 'Prática independente',
          accent: 'emerald',
          bullets: [
            'Desenvolvimento web, design digital, estratégia digital e consultoria de SEO/AEO por conta própria.',
            'Sites e trabalho digital para clientes, da primeira conversa a um site que as pessoas conseguem usar.',
            'Em inglês, português e espanhol.',
          ],
          specs: [
            ['BASE', 'Estepona, Málaga, Espanha'],
            ['IDIOMAS', 'Inglês, português, espanhol'],
            ['ALCANCE', 'Reino Unido, Europa e remoto'],
          ],
        },
        {
          company: 'Brasil, Barcelona, Ibiza',
          role: 'Trabalho com clientes',
          location: 'E o sul da Espanha',
          period: '15+ anos',
          label: 'Clientes internacionais',
          accent: 'indigo',
          bullets: [
            'Clientes do Brasil a Barcelona, Ibiza e o sul da Espanha.',
            'Os projetos selecionados estão no site principal: imobiliário, interiores, editorial, bem-estar e relocação.',
          ],
          specs: [
            ['BRASIL', 'Trabalho com clientes'],
            ['BARCELONA E IBIZA', 'Trabalho com clientes'],
            ['SUL DA ESPANHA', 'Costa del Sol e arredores'],
          ],
        },
        {
          company: 'Reino Unido e Europa',
          role: 'Freelancer remoto',
          location: 'Londres, o Reino Unido, Portugal e a UE',
          period: 'Remoto',
          label: 'Disponível à distância',
          accent: 'slate',
          bullets: [
            'Cresci em Londres. Disponível para trabalho remoto com clientes no Reino Unido e na Europa.',
            'Espanha e Portugal incluídos, presencialmente na Costa del Sol ou à distância.',
          ],
          specs: [
            ['LONDRES', 'Criado no Reino Unido'],
            ['EUROPA', 'Freelancer remoto'],
            ['PORTUGAL', 'Em português, remoto'],
          ],
        },
      ],
    },
    projects: {
      module: '04 // Trabalhos selecionados',
      title: 'Trabalho publicado no site principal',
      caption: 'Notas curtas — os projetos completos estão em wellyington.github.io',
      viewWork: 'Abrir no site principal',
      items: [
        {
          number: '01',
          title: 'Equa Estates',
          stack: 'Site imobiliário',
          description:
            'Imóvel de luxo e relocação em Marbella. A EQUA Estates ajuda clientes internacionais a comprar, arrendar e mudar-se para Marbella e a Costa del Sol, com pesquisa de imóveis, coleções, guia de zonas e apoio à relocação.',
          bullets: ['Pesquisa de imóveis', 'Coleções', 'Apoio à relocação'],
          footer: 'Costa del Sol',
          href: featured,
          accent: 'emerald',
        },
        {
          number: '02',
          title: 'Mirela B Interiors',
          stack: 'Site de design de interiores',
          description: 'Site de design de interiores, publicado com os trabalhos selecionados do site principal.',
          bullets: ['Design de interiores', 'Publicado no site principal'],
          footer: 'Trabalho selecionado',
          href: featured,
          accent: 'indigo',
        },
        {
          number: '03',
          title: 'Mistral & Marea',
          stack: 'Site editorial',
          description: 'Site editorial, publicado com os trabalhos selecionados do site principal.',
          bullets: ['Editorial', 'Publicado no site principal'],
          footer: 'Trabalho selecionado',
          href: featured,
          accent: 'cyan',
        },
        {
          number: '04',
          title: 'Chill and Heal Hub',
          stack: 'Site de bem-estar',
          description: 'Site de um espaço de bem-estar, publicado com os trabalhos selecionados do site principal.',
          bullets: ['Bem-estar', 'Publicado no site principal'],
          footer: 'Trabalho selecionado',
          href: featured,
          accent: 'amber',
        },
        {
          number: '05',
          title: 'Your New Life in Spain',
          stack: 'Site de coaching de relocação',
          description: 'Site de coaching de relocação, publicado com os trabalhos selecionados do site principal.',
          bullets: ['Coaching de relocação', 'Publicado no site principal'],
          footer: 'Trabalho selecionado',
          href: featured,
          accent: 'rose',
        },
      ],
    },
    credentials: {
      moduleEducation: '05 // Estudos',
      titleEducation: 'Estudos',
      moduleLanguages: '06 // Idiomas',
      titleLanguages: 'Idiomas',
      languagesIntro: 'Trabalho em inglês, português e espanhol. Nasci no Brasil, cresci em Londres e moro na Espanha.',
      education: [
        {
          year: 'Nova York, EUA',
          title: 'Publicidade, cinema e fotografia',
          school: 'School of Visual Arts (SVA)',
          mark: 'SVA',
          copy: 'Estudei publicidade, cinema e fotografia na School of Visual Arts, em Nova York.',
        },
      ],
      languages: [
        ['Inglês', 'Idioma de trabalho', '100%', 'Cresci em Londres. Uso com clientes no Reino Unido e na Europa.'],
        ['Português', 'Idioma de trabalho', '100%', 'Nasci no Brasil. Uso com clientes no Brasil e em português.'],
        ['Espanhol', 'Idioma de trabalho', '100%', 'Moro na Espanha. Uso de Barcelona e Ibiza ao sul da Espanha.'],
      ],
    },
    faq: {
      module: '07 // Perguntas',
      title: 'Para clientes e equipas',
      items: [
        {
          question: 'Trabalha com clientes no Reino Unido e na Europa?',
          answer:
            'Sim. Moro em Estepona, Málaga, Espanha, e trabalho remoto com clientes em Londres, no Reino Unido, na Espanha, em Portugal e no resto da Europa. Também me encontro pessoalmente na Costa del Sol.',
        },
        {
          question: 'O que faz?',
          answer:
            'Sou desenvolvedor web freelancer, designer digital e estrategista, e consultor de SEO/AEO. O trabalho inclui sites sob medida, design, posicionamento e ser encontrado em buscadores e em motores de resposta.',
        },
        {
          question: 'Em que idiomas trabalha?',
          answer: 'Inglês, português e espanhol.',
        },
        {
          question: 'Como entrar em contacto?',
          answer:
            'Email welly.almeida@gmail.com, ou chamada e WhatsApp +34 604 286 691. O site principal é wellyington.github.io e este CV está em wellyington.github.io/cv.',
        },
      ],
    },
    specs: {
      title: 'PERFIL PÚBLICO // NOTAS',
      status: '● SÓ FATOS PÚBLICOS',
      copyCode: 'copiar',
      placeholder: "digite 'help', 'services', 'contact', 'reach'...",
      enterLabel: 'pressione [Enter]',
      prompt: 'wellyington@cv:~$',
      snippetLabels: [
        ['profile', 'profile.json'],
        ['services', 'serviços'],
        ['contact', 'contacto'],
        ['reach', 'alcance'],
      ],
      cli: {
        help: 'Comandos: status, services, contact, reach, clear',
        status: 'Disponível para desenvolvimento web, design, estratégia e consultoria de SEO/AEO, inclusive remoto no Reino Unido e na Europa.',
        services: 'Desenvolvimento web, design digital, estratégia digital, consultoria de SEO e AEO. WordPress, WooCommerce e front-end sob medida.',
        contact: 'Email: welly.almeida@gmail.com | Telefone / WhatsApp: +34 604 286 691 | Site: https://wellyington.github.io/',
        reach: 'Base em Estepona, Málaga, Espanha. Clientes do Brasil a Barcelona, Ibiza e o sul da Espanha. Remoto no Reino Unido, em Portugal e na Europa.',
        unknown: "Comando desconhecido: '{cmd}'. Digite 'help'.",
      },
      toast: {
        email: 'Email copiado',
        phone: 'Telefone copiado',
        code: 'Nota copiada',
        unavailable: 'Copiar não está disponível neste navegador',
      },
    },
    cta: {
      badge: 'ABERTO A TRABALHO FREELANCER E REMOTO',
      title: 'Um freelancer para o Reino Unido, a Europa e além',
      description:
        'Desenvolvimento web, design digital, estratégia e consultoria de SEO/AEO. Base em Estepona. Inglês, português e espanhol.',
      email: 'Email {email}',
      call: 'Ligar',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'WELLYINGTON // ESTEPONA, MÁLAGA',
      site: 'Site principal',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      x: 'X',
      instagram: 'Instagram',
      facebook: 'Facebook',
      email: 'Email',
      backToTop: 'Voltar ao topo ↑',
      location: 'REINO UNIDO · EUROPA · REMOTO',
    },
  },
};

export const snippets: Record<SnippetKey, { filename: string; code: string }> = {
  profile: {
    filename: 'profile.json',
    code: `{
  "name": "Wellington Almeida",
  "brand": "Wellyington",
  "based": "Estepona, Málaga, Spain",
  "practice": [
    "Freelance web developer",
    "Digital designer",
    "Digital strategist",
    "SEO and AEO consultant"
  ],
  "experience": "15+ years",
  "languages": ["English", "Portuguese", "Spanish"],
  "raised": "London",
  "born": "Brazil",
  "studied": "Advertising, film and photography, School of Visual Arts, New York"
}`,
  },
  services: {
    filename: 'services.txt',
    code: `Web development
Digital design
Digital strategy
SEO consulting
AEO consulting

Custom websites, WordPress, WooCommerce
and bespoke front-end work.`,
  },
  contact: {
    filename: 'contact.txt',
    code: `Email      welly.almeida@gmail.com
Phone      +34 604 286 691
WhatsApp   https://wa.me/34604286691
Site       https://wellyington.github.io/
CV         https://wellyington.github.io/cv/
LinkedIn   https://www.linkedin.com/in/wellyington/
GitHub     https://github.com/wellyington
X          https://x.com/wellyington
Instagram  https://instagram.com/wellyington
Facebook   https://facebook.com/wellyington/`,
  },
  reach: {
    filename: 'reach.txt',
    code: `Based     Estepona, Málaga, Spain
Clients   Brazil, Barcelona, Ibiza, southern Spain
Remote    London, United Kingdom, Spain, Portugal, EU
Languages English, Portuguese, Spanish`,
  },
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
