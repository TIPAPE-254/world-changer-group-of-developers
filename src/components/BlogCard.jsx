import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return (
    <div className="glass p-6 h-full">
      <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
      <p className="text-white/70 text-sm mb-3">{post.excerpt}</p>
      <div className="text-white/50 text-xs mb-4">{new Date(post.date).toLocaleDateString()}</div>
      <Link to={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">Read More →</Link>
    </div>
  )
}
