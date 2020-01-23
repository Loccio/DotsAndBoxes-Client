import Result from './Result'
export default class MatchManager
{
    field;
    players;
    currentTurn;
    isover;
    userInput;

    constructor(field,player1,player2)
    {
        this.field = field;
        this.players = [player1,player2];
        this.isover = false;
        this.currentTurn = 0;
        this.result = null;
        this.userInput = true;
    }

    play(id)
    {
        if(this.isover===false)
        {
            if(this.field.getLinePlayer(id)===-1)
            {
            var points = this.field.drawLine(id,this.currentTurn);
            if(points === 0) 
              this.changeTurn();
            else 
            {
                var player = this.players[this.currentTurn];
                player.Score(points);
            } 

            if(this.field.isFull())
               this.isover = true;
            }
        }
        else
        {
            console.log('the match is over');
        }
    }

    changeTurn()
    {
        if(this.currentTurn === 0)
        this.currentTurn = 1;
        else
        this.currentTurn = 0;

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