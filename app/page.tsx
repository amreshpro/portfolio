import React from 'react'

import Header from '@/components/header'
import Skills from '@/components/skills'
import './page.module.css'

export default function App() {
  return (
    <div className='app'>
      <Header/>
      <div className="content">
      <Skills/>
      </div>
    </div>
  )
}
