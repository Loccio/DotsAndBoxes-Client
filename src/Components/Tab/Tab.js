import React from 'react'
import {Link} from 'react-router-dom'
import './Tab.css'
import Octicon, {Rocket,Organization,Graph} from '@primer/octicons-react';

function Tab()
{
    return <div className="tab bg-main">
        <Link to="/"><div className="tablink bg-nav">
            <Octicon icon={Rocket}></Octicon>
            </div></Link>
        <Link to="/stats"><div className="tablink bg-nav">
            <Octicon icon={Graph}></Octicon>
            </div></Link>
        <Link to="/friends"><div className="tablink bg-nav">
        <Octicon icon={Organization}></Octicon>
            </div></Link>
    </div>
}

export default Tab;