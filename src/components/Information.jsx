import React from 'react'
import adidas from '../images/Adidas_Logo.svg.png'
import puma from '../images/Puma-Logo.png'
import nike from '../images/Logo_Nike.svg.png'
import under from '../images/UnderArmour-logo.svg.png'
import '../styles/Information.css'
import {PageContainer} from './PageContainer'

function Information() {
  return (
    <div>
      <div className='header'>
        <div className='logo'><img src={adidas} alt="adidasLogo" /></div>
        <div className='logo'><img src={nike} alt="nikeLogo" /></div>
        <div className='logo'><img src={puma}alt="pumaLogo" /></div>
        <div className='logo'><img src={under} alt="underArmourLogo" /></div>
        <br />
    </div>
      <div>
        <PageContainer/>
      </div>
    </div>
  )
}

export {Information}