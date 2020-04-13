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
            room:this.props.room,
            socket:this.props.socket,
            user: this.props.user,
            level:'online',
            x:7,
            y:7,
            field : new Field(8,8)
        }
    }

    componentDidMount()
    {
        this.state.socket.on('secondplayer',name=>this.setState({secondplayer:name}));
        this.state.socket.on('secondplayerout',()=>{
            this.setState({secondplayer:undefined})
            this.setState({field:new Field(8,8)});
        }
        );
    }

    
    render()
    {
        return(
            <div className="wide padding-10">
            <div className="pop-header" ><span><Octicon className="pop-header-icon" icon={Play}></Octicon>ROOM: {this.state.room}</span> 
            <Link className="mlaut" to="/matchmaking"><Octicon className="quit" icon={X}></Octicon></Link>
            </div>
          <div className="flex-row wrap">
          <div className="flex-column">
              {this.state.secondplayer?
               <GameField field={this.state.field} level={this.state.level} user={this.state.user} socket={this.state.socket} secondplayer={this.state.secondplayer}></GameField>:
               <p>You are alone in this room!<br></br>
               wait for a second player to start a new game...
               </p>
            }
          </div>
          </div>
           </div>
    )
    }
}

export default MatchPVP;