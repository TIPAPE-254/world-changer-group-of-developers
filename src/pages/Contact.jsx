import React from 'react'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us | WCGD" description="Contact World Changer Group of Developers for web, mobile, and software development or training programs. Get a free consultation." url="/contact" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-lead mt-2">Tell us about your goals and we’ll tailor a plan.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <ContactForm />
          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Reach us</h3>
            <ul className="text-white/80 text-sm space-y-2">
              <li>Email: projects@wcgd.dev</li>
              <li>Consultation: /consultation</li>
              <li>Community: /community</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
