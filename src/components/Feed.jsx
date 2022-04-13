import WaitingFeed from './WaitingFeed'
import Services from './Services'
import MainFeed from './MainFeed'

const Feed = ({currSearch, data, setData, error, open}) => {

   return (
      <div className="main-feed" /*style={ !currSearch ? {height:'100%'} : {height:'87.5%'}}*/>
         <div className="feed-header">
            <h2 className='feed-title'>
               {currSearch.length <= 15 ? currSearch : (currSearch).split(',')[0]}
            </h2>
         </div>
         <div className="feed" style={ !currSearch ? {height:'92%',  justifyContent:'center'} : {height:'87.5%', justifyContent:'flex-start'}}>

            <Services
               open={open}
            />
            
            {!currSearch || error
               ? 
                  <WaitingFeed
                     error={error}
                  />
               :
                  <>
                  <MainFeed
                     open={open}
                     data={data}
                     setData={setData}
                     error={error}
                  />
                  </>
            }
            {/* {data &&
            <div className="feed-pages" style={{opacity: open ? '.3' : '1'}}>
               <button className='weatherTraits-btn'>today</button>
               <button className='weatherTraits-btn'>5 Days</button>
            </div>} */}
         </div>
      </div>
   )
}

export default Feed