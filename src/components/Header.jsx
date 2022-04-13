import appLogo from '../static/img/app-icon.png'
// import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
   return (
      <header className='header'>
         <div className="header-group">
            <div className="headGroup-One">
               <img className='app-img' src={appLogo} alt="app icon" />
               <h1 className='app-title'>OurWeather</h1>
            </div>
            {/* <div className="headGroup-Two">
               <FaUserAlt className='user-icon' />
            </div> */}
         </div>
      </header>
   )
}

export default Header