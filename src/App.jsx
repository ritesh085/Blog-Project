import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { login, logout } from './features/authSlice'


function App() {
  const [loading, setLoading] = useState(true); //app start hui then ki ye ki abb start hogaya check karna koi user login dekhna
  const dispatch = useDispatch()
  

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      console.log("userApp: ", userData);
      if(userData) {
        dispatch(login(userData));// store ke pass bejdiya reducer ke through ki state change karo
      }
      else {
        dispatch(logout())
      }
    })
    .catch((error) => {
    dispatch(logout()); // treat any auth error as "not logged in"
    console.error("Auth check failed:", error.message);
    })
    .finally(() => setLoading(false))
  }, [])


  return  !loading ?  (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
    <Header/>
    <main>
      <h1>Todo</h1>
      <Outlet />
    </main>
    <Footer/>
    </div>
  </div>) : null;
}

export default App
