import { useEffect } from 'react'

function upsertMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}='${key}']`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

export default function SEO({ title, description, url = '/', image = '/og-image.svg' }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) upsertMeta('name', 'description', description)
    // Open Graph
    upsertMeta('property', 'og:title', title || '')
    upsertMeta('property', 'og:description', description || '')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    // Twitter
    upsertMeta('name', 'twitter:title', title || '')
    upsertMeta('name', 'twitter:description', description || '')
    upsertMeta('name', 'twitter:image', image)
  }, [title, description, url, image])
  return null
}
