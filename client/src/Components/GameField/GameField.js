import React, {Component} from 'react';
import  Octicon , {Person} from '@primer/octicons-react'
import './GameField.css';
import MatchManager from '../../Game/MatchManager'
import CPUMatchManager from '../../Game/CPUMatchManager'
import UserPlayer from '../../Game/UserPlayer'
import Result from './Result/Result'
import { Redirect } from 'react-router-dom';


class GameField extends Component
{
    PAUSE = 150;
    clickLine = ()=>{};

    constructor(props)
    {
        super(props);
        this.state = {
            user:props.user,
            x:props.field.getWidth()-1,
            y:props.field.getHeight()-1,
            match: this.getNewMatchManager(props.field,props.level,props.user),
            cpuPlayng:false,
            currentlevel: props.level
        };
        this.initGame(props,false);        
    }

    initGame(props,setState)
    {
        if(setState) 
        {
            this.setState( {
            x:props.field.getWidth()-1,
            y:props.field.getHeight()-1,
            match: this.getNewMatchManager(props.field,props.level,props.user),
            cpuPlayng:false

        });
       }
       var level = props.level
       switch(level)
       {
           case 'pvp': this.clickLine = (id)=>{
            if(this.state.match.userInput)
            {
                var match = this.state.match;
                match.play(id);
                this.setState({match:match});
            }
        } 
        break;

           case 'online': 
           this.clickLine = () => {
               console.log('nope');
               //play
               //change turn
               //update server
            }
           break;

           default: 
           this.clickLine = (id)=>{
            if(this.state.match.userInput)
            {
                var match = this.state.match;
                match.play(id);
                this.setState({match:match});
                if(this.state.match.currentTurn===1)
                this.setState({cpuPlayng:true});
            }
    };
           break;
       }
    }

    UNSAFE_componentWillReceiveProps(props) {
        if(props.level!== this.state.currentlevel)
        this.initGame(props,true);
        else
        {
            //update online match
            //set this player turn
        }
    }
    
    cpuPlay =()=>{

        if (this.state.match.currentTurn===0||this.state.match.isOver()) {
            this.setState({ cpuPlayng: false })
            return
        }
        var match = this.state.match;
        match.cpuPlay();
        this.setState({match:match});
                  
    }

    componentDidUpdate()
    {
       if(this.state.cpuPlayng)setTimeout(this.cpuPlay,this.PAUSE);
    }

    getNewMatchManager(field,level,user)
    {
        switch (level)
        {
            case 'dummy':return new CPUMatchManager(field,new UserPlayer(user,0),level);
            case 'medium':return new CPUMatchManager(field,new UserPlayer(user,0),level);
            case 'impossible': return new CPUMatchManager(field,new UserPlayer(user,0),level);
            default: return new MatchManager(field, new UserPlayer(user,0),new UserPlayer('Player 2',1));
        }
    }

  

    linecolor(id){
        if(this.state.match.field.getLinePlayer(id)===0)
        return ' line-blue'
        if(this.state.match.field.getLinePlayer(id)===1) return ' line-red'
        
        return ' '
    };

    boxcolor(id){
        var color = this.state.match.field.getBoxPlayer(id);
        if(color===-1)
        return ' '
        else
        {
            if(color===0) return ' bg-blue fillbox'
            else return ' bg-red fillbox'
        }
        
    };

    ifIsTurn(turn)
    {
        if(this.state.match.currentTurn===turn)
        {
            if(turn===0)
            return ' active1';
            else return ' active2';
        }
        else return '';
    }

    
    gameField(x,y)
    {
        var xs = [...Array(parseInt(x,10)).keys()];
        var ys = [...Array(parseInt(y,10)+1).keys()];
        var gamefield = <>
        <div className="score flex-row" id="score">
                {
                this.state.match.isOver()?<Result result = {this.state.match.getResult()}></Result>
                :<>
                <div className={"flex-row score1"+this.ifIsTurn(0)}>
                <div className="circle bg-main"><Octicon className="p text-blue" icon={Person}></Octicon></div>
             
                    <p>
                        {this.state.match.players[0].name}<br/>
                        <strong>{this.state.match.players[0].score}</strong>
                    </p>
                    </div>
                    <div className={"flex-row score2"+this.ifIsTurn(1)}>
                    <p>
                        {this.state.match.players[1].name}<br/>
                        <strong>{this.state.match.players[1].score}</strong>
                    </p>

                    <div className="circle bg-main"><Octicon className="p text-red" icon={Person}></Octicon></div>
                    </div></>
                }
               
        </div>
        <div className='field'>
            
            { 
                ys.map(ycount =>{

                    if(ycount<y)
                    return  <div className="row" id={ycount} key={ycount} >
                    {xs.map(xcount=>
                    {
                        if(xcount<x-1)
                        return <div className="block" key={xcount+"-"+ycount}>
                       <div className="layer">
                           <div className={"line hor "+this.linecolor(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)} id={xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount} >
                               <div className="hitbox" onClick={() => this.clickLine(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)}></div>
                           </div>
                       </div>
                       <div className="layer">
                           <div className={"line ver "+this.linecolor(xcount+"-"+ycount+" "+xcount+"-"+(ycount+1))} id={xcount+"-"+ycount+" "+xcount+"-"+(ycount+1)} >
                           <div className="hitbox" onClick={() => this.clickLine(xcount+"-"+ycount+" "+xcount+"-"+(ycount+1))}></div>
                           </div>
                           <div className={"box " + this.boxcolor(xcount+"-"+ycount)} id={xcount+"-"+ycount}>
                           </div>
                       </div>  
                    </div>;
                    else 
                    return <div className="block" key={xcount+"-"+ycount} >
                       <div className="layer">
                           <div className={"line hor endrow " + this.linecolor(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)} id={xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount}   >
                           <div className="hitbox" onClick={() => this.clickLine(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)}></div>
                           </div>
                       </div>
                       <div className="layer">
                           <div className={"line ver "+this.linecolor(xcount+"-"+ycount+" "+xcount+"-"+(ycount+1))} id={xcount+"-"+ycount+" "+xcount+"-"+(ycount+1)}  >
                           <div className="hitbox" onClick={() => this.clickLine(xcount+"-"+ycount+" "+xcount+"-"+(ycount+1))} ></div>
                           </div>
                           <div className={"box " + this.boxcolor(xcount+"-"+ycount)} id={xcount+"-"+ycount}>
                           </div>
                           <div className={"line ver "+this.linecolor((xcount+1)+"-"+ycount+" "+(xcount+1)+"-"+(ycount+1))} id={(xcount+1)+"-"+ycount+" "+(xcount+1)+"-"+(ycount+1)}>
                           <div className="hitbox"  onClick={() => this.clickLine((xcount+1)+"-"+ycount+" "+(xcount+1)+"-"+(ycount+1))}></div>
                           </div>
                       </div>  
                    </div>;
                    })}
                </div>;
                else
                return  <div className="row" id={ycount} key={ycount}>
                    {
                        xs.map(xcount =>{
                            if(xcount<x-1)
                            return <div className="block" key={xcount+"-"+ycount} >
                           <div className="layer">
                               <div className={"line hor"+this.linecolor(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)} id={xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount} >
                               <div className="hitbox" onClick={() => this.clickLine(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)}></div>
                               </div>
                           </div> 
                        </div>;
                        else 
                        return <div className="block" key={xcount+"-"+ycount} >
                           <div className="layer">
                               <div className={"line hor endrow"+this.linecolor(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)} id={xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount} >
                               <div className="hitbox" onClick={() => this.clickLine(xcount+"-"+ycount+" "+(xcount+1)+"-"+ycount)}></div>
                               </div>
                           </div>
                        </div>})
                    }

                </div>
              


                })
            }
        </div></>;

        return gamefield;
    }
    

    render()
    {
        if(!this.state.user) return <Redirect to='/'></Redirect>
        return(
        this.gameField(this.state.x,this.state.y))
    }
}

export default GameField;