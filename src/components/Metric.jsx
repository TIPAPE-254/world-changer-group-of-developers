import React from 'react'

export default function Metric({ label, value }) {
  return (
    <div className="glass p-8 text-center hover:border-primary/40 transition-colors">
      <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">{value}</div>
      <div className="text-white/80 text-base font-medium">{label}</div>
    </div>
  )
}
