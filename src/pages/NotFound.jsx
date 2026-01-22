import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 text-center">
      <div className="text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">404</div>
      <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
      <p className="text-white/70 mt-2">The page you are looking for might have been moved or deleted.</p>
      <div className="mt-6">
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    </section>
  )
}
