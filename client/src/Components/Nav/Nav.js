import React from 'react';
import './Nav.css';
import Octicon,{Bookmark,ArrowLeft} from '@primer/octicons-react'
import {Link} from 'react-router-dom'
function Home(props)
{

    return(
        <div className="nav">
            <div>
              <div className="logo">
                  {props.page!='Home'?

                  <Link className="back" to="/"><Octicon icon={ArrowLeft}></Octicon></Link>
                  
                  :
                  
                  <Octicon icon={Bookmark}/>}
              
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