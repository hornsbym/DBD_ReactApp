import React from 'react'
import './Index.css'

import Navbar from "./Navbar/Navbar"
import Intro from "./Intro/Intro"
import HowItWorks from "./HowItWorks/HowItWorks"
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
          <Pricing></Pricing>
          <Photos></Photos>
          <Delivery></Delivery>
          <Order></Order>
          <Footer></Footer>
        </div>
      </div>
      )
    }
}

export default App
