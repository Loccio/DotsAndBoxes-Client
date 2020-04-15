import React, {Component} from 'react';
import './MatchCPU.css';
import SinglePlayerGameField from '../../GameField/SinglePlayerGameField';
import TwoPlayerGameField from '../../GameField/TwoPlayerGameField';
import { Link } from 'react-router-dom';
import Octicon,{X,Play,ChevronDown,Zap} from '@primer/octicons-react';
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
            field: new Field(8,8),
        }
        this.gamefield = React.createRef();
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

    onRestart()
    {
        this.setState({
            field: new Field(this.state.y+1,this.state.x+1),
            over:false
        });
    }

    onMatchEnd= ()=>
    {
        this.setState({
                over:true
            });
    }

    render()
    {
        return(<div className="wide">

            
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
        
        <div className='wide'>
        {this.state.over?
        <div className='restart'>
            <div className='flex-column restart-form'><Octicon className="btn-icon" icon={Zap}></Octicon>
        <a className='btn-iconed' onClick={()=>this.onRestart()}>Play Again</a></div>
        </div>:null} 
        <div className="flex-column fit-content">
        
            {this.state.level==='pvp'?
            <TwoPlayerGameField field={this.state.field} level={this.state.level} user={this.state.user} onMatchEnd={this.onMatchEnd}></TwoPlayerGameField>
            :
            <SinglePlayerGameField field={this.state.field} level={this.state.level} user={this.state.user} onMatchEnd={this.onMatchEnd} ></SinglePlayerGameField>
            
        }
        </div></div>
        </div>
        
    )
    }
}

export default MatchCPU;