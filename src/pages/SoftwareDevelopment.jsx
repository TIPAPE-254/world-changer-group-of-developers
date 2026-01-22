import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function SoftwareDevelopment() {
  return (
    <>
      <SEO title="Custom Software Development Company | WCGD" description="We engineer custom software with domain-driven design, modern architectures, and rigorous QA to fit your business perfectly." url="/services/software-development" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Custom Software Development</h1>
        <p className="section-lead mt-2">Workflows differ—your software should too. We build robust systems that deliver real business outcomes.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="glass p-6">
            <h3 className="font-semibold">Approach</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• Discovery, prototyping, and architecture</li>
              <li>• Domain-driven design and clean code</li>
              <li>• Event-driven & modular architectures</li>
              <li>• Automated testing and CI/CD</li>
              <li>• Documentation and handover training</li>
            </ul>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold">Integrations</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• Payment gateways and invoicing</li>
              <li>• CRMs, ERPs, and marketing tools</li>
              <li>• Analytics and data pipelines</li>
              <li>• AI/ML workflows and automation</li>
              <li>• SSO and identity providers</li>
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
