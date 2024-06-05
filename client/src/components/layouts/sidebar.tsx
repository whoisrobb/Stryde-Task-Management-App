import React from 'react'
import SidebarHeader from '../elements/sidebar-header'
import SidebarDesktop from '../elements/sidebar-desktop'

const Sidebar = () => {
  return (
    <div className='border-r lg:block hidden'>
      <SidebarHeader />
      <SidebarDesktop />
    </div>
  )
}

export default Sidebar
