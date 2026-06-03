import { useState, useEffect } from 'react'
import { cvprDemos } from '../data/cvpr-demos'
import { workshops } from '../data/workshops'

const base = import.meta.env.BASE_URL
const asset = (path) => `${base}${path.replace(/^\//, '')}`
const FOOTER_COLS = [
  {
    heading: 'AI Factories',
    links: [
      { label: 'Superintelligence',      href: 'https://lambda.ai/superintelligence' },
      { label: 'Enterprise',             href: 'https://lambda.ai/enterprise' },
      { label: 'Government',             href: 'https://lambda.ai/government' },
      { label: 'Startups & researchers', href: 'https://lambda.ai/startups' },
      { label: 'AI infrastructure',      href: 'https://lambda.ai/ai-infrastructure' },
      { label: 'Trust and security',     href: 'https://lambda.ai/trust' },
    ],
  },
  {
    heading: 'Products',
    links: [
      { label: 'Superclusters',  href: 'https://lambda.ai/superclusters' },
      { label: '1-Click Clusters', href: 'https://lambda.ai/1-click-clusters' },
      { label: 'Instances',      href: 'https://lambda.ai/instances' },
      { label: 'Orchestration',  href: 'https://lambda.ai/orchestration' },
      { label: 'Lambda Stack',   href: 'https://lambda.ai/lambda-stack-deep-learning-software' },
      { label: 'Documentation',  href: 'https://docs.lambda.ai' },
      { label: 'Research',       href: 'https://lambda.ai/research' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',            href: 'https://lambda.ai/about' },
      { label: 'Careers',          href: 'https://lambda.ai/careers' },
      { label: 'Blog',             href: 'https://lambda.ai/blog' },
      { label: 'Customer stories', href: 'https://lambda.ai/customer-stories' },
      { label: 'Partners',         href: 'https://lambda.ai/partners' },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/lambda-cloud/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/LambdaAPI',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@lambda-ai/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

function CVPRFooter() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Logo */}
        <div className="mb-12">
          <a href="https://lambda.ai" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
            <img src={asset('/logos/lambda.svg')} alt="Lambda" className="h-[28px] w-auto" />
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "'Suisse Intl Mono', monospace" }}>{col.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors duration-150"
                      style={{ fontFamily: "'Suisse Intl Mono', monospace", color: '#B0AFA6' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 Lambda. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {/* Legal */}
            <div className="flex items-center gap-4">
              <a href="https://lambda.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="https://lambda.ai/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/30 hover:text-white transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

const cvprWorkshops = workshops.filter((w) => w.venue === 'CVPR 2026')

const NAV_LINKS = [
  { label: 'Demos',     href: '#cvpr-demos' },
  { label: 'Workshops', href: '#cvpr-workshops' },
]

// ─── Nav ─────────────────────────────────────────────────────────────────────

function CVPRNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="https://lambda.ai" target="_blank" rel="noopener noreferrer" className="shrink-0 hover:opacity-80 transition-opacity">
          <img src={asset('/logos/lambda.svg')} alt="Lambda" className="h-[32px] w-auto" />
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-0.5 flex-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="px-4 py-2 text-sm text-[#a0a09e] hover:text-white transition-colors duration-150 whitespace-nowrap uppercase"
                style={{ fontFamily: "'Suisse Intl Mono', monospace" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>


        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-[#a0a09e] hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen
            ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ${menuOpen ? 'max-h-64 border-b border-white/10' : 'max-h-0'} bg-black`}>
        <ul className="px-6 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="block px-3 py-2 text-sm text-[#a0a09e] hover:text-white transition-colors uppercase" style={{ fontFamily: "'Suisse Intl Mono', monospace" }} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

// ─── Demo card ────────────────────────────────────────────────────────────────

function DemoCard({ demo, index }) {
  const isEmpty = !demo.url

  if (isEmpty) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden flex flex-col" style={{ minHeight: '260px' }}>
        <div className="flex-1 flex items-center justify-center p-8">
          <p className="text-sm text-gray-600">Coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <a
      href={demo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl border border-white/10 bg-[#111] overflow-hidden flex flex-col hover:border-white/25 transition-all duration-200"
      style={{ minHeight: '260px' }}
      aria-label={`Open demo: ${demo.title}`}
    >
      {/* Thumbnail */}
      <div className="relative h-44 bg-[#0a0a0a] overflow-hidden shrink-0">
        {demo.screenshot ? (
          <img
            src={asset(demo.screenshot)}
            alt={demo.title}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${demo.screenshotFit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 text-xs font-mono text-white/30">{String(index + 1).padStart(2, '0')}</span>
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        {demo.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {demo.tags.map((t) => (
              <span key={t} className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-gray-300 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm leading-snug" style={{ fontFamily: "'Suisse Intl', sans-serif", fontWeight: 600, color: '#E7E6D9' }}>{demo.title}</p>
        {demo.description && (
          <p className="text-xs leading-relaxed" style={{ fontFamily: "'Suisse Intl Mono', monospace", color: '#B0AFA6' }}>{demo.description}</p>
        )}
      </div>
    </a>
  )
}




// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Suisse Intl', sans-serif", fontWeight: 600, color: '#E7E6D9' }}>{title}</h2>
      {subtitle && <p className="text-sm mt-3" style={{ fontFamily: "'Suisse Intl Mono', monospace", color: '#B0AFA6' }}>{subtitle}</p>}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CVPRPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <CVPRNav />

      <main className="flex-1 pt-[72px]">

        {/* Hero */}
        <section className="py-20 md:py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ fontFamily: "'Suisse Intl Mono', monospace", color: '#E7E6D9' }}>Denver, CO · June 3–7, 2026</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] mb-6" style={{ color: '#e7e6d9' }}>
              <span style={{ fontFamily: "'Suisse Intl', sans-serif", fontWeight: 600, color: '#E7E6D9' }}>Lambda</span> <span style={{ color: '#5E5D58' }}>@ CVPR 2026</span>
            </h1>
            <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ fontFamily: "'Suisse Intl Mono', monospace", color: '#E7E6D9' }}>
              3D Vision · World Model · Embodied AI — Modeling and reasoning about the physical world
            </p>
          </div>
        </section>

        {/* Demos */}
        <section id="cvpr-demos" className="py-16 border-b border-white/10 scroll-mt-[72px]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <SectionHeader title="Demos" subtitle="Research demonstrations" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cvprDemos.map((demo, i) => (
                <DemoCard key={demo.id} demo={demo} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Workshops */}
        {cvprWorkshops.length > 0 && (
          <section id="cvpr-workshops" className="py-16 scroll-mt-[72px]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <SectionHeader title="Workshops" subtitle="Workshops co-organized by Lambda at CVPR 2026." />
              <div className="max-w-3xl">
                {cvprWorkshops.map((w, i) => (
                  <a
                    key={w.id}
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-6 border-t border-white/10 py-6 hover:opacity-80 transition-opacity"
                  >
                    <span className="text-3xl font-bold tabular-nums shrink-0 w-10" style={{ fontFamily: "'Suisse Intl Mono', monospace", color: '#42413E' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                      <p className="text-base leading-snug group-hover:text-gray-200 transition-colors" style={{ fontFamily: "'Suisse Intl', sans-serif", fontWeight: 600, color: '#E7E6D9' }}>{w.name}</p>
                      <p className="text-xs text-gray-600" style={{ fontFamily: "'Suisse Intl Mono', monospace" }}>{w.venue}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
                <div className="border-t border-white/10" />
              </div>
            </div>
          </section>
        )}

      </main>

      <CVPRFooter />
    </div>
  )
}
