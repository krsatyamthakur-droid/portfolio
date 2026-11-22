import { useRef, useState } from 'react'
import type { CSSProperties, FormEvent, ReactNode } from 'react'
import vorkiumLogo from '../images/vorkium-logo.png'
import architecture from '../images/architecture.webp'
import david from '../images/david.webp'
import brandArt from '../images/service-brand.webp'
import designArt from '../images/service-design.webp'
import directionArt from '../images/service-direction.webp'
import motionArt from '../images/service-motion.webp'
import headlampLanding from '../images/headlamp-landing.png'
import headlampBrand from '../images/headlamp-brand.png'
import dockerRefresh from '../images/docker-refresh.png'
import kubernetesEvolution from '../images/kubernetes-evolution.png'
import { foodCategories } from './foodPosts'
import { laptopPosts } from './laptopPosts'
import { constructionPosts } from './constructionPosts'
import { shoePosts } from './shoePosts'
import { conceptualPosts } from './conceptualPosts'

const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Open Source', id: 'opensource' },
  { label: 'Contact', id: 'contact' },
]

const services = [
  {
    title: ['Brand', 'Identity'],
    description: 'Distinct identities built from clear strategy, color, typography and visual rules.',
    image: brandArt,
  },
  {
    title: ['UI / UX', 'Design'],
    description: 'Thoughtful digital experiences that balance visual clarity with intuitive interaction.',
    image: designArt,
  },
  {
    title: ['Art', 'Direction'],
    description: 'A focused visual language across illustration, photography and campaign storytelling.',
    image: directionArt,
  },
  {
    title: ['Motion &', 'Social'],
    description: 'Kinetic systems and social-first graphics designed to communicate with impact.',
    image: motionArt,
  },
]

const tools = [
  ['◈', 'Figma'], ['Ai', 'Illustrator'], ['Ps', 'Photoshop'], ['Id', 'InDesign'],
  ['Ae', 'After Effects'], ['T', 'Typography'], ['◉', 'Color Systems'],
  ['▥', 'Layout'], ['◇', 'Motion'], ['▤', 'UI Prototyping'],
]

type Artwork = {
  title: string
  image: string
  width: number
  height: number
  alt: string
  description: string
  referenceUrl?: string
}

const rebrandingProjects: Artwork[] = [
  {
    title: 'Headlamp-inspired landing page',
    image: headlampLanding,
    width: 807,
    height: 549,
    alt: 'A cream landing page with oversized black and yellow type beside a dark gear with a glowing yellow center',
    description: 'A glowing yellow gear anchors the hero. Heavy type and a faint grid balance the dimensional artwork with a clear reading order.',
  },
  {
    title: 'Headlamp brand system',
    image: headlampBrand,
    width: 677,
    height: 549,
    alt: 'A dark Headlamp brand board showing a yellow gear icon at several sizes and alongside the wordmark',
    description: 'A yellow light at the center of a dark gear ties the identity together. The same silhouette carries from the full wordmark to an app tile and smaller icons.',
  },
  {
    title: 'Docker brand refresh',
    image: dockerRefresh,
    width: 742,
    height: 427,
    alt: 'A rounded blue Docker whale carrying containers with solid, outline, and monochrome versions below',
    description: 'A rounded blue whale and stacked containers keep the familiar Docker silhouette. Solid, outline, and monochrome variants show how the mark could adapt to different backgrounds and sizes.',
  },
  {
    title: 'Kubernetes brand evolution',
    image: kubernetesEvolution,
    width: 749,
    height: 427,
    alt: 'A white ship’s wheel on a dimensional blue badge with violet gradients and smaller logo variants',
    description: 'A white ship’s wheel stands out on a blue badge, while the lavender backdrop softens the palette. The smaller studies explore how the wheel reads in flat and monochrome treatments.',
  },
]

const companyCampaigns = [
  {
    category: 'Construction',
    layout: 'construction',
    name: 'BuildNext Constructions',
    description: 'A navy-and-yellow campaign concept that follows a project from blueprint to finished building.',
    posts: constructionPosts,
  },
  {
    category: 'Shoes',
    layout: 'shoes',
    name: 'StepForge',
    description: 'A running-shoe campaign concept that uses orange accents and italic headlines to link product close-ups with scenes in motion.',
    posts: shoePosts,
  },
] as const

type BrandLogo = { image: string; ink: string; background: string; accent: string }

type Project = {
  id: string
  title: string
  category: string
  description: string
  details: readonly [label: string, copy: string][]
  logo: BrandLogo
}

const logoProjects: Project[] = [
  {
    id: 'vorkium',
    title: 'Vorkium',
    category: 'Startup logo design',
    description: 'A rounded V identifies the startup, while a blue dot pulls the eye upward.',
    logo: { image: vorkiumLogo, ink: '#181d24', background: '#efefef', accent: '#1941f5' },
    details: [
      ['Brief', 'Create a compact symbol that connects to the Vorkium name and can stand on its own.'],
      ['Meaning', 'The angled strokes form the first letter of Vorkium. The detached blue dot above the shorter stroke reads as a point to aim for, giving the mark a sense of direction.'],
      ['Design choices', 'Rounded ends soften the sharp angle at the base. The unequal strokes create a distinctive outline, and the blue dot stands out against the charcoal V.'],
      ['Applications', 'The standalone mark can work as a profile image or a favicon. It can also sit beside the Vorkium name in a website header.'],
    ],
  },
]

type IconName = 'right' | 'up' | 'external' | 'close' | 'menu' | 'github' | 'chevron'

const iconPaths: Record<IconName, string> = {
  right: 'M4 12h15m-6-6 6 6-6 6',
  up: 'M12 20V5m-6 6 6-6 6 6',
  external: 'M5 19 19 5M7 5h12v12',
  close: 'm6 6 12 12M18 6 6 18',
  menu: 'M3 8h18M3 16h18',
  chevron: 'm6 9 6 6 6-6',
  github: 'M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.55v-2.14c-3.2.69-3.88-1.36-3.88-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13v3.16c0 .3.21.67.79.55A11.5 11.5 0 0 0 12 .7Z',
}

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'krsatyamthakur@gmail.com'
const githubUrl = import.meta.env.VITE_GITHUB_URL?.trim() || 'https://github.com/krsatyamthakur-droid'
const linkedInProfile = import.meta.env.VITE_LINKEDIN_URL?.trim()
const xProfile = import.meta.env.VITE_X_URL?.trim()

function Icon({ name }: { name: IconName }) {
  const filled = name === 'github'
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} aria-hidden="true">
      <path d={iconPaths[name]} stroke={filled ? undefined : 'currentColor'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function ProjectCover({ project }: { project: Project }) {
  const { image, ink, background } = project.logo
  const colors = { '--logo-ink': ink, '--logo-background': background } as CSSProperties

  return (
    <span className="project-cover logo-board" style={colors} aria-hidden="true">
      <img className="brand-image" src={image} alt="" width={146} height={158} loading="lazy" />
    </span>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className="project-card">
      <ProjectCover project={project} />
      <div className="project-card-copy">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <button className="project-card-button" type="button" aria-haspopup="dialog" aria-label={`View case study for ${project.title}`} onClick={() => onOpen(project)}>
          View case study
        </button>
      </div>
    </article>
  )
}

function ArtworkGallery({ items, layout }: { items: Artwork[]; layout: 'rebranding' | 'food' | 'laptops' | 'construction' | 'shoes' | 'conceptual' }) {
  const Heading = layout === 'rebranding' ? 'h3' : 'h4'

  return (
    <div className={`artwork-grid artwork-grid--${layout}`}>
      {items.map(({ title, image, width, height, alt, description, referenceUrl }) => (
        <article className="project-card artwork-card" key={title}>
          <div className="artwork-image">
            <img src={image} width={width} height={height} alt={alt} loading="lazy" />
            {layout === 'food' && <img className="artwork-backdrop" src={image} alt="" aria-hidden="true" loading="lazy" />}
          </div>
          <div className="project-card-copy">
            <Heading>{title}</Heading>
            <p>{description}</p>
            {referenceUrl && <a className="artwork-reference" href={referenceUrl} target="_blank" rel="noreferrer" aria-label={`Price and specs source for ${title} (opens in a new tab)`}>Price and specs source</a>}
          </div>
        </article>
      ))}
    </div>
  )
}

type WorkCategory = 'case-studies' | 'rebranding' | 'social-media-posts' | 'companies' | 'conceptual'
const foodPostCount = foodCategories.reduce((total, { posts }) => total + posts.length, 0)

function WorkCategoryCard({ id, title, count, itemName = 'project', expanded, onToggle, children }: {
  id: WorkCategory
  title: string
  count: number
  itemName?: string
  expanded: boolean
  onToggle: (category: WorkCategory) => void
  children: ReactNode
}) {
  return (
    <button className="work-category" type="button" id={id} aria-expanded={expanded} aria-controls={`${id}-projects`} onClick={() => onToggle(id)}>
      <span className="work-category-preview" aria-hidden="true">{children}</span>
      <span className="work-category-label">
        <strong>{title}</strong>
        <span>{count} {itemName}{count === 1 ? '' : 's'}</span>
      </span>
      <span className="work-category-chevron"><Icon name="chevron" /></span>
    </button>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project>(logoProjects[0])
  const [activeCategory, setActiveCategory] = useState<WorkCategory | null>(() => window.location.hash === '#rebranding' ? 'rebranding' : null)
  const [socialGallery, setSocialGallery] = useState<'food' | 'laptops'>('food')
  const [companyCampaign, setCompanyCampaign] = useState<(typeof companyCampaigns)[number]>(companyCampaigns[0])
  const [foodCategory, setFoodCategory] = useState(foodCategories[0])
  const [formStatus, setFormStatus] = useState('')
  const [isSending, setIsSending] = useState(false)
  const projectDialog = useRef<HTMLDialogElement>(null)
  const contactSubmission = useRef<{ fingerprint: string; id: string } | null>(null)

  function toggleCategory(category: WorkCategory) {
    setActiveCategory((active) => active === category ? null : category)
  }

  function openProject(project: Project) {
    setSelectedProject(project)
    projectDialog.current?.showModal()
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSending) return

    const form = event.currentTarget
    const fields = new FormData(form)
    const name = String(fields.get('name') ?? '').trim()
    const email = String(fields.get('email') ?? '').trim()
    const subject = String(fields.get('subject') ?? '').replace(/\s+/g, ' ').trim()
    const message = String(fields.get('message') ?? '').trim()
    if (!name || !message) {
      setFormStatus('Enter your name and a message.')
      return
    }

    const contact = { name, email, subject, message, _honey: String(fields.get('_honey') ?? '') }
    const fingerprint = JSON.stringify(contact)
    if (contactSubmission.current?.fingerprint !== fingerprint) {
      const id = Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, '0')).join('')
      contactSubmission.current = { fingerprint, id }
    }

    setIsSending(true)
    setFormStatus('Sending your message…')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contact, submissionId: contactSubmission.current.id }),
        signal: AbortSignal.timeout(25000),
      })
      const result: { success?: boolean; message?: string } = await response.json()
      if (!response.ok || result.success !== true) {
        setFormStatus(result.message || 'Your message couldn’t be sent. Try again or use the Email link below.')
        return
      }
      contactSubmission.current = null
      form.reset()
      setFormStatus('Message sent.')
    } catch {
      setFormStatus('Your message couldn’t be sent. Try again or use the Email link below.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="site-header">
        <div className="frame header-inner">
          <a className="wordmark" href="#top" aria-label="Satyam home" onClick={() => setMenuOpen(false)}>SATYAM.</a>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} id="main-nav" aria-label="Main navigation" onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMenuOpen(false)
              document.getElementById('menu-toggle')?.focus()
            }
          }}>
            {navigation.map(({ label, id }) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="header-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Icon name="external" /></a>
          <button
            className="round-button menu-toggle"
            id="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <main id="top" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="frame hero-inner">
            <div className="hero-art" aria-hidden="true">
              <span className="hero-sweep" />
              <span className="hero-disc" />
              <span className="hero-orbit" />
              <span className="spark hero-spark" />
              <img className="hero-statue" src={david} alt="" fetchPriority="high" />
            </div>
            <div className="hero-content">
              <p className="hero-kicker">Visual designer · Brand &amp; digital</p>
              <h1 id="hero-title"><span>I Shape</span><em>Visual</em><span>Stories<b>.</b></span></h1>
              <div className="hero-offer">
                <span>I create</span>
                <p>Brand identities<br />Visual storytelling<br />Digital experiences</p>
              </div>
              <a className="icon-link" href="#work"><span className="icon-disc"><Icon name="right" /></span>Explore my work</a>
              <p className="availability">Available for select work</p>
            </div>
            <a className="scroll-link" href="#about" aria-label="Scroll to About"><span>Scroll</span></a>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="frame about-layout">
            <div className="about-heading">
              <SectionLabel number="01">About</SectionLabel>
              <h2>I’m a designer who turns <em>ideas</em> into clear, memorable experiences.</h2>
            </div>
            <div className="about-copy">
              <p>I work across brand identity, UI/UX and visual storytelling, pairing expressive art direction with thoughtful systems. My technical background helps me understand how products get built and collaborate confidently with developers.</p>
              <dl className="about-facts">
                <div><dt>Based in</dt><dd>India</dd></div>
                <div><dt>Focus</dt><dd>Brand · UI/UX · Motion</dd></div>
                <div><dt>Currently</dt><dd>Creating &amp; collaborating</dd></div>
              </dl>
            </div>
            <div className="about-art">
              <img src={architecture} alt="Curved concrete balconies viewed from below" loading="lazy" />
              <span className="about-orbit" aria-hidden="true" />
              <span className="spark about-spark" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="section services" id="skills" aria-labelledby="services-title">
          <div className="frame">
            <div id="services-title"><SectionLabel number="02">What I do</SectionLabel></div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className={`service-card service-card--${index + 1}`} key={service.title.join(' ')}>
                  <span className="service-number" aria-hidden="true">0{index + 1}</span>
                  <img src={service.image} alt="" loading="lazy" />
                  <div className="service-copy">
                    <h3>{service.title[0]}<br />{service.title[1]}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <ul className="tool-list" aria-label="Design tools and disciplines">
              {tools.map(([mark, tool]) => <li key={tool}><span aria-hidden="true">{mark}</span>{tool}</li>)}
            </ul>
          </div>
        </section>

        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="frame">
            <header className="work-copy">
              <SectionLabel number="03">Selected work</SectionLabel>
              <h2 id="work-title">Things I’ve built.<span className="heading-rule" aria-hidden="true" /></h2>
            </header>
            <div className="work-category-row">
              <WorkCategoryCard id="case-studies" title="Case studies" count={logoProjects.length} expanded={activeCategory === 'case-studies'} onToggle={toggleCategory}>
                <ProjectCover project={logoProjects[0]} />
              </WorkCategoryCard>
              <WorkCategoryCard id="rebranding" title="Rebranding" count={rebrandingProjects.length} expanded={activeCategory === 'rebranding'} onToggle={toggleCategory}>
                <img src={dockerRefresh} alt="" loading="lazy" />
              </WorkCategoryCard>
              <WorkCategoryCard id="social-media-posts" title="Social media posts" count={foodPostCount + laptopPosts.length} itemName="artwork" expanded={activeCategory === 'social-media-posts'} onToggle={toggleCategory}>
                <img src={foodCategories[0].posts[0].image} alt="" loading="lazy" />
              </WorkCategoryCard>
              <WorkCategoryCard id="companies" title="Companies" count={companyCampaigns.length} itemName="campaign" expanded={activeCategory === 'companies'} onToggle={toggleCategory}>
                <img src={constructionPosts[0].image} alt="" loading="lazy" />
              </WorkCategoryCard>
              <WorkCategoryCard id="conceptual" title="Conceptual" count={conceptualPosts.length} itemName="concept" expanded={activeCategory === 'conceptual'} onToggle={toggleCategory}>
                <img src={conceptualPosts[0].image} alt="" loading="lazy" />
              </WorkCategoryCard>
            </div>
            <div className="work-category-panel project-grid" id="case-studies-projects" role="region" aria-labelledby="case-studies" hidden={activeCategory !== 'case-studies'}>
              {logoProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}
            </div>
            <div className="work-category-panel" id="rebranding-projects" role="region" aria-labelledby="rebranding" hidden={activeCategory !== 'rebranding'}>
              <p className="work-gallery-intro">Independent identity concepts for Headlamp, Docker, and Kubernetes.</p>
              <ArtworkGallery items={rebrandingProjects} layout="rebranding" />
            </div>
            <div className="work-category-panel" id="social-media-posts-projects" role="region" aria-labelledby="social-media-posts" hidden={activeCategory !== 'social-media-posts'}>
              <div className="poster-filters gallery-switch" role="group" aria-label="Social media categories">
                <button className="poster-filter" type="button" aria-pressed={socialGallery === 'food'} aria-controls="food-posts" onClick={() => setSocialGallery('food')}>
                  Food <span>{foodPostCount}</span>
                </button>
                <button className="poster-filter" type="button" aria-pressed={socialGallery === 'laptops'} aria-controls="laptop-posts" onClick={() => setSocialGallery('laptops')}>
                  Laptops <span>{laptopPosts.length}</span>
                </button>
              </div>
              <section id="food-posts" aria-labelledby="food-posts-title" hidden={socialGallery !== 'food'}>
                <h3 className="work-gallery-heading" id="food-posts-title">Food</h3>
                <p className="work-gallery-intro">BurgerHaven social media concepts for burgers, pizza, and biryani.</p>
                <div className="poster-filters" role="group" aria-label="Food categories">
                  {foodCategories.map((category) => (
                    <button className="poster-filter" type="button" key={category.title} aria-pressed={foodCategory === category} aria-controls="food-gallery" onClick={() => setFoodCategory(category)}>
                      {category.title} <span>{category.posts.length}</span>
                    </button>
                  ))}
                </div>
                <div id="food-gallery" role="region" aria-label={`${foodCategory.title} artwork`}>
                  <ArtworkGallery items={foodCategory.posts} layout="food" />
                </div>
              </section>
              <section id="laptop-posts" aria-labelledby="laptop-posts-title" hidden={socialGallery !== 'laptops'}>
                <h3 className="work-gallery-heading" id="laptop-posts-title">Laptops</h3>
                <p className="work-gallery-intro">Independent poster concepts. India prices reflect launch or listing references for the configurations shown.</p>
                <ArtworkGallery items={laptopPosts} layout="laptops" />
              </section>
            </div>
            <div className="work-category-panel" id="companies-projects" hidden={activeCategory !== 'companies'}>
              <div className="poster-filters gallery-switch" role="group" aria-label="Company categories">
                {companyCampaigns.map((campaign) => (
                  <button className="poster-filter" type="button" key={campaign.layout} aria-pressed={companyCampaign === campaign} aria-controls="company-gallery" onClick={() => setCompanyCampaign(campaign)}>
                    {campaign.category} <span>{campaign.posts.length}</span>
                  </button>
                ))}
              </div>
              <section id="company-gallery" aria-labelledby="company-gallery-title">
                <h3 className="work-gallery-heading" id="company-gallery-title">{companyCampaign.category}</h3>
                <p className="work-gallery-intro"><strong>{companyCampaign.name}</strong> · {companyCampaign.description}</p>
                <ArtworkGallery items={companyCampaign.posts} layout={companyCampaign.layout} />
              </section>
            </div>
            <section className="work-category-panel" id="conceptual-projects" aria-labelledby="conceptual-title" hidden={activeCategory !== 'conceptual'}>
              <h3 className="work-gallery-heading" id="conceptual-title">NovaVerse</h3>
              <p className="work-gallery-intro">Six landing-page concepts that use a shared identity to explore technology, sustainability, design, productivity, community, and creativity.</p>
              <ArtworkGallery items={conceptualPosts} layout="conceptual" />
            </section>
          </div>
        </section>

        <section className="section open-source" id="opensource" aria-labelledby="open-title">
          <div className="frame open-layout">
            <div className="open-copy">
              <SectionLabel number="04">Open source</SectionLabel>
              <h2 id="open-title">Building in public.<br />Sharing the <em>work</em>.</h2>
              <p>I build in public and contribute to open-source work, bringing a product-minded perspective to the tools and communities I support.</p>
              <a className="icon-link" href={githubUrl} target="_blank" rel="noreferrer">
                <span className="icon-disc"><Icon name="github" /></span>View GitHub <Icon name="external" />
              </a>
            </div>
            <div className="open-art" aria-hidden="true">
              <span className="open-orbit" />
              <div className="github-card"><Icon name="github" /></div>
              <div className="activity-card">
                <span>GitHub contributions</span>
                <strong>2026</strong>
                <div className="activity-grid">
                  {Array.from({ length: 60 }, (_, index) => <i key={index} data-level={(index * 17 + Math.floor(index / 7) * 3) % 7} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="frame contact-layout">
            <div className="contact-copy">
              <SectionLabel number="07">Contact</SectionLabel>
              <h2 id="contact-title">Have an idea?<br />Let’s <em>create</em><br />something great.</h2>
              <p>I’m always open to interesting projects,<br className="desktop-break" /> collaborations and open-source opportunities.</p>
            </div>
            <form className="contact-form" method="post" action="/api/contact" onSubmit={submitForm}>
              <label><span className="visually-hidden">Name</span><input name="name" type="text" autoComplete="name" placeholder="Name" maxLength={120} readOnly={isSending} required /></label>
              <label><span className="visually-hidden">Email</span><input name="email" type="email" autoComplete="email" placeholder="Email" maxLength={254} readOnly={isSending} required /></label>
              <label><span className="visually-hidden">Project or subject (optional)</span><input name="subject" type="text" placeholder="Project / Subject (optional)" maxLength={160} readOnly={isSending} /></label>
              <label><span className="visually-hidden">Message</span><textarea name="message" rows={3} placeholder="Message…" maxLength={6000} readOnly={isSending} required /></label>
              <input name="_honey" type="text" tabIndex={-1} autoComplete="off" hidden />
              <button className="pill-button" type="submit" disabled={isSending}>{isSending ? 'Sending…' : 'Send message'} <Icon name="external" /></button>
              <p className="form-status" role="status">{formStatus}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="frame footer-inner">
          <a className="wordmark" href="#top" aria-label="Satyam home">SATYAM</a>
          <p>Visual &amp; digital designer · Product-minded · Building in public</p>
          <div className="footer-links">
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${contactEmail}`}>Email</a>
            {linkedInProfile && <a href={linkedInProfile} target="_blank" rel="noreferrer">LinkedIn</a>}
            {xProfile && <a href={xProfile} target="_blank" rel="noreferrer">X</a>}
          </div>
          <a className="round-button" href="#top" aria-label="Back to top"><Icon name="up" /></a>
        </div>
      </footer>

      <dialog className="project-dialog" ref={projectDialog} aria-labelledby="project-title" onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}>
        <div className="dialog-inner">
          <button className="round-button dialog-close" type="button" autoFocus onClick={() => projectDialog.current?.close()} aria-label="Close project"><Icon name="close" /></button>
          <ProjectCover project={selectedProject} />
          <div className="dialog-copy">
            <p className="project-category">{selectedProject.category}</p>
            <h2 id="project-title">{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <dl>
              {selectedProject.details.map(([label, copy]) => <div key={label}><dt>{label}</dt><dd>{copy}</dd></div>)}
            </dl>
            <ul className="brand-palette" aria-label="Logo color palette">
              {[selectedProject.logo.background, selectedProject.logo.accent, selectedProject.logo.ink].map((color) => (
                <li key={color}><span style={{ backgroundColor: color }} aria-hidden="true" />{color}</li>
              ))}
            </ul>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default App
