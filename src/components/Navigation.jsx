import {FiSearch} from 'react-icons/fi'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'
 
const Navigation = ({search, setSearch, open, setOpen, handleSearchSubmit}) => {
   
   return (
      <div className="search-box">
         <div className="search-wrapper">
            <FiSearch className='search-icon'/>
            <form onSubmit={handleSearchSubmit} className='search-form'>
               <input 
                  className='search-input'
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  placeholder='Search...'
                  type="text" 
               />
            </form>
         </div>
         <div className="service-menu">
            <button className='burger' onClick={() => setOpen(!open)}>
               <HiOutlineMenuAlt1 className='serv-menu'/>
            </button>
         </div>
         <Link className='home-link' to='/'><AiFillHome className='home-icon'/></Link>
      </div>
   )
}

export default Navigation