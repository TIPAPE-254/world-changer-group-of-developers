import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, to, icon = '💻' }) {
  return (
    <Link to={to} className="glass p-8 h-full block hover:border-primary/60 hover:shadow-xl transition-all duration-200 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform" aria-hidden>{icon}</div>
      <h4 className="font-bold text-xl mb-3 text-white">{title}</h4>
      <p className="text-white/80 text-base mb-4 leading-relaxed">{description}</p>
      <span className="text-primary font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">Learn More <span className="group-hover:translate-x-1 transition-transform">→</span></span>
    </Link>
  )
}
