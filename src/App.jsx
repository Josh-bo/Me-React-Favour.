import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Corders from './components/Corders'
import Second from './components/Second'
import Fetch from './components/Fetch'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// import useState from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Fetch/>}/>
           <Route path="/SignUp" element={<SignUp/>}/>
         </Routes>
       </BrowserRouter>
       
    </>
  )
}

export default App
