import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function MentorshipCommunity() {
  return (
    <>
      <SEO title="Mentorship & Community | WCGD" description="Mentorship programs, coding bootcamps, and community-driven learning to help aspiring developers grow fast." url="/community" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Mentorship & Community</h1>
        <p className="section-lead mt-2">Inspiring young people and professionals to build careers in technology through hands-on learning.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Programs</h3>
            <ul className="text-white/80 text-sm space-y-2">
              <li>• Youth mentorship and career pathways</li>
              <li>• Coding bootcamps with real projects</li>
              <li>• Workshops and tech talks</li>
            </ul>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Outcomes</h3>
            <ul className="text-white/80 text-sm space-y-2">
              <li>• Portfolio-ready projects</li>
              <li>• Industry-ready practices</li>
              <li>• Community support and peer learning</li>
            </ul>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Get Involved</h3>
            <ul className="text-white/80 text-sm space-y-2">
              <li>• Join events and cohorts</li>
              <li>• Volunteer as a mentor</li>
              <li>• Sponsor training programs</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex gap-3">
          <Link to="/events" className="btn-primary">Upcoming Events</Link>
          <Link to="/consultation" className="btn-outline">Book a Guidance Call</Link>
        </div>
      </section>
    </>
  )
}
