// Navbar.tsx
import Link from 'next/link'
import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link href={"/"}>Home</Link>
        <Link href={"#skills"}>Skills</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
    </div>
  )
}
