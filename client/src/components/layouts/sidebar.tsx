import React from 'react'
import SidebarDesktop from '../elements/sidebar-desktop'
import NavHeader from '../elements/nav-header'

const Sidebar = () => {
  return (
    <div className='border-r lg:block hidden'>
      <NavHeader />
      <SidebarDesktop />
    </div>
  )
}

export default Sidebar
