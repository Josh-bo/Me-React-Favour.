import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Corders from './components/Corders'
import Second from './components/Second'
import Fetch from './components/Fetch'
import {Navigate, Route, Routes} from 'react-router-dom'
import SignUp from './components/signUp'
import Error from './Error'
import Card from './components/Card'
import Cardo from './components/Cardo'

// import useState from 'react'

  const [count, setCount] = useState(0)

 function App(){
    useEffect(() => {
      if('serviceWorker' in navigator){
        window.addEventListener('load', () => {
          Navigate.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError =>{
            console.log('SW registration failed: ', registrationError);
          })
        })
      }
   }, []);
   return(
     <>
      <Cardo/>
     </>
   )
  }



  //  return (
  //    <>
  //     <Cardo/>
  //        {/* <Routes>
  //          <Route path="/" element={<Fetch/>}/>
  //          <Route path='/home' element={<Navigate to='/'/>}/>
  //          <Route path='/home' element={<Navigate to='/Second'/>}/>
  //          <Route path="/signUp" element={<SignUp/>}/>
  //          <Route path="/Corder" element={<Corders/>}/>
  //          <Route path="*" element={<Error/>} />
  //          </Routes>       
           
  //          <div className='container-fluid'>
  //          <div className='row'>
  //          <Card name="Card One" style="bg-danger mx-2  mt-2 card"/>    
  //          <Card name="Card Two" style="bg-info mx-2 mt-2 card"/>    
  //          <Card name="Card Three" style="bg-secondary mt-2 mx-2 card"/>    
  //          <Card name="Card Three" style="bg-dark text-light mt-2 mx-2 card"/>    
  //          </div>
  //         </div> */}
  //   </>
  // )



export default App
