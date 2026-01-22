import React from 'react'
import SEO from '../components/SEO'
import EventCard from '../components/EventCard'
import { upcoming, past } from '../data/events'

export default function WebinarsEvents() {
  return (
    <>
      <SEO title="Webinars & Tech Events | WCGD" description="Learn with WCGD through live webinars, workshops, and community events. Build skills and grow your network." url="/events" />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="section-title">Webinars & Events</h1>
        <p className="section-lead mt-2">Level up with practical, modern engineering content.</p>
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Upcoming</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {upcoming.map((e, i) => <EventCard key={i} event={e} />)}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Past Events</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {past.map((e, i) => <EventCard key={i} event={e} />)}
          </div>
        </div>
      </section>
    </>
  )
}
