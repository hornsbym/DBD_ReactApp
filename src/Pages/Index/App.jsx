import React from 'react'
import './App.css'

import Navbar from "./Navbar/Navbar"
import Intro from "./Intro/Intro"
import HowItWorks from "./HowItWorks/HowItWorks"
import MenuSection from "./Menu/MenuSection"
import Pricing from "./Pricing/Pricing"
import Photos from "./Photos/Photos"
import Order from "./Order/Order"
import Delivery from "./Delivery/Delivery"
import Footer from "./Footer/Footer"

class App extends React.Component {
  render() {
    return (
      <div id="app_root">
        <Navbar></Navbar>
        <div id="body_components">
          <Intro></Intro>
          <HowItWorks></HowItWorks>
          <MenuSection></MenuSection>
          <Pricing></Pricing>
          <Photos></Photos>
          <Order></Order>
          <Delivery></Delivery>
          <Footer></Footer>
        </div>
      </div>
      )
    }
}

export default App
