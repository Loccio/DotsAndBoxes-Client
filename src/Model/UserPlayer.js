
/**
 * La classe RealPlayer rappresenta un giocatore controllato dall'utente che effettua la giocata 
 * in base al valore indicato in input
 *
 * @author Loccions
 */
export default class UserPlayer {

	name;
	score;
	number;
	image;

	/**
	 * Istanzia un nuovo RealPlayer con un nome personalizzato
	 *
	 * @param name il nome del giocatore
	 */
	constructor(name,number,image) {
		this.name = name;
		this.score = 0;
		this.number = number;
		if(image)this.image = image;
		else this.image = null;
	}

	Score(points)
	{
		this.score+=points;
	}
	

}
