
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { mobilerouter} from "./routes/PagesRoutes"
import { useMediaQuery } from './useMediaQuery'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const isMobile = useMediaQuery("(max-width:480px)")
  return (
    <>
    <RouterProvider router={mobilerouter(isMobile)} />
    <ToastContainer style={{  zIndex: "99990000" }}/>
    </>
  )
}

export default App
