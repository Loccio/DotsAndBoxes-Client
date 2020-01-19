import React,{Component} from 'react';
import './Result.css'
import '../GameField.css'
import Octicon,{Person} from '@primer/octicons-react'

export default class Result extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            result: props.result
        };
    }

    render()
    {
        return <>{
            this.state.result.winnerNumber==0?
        <div className="flex-row score1 score-res active1" >
         
        <div className="circle bg-main"><Octicon className="p text-blue" icon={Person}></Octicon></div>
     
            <div id="winner">
            The winner is <b>{this.state.result.winner.name}</b><br/>
                <strong>{this.state.result.winner.score} : {this.state.result.loser.score}</strong>
            </div>
         
            </div>
            :
            <div className="flex-row score2 score-res active2"  >
              <div id="winner" >
                The winner is <b>{this.state.result.winner.name}</b><br/>
                <strong>{this.state.result.winner.score} : {this.state.result.loser.score}</strong>
            </div>

            <div className="circle bg-main "><Octicon className="p text-red" icon={Person}></Octicon></div></div>
        
            }</>
           
    }
}