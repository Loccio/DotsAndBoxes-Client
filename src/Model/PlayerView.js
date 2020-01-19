import Line from './Line'
/**
 *La Classe PlayerView rappresenta il punto di vista di un giocatore rispetto al campo da gioco, la sua responsabilit� 
 *� quella di fornire al giocatore tutti i dati necessari a giocare senza dover interagire direttamente con il campo da gioco.
 * 
 * @author Loccions
 */
export default class PlayerView {
	
	/** dimensioni del campo. */
	w;h;
	
	/**  linee disponibili da tracciare. */
	possible_moves;

	/**
	 * Instanzia un nuovo FieldView.
	 *
	 * @param field il campo da gioco
	 */
	constructor(field) {
		this.possible_moves = field.getAvailableLines();
		this.w = field.getWidth();
		this.h = field.getHeight();
	}

	/**
	 * Restituisce la larghezza del campo.
	 *
	 * @return la larghezza
	 */
	getWidth() {
		
		return this.w;
	}

	/**
	 * Restituisce l'altezza del campo.
	 *
	 * @return l'altezza
	 */
	getHeight() {
	
		return this.h;
	}

	/**
	 * Restituisce le linne disponibili da tracciare.
	 *
	 * @return le linee tracciabili
	 */
	getMoves() {

		return this.possible_moves;
	}

	/**
	 * Imposta l'insieme di linee tracciabili.
	 *
	 * @param moves Collection di linee
	 */
	setMoves(moves) {
		
	    this.possible_moves = moves;
	}
	
	/**
	 * Restituisce l'insieme di linee non tracciate rappresentano l'ultima linea per completare un quadrato
	 *
	 * @return Collection<Line>
	 */
	getLastEdges()
	{
		var to_return = [];
		this.possible_moves.forEach(e => {
			if(this.evaluateMove(e)==3)
			{
			    to_return.push(e);
			}
		}
		);

		return to_return;
	}
	
	/**
	 * Restituisce l'insieme di linee non tracciate escluse quelle
	 * che fanno parte di quadrati con due lati gi� tracciati
	 *
	 * @return Collection<Line>
	 */
	getNonThirdEdges()
	{
		return this.possible_moves.filter(e => this.evaluateMove(e)!=2);
	}
	
	
	/**
	 * Valuta una linea non tracciata e restituisce un int come risultato, 
	 * il risultato rappresenta il numero di lati gi� tracciati del quadrato a cui appartiene la linea,
	 * tra i due quadrati adiacenti viene scelto quello col maggior numero di lati tracciati come risultato.
	 *
	 * @param line la linea da tracciare
	 * @return int risultato della valutazione, 
	 * 0 sarebbe prima linea tracciata del quadrato, 
	 * 1 il quadrato ha gi� una linea tracciata,
	 * 2 sarebbe il terzo lato tracciato del quadrato,
	 * 3 completerebbe il quadrato
	 */
	evaluateMove(line) {
		var val1 = this.checkFirstBox(line);
		var val2 = this.checkSecondBox(line);
		return val1>val2?val1:val2;
	}

	/**
	 * Valuta una linea a seconda della condizione del quadrato ad essa adiacente.
	 * quadrato inferiore se la linea � orizzontale
	 * quadrato a destra se la linea � verticale
	 *
	 * @param line la linea da valutare
	 * @return  int risultato della valutazione
	 */
	checkSecondBox(line) {
		var result = 0;
		var a,b,c,d;
		a = line.getA();
		b = line.getB();
		if(!line.isVertical())
		{
			d = a.shift('DOWN');
			c = b.shift('DOWN');
		}
		else
		{
			d = a.shift('RIGHT');
			c = b.shift('RIGHT');
		}
		if(!this.contains(new Line(b,c))) result++;
		if(!this.contains(new Line(c,d))) result++;
		if(!this.contains(new Line(d,a))) result++;
		
	    return result;
	}

	/**
	 * Valuta una linea a seconda della condizione del quadrato ad essa adiacente.
	 * quadrato superiore se la linea � orizzontale
	 * quadrato a sinistra se la linea � verticale
	 *
	 * @param line la linea da valutare
	 * @return  int risultato della valutazione
	 */
	checkFirstBox(line) {
		var result = 0;
		var a,b,c,d;
		a = line.getA();
		b = line.getB();
		if(!line.isVertical())
		{
			d = a.shift('UP');
			c = b.shift('UP');
		}
		else
		{
			d = a.shift('LEFT');
			c = b.shift('LEFT');		
		}
		
		if(!this.contains(new Line(b,c))) result++;
		if(!this.contains(new Line(c,d))) result++;
		if(!this.contains(new Line(d,a))) result++;
		
		return result;
	}

	/**
	 * Controlla se la linea � contenuta nell'insieme di linee tracciabili
	 *
	 * @param line la linea da controllare
	 * @return true se la linea � contenuta tra quelle non tracciate, false se la linea � gi� tracciata o non fa parte del campo da gioco
	 */
	contains(line) {
		var maxW = this.w-1;
		var maxH = this.h-1;
		if(line.getA().isInside(maxW, maxH)&&line.getB().isInside(maxW, maxH)) {return this.possibleMovesIncludes(line);}
		return true;
	}

	possibleMovesIncludes(line)
	{
		var result = false;
		this.possible_moves.forEach(e=>{
			if(e.toString()==line.toString()) return (result = true);
		})
		return result;
	}

	/**
	 * Aggiorna la PlayerView 
	 *
	 * @param field il campo da gioco
	 */
	update(field) {
		this.possible_moves = field.getAvailableLines();
		this.w = field.getWidth();
		this.h = field.getHeight();
	}

}
