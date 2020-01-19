import React, {Component} from 'react';
import './MatchCPU.css';
import GameField from '../GameField/GameField'
import { Link } from 'react-router-dom';
import Octicon,{X,Play} from '@primer/octicons-react';
import Field from '../../Model/Field';

class MatchCPU extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            level:props.level,
            x:props.x,
            y:props.y,
            field : new Field(props.y+1,props.x+1)
        }
    }


    quitMatch()
    {

    }


    render()
    {
        return(<div className="wide padding-10">
            <div className={'overlay' + (this.state.level=='pvp online'?' show':'')}>
                <div>
                <strong>Match {this.state.level} </strong><br></br>

                Not yet available!<br></br>

                <Link to="/">go back</Link> to the gamemode selection.
                
                </div>
                 </div>
        <div className="pop-header" ><span><Octicon className="pop-header-icon" icon={Play}></Octicon>DOTSANDBOXES</span> 

        <div className="modeinfo">{this.state.level}</div> 
        <Link onClick={this.quitMatch} to="/"><Octicon className="quit text-red" icon={X}></Octicon></Link>
        </div>
        
        
        
        <div className="flex-column fit-content">
           <GameField field={this.state.field} level={this.state.level}></GameField>
        </div>
        </div>
        
    )
    }
}

export default MatchCPU;