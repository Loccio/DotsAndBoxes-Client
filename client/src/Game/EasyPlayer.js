
/**
 * EasyPlayer
 *
 * @author Loccions
 */
export default class EasyPlayer{

	name;
	score;
	number;
	image;

	/**
	 * Instanzia un nuovo RandomPlayer.
	 */
	constructor() {
		this.name = 'Dummy';
		this.score = 0;
		this.number = 1;
		this.image = null;
	}

	/**
	 * Effettua una giocata casuale
	 *
	 * @param view PlayerView
	 * @return Line la linea da tracciare
	 * @throws InterruptedException
	 */
    play(view){

		var possible_moves = view.getMoves();
		var max = possible_moves.length;
		var i = Math.floor(Math.random() * max);
		return possible_moves[i].toString();
	}

	Score(points)
	{
		this.score+=points;
	}

}
