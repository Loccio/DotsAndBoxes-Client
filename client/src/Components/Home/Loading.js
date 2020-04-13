import React from 'react'
import Octicon,{Rocket,X} from '@primer/octicons-react'
import {Link} from 'react-router-dom'
import './Loading.css'
export default class Loading extends React.Component
{
    constructor(props){super(props)}

    render()
    {
        return<div className='pop'><div className="wide padding-10">
            <div className="pop-header" ><span><Octicon className="pop-header-icon" icon={Rocket}></Octicon>MATCHMAKING</span> 
            <Link className="mlaut" to="/"><Octicon className="quit" icon={X}></Octicon></Link>
            </div>
        <div className='flex-column'>
             <div class="loader">Loading...</div>
            <p>
                Connecting to the room...
            </p>
        </div>
        </div></div>;
    }
}