// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './SafiraFolder/CSS/Header.css'
import './SafiraFolder/CSS/MiddleContainer.css'
import './SafiraFolder/CSS/MiddleContainer2.css'
import './SafiraFolder/CSS/ProductListContainer.css'
import './SafiraFolder/CSS/Bannerbg.css'
import './SafiraFolder/CSS/ProductListContainer2.css'
import './SafiraFolder/CSS/Blogpost.css'
import './SafiraFolder/CSS/ProductListContainer3.css'
import './SafiraFolder/CSS/Brands.css'
import './SafiraFolder/CSS/UpperFooter.css'
import './SafiraFolder/CSS/Footer.css'
import './SafiraFolder/CSS/Loginpage.css'
import './SafiraFolder/CSS/ContactUspage.css'
import './SafiraFolder/CSS/Shop.css'
import './SafiraFolder/CSS/Blogpage.css'
import './SafiraFolder/CSS/Bloglist.css'


import MainPage from './SafiraFolder/Pages/MainPage'
import Loginpage from './SafiraFolder/Pages/Loginpage'
import { Routes, Route } from 'react-router-dom'
import ContactUspage from './SafiraFolder/Pages/ContactUspage'
import Shop from './SafiraFolder/Pages/Shop'
import Blogpage from './SafiraFolder/Pages/Blogpage'
import Bloglist3 from './SafiraFolder/Pages/Bloglist3'
import Bloglist1 from './SafiraFolder/Pages/Bloglist1'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/contact-us' element={<ContactUspage />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/blogpage' element={<Blogpage />}></Route>
        <Route path='/bloglist3' element={<Bloglist3 />}></Route>
        <Route path='/bloglist1' element={<Bloglist1 />}></Route>
      </Routes>
    </>
    // <>
    //   <div>
    //     <MainPage />
    //     {/* <Loginpage /> */}
    //   </div>
    // </>
  )
}

export default App
