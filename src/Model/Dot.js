
/**
 * La classe Dot, rappresenta un punto del campo da gioco e gestisce le operazioni ad esso applicabili. Implementa l'interfaccia
 * Comparable e gestisce il confronto tra punti tenendo in considerazione che:
 * il primo punto della prima riga del campo da gioco, ovvero quello in alto a sinistra, rappresenta il punto pi� piccolo
 * l'ultimo punto dell'ultima riga del campo da gioco, ovvero quello in basso a destra , rappresenta il punto pi� grande
 *
 * @author Loccions
 */


export default class Dot{

	/**  coordinata x. */
	x;
	
	/**  coordinata y. */
	y;


	/**
	 * Instanzia un nuovo punto.
	 *
	 * @param x la coordinata x
	 * @param y la coordinata y
	 */
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
	
	
	/**
	 * restituisce la coordinata x
	 *
	 * @return x
	 */
	getX()
	{
		return this.x;
	}
	
	/**
	 * restituisce la coordinata y
	 *
	 * @return the y
	 */
	getY()
	{
		return this.y;
	}
	
	/**
	 * Ritorna il punto successivo nella direzione indicata.
	 *
	 * @param d la direzione stringa 'UP' 'DOWN' 'LEFT' 'RIGHT'
	 * @return il punto successivo nella direzione indicata, null se la direzione non � presvista
	 */
	shift(d)
	{
		switch(d)
		{
		case 'UP': return new Dot(this.x,this.y-1);
			
		case 'DOWN':return new Dot(this.x,this.y+1);
			
		case 'LEFT':return new Dot(this.x-1,this.y);
			
		case 'RIGHT': return new Dot(this.x+1, this.y);
		
		default: return null;
		}
	}

	
	
	equals(o)
	{
		if(o != null && (o instanceof Dot))
		{
			if(this.compareTo(o)==0) return true;
		}
		return false;
	}

	
	compareTo(o) {
		if(o==null)
		{
			throw "comparing to null Dot";
		}
		var x = o.x;
		var y = o.y;
		
		if(this.x==x&&this.y==y) return 0;
		
		if(this.y>y || (this.x>x && this.y == y))
		{
			return 1;
		}
		
		return -1;
	}

	toString()
	{
		return this.x+"-"+this.y;
	}

	/**
	 * Trova il minore tra due punti
	 */
	static Min(d1,d2) {
		var result;
		if(d1.compareTo(d2)<0) result = d1;
		else result = d2;
		return result;
	}
	
	/**
	 * Controlla se il punto si trova all'interno del campo di dimensioni w e h.
	 *
	 * @param w la larghezza del campo
	 * @param h l'altezza del campo
	 * @return true, se � compreso
	 */
	isInside(w,h)
	{
		var result = false;
		if(this.x<=w && this.x>=0)
		{
			if(this.y<=h && this.y>=0)
			 result =  true;
			 else result = false;
		}

		return result;
	}

}
