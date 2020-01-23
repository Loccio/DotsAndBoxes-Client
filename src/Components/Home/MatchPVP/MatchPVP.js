import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class MatchPVP extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="flex-column">
            <p><strong>Match PVP</strong></p>
             <p>
             Not yet Available.<br/>
             Please go back to the gamemode selection. <br/> <Link to="/">go back</Link>
             </p>
           </div>
    )
    }
}

export default MatchPVP;