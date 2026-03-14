import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Navbar from './Navbar'

const DashboardLayout = ({activeMenu , children}) => {

    const {user} = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-red-950">
      <Navbar activeMenu={activeMenu}/>
      {user && <div className='container mx-auto pt-4 pb-4'>{children}</div>}
    </div>
  )
}

export default DashboardLayout
