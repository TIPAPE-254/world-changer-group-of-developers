import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function DatabaseNetwork() {
  return (
    <>
      <SEO title="Database & Network Management | WCGD" description="Database design, optimization, backups, Linux servers, and secure networking for uptime, performance, and reliability." url="/services/database-network-management" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Database & Network Management</h1>
        <p className="section-lead mt-2">Secure, performant foundations for your applications and data.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="glass p-6">
            <h3 className="font-semibold">Databases</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• PostgreSQL, MySQL, MongoDB</li>
              <li>• Indexing, query tuning, and caching</li>
              <li>• Backups and disaster recovery</li>
              <li>• Security and access controls</li>
              <li>• Observability and alerts</li>
            </ul>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold">Infrastructure</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• Linux servers and automation</li>
              <li>• Networking and firewalls</li>
              <li>• Cloud deployments: AWS, Azure, GCP</li>
              <li>• Docker, Kubernetes, and CI/CD</li>
              <li>• Cost optimization</li>
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
