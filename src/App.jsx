import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import './App.css'

const services = [
  {
    title: 'First-Time Homebuyers',
    items: [
      'Pre-approval guidance and checklists',
      'Step-by-step mortgage process education',
      'Credit optimization strategies',
      'Down payment and closing cost planning',
    ],
  },
  {
    title: 'Refinancing',
    items: [
      'Rate comparison and savings analysis',
      'IRRRL vs. cash-out evaluation',
      'Strategic timing for maximum benefit',
      'Monthly payment reduction options',
    ],
  },
  {
    title: 'Realtor Partnerships',
    items: [
      'Fast, reliable closings',
      'Proactive communication throughout the process',
      'Professional partnership support',
      'On-time delivery guarantee',
    ],
  },
]

const vaBenefits = [
  'Zero down payment options',
  'No PMI requirements',
  'Seller concessions optimization',
  'Funding fee waivers for qualified veterans',
  'Strategic appraisal management',
  'Closing cost credit stacking',
]

const testimonials = [
  {
    quote:
      'They were denied by two banks. One conversation with The Ferranti Group changed everything. Two weeks later, they were holding keys.',
    name: 'First-Time Buyer, Cranston',
  },
  {
    quote:
      'Refinancing seemed complicated until they showed us the real numbers. We are now saving $300 per month.',
    name: 'Homeowner, Providence',
  },
  {
    quote:
      'The team moved faster than anyone we have worked with. Our closing was on time and stress-free.',
    name: 'Realtor Partner',
  },
]

const resources = [
  'First-Time Buyer Checklist',
  'Pre-Approval Document Guide',
  'Refinance Savings Calculator',
  'Credit Optimization Timeline',
  'VA Loan Benefits Breakdown',
]

const team = [
  {
    name: 'Kenneth Ferranti',
    role: 'Branch Manager',
    nmls: '799937',
    photo: '/assets/team/kenneth-ferranti.png',
  },
  {
    name: 'Jeffrey Wilkish',
    role: 'Region Manager',
    nmls: '48034',
    photo: '/assets/team/jeffrey-wilkish.png',
  },
  {
    name: 'Aaron Kloss',
    role: 'Loan Consultant',
    nmls: '121127',
    photo: '/assets/team/aaron-kloss.jpg',
  },
  {
    name: 'Antoanet Sialer',
    role: 'Loan Consultant',
    nmls: '312757',
    photo: '/assets/team/antoanet-sialer.png',
  },
  {
    name: 'Carlos Rosa',
    role: 'Loan Consultant',
    nmls: '20735',
    photo: '/assets/team/carlos-rosa.jpg',
  },
  {
    name: 'Christopher Alfano',
    role: 'Sales Manager',
    nmls: '2097161',
    photo: '/assets/team/christopher-alfano.png',
  },
  {
    name: 'Daniela Gatti',
    role: 'Loan Consultant',
    nmls: '12202',
    photo: '/assets/team/daniela-gatti.png',
  },
  {
    name: 'James Procter',
    role: 'Sales Manager',
    nmls: '23362',
    photo: '/assets/team/james-procter.png',
  },
  {
    name: 'Jasmine Vega',
    role: 'Loan Consultant',
    nmls: '2779005',
    photo: '/assets/team/jasmine-vega.jpg',
  },
  {
    name: 'Josh Woodard',
    role: 'Loan Consultant',
    nmls: '2069871',
    photo: '/assets/team/josh-woodard.png',
  },
  {
    name: 'Justin Maroney',
    role: 'Loan Consultant',
    nmls: '1901645',
    photo: '/assets/team/justin-maroney.png',
  },
  {
    name: 'Lora Fernandez',
    role: 'Loan Consultant',
    nmls: '704347',
    photo: '/assets/team/lora-fernandez.jpg',
  },
  {
    name: 'Nicholas Ferranti',
    role: 'Loan Consultant',
    nmls: '2060318',
    photo: '/assets/team/nicholas-ferranti.png',
  },
  {
    name: 'Ryan Ferranti',
    role: 'Loan Consultant',
    nmls: '2117593',
    photo: '/assets/team/ryan-ferranti.jpg',
  },
]

const beltItems = [
  'Equal Housing Lender',
  'NMLS Licensed',
  '100% Certified Advisors',
  'Veteran-Focused Expertise',
  'Transparent Process',
  'Local Market Insight',
]

const heroImages = [
  { src: '/assets/rl-housing-24.png', alt: 'Luxury home exterior' },
  { src: '/assets/rl-housing-23.png', alt: 'Modern home entrance' },
  { src: '/assets/rl-housing-3.png', alt: 'Clean interior space' },
]

const offerImage = {
  src: '/assets/homepage-right.png',
  alt: 'The Ferranti Group homepage highlight',
}

const offerImages = [
  {
    src: '/assets/rl-housing-3.png',
    alt: 'Receive up to $30K down payment assistance offer',
  },
]

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Layout({ children }) {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav__brand">
          <img
            src="/assets/logo-rect.png"
            alt="The Ferranti Group logo"
            className="nav__logo nav__logo--overlay"
          />
          <div>
            <p className="nav__title">The Ferranti Group</p>
            <p className="nav__subtitle">LoanDepot | Cranston Branch</p>
          </div>
        </div>
        <nav className="nav__links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
            Services
          </NavLink>
          <NavLink to="/va-loans" className={({ isActive }) => (isActive ? 'active' : '')}>
            VA Expertise
          </NavLink>
          <NavLink to="/offers" className={({ isActive }) => (isActive ? 'active' : '')}>
            Offers
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>
            Free Guide
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => (isActive ? 'active' : '')}>
            Team
          </NavLink>
          <NavLink to="/contact" className="nav__cta">
            Book Consultation
          </NavLink>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer__brand">
          <img src="/assets/logo-square.png" alt="The Ferranti Group monogram" />
          <div>
            <p className="footer__title">The Ferranti Group</p>
            <p>Your success could be next. Let's write your story.</p>
          </div>
        </div>
        <div className="footer__meta">
          <span>Equal Housing Lender</span>
          <span>NMLS: 2491483</span>
          <span>LoanDepot | Cranston Branch</span>
        </div>
      </footer>
    </div>
  )
}

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}

function HomeHero() {
  return (
    <section className="hero">
      <div className="hero__content" data-reveal>
        <p className="eyebrow">Premium Mortgage Lending</p>
        <h1>Clarity, confidence, and care in every step of your home journey.</h1>
        <p className="hero__subhead">
          Your trusted mortgage partner, dedicated to the customer, daring in
          innovation, dynamic in action, and doing what is right.
        </p>
        <div className="hero__actions">
          <NavLink to="/contact" className="button button--primary">
            Book Your Free Consultation
          </NavLink>
          <NavLink to="/resources" className="button button--ghost">
            Download Free Guide
          </NavLink>
        </div>
        <div className="hero__stats">
          <div>
            <p className="stat__value">$50K+</p>
            <p className="stat__label">Average VA savings</p>
          </div>
          <div>
            <p className="stat__value">2-4 Weeks</p>
            <p className="stat__label">Typical close timeline</p>
          </div>
          <div>
            <p className="stat__value">580+</p>
            <p className="stat__label">Credit score support</p>
          </div>
        </div>
      </div>
      <div className="hero__visual" data-reveal>
        <div className="hero__media hero__media--single">
          <img src={offerImage.src} alt={offerImage.alt} />
        </div>
      </div>
    </section>
  )
}

function Belt() {
  return (
    <section className="belt" aria-label="Certifications and highlights">
      <div className="belt__track">
        {[...beltItems, ...beltItems].map((item, index) => (
          <div className="belt__item" key={`${item}-${index}`}>
            <span className="belt__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 2l7 4v6c0 5-3.1 9.3-7 10-3.9-.7-7-5-7-10V6l7-4z" />
                <path d="M8.5 12.5l2.2 2.2 4.8-5.1" className="belt__check" />
              </svg>
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function OffersSection() {
  return (
    <section className="section offers" data-reveal>
      <div className="offers__content">
        <p className="eyebrow eyebrow--light">Latest Offer</p>
        <h2>Receive up to $30K in down payment assistance.</h2>
        <p>
          A signature offer designed to support qualified buyers. This program is
          perfect for social campaigns and lead generation.
        </p>
        <NavLink to="/offers" className="button button--primary">
          Claim This Offer
        </NavLink>
      </div>
      <div className="offers__card offers__card--graphic" aria-hidden="true">
        <svg viewBox="0 0 520 340" role="presentation">
          <defs>
            <linearGradient id="offerSky" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5a1b90" />
              <stop offset="100%" stopColor="#2d0d45" />
            </linearGradient>
            <linearGradient id="offerGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c4f54d" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="28" fill="url(#offerSky)" />
          <circle cx="430" cy="70" r="46" fill="rgba(196, 245, 77, 0.18)" />
          <path d="M40 255L140 190L230 230L320 170L420 220L500 190V340H40Z" fill="#4a1475" />
          <path d="M70 260L150 210L240 250L330 190L450 235" fill="none" stroke="url(#offerGlow)" strokeWidth="6" strokeLinecap="round" />
          <rect x="70" y="72" width="240" height="112" rx="18" fill="rgba(255,255,255,0.14)" />
          <text x="88" y="116" fill="#ffffff" fontFamily="Sora, sans-serif" fontSize="22">Up to</text>
          <text x="88" y="152" fill="#c4f54d" fontFamily="Sora, sans-serif" fontSize="42" fontWeight="700">$30K</text>
          <text x="88" y="180" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="14">Down payment assistance</text>
          <g fill="none" stroke="#c4f54d" strokeWidth="4" strokeLinecap="round">
            <path d="M330 248l26-24 26 24v30h-52z" />
            <path d="M343 248l13-11 13 11" />
          </g>
        </svg>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <HomeHero />
      <Belt />
      <section className="section about" data-reveal>
        <div className="section__header">
          <p className="eyebrow">About Us</p>
          <h2>Modern lending, formal trust, and zero-pressure guidance.</h2>
        </div>
        <div className="about__grid">
          <p>
            The Ferranti Group brings a modern approach to mortgage lending without
            losing the human touch. We are formal, trustworthy, and client-first,
            positioned as credible guides, not salespeople.
          </p>
          <div className="about__cards">
            <div className="glass-card">
              <h3>Educational Approach</h3>
              <p>We simplify the mortgage process for clarity and confidence.</p>
            </div>
            <div className="glass-card">
              <h3>Transparent Process</h3>
              <p>Every fee explained, every option explored, every decision yours.</p>
            </div>
            <div className="glass-card">
              <h3>Local Expertise</h3>
              <p>Deep understanding of your market with personalized service.</p>
            </div>
            <div className="glass-card">
              <h3>Proven Results</h3>
              <p>Real client outcomes, testimonials, and successful closings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" data-reveal>
        <div className="section__header">
          <p className="eyebrow">Our Services</p>
          <h2>Strategic lending for every stage of homeownership.</h2>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
                </svg>
              </div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="section__cta">
          <NavLink to="/services" className="button button--ghost">
            Explore All Services
          </NavLink>
        </div>
      </section>

      <OffersSection />

      <section className="section va" data-reveal>
        <div className="va__content">
          <p className="eyebrow">VA Loan Expertise</p>
          <h2>We maximize every VA benefit to protect your future.</h2>
          <p>
            Veterans working with our team typically save $50,000+ compared to
            conventional loans through strategic structuring and benefit optimization.
          </p>
          <div className="va__benefits">
            {vaBenefits.map((benefit) => (
              <div className="va__pill" key={benefit}>
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <div className="va__panel">
          <h3>What to expect</h3>
          <ul>
            <li>Quick assessment of your goals</li>
            <li>Review of your qualification potential</li>
            <li>Clear next steps tailored to you</li>
            <li>Ongoing support throughout your journey</li>
          </ul>
          <NavLink to="/va-loans" className="button button--primary">
            Start Your VA Strategy
          </NavLink>
        </div>
      </section>

      <section className="section testimonials" data-reveal>
        <div className="section__header">
          <p className="eyebrow">Client Success</p>
          <h2>Real outcomes from Rhode Island homeowners.</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <p className="testimonial-card__name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta" data-reveal>
        <div className="cta__content">
          <p className="eyebrow">Free Download</p>
          <h2>First-Time Homebuyer Guide for Rhode Island.</h2>
          <p>
            A premium guide with checklists, timelines, and document prep. Ideal for
            social media campaigns and first-time buyers.
          </p>
          <a
            href="/assets/ferranti-group-first-time-homebuyer-guide-ri.pdf"
            className="button button--primary"
          >
            Download the Free PDF
          </a>
        </div>
        <div className="cta__card">
          <div>
            <h3>What you get</h3>
            <ul>
              {resources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </div>
          <div className="cta__badge">Free</div>
        </div>
      </section>

      <section className="section resources-hero" data-reveal>
        <div className="resources-hero__content">
          <p className="eyebrow">Free Resource</p>
          <h2>First-Time Homebuyer Guide for Rhode Island.</h2>
          <p>
            A premium, step-by-step guide with checklists, documents, and timelines.
            Launch your social campaign with a polished, value-packed PDF.
          </p>
          <div className="resources-hero__actions">
            <a
              href="/assets/ferranti-group-first-time-homebuyer-guide-ri.pdf"
              className="button button--primary"
            >
              Download the Free PDF
            </a>
            <span className="resources-hero__badge">Free PDF</span>
          </div>
          <div className="resources-hero__highlights">
            {resources.slice(0, 3).map((resource) => (
              <div key={resource} className="resources-hero__pill">
                {resource}
              </div>
            ))}
          </div>
        </div>
        <div className="resources-hero__visual">
          <img src={heroImages[0].src} alt="Guide preview" />
          <div className="resources-hero__stack">
            {resources.map((resource) => (
              <div className="resource-card" key={resource}>
                <span className="resource-card__icon">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M4 3h11l5 5v13H4z" />
                    <path d="M15 3v5h5" />
                  </svg>
                </span>
                <p>{resource}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" data-reveal>
        <div className="contact__panel">
          <p className="eyebrow">Get Started</p>
          <h2>Book your free consultation today.</h2>
          <p>
            15-minute consultation to explore your options, no pressure, no jargon,
            just your path forward.
          </p>
          <div className="contact__info">
            <div>
              <h4>Contact</h4>
              <p>(401) 233-5020</p>
              <p>kferranti@loandepot.com</p>
            </div>
            <div>
              <h4>Visit</h4>
              <p>1615 Pontiac Ave Unit 3</p>
              <p>Cranston, RI 02920</p>
            </div>
            <div>
              <h4>Office Hours</h4>
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <form className="contact__form">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="(401) 000-0000" />
          </label>
          <label>
            Loan Goal
            <select name="loanType">
              <option>First-Time Purchase</option>
              <option>Refinance</option>
              <option>VA Loan</option>
              <option>Realtor Partnership</option>
            </select>
          </label>
          <label>
            How can we help?
            <textarea name="message" placeholder="Tell us about your goals." />
          </label>
          <button type="submit" className="button button--primary">
            Submit Request
          </button>
          <p className="form__disclaimer">NMLS: 2491483 | Equal Housing Lender</p>
        </form>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <section className="section page-section">
      <PageHeader
        eyebrow="Services"
        title="Tailored mortgage solutions for every client."
        subtitle="A compact overview of first-time, refinance, and realtor partner offerings."
      />
      <div className="services__grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="service-image">
        <img src={heroImages[1].src} alt={heroImages[1].alt} />
        <div>
          <h3>White-glove service</h3>
          <p>
            Every detail is curated to match your timeline, budget, and long-term
            goals.
          </p>
        </div>
      </div>
    </section>
  )
}

function VaLoansPage() {
  return (
    <section className="section page-section">
      <PageHeader
        eyebrow="VA Expertise"
        title="Strategic VA lending built around your benefits."
        subtitle="A veteran-first approach to maximizing every eligible advantage."
      />
      <div className="va__content">
        <p>
          Our VA loan team focuses on long-term savings, lender coordination, and
          transparent education so you can make confident decisions.
        </p>
        <div className="va__benefits">
          {vaBenefits.map((benefit) => (
            <div className="va__pill" key={benefit}>
              {benefit}
            </div>
          ))}
        </div>
      </div>
      <div className="va__panel">
        <h3>Average Savings</h3>
        <p>
          Veterans working with our team typically save $50,000+ compared to
          conventional loans through strategic structuring and benefit optimization.
        </p>
        <NavLink to="/contact" className="button button--primary">
          Talk to a VA Specialist
        </NavLink>
      </div>
    </section>
  )
}

function OffersPage() {
  return (
    <section className="section page-section">
      <PageHeader
        eyebrow="Offers"
        title="Exclusive financing programs and buyer incentives."
        subtitle="Use these offers in campaigns to drive qualified inquiries."
      />
      <div className="offers__page">
        <div>
          <h2>Receive up to $30K in down payment assistance.</h2>
          <p>
            A signature offer designed to support qualified buyers. This program is
            perfect for social campaigns and lead generation.
          </p>
          <NavLink to="/contact" className="button button--primary">
            Claim This Offer
          </NavLink>
        </div>
        <div className="offers__card">
          <img src={offerImage.src} alt={offerImage.alt} />
        </div>
      </div>
      <div className="offers__grid">
        {offerImages.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  )
}

function ResourcesPage() {
  return (
    <section className="section page-section resources-page">
      <div className="resources-page__hero">
        <div className="resources-page__content">
          <p className="eyebrow">Free Resource</p>
          <h1>First-Time Homebuyer Guide for Rhode Island.</h1>
          <p className="resources-page__lead">
            A premium, social-ready PDF with checklists, timelines, and document
            prep. Built to convert curiosity into confident homebuyers.
          </p>
          <div className="resources-page__actions">
            <a
              href="/assets/ferranti-group-first-time-homebuyer-guide-ri.pdf"
              className="button button--primary"
            >
              Download the Free PDF
            </a>
            <span className="resources-page__tag">Free • Instant Access</span>
          </div>
          <div className="resources-page__pills">
            {resources.map((resource) => (
              <span key={resource}>{resource}</span>
            ))}
          </div>
        </div>
        <div className="resources-page__visual">
          <div className="resources-page__image resources-scene" aria-hidden="true">
            <div className="resources-scene__sky" />
            <div className="resources-scene__sun" />
            <div className="resources-scene__cloud resources-scene__cloud--one" />
            <div className="resources-scene__cloud resources-scene__cloud--two" />
            <div className="resources-scene__birds" />
            <div className="resources-scene__hill" />
            <div className="resources-scene__ground" />
            <div className="resources-scene__house" />
            <div className="resources-scene__door" />
            <div className="resources-scene__family" />
          </div>
          <div className="resources-page__cards">
            {resources.map((resource) => (
              <div className="resource-card" key={resource}>
                <span className="resource-card__icon">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M4 3h11l5 5v13H4z" />
                    <path d="M15 3v5h5" />
                  </svg>
                </span>
                <p>{resource}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamPage() {
  return (
    <section className="section page-section">
      <PageHeader
        eyebrow="The Team"
        title="Local experts, unified by a client-first promise."
        subtitle="Meet the Cranston branch mortgage leadership and consultants."
      />
      <div className="team__grid team__grid--compact">
        {team.map((member) => (
          <div className="team-card team-card--photo" key={member.name}>
            <img src={member.photo} alt={member.name} />
            <div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <span>NMLS: {member.nmls}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="section page-section">
      <PageHeader
        eyebrow="Contact"
        title="Let's map your next step with confidence."
        subtitle="Book a 15-minute strategy call with The Ferranti Group."
      />
      <div className="contact">
        <div className="contact__panel">
          <p className="eyebrow">Cranston Branch</p>
          <h2>Book your free consultation today.</h2>
          <p>
            15-minute consultation to explore your options, no pressure, no jargon,
            just your path forward.
          </p>
          <div className="contact__info">
            <div>
              <h4>Contact</h4>
              <p>(401) 233-5020</p>
              <p>kferranti@loandepot.com</p>
            </div>
            <div>
              <h4>Visit</h4>
              <p>1615 Pontiac Ave Unit 3</p>
              <p>Cranston, RI 02920</p>
            </div>
            <div>
              <h4>Office Hours</h4>
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <form className="contact__form">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="(401) 000-0000" />
          </label>
          <label>
            Loan Goal
            <select name="loanType">
              <option>First-Time Purchase</option>
              <option>Refinance</option>
              <option>VA Loan</option>
              <option>Realtor Partnership</option>
            </select>
          </label>
          <label>
            How can we help?
            <textarea name="message" placeholder="Tell us about your goals." />
          </label>
          <button type="submit" className="button button--primary">
            Submit Request
          </button>
          <p className="form__disclaimer">NMLS: 2491483 | Equal Housing Lender</p>
        </form>
      </div>
    </section>
  )
}

function PageShell({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return children
}

function AppRoutes() {
  const location = useLocation()

  return (
    <PageShell>
      <div className="page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/va-loans" element={<VaLoansPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </PageShell>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
