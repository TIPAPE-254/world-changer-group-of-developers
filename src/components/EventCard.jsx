import React from 'react'

export default function EventCard({ event }) {
  return (
    <div className="glass p-6 h-full">
      <div className="text-sm text-white/60 mb-1">{new Date(event.date).toLocaleString()}</div>
      <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
      <p className="text-white/70 text-sm mb-4">{event.description}</p>
      {event.registerUrl && (
        <a href={event.registerUrl} className="btn-primary" target="_blank" rel="noreferrer">Register</a>
      )}
    </div>
  )
}
