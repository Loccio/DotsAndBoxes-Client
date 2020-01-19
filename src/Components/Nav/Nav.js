import React from 'react';
import './Nav.css';
import Octicon, {SignIn} from '@primer/octicons-react'
import {Link} from "react-router-dom";
function Home()
{
    return(
        <div className="nav bg-nav">
            <div>
              <div className="logo">

                  <img className="rotating" src={require('../../logo.svg')} alt="logo"></img>
             
  
                  </div>
              <div className="user">
                  <button className="login"> Sign in </button>
              </div>
           </div>
        </div>
    )
}

export default Home;