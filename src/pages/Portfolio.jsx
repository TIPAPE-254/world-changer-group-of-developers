import React from 'react'
import SEO from '../components/SEO'

export default function Portfolio() {
  const cases = [
    { title: 'Fintech Onboarding Platform', result: 'Increased conversions by 38% with optimized flows and SEO.' },
    { title: 'Logistics Tracking Dashboard', result: 'Cut support tickets by 45% with real-time visibility.' },
    { title: 'Healthcare Data Portal', result: 'Improved data access time by 60% via caching strategy.' }
  ]
  return (
    <>
      <SEO title="Portfolio & Case Studies | WCGD" description="Selected projects demonstrating performance, security, and scalable architecture." url="/portfolio" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Portfolio & Case Studies</h1>
        <p className="section-lead mt-2">A snapshot of how we deliver outcomes across industries.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {cases.map((c, i) => (
            <div key={i} className="glass p-6">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-white/70 text-sm mt-2">{c.result}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
