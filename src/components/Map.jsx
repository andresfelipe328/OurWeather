import { useEffect, useRef } from 'react'

const Map = ({open, setOpen}) => {
   useEffect(() => {
      resetMenu.current()
   },[])

   const resetMenu = useRef(() => {})
   resetMenu.current = () => {
      setOpen(!open)
   }

   return (
      <div className="map-wrapper">
         <h3 className='map-title'>Weather Map</h3>
         <div id="map" className='map'>
            <p>Currently unavailable</p>
         </div>
      </div>
   )
}

export default Map