import wind from '../static/img/weather_traits/wind.png'
import precipitation from '../static/img/weather_traits/rain.png'
import humidity from '../static/img/weather_traits/humidity.png'
import { useState} from 'react'

const WEEKDAY = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]
const TEMPCONST = 273.15

const MainFeed = ({data, setData, open}) => {
   
   const [toF, setToF] = useState(true)

   const getDate = (date, mode=0) => {
      var todayDate = new Date(date);
      if (mode === 0)
         return todayDate.getDay();
      
      return WEEKDAY[todayDate.getDay()];
   }

   const getTemp = (dTemp, mode=0) => {
      let result = 0
      if (mode === 0)
         result = Math.round((((dTemp - TEMPCONST)*9)/5) + 32)
      else
         result = Math.round(dTemp - TEMPCONST)
      return result     
   }

   const getWindSpeed = (wind, mode=0) => {
      let result = 0
      if (mode === 0)
         result = Math.round(wind * 2.236936)
      else
         result = Math.round(wind * 3.6)
      return result
   } 

   const getPrecipitation = (pre) => {
      return Math.round(pre * 100)
   }

   const getHour = (dateTime) => {
      const fullTime = dateTime.split(' ')[1];
      let time = Number(fullTime.split(':')[0])
      const am = ' am'
      const pm = ' pm'

      if (time < 12) {
         if (time === 0)
            time = 12

         time = time.toString().concat(am)
      }
      else {
         if (time > 12)
            time -= 12

         time = time.toString().concat(pm)
      }
      return time
   }

   const getSummTemps = (currDate) => {
      const tempDate = currDate.split(' ')[0];
      
      const summTemps = data?.list.filter(obj => {
         const date = obj.dt_txt.split(' ')[0];
         return date === tempDate;
      });
      return summTemps
   }


   // const modifyData = () => {
   //    const firstDate = getDate(data?.list[0]?.dt_txt)
   //    const todayDate = new Date().getDay()

   //    if (todayDate === firstDate) {
   //       console.log('remove first index')
   //       data?.list.shift()
   //       setData(data)
   //    }
   // } 

   // modifyData()

   let counter = getDate(data?.list[0]?.dt_txt)
   let fTemp = 0
   let cTemp = 0
   let iWind = 0
   let mWind = 0

   return (

      <div className="weather-container-wrapper" style={{opacity: open ? '.3' : '1'}}>
         
         {data?.list.map((day, i) => {
            
            if (counter !== getDate(day.dt_txt) || i === 0) {
               counter = getDate(day.dt_txt)
               fTemp = getTemp(day.main?.temp)
               cTemp = getTemp(day.main?.temp, 1)
               iWind = getWindSpeed(day.wind?.speed)
               mWind = getWindSpeed(day.wind?.speed, 1)
               
               return (
                  <div key={i} className="weather-container">
                     <h3 className='day'>{getDate(day.dt_txt, 1)} - <span style={{opacity:.45, fontSize:'1.15rem'}}>{day.dt_txt.split(' ')[0]}</span> </h3>
                     <small className='temp-desc'>{day.weather[0]?.description}</small>
                     <img className='weather-img' src={`http://openweathermap.org/img/wn/${day.weather[0]?.icon}@2x.png`} alt="weather"/>

                     <div className="temp-container">
                        <h4 className='weather-meas'>{toF ? fTemp : cTemp}</h4>
                        <button 
                           className='temp-btn'
                           style={{opacity: toF ? '1' : '.65'}}
                           onClick={() => setToF(true)}
                        >
                           &deg;F
                        </button>
                        <span className='slash'>/</span>
                        <button 
                           className='temp-btn'
                           style={{opacity: !toF ? '1' : '.65'}}
                           onClick={() => setToF(false)}
                        >
                           &deg;C
                        </button>
                     </div>

                     <div className="weather-traits">
                        <div className="precipitation trait">
                           <img className='weather-trait' src={precipitation} alt="wind" />
                           <small className='trait-title'>Precipitation</small>
                           <p className='trait-p'>{getPrecipitation(day.pop)} %</p>
                        </div>
                        <div className="wind trait">
                           <img className='weather-trait' src={wind} alt="wind" />
                           <small className='trait-title'>Wind Speed</small>
                           <p className='trait-p'>{toF ? iWind : mWind} {toF ? 'mi/h' : 'km/h'}</p>                        
                        </div>
                        <div className="humidity trait">
                           <img className='weather-trait' src={humidity} alt="wind" />
                           <small className='trait-title'>Humidity</small>
                           <p className='trait-p'>{day.main?.humidity} %</p>
                        </div>
                     </div>
                     <div className="temp-overview">
                        {getSummTemps(day.dt_txt).map((date, i) => {
                           return (
                              <div key={i} className="hour-temp">
                                 <small className='hour'>{getHour(date.dt_txt)}</small>
                                 <img className='hourTemp-img' src={`http://openweathermap.org/img/wn/${date.weather[0]?.icon}@2x.png`} alt="weather"/>
                                 <small className='subTemp-desc'>{date.weather[0]?.description}</small>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               )
            }
            else
               counter = getDate(day.dt_txt)
               return (
                  null
               )
         })}
      </div>
   )
}

export default MainFeed