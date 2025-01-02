
import Navbar from "../component/navbar/Navbar"
import Footer from "../component/footer/Footer"
import "./styles.scss"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  

  return (
    <>
    <div className='main-layout container'>
        <div className="navbar-layout">
          <Navbar />
        </div>
        <div className="content ">
            <Outlet/>
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
    </>

  )
}

export default MainLayout