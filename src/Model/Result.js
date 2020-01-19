export default class Result{
    winner;
    winnerNumber;
    loser;
    constructor(players)
    {
        var player1 = players[0];
        var player2 = players[1];
        if(player1.score > player2.score)
        {
            this.winner = player1;
            this.loser = player2;
        }
        else
        {
            this.winner = player2;
            this.loser = player1;
        }

        this.winnerNumber=this.winner.number;
    }
}