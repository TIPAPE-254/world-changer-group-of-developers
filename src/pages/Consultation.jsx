import React from 'react'
import SEO from '../components/SEO'

export default function Consultation() {
  const calendly = 'https://calendly.com/your-calendly/wcgd-consultation'
  return (
    <>
      <SEO title="Book a Consultation | WCGD" description="Book a free consultation to discuss your project goals and get a clear, actionable plan." url="/consultation" />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="section-title">Book a Free Consultation</h1>
        <p className="section-lead mt-2">Get a quick, expert assessment and a plan for success.</p>
        <div className="glass p-6 mt-6">
          <p className="text-white/80">Select a time slot that works for you. We’ll discuss your goals, timelines, and scope, then share a proposal and next steps.</p>
          <a className="btn-primary mt-4 inline-block" href={calendly} target="_blank" rel="noreferrer">Open Booking Page</a>
        </div>
      </section>
    </>
  )
}
