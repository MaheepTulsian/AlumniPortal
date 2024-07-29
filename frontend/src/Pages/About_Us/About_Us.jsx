import React from 'react'
import './about.css'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Feedback from './Components/Feedback'; 
export default function About_Us() {
  return (
    <div className="app">
    <div className="main-content">
      <Navigation />
    </div>
    <Footer />
    <Feedback /> 
  </div>
  )
}
