import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Octicon,{X,Play} from '@primer/octicons-react';
import GameField from '../../GameField/GameField'
import Field from '../../../Game/Field';
class MatchPVP extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            user: this.props.user,
            level:'online',
            x:7,
            y:7,
            field : new Field(8,8)
        }
    }

    
    render()
    {
        return(
            <div className="wide padding-10">
            <div className="pop-header" ><span><Octicon className="pop-header-icon" icon={Play}></Octicon>ROOM: {this.state.id}</span> 
            <Link className="mlaut" to="/matchmaking"><Octicon className="quit" icon={X}></Octicon></Link>
            </div>
          <div className="flex-row wrap">
          <div className="flex-column">
           <GameField field={this.state.field} level={this.state.level} user={this.state.user}></GameField>
          </div>
          </div>
           </div>
    )
    }
}

export default MatchPVP;