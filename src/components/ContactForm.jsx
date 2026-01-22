import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const valid = form.name && /.+@.+\..+/.test(form.email) && form.message.length > 10

  const onSubmit = (e) => {
    e.preventDefault()
    if (!valid) return
    setSubmitted(true)
    const subject = encodeURIComponent('WCGD Website Inquiry')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:projects@wcgd.dev?subject=${subject}&body=${body}`
  }

  if (submitted) {
    return <div className="p-6 glass">Thanks! Opening your email client now…</div>
  }

  return (
    <form onSubmit={onSubmit} className="glass p-8 grid gap-6">
      <div>
        <label className="block mb-2 text-base font-medium text-white">Your Name</label>
        <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-xl bg-white/5 border-2 border-white/20 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" placeholder="Jane Doe" />
      </div>
      <div>
        <label className="block mb-2 text-base font-medium text-white">Email</label>
        <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-xl bg-white/5 border-2 border-white/20 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" placeholder="you@company.com" />
      </div>
      <div>
        <label className="block mb-2 text-base font-medium text-white">Project / Message</label>
        <textarea name="message" value={form.message} onChange={onChange} rows={5} required className="w-full rounded-xl bg-white/5 border-2 border-white/20 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none" placeholder="Tell us about your goals, timeline, and budget."></textarea>
      </div>
      <button disabled={!valid} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">Send Message</button>
    </form>
  )
}
