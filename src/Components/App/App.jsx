import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from '../About/About'
import Appel from '../Appel/Appel'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navebar from '../Navbar/Navebar'
import Notfound from '../Notfound/Notfound'
import Techcrunch from '../Techcrunch/Techcrunch'
import Tesla from '../Tesla/Tesla'
import Usright from '../Usright/Usright'
import Wallstreet from '../Wallstreet/Wallstreet'
export default function App() {
  return (
    <>
    <Navebar/>
     <div className=' container'>
    <Routes>
      <Route path='/' element={<Home />}></Route>
     
      <Route path='home' element={<Home />}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='wallstreet' element={<Wallstreet />}></Route>
      <Route path='techcrunch' element={<Techcrunch/>}></Route>
      <Route path='usright' element={<Usright />}></Route>
      <Route path='appel' element={<Appel />}></Route>
      <Route path='tesla' element={<Tesla />}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </div>
    <Footer />
    </>
  )
}
