import Dot from './Dot'
/**
 * Classe che rappresenta un oggetto Box del campo da gioco. 
 * La sua responsabilit� � quella di rappresentare i dati di un quadrato.
 *
 * @author Loccions
 */
export default class Box {
	
	
	/** punto a. */
	a;
	
	/** punto b. */
	b;
	
	/** punto c. */
	c;
	
	/** punto d. */
	d;
	
	/**  Giocatore che ha completato il quadrato, -1 se incompleto. */
	owner;
	
	/**
	 * Istanzia un nuovo box.
	 *
	 * @param root Dot radice
	 */
	constructor(root) {

		this.a = root;
		this.b = root.shift('RIGHT');
		this.c = root.shift('DOWN');
		this.d = root.shift('DOWN');
		this.owner = -1;
	}
	
	/**
	 * ritorna il proprietario del box.
	 *
	 * @return the owner
	 */
	getOwner()
	{
		return this.owner;
	}

	/**
	 * riempie il quadrato che � stato completato.
	 *
	 * @param player il numero giocatore che ha completato il quadrato
	 */
	Fill(player)
	{
		this.owner = player;
	}

	/**
	 * restituisce il punto a del quadrato
	 *
	 * @return Dot a
	 */
	getA() {
		return this.a;
	}
	
	/**
	 * restituisce il punto b del quadrato
	 *
	 * @return Dot b
	 */
	getB() {
		return this.b;
	}
	
	/**
	 * restituisce il punto c del quadrato
	 *
	 * @return Dot c
	 */
	getC() {
	    return this.c;
	}
	
	/**
	 * restituisce il punto d del quadrato
	 *
	 * @return Dot d
	 */
	getD() {
		return this.d;
	}

	
	toString() {
		return "Box " + this.a.toString();
	}


	equals(o) {
		if(o!=null && o instanceof Box)
		{
			if(this.compareTo((o)==0)) return true;
		}
		return false;
	}

	
	compareTo(o) {
		return this.a.compareTo(o.a);
	}
	
	
}
