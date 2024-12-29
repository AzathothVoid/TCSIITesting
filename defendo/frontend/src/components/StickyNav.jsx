import React from 'react'
import NavBar from './NavBar/NavBar'
import SecondaryNav from './SecondaryNav/SecondaryNav'

function StickyNav() {
  return (
    <div className="stickey-nav-wrapper sticky-top bg-body-tertiary ">
        <NavBar/>
        <SecondaryNav/>
    </div>
  )
}

export default StickyNav