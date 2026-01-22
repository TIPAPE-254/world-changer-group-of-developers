import React from 'react'

export default function Testimonial({ quote, author, role }) {
  return (
    <div className="glass p-6 h-full">
      <p className="italic text-white/90">“{quote}”</p>
      <div className="mt-4 text-sm text-white/70">— {author}, {role}</div>
    </div>
  )
}
