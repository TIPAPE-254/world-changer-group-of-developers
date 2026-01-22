import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { posts } from '../data/blogs'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Post not found</h1>
        <Link to="/blog" className="text-primary">Back to Blog</Link>
      </section>
    )
  }

  return (
    <>
      <SEO title={`${post.title} | WCGD`} description={post.excerpt} url={`/blog/${post.slug}`} />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-extrabold tracking-tight">{post.title}</h1>
        <div className="text-white/60 text-sm mt-2">{new Date(post.date).toLocaleDateString()}</div>
        <article className="prose prose-invert max-w-none mt-6">
          {post.content.split('\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
        <div className="mt-8 flex gap-3">
          <Link to="/consultation" className="btn-primary">Get a Free Consultation</Link>
          <Link to="/services" className="btn-outline">Explore Services</Link>
        </div>
      </section>
    </>
  )
}
