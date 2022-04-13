import React from 'react'
import appLogo from '../static/img/app-icon.png'

const Footer = () => {
   const dateYear = new Date()

   return (
      <footer className='footer'>
         <img className='footerApp-icon' src={appLogo} alt="app icon" />
         <p className='footer-p'>Copyright &copy; {dateYear.getFullYear()}</p>
      </footer>
   )
}

export default Footer