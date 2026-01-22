import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import BlogCard from '../components/BlogCard'
import { posts } from '../data/blogs'

export default function Blog() {
  return (
    <>
      <SEO title="Blog & Insights | WCGD" description="Insights on web development, React, mobile apps, software engineering, career advice, and mentorship stories." url="/blog" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Blog & Insights</h1>
        <p className="section-lead mt-2">Learn, build, and grow with practical engineering content.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {posts.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
        <div className="mt-8">
          <Link to="/consultation" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </>
  )
}
