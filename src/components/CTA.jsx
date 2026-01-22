import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA({ title = 'Ready to build?', subtitle = 'Book a free consultation and get a tailored plan for your product.', primaryTo = '/consultation', secondaryTo = '/services' }) {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="glass p-8 md:p-10 grid gap-4 md:grid-cols-3 items-center">
        <div className="md:col-span-2">
          <h3 className="text-xl md:text-2xl font-bold mb-1">{title}</h3>
          <p className="text-white/70">{subtitle}</p>
        </div>
        <div className="flex gap-3 md:justify-end">
          <Link to={primaryTo} className="btn-primary">Get a Free Consultation</Link>
          <Link to={secondaryTo} className="btn-outline">View Our Services</Link>
        </div>
      </div>
    </section>
  )
}
