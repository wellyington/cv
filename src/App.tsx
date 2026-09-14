import { useMemo, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Code2,
  Copy,
  ExternalLink,
  FileCode2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Server,
  Terminal,
  Timer,
  X,
  Zap,
} from 'lucide-react';
import {
  accentClasses,
  snippets,
  type Lang,
  type Category,
  type SnippetKey,
} from '@/i18n/translations';
import { useLanguage } from '@/i18n/useLanguage';
import { FlagUK, FlagSpain, FlagBrazil } from '@/components/Flags';

type ToastMessage = string | null;

const email = 'welly.almeida@gmail.com';
const phone = '+34 604 286 691';

function App() {
  const { lang, setLang, t } = useLanguage();
  const [category, setCategory] = useState<Category>('all');
  const [expandedRole, setExpandedRole] = useState(0);
  const [snippet, setSnippet] = useState<SnippetKey>('equa');
  const [toast, setToast] = useState<ToastMessage>(null);
  const [cliInput, setCliInput] = useState('');
  const [cliOutput, setCliOutput] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const flagMap: Record<Lang, { Flag: typeof FlagUK; label: string }> = {
    en: { Flag: FlagUK, label: 'English' },
    es: { Flag: FlagSpain, label: 'Español' },
    pt: { Flag: FlagBrazil, label: 'Português' },
  };

  const visibleCompetencies = useMemo(
    () => category === 'all' ? t.architecture.competencies : t.architecture.competencies.filter((item) => item.category === category),
    [category, t],
  );
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
      showToast(t.specs.toast.unavailable);
    }
  };

  const openSnippet = (key: SnippetKey) => {
    setSnippet(key);
    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
    showToast(t.specs.toast.loaded.replace('{key}', key.toUpperCase()));
  };

  const runCommand = () => {
    const command = cliInput.trim().toLowerCase();
    const c = t.specs.cli;
    const outputs: Record<string, string> = {
      help: c.help,
      status: c.status,
      stacks: c.stacks,
      contact: c.contact,
      benchmarks: c.benchmarks,
    };
    if (command === 'clear') setCliOutput(null);
    else setCliOutput(outputs[command] ?? c.unknown.replace('{cmd}', command));
    setCliInput('');
  };

  const navItems: [string, string][] = [
    [t.nav.profile, '#hero'],
    [t.nav.architecture, '#architecture'],
    [t.nav.experience, '#experience'],
    [t.nav.projects, '#projects'],
    [t.nav.credentials, '#credentials'],
    [t.nav.systemSpecs, '#specs'],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090a0f] text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-glow" />
      <div className="pointer-events-none fixed inset-0 z-0 grid-pattern opacity-60" />
      <div className="pointer-events-none fixed -left-48 top-0 z-0 hidden h-[32rem] w-[32rem] rounded-full bg-indigo-600/10 blur-[140px] sm:block" />
      <div className="pointer-events-none fixed -right-48 top-[38%] z-0 hidden h-[32rem] w-[32rem] rounded-full bg-emerald-500/10 blur-[140px] sm:block" />

      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#090a0f]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-6 lg:px-8 xl:grid xl:grid-cols-[auto_minmax(0,1fr)_auto]">
          <a href="#hero" className="group flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/40 bg-gradient-to-br from-indigo-500/90 to-emerald-400/80 font-mono text-xs font-bold text-white shadow-lg shadow-indigo-500/20">WA</span>
            <span className="hidden flex-col sm:flex"><strong className="whitespace-nowrap text-sm font-bold tracking-tight text-white">Wellington Almeida</strong><small className="whitespace-nowrap font-mono text-[10px] tracking-wide text-slate-400">CTO & Solutions Architect</small></span>
          </a>

          {/* Desktop nav — middle column, only visible on xl+ */}
          <nav className="hidden xl:flex xl:items-center xl:justify-center xl:gap-1 xl:overflow-hidden">
            {navItems.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap rounded-md px-2.5 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white">{label}</a>)}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 xl:justify-self-end">
            {/* Language dropdown */}
            <div className="relative">
              <button onClick={() => setLangOpen((open) => !open)} className="flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2 transition hover:bg-white/[0.08]" aria-label="Select language" aria-expanded={langOpen} aria-haspopup="listbox">
                <span className="h-5 w-7 overflow-hidden rounded-sm">{(() => { const F = flagMap[lang].Flag; return <F className="h-full w-full" />; })()}</span>
                <ChevronDown size={13} className={`text-slate-400 transition ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="fixed right-4 top-[4.75rem] z-50 w-40 rounded-xl border border-white/10 bg-[#11141e]/95 p-1.5 shadow-2xl backdrop-blur-xl sm:absolute sm:right-0 sm:top-[2.75rem]" role="listbox">
                    {(Object.keys(flagMap) as Lang[]).map((code) => {
                      const F = flagMap[code].Flag;
                      return (
                        <button key={code} onClick={() => { setLang(code); setLangOpen(false); }} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 transition ${code === lang ? 'bg-indigo-600/25 text-white' : 'text-slate-400 hover:bg-white/[0.06] hover:text-white'}`} role="option" aria-selected={code === lang}>
                          <span className="h-4 w-6 overflow-hidden rounded-sm"><F className="h-full w-full" /></span>
                          <span className="text-xs font-medium">{flagMap[code].label}</span>
                          {code === lang && <Check size={13} className="ml-auto text-indigo-300" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            <button onClick={() => copyText(email, t.specs.toast.email)} className="action-button hidden sm:inline-flex" aria-label="Copy email address to clipboard"><Mail size={14} /><span className="hidden lg:inline">{t.nav.copyEmail}</span></button>
            <button onClick={() => window.print()} className="primary-button hidden sm:inline-flex"><ArrowDownToLine size={14} /><span className="hidden lg:inline">{t.nav.resumePdf}</span></button>
            <a href="https://linkedin.com/in/wellington-almeida-4202099b" target="_blank" rel="noreferrer" className="icon-button hidden lg:inline-flex" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <a href="https://github.com/wellyington" target="_blank" rel="noreferrer" className="icon-button hidden lg:inline-flex" aria-label="GitHub"><Github size={15} /></a>
            <button onClick={() => setMenuOpen((open) => !open)} className="icon-button xl:hidden" aria-label="Toggle menu">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
          </div>
        </div>

        {/* Mobile/tablet dropdown menu — below the header bar */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-[#11141e]/95 p-4 shadow-2xl backdrop-blur-xl xl:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white">{label}</a>)}
            </nav>
            <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
              <button onClick={() => { copyText(email, t.specs.toast.email); setMenuOpen(false); }} className="action-button flex-1"><Mail size={14} /> {t.nav.copyEmail}</button>
              <button onClick={() => { window.print(); setMenuOpen(false); }} className="primary-button flex-1"><ArrowDownToLine size={14} /> {t.nav.resumePdf}</button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <a href="https://linkedin.com/in/wellington-almeida-4202099b" target="_blank" rel="noreferrer" className="action-button flex-1 justify-center" onClick={() => setMenuOpen(false)}><Linkedin size={14} /> LinkedIn</a>
              <a href="https://github.com/wellyington" target="_blank" rel="noreferrer" className="action-button flex-1 justify-center" onClick={() => setMenuOpen(false)}><Github size={14} /> GitHub</a>
            </div>
          </div>
        )}
      </header>

      {toast && <div className="fixed bottom-6 right-4 z-50 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-xl border border-emerald-500/35 bg-[#111722]/95 px-4 py-3 font-mono text-xs text-emerald-200 shadow-2xl shadow-emerald-950/30"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300"><Check size={14} /></span>{toast}</div>}

      <main className="relative z-10 mx-auto max-w-7xl space-y-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section id="hero" className="scroll-mt-24 pt-2 lg:pt-8">
          <div className="mb-6 flex flex-wrap gap-3"><span className="eyebrow-pill"><CircleDot size={12} className="text-indigo-300" /> {t.hero.identifier}</span><span className="eyebrow-pill text-indigo-200"><Timer size={12} /> {t.hero.edgeLatency}</span></div>
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <div><h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">{t.hero.name}</h1><p className="mt-2 max-w-3xl bg-gradient-to-r from-indigo-300 via-slate-100 to-emerald-300 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">{t.hero.subtitle}</p></div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 font-mono text-xs text-slate-300"><span className="flex items-center gap-2 text-slate-400"><MapPin size={14} className="text-emerald-400" /> {t.hero.location}</span><button onClick={() => copyText(phone, t.specs.toast.phone)} className="inline-flex items-center gap-2 transition hover:text-emerald-300" aria-label={`Copy phone number ${phone}`}><Phone size={13} className="text-indigo-300" /> {phone}</button><button onClick={() => copyText(email, t.specs.toast.email)} className="inline-flex items-center gap-2 transition hover:text-indigo-300" aria-label="Copy email address"><Mail size={13} className="text-indigo-300" /> {email}</button></div>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{t.hero.intro}</p>
              <div className="flex flex-wrap gap-3"><a href="#experience" className="primary-button px-4 py-2.5">{t.hero.inspectTimeline} <ArrowRight size={15} /></a><a href="#architecture" className="action-button px-4 py-2.5">{t.hero.architecturePlaybooks}</a><a href="#specs" className="action-button border-emerald-500/30 bg-emerald-500/10 text-emerald-200 px-4 py-2.5"><Terminal size={14} /> {t.hero.liveTerminal}</a></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
              {t.hero.stats.map(([eyebrow, value, copy, accent], index) => <div key={eyebrow} className="glass-panel group relative overflow-hidden rounded-xl p-5"><div className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full ${accent === 'indigo' ? 'bg-indigo-500/10' : accent === 'emerald' ? 'bg-emerald-500/10' : 'bg-cyan-500/10'} transition group-hover:scale-110`} /><div className={`relative mb-1 flex justify-between font-mono text-xs ${accent === 'indigo' ? 'text-indigo-300' : accent === 'emerald' ? 'text-emerald-300' : 'text-cyan-300'}`}><span>{eyebrow}</span><span>// 0{index + 1}</span></div><div className="relative text-3xl font-bold tracking-tight text-white">{value}</div><p className="relative mt-1 text-xs leading-5 text-slate-400">{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section id="architecture" className="deferred-section scroll-mt-24 space-y-6"><SectionHeading module={t.architecture.module} title={t.architecture.title} accent="indigo" caption={t.architecture.caption} /><div className="flex flex-wrap gap-2">{t.architecture.filters.map(([key, label]) => <button key={key} onClick={() => setCategory(key)} className={`filter-button ${category === key ? 'filter-button-active' : ''}`}>{label}</button>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visibleCompetencies.map((item) => { const Icon = item.icon; const accent = accentClasses[item.accent]; return <article key={item.title} className="glass-panel group flex flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-950/20"><div className="space-y-4"><div className="flex items-center justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent.border} ${accent.soft} ${accent.text}`}><Icon size={19} /></span><span className={`rounded-md border ${accent.border} ${accent.soft} px-2 py-1 font-mono text-[10px] ${accent.text}`}>{item.eyebrow}</span></div><div><h3 className={`text-lg font-bold text-white transition ${accent.hover}`}>{item.title}</h3><p className="mt-1 text-xs leading-5 text-slate-400">{item.description}</p></div><div className="flex flex-wrap gap-1.5">{item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div></div><div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] text-slate-400"><span>{item.metric}</span><span className={accent.text}>{item.footer}</span></div></article> })}</div></section>

        <section id="experience" className="deferred-section scroll-mt-24 space-y-6"><SectionHeading module={t.experience.module} title={t.experience.title} accent="emerald" caption={t.experience.caption} /><div className="relative ml-3 space-y-8 border-l border-white/15 pl-6 sm:ml-6 sm:pl-10">{t.experience.experiences.map((item, index) => { const accent = accentClasses[item.accent]; const expanded = expandedRole === index; return <article key={item.company}><span className={`absolute -left-[31px] top-2 h-4 w-4 rounded-full border-4 border-[#090a0f] ${accent.dot} shadow-lg`} /><button onClick={() => setExpandedRole(expanded ? -1 : index)} className={`glass-panel group w-full rounded-2xl p-6 text-left transition hover:border-white/20 sm:p-7 ${index === 0 ? 'border-emerald-500/30' : ''}`}><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><div className={`flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider ${accent.text}`}>{item.role}{index === 0 && <span className="rounded border border-emerald-500/35 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">{t.experience.activeRole}</span>}</div><h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{item.company}</h3><p className="font-mono text-xs text-slate-400">{item.location}</p></div><div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end"><span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-slate-300">{item.period}</span><span className={`font-mono text-[11px] ${accent.text}`}>{item.label}</span></div></div><ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className={accent.text}>›</span><span>{bullet}</span></li>)}</ul><div className={`grid transition-all duration-300 ${expanded ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><div className="min-h-0 overflow-hidden border-t border-white/10 pt-4"><div className={`mb-3 flex items-center gap-2 font-mono text-xs font-semibold ${accent.text}`}><Code2 size={14} /> {t.experience.techBreakdown}</div><div className="grid gap-3 sm:grid-cols-3">{item.specs.map(([label, value]) => <div key={label} className="rounded-lg border border-white/[0.06] bg-black/30 p-3 font-mono"><span className="block text-[10px] text-slate-400">{label}</span><span className="text-xs text-white">{value}</span></div>)}</div></div></div><span className="mt-4 flex items-center justify-end gap-1 font-mono text-[10px] text-slate-400">{expanded ? t.experience.collapseLabel : t.experience.expandLabel} <ChevronDown size={13} className={`transition ${expanded ? 'rotate-180' : ''}`} /></span></button></article> })}</div></section>

        <section id="projects" className="deferred-section scroll-mt-24 space-y-6"><SectionHeading module={t.projects.module} title={t.projects.title} accent="indigo" caption={t.projects.caption} /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.projects.blueprints.map((project) => { const accent = accentClasses[project.accent]; return <article key={project.number} className={`glass-panel group flex flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-1 hover:border-white/20 ${project.number === '07' ? 'md:col-span-2 lg:col-span-3' : ''}`}><div className={project.number === '07' ? 'lg:flex lg:items-center lg:justify-between lg:gap-8' : ''}><div className="space-y-4"><div className="flex items-center justify-between gap-3"><span className={`rounded border ${accent.border} ${accent.soft} px-2.5 py-1 font-mono text-[10px] uppercase ${accent.text}`}>{project.stack}</span><span className="font-mono text-xs text-slate-500">SYS-ARCH-{project.number}</span></div><h3 className={`text-lg font-bold text-white transition ${accent.hover}`}>{project.title}</h3><p className="text-xs leading-5 text-slate-300">{project.description}</p><div className="space-y-1 font-mono text-[11px] text-slate-400">{project.bullets.map((bullet) => <div key={bullet}><span className={accent.text}>›</span> {bullet}</div>)}</div></div><div className={`mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3 ${project.number === '07' ? 'lg:mt-0 lg:min-w-[260px] lg:border-0 lg:pt-0' : ''}`}><span className="font-mono text-[11px] text-slate-400">{project.footer}</span><button onClick={() => openSnippet(project.snippet)} className={`inline-flex items-center gap-1 font-mono text-xs ${accent.text}`}>{t.projects.inspectSpec} <ChevronRight size={14} /></button></div></div></article> })}</div></section>

        <section id="credentials" className="deferred-section scroll-mt-24 grid gap-8 lg:grid-cols-12"><div className="space-y-6 lg:col-span-7"><SectionHeading module={t.credentials.moduleEducation} title={t.credentials.titleEducation} accent="indigo" /><div className="space-y-4">{t.credentials.education.map((edu) => <EducationCard key={edu.mark} year={edu.year} title={edu.title} school={edu.school} mark={edu.mark} copy={edu.copy} />)}</div></div><div className="space-y-6 lg:col-span-5"><SectionHeading module={t.credentials.moduleLanguages} title={t.credentials.titleLanguages} accent="emerald" /><div className="glass-panel space-y-6 rounded-2xl p-6"><p className="text-xs leading-5 text-slate-300">{t.credentials.languagesIntro}</p>{t.credentials.languages.map(([language, level, percent, copy]) => <div key={language} className="space-y-2 border-t border-white/[0.06] pt-4 first:border-0 first:pt-0"><div className="flex items-center justify-between gap-2 font-mono text-xs"><span className="font-bold text-white">{language} <span className="ml-1 rounded border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">{level}</span></span><span className="text-slate-400">{percent}</span></div><div className="h-2 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" style={{ width: percent }} /></div><p className="text-[11px] leading-5 text-slate-400">{copy}</p></div>)}</div></div></section>

        <section id="specs" className="deferred-section scroll-mt-24 space-y-4"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" /><h2 className="font-mono text-lg font-bold tracking-tight text-white">{t.specs.title}</h2></div><div className="flex flex-wrap gap-2">{t.specs.snippetLabels.map(([key, label]) => <button key={key} onClick={() => setSnippet(key)} className={`filter-button ${snippet === key ? 'border-indigo-500/50 bg-indigo-500/15 text-indigo-200' : ''}`}>{label}</button>)}</div></div><div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b0d14] shadow-2xl"><div className="flex flex-col justify-between gap-3 border-b border-white/10 bg-black/60 px-4 py-3 sm:flex-row sm:items-center"><div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-rose-500/80" /><span className="h-3 w-3 rounded-full bg-amber-500/80" /><span className="h-3 w-3 rounded-full bg-emerald-500/80" /><span className="ml-2 font-mono text-xs text-slate-400">{activeSnippet.filename}</span></div><div className="flex items-center gap-3"><span className="font-mono text-[10px] text-emerald-400">{t.specs.compiledIn}</span><button onClick={() => copyText(activeSnippet.code, t.specs.toast.code)} className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-1 font-mono text-xs text-slate-300 transition hover:bg-white/15 hover:text-white"><Copy size={12} /> {t.specs.copyCode}</button></div></div><pre className="max-h-[360px] overflow-x-auto p-5 font-mono text-xs leading-6 text-indigo-100/90">{activeSnippet.code}</pre><div className="flex flex-col gap-2 border-t border-white/10 bg-black/80 px-5 py-3 font-mono text-xs sm:flex-row sm:items-center"><span className="text-emerald-400">{t.specs.prompt}</span><input value={cliInput} onChange={(event) => setCliInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') runCommand(); }} placeholder={t.specs.placeholder} className="min-w-0 flex-grow bg-transparent text-white outline-none placeholder:text-slate-500" aria-label="Terminal command" /><span className="hidden text-[10px] text-slate-500 sm:inline">{t.specs.enterLabel}</span></div>{cliOutput && <div className="border-t border-indigo-500/20 bg-indigo-950/20 px-5 py-3 font-mono text-xs leading-5 text-indigo-200">{cliOutput}</div>}</div></section>

        <section className="deferred-section relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 via-[#131620]/80 to-emerald-950/40 p-8 text-center sm:p-12"><div className="relative z-10 mx-auto max-w-3xl space-y-5"><span className="eyebrow-pill border-emerald-500/30 bg-emerald-500/10 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {t.cta.badge}</span><h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.cta.title}</h2><p className="text-sm leading-6 text-slate-300 sm:text-base">{t.cta.description}</p><div className="flex flex-wrap justify-center gap-3 pt-2"><button onClick={() => copyText(email, t.specs.toast.email)} className="primary-button px-5 py-3"><Copy size={15} /> {t.cta.copyEmail.replace('{email}', email)}</button><a href={`tel:${phone.replace(/ /g, '')}`} className="action-button px-5 py-3"><Phone size={15} className="text-emerald-300" /> {t.cta.callDirect}</a></div></div></section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080c] py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 font-mono text-[10px] text-slate-400 sm:flex-row sm:px-6 lg:px-8"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> {t.footer.tagline}</span><div className="flex gap-5"><a href="https://linkedin.com/in/wellington-almeida-4202099b" target="_blank" rel="noreferrer" className="transition hover:text-slate-300">{t.footer.linkedin}</a><a href="https://github.com/wellyington" target="_blank" rel="noreferrer" className="transition hover:text-slate-300">{t.footer.github}</a><button onClick={() => copyText(email, t.specs.toast.email)} className="transition hover:text-slate-300" aria-label="Copy email address">{t.footer.email}</button><a href="#hero" className="transition hover:text-indigo-300">{t.footer.backToTop}</a></div><span>{t.footer.location}</span></div></footer>
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
