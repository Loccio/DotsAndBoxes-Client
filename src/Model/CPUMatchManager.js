import Result from './Result'
import PlayerFactory from './PlayerFactory'
import PlayerView from './PlayerView'
export default class MatchManager
{
    field;
    players;
    currentTurn;
    isover;
    userInput;


    constructor(field,player1,level)
    {
        this.field = field;
        var player2 = PlayerFactory.newPlayer(level);
        this.players = [player1,player2];
        this.isover = false;
        this.currentTurn = 0;
        this.result = null;
        this.userInput = true;
        this.observers = [];
    }

    play(id)
    {
        if(this.field.getLinePlayer(id)==-1)
        {
        var points = this.field.drawLine(id,this.currentTurn);
        var player = this.players[this.currentTurn];
        if(points==0) this.changeTurn();
        player.Score(points);
        this.checkOver();
        }    
    }

    cpuPlay()
    {
        var id  = this.players[1].play(new PlayerView(this.field));
        var points = this.field.drawLine(id,this.currentTurn);
        var player = this.players[this.currentTurn];
        if(points==0) this.changeTurn();
        player.Score(points);
        this.checkOver();
    }
      

    checkOver()
    {
        if(this.field.isFull())
                this.isover = true;
    }

    changeTurn()
    {
        if(this.currentTurn == 0)
        {
            this.currentTurn = 1;
            this.userInput = false;
        }
        else
        {
            this.currentTurn = 0;
            this.userInput = true;
        }
       
    }
    
    isOver()
    {
        return this.isover;
    }

    getResult()
    {
        return new Result(this.players);
    }


}