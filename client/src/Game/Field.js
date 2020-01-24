
import LineManager from './LineManager'
import BoxManager from './BoxManager'
import Line from './Line'
import Dot from './Dot'
/**
 * La classe Field implementa l'interfaccia Field utilizzando delle Map<K,V> come strutture dati per linee e quadrati.
 *
 * @author Loccions
 */
export default class Field{
	
	/**  dimensione del campo di gioco. */
	h;w;
	
	/**  quadrati del campo di gioco. */
	boxes; 
	
	/** linee del campo da gioco */
	lines;
	
	/**
	 * Istanzia un nuovo MapField.
	 *
	 * @param h l'altezza
	 * @param w la larghezza
	 */
	constructor(h, w) {
		this.h=h;
		this.w=w;
		this.lines = new LineManager(h,w);
		this.boxes = new BoxManager(h,w);
	}
	


	

	/**
	 * Controlla lo stato di una linea
	 *
	 * @param a punto a della linea
	 * @param b punto b della linea
	 * @return true de � tracciata
	 */
	checkLine(a,b)
	{
		return this.lines.getLineStatus(new Line(a,b));
	}
	
	
	/**
	 * Controlla se una linea appena tracciata ha completato dei quadrati.
	 *
	 * @param id la stringa linea appena tracciata
	 * @param player il giocatore che ha tracciato la linea
	 * @return il numero di quadrati completati
	 */
	isBoxComplete(id,player) 
	{
		var line = this.parseLine(id);
		var a = line.getA();
		var b = line.getB();
		if(!line.isVertical())
		{
			return this.checkHorBoxes(a,b,player);
		}
		else
		{
			return this.checkVerBoxes(a,b,player);
		}

	}
	
	/**
	 * Controlla i quadrati adiacenti ad una linea orizzontale.
	 *
	 * @param a punto a della linea
	 * @param b punto b della linea
	 * @param player il giocatore che ha tracciato la linea
	 * @return il numero di quadrati completati 
	 */
	checkHorBoxes(a , b , player)
	{
		//Hor line
		var topleft = a.shift('UP');
		var topright = b.shift('UP');
		var btmleft = a.shift('DOWN');
		var btmright = b.shift('DOWN');
		var result = 0;

		if(this.checkBox(a,topleft,topright,b))
		{
			this.fillBox(a,topleft,topright,b,player);
			result++;
		}
		if(this.checkBox(a,btmleft,btmright,b ))
		{
			this.fillBox(a,btmleft,btmright,b,player);
			result++;
		}
		return result;
	}
	
	/**
	 * Controlla i quadrati adiacenti ad una linea verticale.
	 *
	 * @param a punto a della linea
	 * @param b punto b della linea
	 * @param player il giocatore che ha tracciato la linea
	 * @return il numero di quadrati completati
	 */
	checkVerBoxes(a,b,player)
	{
		
			//ver line
			var topleft = a.shift('LEFT');
			var topright = a.shift('RIGHT');
			var btmleft = b.shift('LEFT');
			var btmright = b.shift('RIGHT');
			var result = 0;
			if( this.checkBox(a,topleft,btmleft,b)) 
			{
				this.fillBox(a,topleft,btmleft,b,player);
				result++;
			}
            if(this.checkBox(a,topright,btmright,b ))
            {
            	this.fillBox(a,topright,btmright,b,player);
				result++;
            }
			return result;
	}
	
	/**
	 * Riempie un quadrato
	 *
	 * @param a punto a del quadrato
	 * @param b punto b del quadrato
	 * @param c punto c del quadrato
	 * @param d punto d del quadrato
	 * @param player il giocatore che ha completato il quadrato
	 */
	fillBox(a,b,c,d ,player)
	{
		var root = Dot.Min(a,b,c,d);
		this.boxes.fillBox(root,player);
	}
	
	
	/**
	 * Controlla se il quadrato � completo.
	 *
	 * @param a punto a del quadrato
	 * @param b punto b del quadrato
	 * @param c punto c del quadrato
	 * @param d punto d del quadrato
	 * @return true, se tutti e quattro i lati sono tracciati
	 */
	checkBox(a, b, c, d)
	{
		if(a.isInside(this.w,this.h)&&b.isInside(this.w,this.h)&&c.isInside(this.w,this.h)&&d.isInside(this.w,this.h))
		return this.checkLine(a,b)&&this.checkLine(b,c)&&this.checkLine(c,d)&&this.checkLine(d,a);
		else return false;
	}
	
	
	getAvailableLines() {
		
		return this.lines.getAvailable();
	}
	
	getWidth()
	{
		return this.w;
	}
	
	getHeight()
	{
		return this.h;
	}
	
	getLines() {
		return this.lines.iterator();
	}

	getLinePlayer(id)
	{
		return this.lines.getLineOwner(id);
	}

	getBoxes()
	{
		return this.boxes.iterator();
	}

	getBoxPlayer(id)
	{
		return this.boxes.getBoxStatus(id);
	}
	
	isFull()
	{
		return this.boxes.getFilledBoxesCount() === this.boxes.getBoxesCount();
	}

	drawLine(line,player) 
	{	
	   this.lines.draw(line,player);
	   return this.isBoxComplete(line,player);
	}

	clear() {
		this.lines = new LineManager(this.h,this.w);
		this.boxes = new BoxManager(this.h,this.w);
	}

	parseLine(id)
	{
		var coords = id.split(" ");

		var xy = coords[0].split('-');
		var x = parseInt(xy[0],10);
		var y = parseInt(xy[1],10);
		var a = new Dot(x,y);

		 xy = coords[1].split('-');
		 x = parseInt(xy[0],10);
		 y = parseInt(xy[1],10);
		var b = new Dot(x,y);
		return new Line(a,b);
	}
}
