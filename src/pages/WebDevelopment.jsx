import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function WebDevelopment() {
  return (
    <>
      <SEO title="Web Development Company | SEO-First Websites & SaaS | WCGD" description="Build SEO-first websites, portals, and SaaS apps with React, Node, and modern best practices. Core Web Vitals optimized." url="/services/web-development" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Web Development Services</h1>
        <p className="section-lead mt-2">Corporate websites, SaaS platforms, dashboards, and portals that rank, convert, and scale.</p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="glass p-6">
            <h3 className="font-semibold">What we deliver</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• SEO-first, semantic HTML, accessible UX</li>
              <li>• React, Next.js, Tailwind, Vite</li>
              <li>• Headless CMS ready, REST/GraphQL backends</li>
              <li>• Analytics, A/B testing, and conversion tracking</li>
              <li>• CI/CD and cloud-native deployments</li>
            </ul>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold">Use cases</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• Corporate sites and landing pages</li>
              <li>• SaaS apps, dashboards, admin portals</li>
              <li>• E-commerce and payment integrations</li>
              <li>• Multi-language and global audiences</li>
              <li>• Performance upgrades and site audits</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link to="/consultation" className="btn-primary">Book a Free Consultation</Link>
          <Link to="/portfolio" className="btn-outline">See Case Studies</Link>
        </div>
      </section>
    </>
  )
}
