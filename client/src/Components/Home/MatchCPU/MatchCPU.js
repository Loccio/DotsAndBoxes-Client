import React, {Component} from 'react';
import './MatchCPU.css';
import GameField from '../../GameField/GameField'
import { Link } from 'react-router-dom';
import Octicon,{X,Play,ChevronDown} from '@primer/octicons-react';
import Field from '../../../Game/Field';

class MatchCPU extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            user:props.username,
            level:props.level,
            x:7,
            y:7,
            field : new Field(8,8)
        }
    }


    levelOverlay()
    {
        var current = document.getElementById('leveloverlay').style.display;
        if(current!=='flex')
        {
            document.getElementById('leveloverlay').style.display = 'flex';
        }
        else
        {
            document.getElementById('leveloverlay').style.display = 'none';
        }
    }

    onLevelChange = (e) =>
    {
        this.setState({
                
                level:e.currentTarget.value,
                field: new Field(this.state.y+1,this.state.x+1)
            });
        this.levelOverlay();
    }


    render()
    {
        return(<div className="wide padding-10">

            
          <div className="overlay" id="leveloverlay">
          <div className="pop flex-column friends padding-10 level">
              <div className="pop-header wide ">
                  <span>CHANGE LEVEL</span>
                  <div className="pop-overlay-close" onClick={this.levelOverlay}><Octicon   icon={X}></Octicon></div>
                  </div>

                  <span><input type="radio" name="level" value="dummy" checked={this.state.level === 'dummy'} onChange= {this.onLevelChange} /> Dummy</span> 
                  <span><input type="radio" name="level" value="medium" checked={this.state.level === 'medium'}  onChange= {this.onLevelChange}/>Medium</span>
                  <span><input type="radio" name="level" value="pvp" checked={this.state.level === 'pvp'}  onChange= {this.onLevelChange}/> Second Player</span>
                    
                </div>
            </div>


        <div className="pop-header" ><span><Octicon className="pop-header-icon" icon={Play}></Octicon>PLAY</span> 

        <div className="modeinfo"  onClick={this.levelOverlay}>{this.state.level} <Octicon icon={ChevronDown}/></div> 
        
        <Link onClick={this.quitMatch} to="/"><Octicon className="quit" icon={X}></Octicon></Link>
        </div>
        
        
        
        <div className="flex-column fit-content">
           <GameField field={this.state.field} level={this.state.level} user={this.state.user}></GameField>
        </div>
        </div>
        
    )
    }
}

export default MatchCPU;