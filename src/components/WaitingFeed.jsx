import {ReactComponent as WaitingClock} from '../static/img/waitingFeed.svg'

const WaitingFeed = ({error}) => {
   return (
      <div className="waitingFeed-msg">
         <WaitingClock />
         {error 
            ? 
               <p className='error-msg'>Code {error.response.data.cod} : {error.response.data.message}</p> 
            :
               <p className='waiting-feed'>Waiting for city, state, or country search...<br/>For more accurate results, provide state and country<br/>Ex: city, state, country</p>}
      </div>
   )
}

export default WaitingFeed