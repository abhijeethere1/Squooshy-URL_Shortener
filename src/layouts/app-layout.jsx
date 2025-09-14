import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container mx-auto px-4'>
        <Header/>
        <Outlet/>
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>
        © 2025 Squooshy | Built by Abhijeet Singh
      </div>
    </div>
  )
}

export default AppLayout

