import React from 'react'
import './App.css'

import Navbar from "./Navbar/Navbar"
import Intro from "./Intro/Intro"
import HowItWorks from "./HowItWorks/HowItWorks"

class App extends React.Component {
  render() {
    return (
      <div id="app_root">
        <Navbar></Navbar>
        <Intro></Intro>
        <HowItWorks></HowItWorks>
        
      </div>
      )
    }
}

export default App
