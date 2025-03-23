import React from 'react'
import ThemeToggle from '../theme'
import Navbar from '../ui/navbar'
import './style.css'


export default function Header() {
  return (<div className='row'>
<ThemeToggle/>
<Navbar/>
    </div>
  )
}
