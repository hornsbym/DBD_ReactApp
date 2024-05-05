import React from 'react'
import './Index.css'
import Navbar from './Navbar'
import Intro from "./Intro/Intro"
import Footer from "./Footer/Footer"
import Convenience from './Convenience/Intro'

export default function App () {
    return (
      <div id="app_root">
        <Navbar></Navbar>
        <div className={`flex flex-row py-32 justify-center`}>
          <div className={`flex flex-col gap-32 md:gap-48 w-[93.75%] md:w-[87.5%]`}>
            <Intro />
            <Convenience />
          </div>           
        </div>
        <Footer></Footer>
      </div>
      )
}