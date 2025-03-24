import React from 'react'

import Header from '@/components/header'
import Skills from '@/components/skills'
import './page.module.css'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function App() {
  return (
    <div className='app'>
      <Header/>
      <div className="content">
      <About/>
      <Skills/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}
