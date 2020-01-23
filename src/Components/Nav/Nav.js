import React from 'react';
import './Nav.css';
import Octicon,{Bookmark} from '@primer/octicons-react'
function Home(props)
{

    return(
        <div className="nav">
            <div>
              <div className="logo">
              <Octicon icon={Bookmark}/>
                  <h4>{props.page}</h4>
             
  
                  </div>
              <div className="user">
                  <button className="login"> Sign in </button>
              </div>
           </div>
        </div>
    )
}

export default Home;