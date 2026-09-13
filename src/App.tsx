import { useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Code2,
  Copy,
  Database,
  ExternalLink,
  FileCode2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Network,
  Phone,
  Search,
  Server,
  Sparkles,
  Terminal,
  Timer,
  X,
  Zap,
} from 'lucide-react';

type Category = 'all' | 'frontend' | 'microservices' | 'realtime' | 'infra';
type SnippetKey = 'equa' | 'go' | 'elixir' | 'kamal';
type ToastMessage = string | null;

type Competency = {
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

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  label: string;
  accent: 'emerald' | 'indigo' | 'slate';
  bullets: string[];
  specs: [string, string][];
};

type Blueprint = {
  number: string;
  title: string;
  stack: string;
  description: string;
  bullets: string[];
  footer: string;
  snippet: SnippetKey;
  accent: 'emerald' | 'indigo' | 'cyan' | 'amber' | 'rose' | 'blue';
};

const email = 'welly.almeida@gmail.com';
const phone = '+34 604 286 691';

const competencies: Competency[] = [
  {
    category: 'frontend',
    title: 'Frontend & Edge Stacks',
    eyebrow: 'EDGE & REACTIVE',
    description: 'High-performance client/server rendering with granular state boundaries.',
    tags: ['Next.js 15 (App Router)', 'React Server Components', 'SSR / SSG / ISR', 'Vite', 'Astro Islands', 'TypeScript', 'Tailwind CSS'],
    metric: 'Hydration Cost: Minimal',
    footer: 'Core Web Vitals: 99+',
    accent: 'indigo',
    icon: Globe2,
  },
  {
    category: 'microservices',
    title: 'Microservices & Enterprise',
    eyebrow: 'ENTERPRISE SCALE',
    description: 'High-throughput RPC communication, typed domain models, and container orchestration.',
    tags: ['Go Microservices', 'gRPC & Protobuf', 'Apache Kafka', 'Docker & Kubernetes', 'C# / .NET 8/9', 'ASP.NET Core', 'EF Core'],
    metric: 'Throughput: 100k+ req/sec',
    footer: 'gRPC Binary Encoding',
    accent: 'emerald',
    icon: Server,
  },
  {
    category: 'realtime',
    title: 'Real-Time & Monoliths',
    eyebrow: 'ACTOR MODEL & CONCURRENCY',
    description: 'Fault-tolerant distributed nodes and productive full-stack monoliths.',
    tags: ['PETAL (Phoenix, Elixir)', 'Phoenix LiveView', 'Rails 8+ Hotwire', 'Kamal Deployments', 'Solid Queue', 'Alpine.js'],
    metric: 'Live Channels: < 2ms',
    footer: 'BEAM VM Supervision',
    accent: 'cyan',
    icon: Zap,
  },
  {
    category: 'frontend',
    title: 'JavaScript / BaaS Systems',
    eyebrow: 'MODERN JS & BAAS',
    description: 'Rapid architecture with secure row-level access and reactive data bindings.',
    tags: ['MERN / PERN', 'SvelteKit Full-Stack', 'Supabase RLS', 'PocketBase & SQLite', 'Node.js / Express', 'Firebase Rules'],
    metric: 'Security: Declarative RLS',
    footer: 'Zero-Overhead Edge',
    accent: 'amber',
    icon: Database,
  },
  {
    category: 'infra',
    title: 'Databases & Query Optimization',
    eyebrow: 'DATA PERSISTENCE',
    description: 'Relational index tuning, geospatial indices, and memory caching layers.',
    tags: ['PostgreSQL Indexes', 'Redis Caching & PubSub', 'MySQL Master/Replica', 'Prisma & Drizzle', 'PgBouncer Pooling'],
    metric: 'P99 Query Latency: < 8ms',
    footer: 'ACID Resilient',
    accent: 'cyan',
    icon: Layers3,
  },
  {
    category: 'infra',
    title: 'Infrastructure & Integrations',
    eyebrow: 'DEVOPS & INTEGRATION',
    description: 'Zero-downtime pipelines, asynchronous webhooks, and enterprise CRM orchestration.',
    tags: ['RESTful & GraphQL APIs', 'Webhook Engines', 'Luxury CRM Feeds', 'CI/CD Automation', 'Linux / Debian Hardening'],
    metric: 'Uptime SLA: 99.99%',
    footer: 'Zero-Downtime Deploy',
    accent: 'rose',
    icon: Network,
  },
];

const experiences: Experience[] = [
  {
    company: 'EQUA Estates',
    role: 'Chief Technology Officer (CTO)',
    location: 'Marbella / Estepona, Costa del Sol, Spain',
    period: '2026 – Present',
    label: 'Executive Leadership',
    accent: 'emerald',
    bullets: ['Spearheaded systems architecture and modern technical strategy for a premier ultra-luxury real estate portal.', 'Architected a Next.js App Router platform with React Server Components, Server Actions, and tuned PostgreSQL storage.', 'Engineered bidirectional CRM synchronization feeds with schema validation, edge caching, and intelligent lead distribution.'],
    specs: [['CORE RUNTIME', 'Next.js 15, Node 22 LTS, Edge Runtime'], ['PERSISTENCE', 'PostgreSQL, Redis Cache, PgBouncer'], ['DATA SYNC', 'Webhooks, CRM Feeds, S3 Image CDN']],
  },
  {
    company: 'Techno Co.',
    role: 'Lead Full-Stack Solutions Engineer / Tech Lead',
    location: 'Ibiza, Balearic Islands, Spain',
    period: 'Apr 2018 – Jun 2021',
    label: 'Engineering Team Lead',
    accent: 'indigo',
    bullets: ['Directed decoupled backend microservices and Node.js API gateways serving 12+ international markets.', 'Spearheaded database tuning, query index refactoring, and Redis caching that reduced p95 response times by 45%.', 'Supervised a 35-person cross-functional engineering team with containerized CI/CD releases and zero operational downtime.'],
    specs: [['TEAM SIZE', '35 Engineers & QAs Led'], ['INFRASTRUCTURE', 'Go, Docker, Kubernetes, AWS EKS'], ['PERFORMANCE', '-45% Query Latency Slashed']],
  },
  {
    company: 'Buy a Dream',
    role: 'Senior Frontend & Platform Engineer',
    location: 'Barcelona, Catalonia, Spain',
    period: 'Dec 2017 – Apr 2018',
    label: 'Platform Modernization',
    accent: 'slate',
    bullets: ['Modernized digital commerce storefront systems across 7 Tier-1 European markets with modular component design.', 'Integrated multi-currency payment gateways and asynchronous webhook dispatchers with strict mobile-first response SLAs.'],
    specs: [['STACK HIGHLIGHTS', 'React, Vite, Node APIs, Stripe Webhooks'], ['DEPLOYMENT REACH', '7 Tier-1 European Regional Portals']],
  },
  {
    company: 'So Portas',
    role: 'Full-Stack & Systems Developer',
    location: 'Joinville, Santa Catarina, Brazil',
    period: 'Mar 2010 – Jun 2012',
    label: 'Database & Systems',
    accent: 'slate',
    bullets: ['Executed an enterprise migration from on-premise inventory systems to MySQL cloud storage with zero operational downtime.', 'Connected real-time sales terminals to automated factory warehouse logistics through RESTful interfaces.'],
    specs: [['SYSTEMS', 'MySQL, RESTful APIs, Inventory'], ['OPERATIONS', 'Factory Logistics & Sales Terminals']],
  },
];

const blueprints: Blueprint[] = [
  { number: '01', title: 'High-End Real Estate Engine', stack: 'Next.js 15 & PostgreSQL', description: 'Dynamic CRM ingestion and edge SSG generation for luxury Costa del Sol villas, with automated imagery and geospatial catalog queries.', bullets: ['React Server Actions & RSC', 'Asynchronous CRM Feed Ingestion', 'Incremental Static Regeneration'], footer: 'EQUA Estates Tech', snippet: 'equa', accent: 'emerald' },
  { number: '02', title: 'High-Throughput Microservices', stack: 'Go & gRPC Protobuf', description: 'Distributed RPC service mesh for telemetry, orders, and payment validation with strict protocol contracts and Kafka streams.', bullets: ['Sub-millisecond gRPC IPC latency', 'Kafka partitions for event sourcing', 'OpenTelemetry distributed tracing'], footer: 'Distributed Mesh', snippet: 'go', accent: 'indigo' },
  { number: '03', title: 'Real-Time Collaborative Stack', stack: 'Elixir PETAL Stack', description: 'Ultra-low overhead state synchronization using Phoenix LiveView WebSockets for real-time bid updates and multi-agent feeds.', bullets: ['2M concurrent connections per node', 'Server-driven DOM diffing', 'OTP GenServer supervision trees'], footer: 'BEAM Concurrency', snippet: 'elixir', accent: 'cyan' },
  { number: '04', title: 'Productive Monolith Platform', stack: 'Rails 8+ & Kamal', description: 'Modern Rails deployment using bare-metal containers, Turbo morphing, Solid Queue workers, and resilient caching.', bullets: ['Zero-dependency queue via Solid Queue', 'Hotwire/Turbo Stream morphing', 'Kamal container orchestration'], footer: 'Full-Stack Lean', snippet: 'kamal', accent: 'rose' },
  { number: '05', title: 'Enterprise Services (.NET 8)', stack: '.NET 8 & ASP.NET Core', description: 'Clean Architecture Web API with Entity Framework Core, CQRS patterns, JWT authentication, and Vite-powered clients.', bullets: ['Strongly typed domain models', 'EF Core migration pipelines', 'High-concurrency async handlers'], footer: 'Corporate Grade', snippet: 'go', accent: 'blue' },
  { number: '06', title: 'Zero-JS Static Engine', stack: 'Astro Islands', description: 'Content-first architecture with partial hydration, shipping minimal runtime JavaScript while interactive widgets load on demand.', bullets: ['Selective client:visible directives', 'Markdown/MDX content collections', '100/100 Lighthouse score default'], footer: 'Edge Islands', snippet: 'equa', accent: 'amber' },
  { number: '07', title: 'Reactive Edge Suite: RLS Architecture', stack: 'SvelteKit + Supabase BaaS', description: 'Serverless application pattern using declarative tenant protection, fine-grained reactive runes, and instant database change broadcasting.', bullets: ['Supabase Auth', 'Declarative SQL RLS', 'Postgres Realtime', 'Svelte 5 Runes'], footer: 'Featured Architecture', snippet: 'equa', accent: 'emerald' },
];

const snippets: Record<SnippetKey, { filename: string; code: string }> = {
  equa: { filename: 'equa-estates // architecture/next.config.ts', code: `import type { NextConfig } from 'next';\n\nconst nextConfig: NextConfig = {\n  reactStrictMode: true,\n  poweredByHeader: false,\n  compress: true,\n  experimental: {\n    serverActions: { bodySizeLimit: '4mb' },\n    optimizePackageImports: ['lucide-react', 'date-fns'],\n  },\n  images: {\n    formats: ['image/avif', 'image/webp'],\n    minimumCacheTTL: 86400,\n    remotePatterns: [{ protocol: 'https', hostname: 'crm.equa-estates.com' }],\n  },\n};\n\nexport default nextConfig;` },
  go: { filename: 'techno-services // cmd/telemetry/server.go', code: `package main\n\nimport (\n    "net"\n    "google.golang.org/grpc"\n    pb "github.com/technoco/services/proto/v1"\n)\n\ntype TelemetryServer struct {\n    pb.UnimplementedTelemetryServiceServer\n}\n\nfunc main() {\n    lis, _ := net.Listen("tcp", ":50051")\n    grpcServer := grpc.NewServer()\n    pb.RegisterTelemetryServiceServer(grpcServer, &TelemetryServer{})\n    grpcServer.Serve(lis)\n}` },
  elixir: { filename: 'realtime_bid // lib/realtime_bid_web/live/auction_live.ex', code: `defmodule RealtimeBidWeb.AuctionLive do\n  use RealtimeBidWeb, :live_view\n  alias RealtimeBid.Auctions\n\n  @impl true\n  def mount(%{"id" => id}, _session, socket) do\n    if connected?(socket), do: Auctions.subscribe("auction:#{id}")\n    {:ok, assign(socket, auction: Auctions.get!(id), latency_ms: 1.4)}\n  end\n\n  @impl true\n  def handle_info({:bid_placed, new_bid}, socket) do\n    {:noreply, update(socket, :auction, fn a -> %{a | current_bid: new_bid} end)}\n  end\nend` },
  kamal: { filename: 'monolith-app // config/deploy.yml', code: `service: enterprise-portal\nimage: welly/enterprise-portal\n\nservers:\n  web:\n    hosts:\n      - 195.201.34.82\n      - 195.201.34.83\n\nproxy:\n  ssl: true\n  host: equa-estates.com\n\nbuilder:\n  arch: amd64\n\nenv:\n  secret:\n    - RAILS_MASTER_KEY\n    - DATABASE_URL\n    - REDIS_URL` },
};

const accentClasses = {
  emerald: { text: 'text-emerald-300', border: 'border-emerald-500/30', soft: 'bg-emerald-500/10', dot: 'bg-emerald-400', hover: 'group-hover:text-emerald-300' },
  indigo: { text: 'text-indigo-300', border: 'border-indigo-500/30', soft: 'bg-indigo-500/10', dot: 'bg-indigo-400', hover: 'group-hover:text-indigo-300' },
  cyan: { text: 'text-cyan-300', border: 'border-cyan-500/30', soft: 'bg-cyan-500/10', dot: 'bg-cyan-400', hover: 'group-hover:text-cyan-300' },
  amber: { text: 'text-amber-300', border: 'border-amber-500/30', soft: 'bg-amber-500/10', dot: 'bg-amber-400', hover: 'group-hover:text-amber-300' },
  rose: { text: 'text-rose-300', border: 'border-rose-500/30', soft: 'bg-rose-500/10', dot: 'bg-rose-400', hover: 'group-hover:text-rose-300' },
  blue: { text: 'text-sky-300', border: 'border-sky-500/30', soft: 'bg-sky-500/10', dot: 'bg-sky-400', hover: 'group-hover:text-sky-300' },
  slate: { text: 'text-slate-300', border: 'border-slate-500/30', soft: 'bg-slate-500/10', dot: 'bg-slate-400', hover: 'group-hover:text-slate-200' },
};

function App() {
  const [category, setCategory] = useState<Category>('all');
  const [expandedRole, setExpandedRole] = useState(0);
  const [snippet, setSnippet] = useState<SnippetKey>('equa');
  const [toast, setToast] = useState<ToastMessage>(null);
  const [cliInput, setCliInput] = useState('');
  const [cliOutput, setCliOutput] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleCompetencies = useMemo(() => category === 'all' ? competencies : competencies.filter((item) => item.category === category), [category]);
  const activeSnippet = snippets[snippet];

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2800);
  };

  const copyText = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(message);
    } catch {
      showToast('Copy is unavailable in this browser');
    }
  };

  const openSnippet = (key: SnippetKey) => {
    setSnippet(key);
    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
    showToast(`Loaded blueprint: ${key.toUpperCase()}`);
  };

  const runCommand = () => {
    const command = cliInput.trim().toLowerCase();
    const outputs: Record<string, string> = {
      help: 'Available commands: status, stacks, contact, benchmarks, clear',
      status: 'AVAILABLE: Wellington is taking Fractional CTO & Advisory appointments for high-growth ventures.',
      stacks: 'Next.js 15, Go gRPC, Elixir Phoenix, Rails 8 Kamal, .NET 8, SvelteKit + Supabase, PostgreSQL, Redis.',
      contact: `Email: ${email} | Phone: ${phone} | Location: Estepona, Spain`,
      benchmarks: 'Core Web Vitals: 99/100 | TTFB: <180ms edge | 12+ markets scaled | 35 engineers managed',
    };
    if (command === 'clear') setCliOutput(null);
    else setCliOutput(outputs[command] ?? `Unknown command: '${command}'. Type 'help' for available CLI directives.`);
    setCliInput('');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090a0f] text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-glow" />
      <div className="pointer-events-none fixed inset-0 z-0 grid-pattern opacity-60" />
      <div className="pointer-events-none fixed -left-48 top-0 z-0 h-[32rem] w-[32rem] rounded-full bg-indigo-600/10 blur-[140px]" />
      <div className="pointer-events-none fixed -right-48 top-[38%] z-0 h-[32rem] w-[32rem] rounded-full bg-emerald-500/10 blur-[140px]" />

      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#090a0f]/85 backdrop-blur-xl">
        <div className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-6 lg:px-8">
          <a href="#hero" className="group flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/40 bg-gradient-to-br from-indigo-500/90 to-emerald-400/80 font-mono text-xs font-bold text-white shadow-lg shadow-indigo-500/20">WA</span>
            <span className="hidden flex-col sm:flex"><strong className="whitespace-nowrap text-sm font-bold tracking-tight text-white">Wellington Almeida</strong><small className="whitespace-nowrap font-mono text-[10px] tracking-wide text-slate-400">CTO & Solutions Architect</small></span>
          </a>
          <nav className={`${menuOpen ? 'absolute left-4 right-4 top-[4.5rem] z-50 flex' : 'hidden'} flex-col gap-1 rounded-xl border border-white/10 bg-[#11141e]/95 p-3 shadow-2xl xl:absolute xl:left-1/2 xl:top-1/2 xl:z-auto xl:flex xl:-translate-x-1/2 xl:-translate-y-1/2 xl:flex-row xl:items-center xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none`}>
            {[['Profile', '#hero'], ['Architecture', '#architecture'], ['Experience', '#experience'], ['Projects', '#projects'], ['Credentials', '#credentials'], ['System Specs', '#specs']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white">{label}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <button onClick={() => copyText(email, 'Email copied to clipboard')} className="action-button" aria-label="Copy email address to clipboard"><Mail size={14} /><span className="hidden sm:inline">Copy Email</span></button>
            <button onClick={() => window.print()} className="primary-button"><ArrowDownToLine size={14} /><span>Resume PDF</span></button>
            <a href="https://linkedin.com/in/wellington-almeida-4202099b" target="_blank" rel="noreferrer" className="icon-button hidden sm:inline-flex" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <a href="https://github.com/wellyington" target="_blank" rel="noreferrer" className="icon-button hidden sm:inline-flex" aria-label="GitHub"><Github size={15} /></a>
            <button onClick={() => setMenuOpen((open) => !open)} className="icon-button xl:hidden" aria-label="Toggle menu">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
          </div>
        </div>
      </header>

      {toast && <div className="fixed bottom-6 right-4 z-50 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-xl border border-emerald-500/35 bg-[#111722]/95 px-4 py-3 font-mono text-xs text-emerald-200 shadow-2xl shadow-emerald-950/30"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300"><Check size={14} /></span>{toast}</div>}

      <main className="relative z-10 mx-auto max-w-7xl space-y-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section id="hero" className="scroll-mt-24 pt-2 lg:pt-8">
          <div className="mb-6 flex flex-wrap gap-3"><span className="eyebrow-pill"><CircleDot size={12} className="text-indigo-300" /> SYSTEM IDENTIFIER // WELLY-ALMEIDA-ARCH-v2026</span><span className="eyebrow-pill text-indigo-200"><Timer size={12} /> EDGE LATENCY &lt; 45ms</span></div>
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <div><h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">Wellington Almeida</h1><p className="mt-2 max-w-3xl bg-gradient-to-r from-indigo-300 via-slate-100 to-emerald-300 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">Chief Technology Officer & Polyglot Solutions Architect</p></div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 font-mono text-xs text-slate-300"><span className="flex items-center gap-2 text-slate-400"><MapPin size={14} className="text-emerald-400" /> Estepona, Costa del Sol, Spain</span><button onClick={() => copyText(phone, 'Phone number copied')} className="inline-flex items-center gap-2 transition hover:text-emerald-300" aria-label={`Copy phone number ${phone}`}><Phone size={13} className="text-indigo-300" /> {phone}</button><button onClick={() => copyText(email, 'Email address copied')} className="inline-flex items-center gap-2 transition hover:text-indigo-300" aria-label="Copy email address"><Mail size={13} className="text-indigo-300" /> {email}</button></div>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">High-impact executive technologist with a 15-year track record leading engineering divisions, luxury real estate platforms, and distributed systems architecture. Specializes in transforming complex business domains into ultra-low-latency, resilient cloud architectures.</p>
              <div className="flex flex-wrap gap-3"><a href="#experience" className="primary-button px-4 py-2.5">Inspect Career Timeline <ArrowRight size={15} /></a><a href="#architecture" className="action-button px-4 py-2.5">Architecture Playbooks</a><a href="#specs" className="action-button border-emerald-500/30 bg-emerald-500/10 text-emerald-200 px-4 py-2.5"><Terminal size={14} /> $ live-terminal</a></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
              {[['CAREER VELOCITY', '15+ Years', 'Enterprise systems & web engineering leadership.', 'indigo'], ['GLOBAL FOOTPRINT', '12+ Markets', 'Multi-region platforms, localization, and currency engines.', 'emerald'], ['EDGE BENCHMARK', '< 180ms TTFB', 'Sub-second global delivery and 99+ Core Web Vitals.', 'cyan']].map(([eyebrow, value, copy, accent], index) => <div key={eyebrow} className="glass-panel group relative overflow-hidden rounded-xl p-5"><div className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full ${accent === 'indigo' ? 'bg-indigo-500/10' : accent === 'emerald' ? 'bg-emerald-500/10' : 'bg-cyan-500/10'} transition group-hover:scale-110`} /><div className={`relative mb-1 flex justify-between font-mono text-xs ${accent === 'indigo' ? 'text-indigo-300' : accent === 'emerald' ? 'text-emerald-300' : 'text-cyan-300'}`}><span>{eyebrow}</span><span>// 0{index + 1}</span></div><div className="relative text-3xl font-bold tracking-tight text-white">{value}</div><p className="relative mt-1 text-xs leading-5 text-slate-400">{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section id="architecture" className="scroll-mt-24 space-y-6"><SectionHeading module="02 // Capability Matrix" title="Architectural & Technical Competencies" accent="indigo" caption="Interactive multi-stack paradigm • Select a category to inspect" /><div className="flex flex-wrap gap-2">{[['all', 'All Stacks (6)'], ['frontend', 'Frontend & Edge'], ['microservices', 'Microservices & Enterprise'], ['realtime', 'Real-Time & Monoliths'], ['infra', 'Data & Infrastructure']].map(([key, label]) => <button key={key} onClick={() => setCategory(key as Category)} className={`filter-button ${category === key ? 'filter-button-active' : ''}`}>{label}</button>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visibleCompetencies.map((item) => { const Icon = item.icon; const accent = accentClasses[item.accent]; return <article key={item.title} className="glass-panel group flex flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-950/20"><div className="space-y-4"><div className="flex items-center justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent.border} ${accent.soft} ${accent.text}`}><Icon size={19} /></span><span className={`rounded-md border ${accent.border} ${accent.soft} px-2 py-1 font-mono text-[10px] ${accent.text}`}>{item.eyebrow}</span></div><div><h3 className={`text-lg font-bold text-white transition ${accent.hover}`}>{item.title}</h3><p className="mt-1 text-xs leading-5 text-slate-400">{item.description}</p></div><div className="flex flex-wrap gap-1.5">{item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div></div><div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] text-slate-400"><span>{item.metric}</span><span className={accent.text}>{item.footer}</span></div></article> })}</div></section>

        <section id="experience" className="scroll-mt-24 space-y-6"><SectionHeading module="03 // Proven Track Record" title="Executive & Engineering Timeline" accent="emerald" caption="Click any position to expand the architecture breakdown" /><div className="relative ml-3 space-y-8 border-l border-white/15 pl-6 sm:ml-6 sm:pl-10">{experiences.map((item, index) => { const accent = accentClasses[item.accent]; const expanded = expandedRole === index; return <article key={item.company} className="relative"><span className={`absolute -left-[31px] top-2 h-4 w-4 rounded-full border-4 border-[#090a0f] ${accent.dot} shadow-lg`} /><button onClick={() => setExpandedRole(expanded ? -1 : index)} className={`glass-panel group w-full rounded-2xl p-6 text-left transition hover:border-white/20 sm:p-7 ${index === 0 ? 'border-emerald-500/30' : ''}`}><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><div className={`flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider ${accent.text}`}>{item.role}{index === 0 && <span className="rounded border border-emerald-500/35 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">Active Role</span>}</div><h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{item.company}</h3><p className="font-mono text-xs text-slate-400">{item.location}</p></div><div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end"><span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-slate-300">{item.period}</span><span className={`font-mono text-[11px] ${accent.text}`}>{item.label}</span></div></div><ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className={accent.text}>›</span><span>{bullet}</span></li>)}</ul><div className={`grid transition-all duration-300 ${expanded ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><div className="min-h-0 overflow-hidden border-t border-white/10 pt-4"><div className={`mb-3 flex items-center gap-2 font-mono text-xs font-semibold ${accent.text}`}><Code2 size={14} /> TECHNICAL ARCHITECTURE BREAKDOWN</div><div className="grid gap-3 sm:grid-cols-3">{item.specs.map(([label, value]) => <div key={label} className="rounded-lg border border-white/[0.06] bg-black/30 p-3 font-mono"><span className="block text-[10px] text-slate-400">{label}</span><span className="text-xs text-white">{value}</span></div>)}</div></div></div><span className="mt-4 flex items-center justify-end gap-1 font-mono text-[10px] text-slate-400">{expanded ? 'Collapse details' : 'Expand architecture'} <ChevronDown size={13} className={`transition ${expanded ? 'rotate-180' : ''}`} /></span></button></article> })}</div></section>

        <section id="projects" className="scroll-mt-24 space-y-6"><SectionHeading module="04 // Production Case Studies" title="Featured Architecture & Project Blueprints" accent="indigo" caption="7 signature architectural implementations" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{blueprints.map((project) => { const accent = accentClasses[project.accent]; return <article key={project.number} className={`glass-panel group flex flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-1 hover:border-white/20 ${project.number === '07' ? 'md:col-span-2 lg:col-span-3' : ''}`}><div className={project.number === '07' ? 'lg:flex lg:items-center lg:justify-between lg:gap-8' : ''}><div className="space-y-4"><div className="flex items-center justify-between gap-3"><span className={`rounded border ${accent.border} ${accent.soft} px-2.5 py-1 font-mono text-[10px] uppercase ${accent.text}`}>{project.stack}</span><span className="font-mono text-xs text-slate-500">SYS-ARCH-{project.number}</span></div><h3 className={`text-lg font-bold text-white transition ${accent.hover}`}>{project.title}</h3><p className="text-xs leading-5 text-slate-300">{project.description}</p><div className="space-y-1 font-mono text-[11px] text-slate-400">{project.bullets.map((bullet) => <div key={bullet}><span className={accent.text}>›</span> {bullet}</div>)}</div></div><div className={`mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3 ${project.number === '07' ? 'lg:mt-0 lg:min-w-[260px] lg:border-0 lg:pt-0' : ''}`}><span className="font-mono text-[11px] text-slate-400">{project.footer}</span><button onClick={() => openSnippet(project.snippet)} className={`inline-flex items-center gap-1 font-mono text-xs ${accent.text}`}>Inspect spec <ChevronRight size={14} /></button></div></div></article> })}</div></section>

        <section id="credentials" className="scroll-mt-24 grid gap-8 lg:grid-cols-12"><div className="space-y-6 lg:col-span-7"><SectionHeading module="05 // Academic Foundations" title="Formal Education & Training" accent="indigo" /><div className="space-y-4"><EducationCard year="2006 – 2010 • New York City, USA" title="Bachelor of Arts (BA) in Advertising & Digital Communications" school="School of Visual Arts (SVA), NYC" mark="SVA" copy="14-month technical residency at DDB New York, bridging interactive web software and international campaign design systems." /><EducationCard year="2005 • Vancouver, Canada" title="Diploma in Web Systems & Digital Brand Technologies" school="Serebra Connect" mark="SC" copy="Foundational computer science, relational database engineering, network protocols, and distributed web standards." /></div></div><div className="space-y-6 lg:col-span-5"><SectionHeading module="06 // Global Operations" title="Languages & Fluency" accent="emerald" /><div className="glass-panel space-y-6 rounded-2xl p-6"><p className="text-xs leading-5 text-slate-300">Decades of direct executive engineering communication across North America, Europe, and Latin America.</p>{[['English', 'Native / C2', '100%', 'Bilingual education in NYC; technical lead for multinational teams.'], ['Portuguese', 'Native / C2', '100%', 'Native tongue; extensive experience leading Latin American operations.'], ['Spanish', 'Fluent / C1–C2', '95%', 'Resident in Spain; leads high-level stakeholder negotiations in Spanish.']].map(([language, level, percent, copy]) => <div key={language} className="space-y-2 border-t border-white/[0.06] pt-4 first:border-0 first:pt-0"><div className="flex items-center justify-between gap-2 font-mono text-xs"><span className="font-bold text-white">{language} <span className="ml-1 rounded border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">{level}</span></span><span className="text-slate-400">{percent}</span></div><div className="h-2 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" style={{ width: percent }} /></div><p className="text-[11px] leading-5 text-slate-400">{copy}</p></div>)}</div></div></section>

        <section id="specs" className="scroll-mt-24 space-y-4"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" /><h2 className="font-mono text-lg font-bold tracking-tight text-white">ARCHITECTURAL CONFIG TELEMETRY // REPL</h2></div><div className="flex flex-wrap gap-2">{([['equa', 'next.config.ts'], ['go', 'server.go (gRPC)'], ['elixir', 'live_view.ex'], ['kamal', 'deploy.yml (Kamal)']] as [SnippetKey, string][]).map(([key, label]) => <button key={key} onClick={() => setSnippet(key)} className={`filter-button ${snippet === key ? 'border-indigo-500/50 bg-indigo-500/15 text-indigo-200' : ''}`}>{label}</button>)}</div></div><div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b0d14] shadow-2xl"><div className="flex flex-col justify-between gap-3 border-b border-white/10 bg-black/60 px-4 py-3 sm:flex-row sm:items-center"><div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-rose-500/80" /><span className="h-3 w-3 rounded-full bg-amber-500/80" /><span className="h-3 w-3 rounded-full bg-emerald-500/80" /><span className="ml-2 font-mono text-xs text-slate-400">{activeSnippet.filename}</span></div><div className="flex items-center gap-3"><span className="font-mono text-[10px] text-emerald-400">● COMPILED IN 28ms</span><button onClick={() => copyText(activeSnippet.code, 'Source configuration copied')} className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-1 font-mono text-xs text-slate-300 transition hover:bg-white/15 hover:text-white"><Copy size={12} /> copy code</button></div></div><pre className="max-h-[360px] overflow-x-auto p-5 font-mono text-xs leading-6 text-indigo-100/90">{activeSnippet.code}</pre><div className="flex flex-col gap-2 border-t border-white/10 bg-black/80 px-5 py-3 font-mono text-xs sm:flex-row sm:items-center"><span className="text-emerald-400">welly@architecture-portal:~$</span><input value={cliInput} onChange={(event) => setCliInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') runCommand(); }} placeholder="type 'help', 'stacks', 'contact'..." className="min-w-0 flex-grow bg-transparent text-white outline-none placeholder:text-slate-500" aria-label="Terminal command" /><span className="hidden text-[10px] text-slate-500 sm:inline">press [Enter]</span></div>{cliOutput && <div className="border-t border-indigo-500/20 bg-indigo-950/20 px-5 py-3 font-mono text-xs leading-5 text-indigo-200">{cliOutput}</div>}</div></section>

        <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 via-[#131620]/80 to-emerald-950/40 p-8 text-center sm:p-12"><div className="relative z-10 mx-auto max-w-3xl space-y-5"><span className="eyebrow-pill border-emerald-500/30 bg-emerald-500/10 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> OPEN FOR FRACTIONAL CTO & ADVISORY APPOINTMENTS</span><h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Architecting Resilient Platforms That Outperform Benchmarks</h2><p className="text-sm leading-6 text-slate-300 sm:text-base">Available for executive CTO roles, high-throughput systems design, technology audit & restructuring, and luxury real estate portal engineering.</p><div className="flex flex-wrap justify-center gap-3 pt-2"><button onClick={() => copyText(email, 'Email copied to clipboard')} className="primary-button px-5 py-3"><Copy size={15} /> Copy Email: {email}</button><a href={`tel:${phone.replace(/ /g, '')}`} className="action-button px-5 py-3"><Phone size={15} className="text-emerald-300" /> Call Direct</a></div></div></section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080c] py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 font-mono text-[10px] text-slate-400 sm:flex-row sm:px-6 lg:px-8"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> WELLINGTON ALMEIDA // EXECUTIVE PORTFOLIO 2026</span><div className="flex gap-5"><a href="https://linkedin.com/in/wellington-almeida-4202099b" target="_blank" rel="noreferrer" className="transition hover:text-slate-300">LinkedIn</a><a href="https://github.com/wellyington" target="_blank" rel="noreferrer" className="transition hover:text-slate-300">GitHub</a><button onClick={() => copyText(email, 'Email copied to clipboard')} className="transition hover:text-slate-300" aria-label="Copy email address">Email</button><a href="#hero" className="transition hover:text-indigo-300">Back to top ↑</a></div><span>ESTEPONA, COSTA DEL SOL, SPAIN</span></div></footer>
    </div>
  );
}

function SectionHeading({ module, title, accent, caption }: { module: string; title: string; accent: 'indigo' | 'emerald'; caption?: string }) {
  return <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-end"><div><div className={`mb-1 font-mono text-xs uppercase tracking-wider ${accent === 'indigo' ? 'text-indigo-300' : 'text-emerald-300'}`}>Module {module}</div><h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2></div>{caption && <span className="font-mono text-[10px] text-slate-400">{caption}</span>}</div>;
}

function EducationCard({ year, title, school, mark, copy }: { year: string; title: string; school: string; mark: string; copy: string }) {
  return <article className="glass-panel rounded-2xl p-6"><div className="flex items-start justify-between gap-4"><div><span className="font-mono text-xs text-indigo-300">{year}</span><h3 className="mt-1 text-lg font-bold text-white">{title}</h3><p className="mt-0.5 text-sm font-semibold text-slate-300">{school}</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] font-mono text-xs font-bold text-slate-300">{mark}</span></div><p className="mt-4 border-t border-white/[0.06] pt-3 text-xs leading-5 text-slate-400"><span className="mr-2 text-emerald-300">✓</span>{copy}</p></article>;
}

export default App;
