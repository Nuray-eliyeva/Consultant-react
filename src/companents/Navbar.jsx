import React from 'react'
import { Link } from 'react-router-dom'
import { BsPersonCircle } from "react-icons/bs";
function Navbar() {
  return (
      <nav>
        <div className="logo">JAMES CONSULTING</div>
        <ul>
          <li></li>
         <Link to={'/'} className='links'>About</Link>
          <li><Link to={'/projects'} className='links'>Projects</Link></li>
          <li><Link to={'/services'} className='links'>Services</Link></li>
          <li><Link to={'/plans'} className='links'>Plans & Pricing</Link></li>
          <li><Link to={'/tools'} className='links'>Tools & Tips</Link></li>
          <li>Contact</li>
          <li><BsPersonCircle />LOGIN</li>
        </ul>
      </nav>
  )
}

export default Navbar