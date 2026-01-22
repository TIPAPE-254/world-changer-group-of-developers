import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function MobileApps() {
  return (
    <>
      <SEO title="Mobile App Developers | Android, iOS, Cross-Platform | WCGD" description="Android, iOS, and cross-platform mobile apps with Kotlin, Swift, Flutter, and React Native. Secure, scalable, and delightful to use." url="/services/mobile-app-development" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Mobile App Development</h1>
        <p className="section-lead mt-2">From MVP to scale, we craft apps with robust architecture, smooth UX, and secure APIs.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="glass p-6">
            <h3 className="font-semibold">Platforms</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• Android (Kotlin) and iOS (Swift)</li>
              <li>• Cross-platform (Flutter, React Native)</li>
              <li>• Offline-first patterns and caching</li>
              <li>• Secure auth, payments, notifications</li>
              <li>• CI/CD and store deployment</li>
            </ul>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold">Outcomes</h3>
            <ul className="mt-2 text-white/80 space-y-2 text-sm">
              <li>• Fast startup and smooth animations</li>
              <li>• Predictable error handling</li>
              <li>• Scalable modular architecture</li>
              <li>• Observability: logs, metrics, and tracing</li>
              <li>• Maintainable codebase and docs</li>
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
