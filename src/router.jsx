import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WebDevelopment from './pages/WebDevelopment'
import MobileApps from './pages/MobileApps'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import DatabaseNetwork from './pages/DatabaseNetwork'
import WebinarsEvents from './pages/WebinarsEvents'
import MentorshipCommunity from './pages/MentorshipCommunity'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/mobile-app-development" element={<MobileApps />} />
      <Route path="/services/software-development" element={<SoftwareDevelopment />} />
      <Route path="/services/database-network-management" element={<DatabaseNetwork />} />
      <Route path="/events" element={<WebinarsEvents />} />
      <Route path="/community" element={<MentorshipCommunity />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
