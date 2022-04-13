import { Link } from "react-router-dom"

const Services = ({open}) => {
   return (
      <div className="service-container" style={{display: open ? 'flex' : 'none'}}>
         <ul className='service-list'>
            <li><Link className="service" to="/weather-map">Weather Map</Link></li>
         </ul>
      </div>
   )
}

export default Services