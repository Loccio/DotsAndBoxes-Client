
/**
 * HardPlayer
 *
 * @author Loccions
 */
export default class HardPlayer{

	name;
	score;
    number;
    image;


	/**
	 * Instanzia un nuovo RandomPlayer.
	 */
	constructor() {
		this.name = 'Impossible';
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
		var i = 0;
		return possible_moves[i];
	}

}
