import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='fs-1 fw-medium text-center p-2 header'><Link to={'/'} style={{textDecoration : 'none' , color : 'black'}}>Algo Visualizer</Link></div>
    </div>
  )
}

export default Navbar
