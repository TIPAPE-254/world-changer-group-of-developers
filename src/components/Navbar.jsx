import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/events', label: 'Events' },
  { to: '/community', label: 'Community' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-black/95 backdrop-blur-sm shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center text-white font-bold text-xl group-hover:scale-105 transition-transform">W</div>
          <span className="font-bold text-lg tracking-tight hidden lg:block">WORLD CHANGER GROUP</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `text-base font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-white'}`}>
              {n.label}
            </NavLink>
          ))}
          <Link to="/consultation" className="btn-primary">Book Consultation</Link>
        </nav>
        <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/20 bg-black/98">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({isActive}) => `text-lg font-medium py-2 ${isActive ? 'text-primary' : 'text-white'}`}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/consultation" onClick={() => setOpen(false)} className="btn-primary mt-2">Book Consultation</Link>
          </div>
        </div>
      )}
    </header>
  )
}
