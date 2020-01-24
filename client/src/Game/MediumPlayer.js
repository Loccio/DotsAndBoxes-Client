import EasyPlayer from "./EasyPlayer";

/**
 * MediumPlayer
 * 
 * @author Loccions
 */
export default class MediumPlayer extends EasyPlayer {

	/**
	 * Istanzia un nuovo SimplePlayer
	 */
	constructor(){
		super();
		this.name = 'Medium';
		this.image = null;
	}
	
	/**
	 * Effettua una giocata
	 * Completa un quadrato quando possibile
	 * Se non c'� nessun quadrato effettua una giocata casuale che possibilmente eviti di porre il terzo lato ad un quadrato
	 *
	 * @param view PlayerView
	 * @return Line la linea da tracciare
	 * @throws InterruptedException
	 */
     play(view)
	{
		var moves = view.getLastEdges();
		if(moves.length>0) 
		    return moves[0].toString();
		else
		{
			moves = view.getNonThirdEdges();
		}

		if(moves.length>0) 
		{
			view.setMoves(moves);
			return super.play(view);
		}
		else return super.play(view);
	}

	

}
