import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import Metric from '../components/Metric'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import { services } from '../data/services'
import { metrics } from '../data/metrics'
import { testimonials } from '../data/testimonials'

export default function Home() {
  return (
    <>
      <SEO
        title="Web & Software Development Company | World Changer Group of Developers"
        description="Global web development, mobile apps, custom software, AI systems, and mentorship. Get a free consultation from WCGD and build with confidence."
        url="/"
      />
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-full border-2 border-primary/60 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary uppercase tracking-wide mb-6">Global Software Development</div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent leading-tight">Building the Future with Code</h1>
            <p className="mt-6 text-white/90 text-xl leading-relaxed">We design, build, and scale high-performance digital products—and mentor the next generation of developers.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/consultation" className="btn-primary">Get Free Consultation</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div>
          </div>
          <div className="glass p-8">
            <h3 className="text-xl font-bold mb-6 text-white">Why Choose Us</h3>
            <ul className="space-y-4 text-white/90 text-base">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>SEO-first engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Secure & maintainable code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Transparent communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Tech mentorship programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-7xl px-6 pb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map(m => <Metric key={m.label} {...m} />)}
      </section>

      {/* Services Overview */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6">
          <h2 className="section-title">Engineering & Education Services</h2>
          <p className="section-lead">Web development, mobile apps, custom software, databases & networks—plus webinars, bootcamps, and mentorship programs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard title="Web Development" description="SEO-first websites, SaaS, dashboards, portals." to="/services/web-development" icon="🌐" />
          <ServiceCard title="Mobile Apps" description="Android, iOS, and cross-platform apps." to="/services/mobile-app-development" icon="📱" />
          <ServiceCard title="Software Development" description="Tailored systems for unique workflows." to="/services/software-development" icon="🧠" />
          <ServiceCard title="Database & Network" description="Design, optimization, and infrastructure." to="/services/database-network-management" icon="🗄️" />
        </div>
      </section>

      {/* Education & Community */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="glass p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Education & Community</h3>
            <p className="text-white/70">We host webinars, bootcamps, and mentorship programs to empower youth and professionals. Learn real-world skills, build projects, and join a community that ships.</p>
            <div className="mt-4 flex gap-3">
              <Link to="/events" className="btn-primary">Upcoming Events</Link>
              <Link to="/community" className="btn-outline">Join Mentorship</Link>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              {services.slice(0,4).map(s => (
                <div key={s.slug} className="glass p-4">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="text-xs text-white/60 mt-1">{s.features[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-lead">Proof that results, reliability, and partnership matter.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => <Testimonial key={idx} {...t} />)}
        </div>
      </section>

      {/* Final CTA */}
      <div className="my-12">
        <CTA />
      </div>
    </>
  )
}
