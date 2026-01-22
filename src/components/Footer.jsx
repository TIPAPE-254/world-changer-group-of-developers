import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-secondary grid place-items-center text-white font-bold">W</div>
            <strong className="tracking-tight">WORLD CHANGER GROUP OF DEVELOPERS</strong>
          </div>
          <p className="text-white/70 text-sm">Engineering world-class digital products and mentoring the next generation of tech leaders.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/services/web-development" className="hover:text-primary">Web Development</Link></li>
            <li><Link to="/services/mobile-app-development" className="hover:text-primary">Mobile App Development</Link></li>
            <li><Link to="/services/software-development" className="hover:text-primary">Software Development</Link></li>
            <li><Link to="/services/database-network-management" className="hover:text-primary">Database & Network</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/events" className="hover:text-primary">Webinars & Events</Link></li>
            <li><Link to="/community" className="hover:text-primary">Mentorship & Community</Link></li>
            <li><Link to="/consultation" className="hover:text-primary">Book a Consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white/60 text-sm py-6 border-t border-white/10">
        © {new Date().getFullYear()} World Changer Group of Developers. All rights reserved.
      </div>
    </footer>
  )
}
