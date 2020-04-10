import React from 'react';
import './Nav.css';
import Octicon,{Bookmark} from '@primer/octicons-react'
import ServerConnection from './ServerConnection/ServerConnection'
function Home(props)
{
   

    return(
        <div className="nav">
          
            <div className='container'>
              <div className="logo">
                  <Octicon icon={Bookmark}/>
              
                  <h4>{props.page}</h4>
             
  
                  </div>
              <div className="user">
                  <ServerConnection/>
                 
             </div>
           </div>
        </div>
    )
}

export default Home;