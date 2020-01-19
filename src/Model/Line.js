import Dot from './Dot'
/**
 * Classe che definisce un oggetto Line, 
 * la sua responsabilit� � quella di rappresentare una linea del campo di gioco, 
 * ovvero un lato di di uno o pi� quadrati. La classe implementa l'interfaccia Comparable e gestisce il confronto tra linee
 * considerando nel campo di gioco:
 * la prima linea della prima riga di linee orizzontali, ovvero la prima in alto a sinistra, come la pi� piccola. 
 * l'ultima linea dell'ultima riga di linee orizzontali, ovvero l'ultima in basso a destra, come la pi� grande.
 * due linee rappresentate dagli stessi due punti sono considerate equivalenti 
 * a prescindere dal valore di status e dall'ordine dei punti
 * 
 *
 * @author Loccions
 */

export default class Line{
	
	/**  punto a. */
	a;
	
	/**  punto b. */
	b;	
	
	/**  -1 linea non tracciata, 0 linea tracciata dal primo giocatore, 1 dal secondo */
	status;
	
	/**
	 * Istanzia una nuova linea, imposta i punti assegnando ad "a" il punto minore tra quelli indicati come parametro
	 *
	 * @param a il punto a
	 * @param b il punto b
	 */
    constructor(a,b) 
	{
		   this.a = Dot.Min(a,b);
		   this.b = this.a.equals(a)?b:a;
		   this.status=-1;
	}
	
	/**
	 * ritorna il punto a.
	 *
	 * @return il punto a
	 */
	getA() {
		return this.a;
	}
	
	/**
	 * ritorna il punto b.
	 *
	 * @return il punto b
	 */
	getB() {
		return this.b;
	}
	
	/**
	 * Controlla se la linea � tracciata.
	 *
	 * @return true, se la linea � tracciata
	 */
	check()
	{
		return this.status>-1;
	}
	
	/**
	 * Traccia la linea.
	 *
	 * @param player numero giocatore che ha tracciato la linea, 0 primo giocatore, 1 secondo giocatore.
	 */
	draw(player)
	{
		this.status = player;
	}

    compareTo(o) {
		if(o==null) throw "comparing to null edge";
		var a = o.a.compareTo(o.b)<0?o.a:o.b;
		var b = o.a.compareTo(o.b)<0?o.b:o.a;
		var A = this.a.compareTo(this.b)<0?this.a:this.b;
		var B = this.a.compareTo(this.b)<0?this.b:this.a;
		
		if(A.compareTo(a)>0) return 1;
		else
		{
			if(A.compareTo(a)==0)
			{
				if(B.compareTo(b)==0) return 0;
				else
				{
					if(B.compareTo(b)>0) return 1;
					else
						return -1;
				}
			}
			else
			{
				return -1;
			}
		}
		
	}
	
    equals(o)
	{
		if(o!=null && o instanceof Line)
		{
			if(this.compareTo(o)==0) return true;
		}
		return false;
	}
	

	/**
	 * Ritorna Line sotto forma di stringa secondo la rappresentazione "Ax Ay Bx By"
	 * dove A e B sono i punti ed x e y le coordinate
	 *
	 * @return Line sotto forma di stringa
	 */
    toString()
	{
		var A = this.a.compareTo(this.b)<0?this.a:this.b;
		var B = this.a.compareTo(this.b)<0?this.b:this.a;
		return A.toString()+" "+B.toString();
	}

	/**
	 * restituisce un intero che rappresenti il giocatore che ha tracciato la linea
	 *
	 * @return 0 o 1 se la linea � tracciata, -1 se la linea non � tracciata
	 */
	getPlayer() {
		return this.status;
	}
	
	/**
	 * Controlla se la linea � orientata verticalmente.
	 *
	 * @return true, se � verticale
	 */
	isVertical()
	{
		return this.a.getY()!=this.b.getY();
	}

	
}
