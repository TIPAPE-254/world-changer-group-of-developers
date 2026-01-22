import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Services() {
  return (
    <>
      <SEO title="Services | Web, Mobile, Software, Database & Network | WCGD" description="Hire WCGD for web development, mobile apps, custom software, and database & network management. SEO-first, secure, and scalable." url="/services" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Our Services</h1>
        <p className="section-lead mt-2">Engineered to deliver business results, built to scale, and designed to last.</p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="glass p-6">
            <h3 className="font-semibold text-lg">Web Development</h3>
            <p className="text-white/70">Corporate websites, SaaS, dashboards, and custom applications with Core Web Vitals optimization.</p>
            <Link to="/services/web-development" className="text-primary font-semibold hover:underline inline-block mt-2">Explore →</Link>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold text-lg">Mobile App Development</h3>
            <p className="text-white/70">Android, iOS, and cross-platform apps crafted for performance and delightful UX.</p>
            <Link to="/services/mobile-app-development" className="text-primary font-semibold hover:underline inline-block mt-2">Explore →</Link>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold text-lg">Custom Software Development</h3>
            <p className="text-white/70">From internal tools to platforms—domain-driven, secure, and maintainable.</p>
            <Link to="/services/software-development" className="text-primary font-semibold hover:underline inline-block mt-2">Explore →</Link>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold text-lg">Database & Network Management</h3>
            <p className="text-white/70">Database design, optimization, backups, Linux servers, and secure networking.</p>
            <Link to="/services/database-network-management" className="text-primary font-semibold hover:underline inline-block mt-2">Explore →</Link>
          </div>
        </div>

        <div className="glass p-6 mt-8">
          <h3 className="font-semibold mb-2">Education & Community</h3>
          <ul className="grid md:grid-cols-2 gap-2 text-white/80">
            <li>• Webinars & Tech Events</li>
            <li>• Coding Bootcamps</li>
            <li>• Youth Mentorship Programs</li>
            <li>• Tech Training Workshops</li>
            <li>• Community-driven learning initiatives</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <Link to="/events" className="btn-primary">Upcoming Events</Link>
            <Link to="/community" className="btn-outline">Join the Community</Link>
          </div>
        </div>
      </section>
    </>
  )
}
