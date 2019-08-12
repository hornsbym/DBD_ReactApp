import React from 'react'
import './App.css'

import Navbar from "./Navbar/Navbar"
import Intro from "./Intro/Intro"
import HowItWorks from "./HowItWorks/HowItWorks"
import MenuSection from "./Menu/MenuSection"
import Photos from "./Photos/Photos"
import Order from "./Order/Order"
import Delivery from "./Delivery/Delivery"
import Footer from "./Footer/Footer"

class App extends React.Component {
  render() {
    return (
      <div id="app_root">
        <Navbar></Navbar>
        <Intro></Intro>
        <HowItWorks></HowItWorks>
        <MenuSection></MenuSection>
        <Photos></Photos>
        <Order></Order>
        <Delivery></Delivery>
        <Footer></Footer>
      </div>
      )
    }
}

export default App
