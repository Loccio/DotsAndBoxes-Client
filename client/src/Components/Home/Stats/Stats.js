import React,{Component} from 'react'
import Octicon, {Graph} from '@primer/octicons-react'
import './Stats.css'
import {Link} from 'react-router-dom'
class Stats extends Component
{
    constructor(props)
    {
        super(props);
        this.state =  {
            props:props
        };
    }

    render()
    {
        return(
            <div className="pop flex-column stats padding-10">
                 <div className="pop-header wide "><span><Octicon className="pop-header-icon" icon={Graph}></Octicon> STATS</span>
                 <Link to="/stats" className="pop-header-button">VIEW ALL</Link>
                 </div>
               <Octicon className="big-icon" icon={Graph}></Octicon>
               <p><strong>Check your Stats!</strong><br></br>
               Sign in to start tracking your performances against other players.
               </p> 
            </div>
        )
    }
}

export default Stats;