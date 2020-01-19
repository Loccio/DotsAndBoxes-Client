import React,{Component} from 'react'
import Octicon, {Organization} from '@primer/octicons-react'
import './Friends.css'
class Friends extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="pop flex-column friends padding-10">

                <div className="pop-header wide "><span><Octicon className="pop-header-icon" icon={Organization}></Octicon> FRIENDS</span></div>
                <Octicon className="big-icon" icon={Organization}></Octicon>
                <p>
                <strong>Play with your friends!</strong><br/>
                Sign in to access your friend's list
                </p>

                </div>
    
        )
    }
}

export default Friends;