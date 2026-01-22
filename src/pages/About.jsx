import React from 'react'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO title="About Us | World Changer Group of Developers" description="WCGD builds world-class digital solutions and mentors the next generation of developers with a mission of global impact." url="/about" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">About World Changer Group of Developers</h1>
        <p className="section-lead mt-2">We are a global technology company on a mission to build world-class digital solutions, empower businesses, and mentor young people into technology.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-white/80">To build world-class digital solutions, empower businesses globally through technology, and mentor and educate young people in software development and modern tech skills.</p>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold mb-2">Vision</h3>
            <p className="text-white/80">To become a globally recognized technology powerhouse that transforms businesses, empowers communities, and raises the next generation of tech leaders.</p>
          </div>
        </div>
        <div className="glass p-6 mt-6">
          <h3 className="font-semibold mb-2">Core Values</h3>
          <ul className="grid md:grid-cols-3 gap-2 text-white/80">
            <li>• Innovation</li>
            <li>• Excellence</li>
            <li>• Integrity</li>
            <li>• Education & Mentorship</li>
            <li>• Global Impact</li>
            <li>• Community Growth</li>
          </ul>
        </div>
      </section>
    </>
  )
}
