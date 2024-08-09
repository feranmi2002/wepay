
import Sidebar from './components/sidebar/sidebar'
import { Outlet } from 'react-router-dom';


function dashboard() {
  return (
    <div className='w-screen h-screen flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default dashboard