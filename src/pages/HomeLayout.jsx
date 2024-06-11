import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <span className='text-4xl text-secondary'>VividDwell</span>
      </nav>
      <Outlet />
    </div>
  )
}

export default HomeLayout