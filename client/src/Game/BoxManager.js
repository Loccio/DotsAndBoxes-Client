import Dot from './Dot';
import Box from './Box';
/**
 * La classe BoxManagerMap, la sua responsabilit� � quella di gestire l'insieme di quadrati presenti nel campo da gioco.
 * Implementa l'interfaccia BoxManager utilizzando come struttura dati una TreeMap dove ogni Box 
 * � identificato dal suo punto radice, il quale corrisponde al punto minore tra i quattro presenti nel quadrato.
 * La classe Dot definisce in base a quali parametri un punto viene considerato minore di un altro nel campo da gioco.
 * 
 * @author Loccions
 */
export default  class BoxManager{


	/** i quadrati del campo da gioco */
	boxes;
	
	/** contatore di quadrati completi */
	box_count;
	
	/**
	 * Istanzia un nuovo oggetto BoxManagerMap, l'insieme di quadtrati contenuti viene generato automaticamente
	 * in base alle dimensioni del campo da gioco.
	 *
	 * @param h l'altezza del campo
	 * @param w la larghezza del campo
	 */
	constructor(h,w) {
		
		this.boxes = this.generateBoxes(h,w);
		this.box_count = 0;
	}
	
	/**
	 * genera tutti i quadrati che compongono il campo di gioco.
	 *
	 * @param h l'altezza del campo
	 * @param w la larghezza del campo
	 * @return la TreeMap contenente i quadrati del campo di gioco
	 */
	 generateBoxes(h,w) {
		var bx = new Map();
		for(var y = 0; y< h-1 ; y++)
		{
			for(var x = 0 ; x< w-1; x++)
			{
				var a =new Dot(x,y);
				var box = new Box(a);
				bx.set(a.toString(), box);
			}
		}
		return bx;
	}
	
	/**
	 * Fill box.
	 *
	 * @param a the dot a
	 * @param player the player number
	 */
	fillBox(a,player) {
		this.boxes.get(a.toString()).Fill(player);
		this.box_count++;
	}
	

	getBoxStatus(a)
	{
		return this.getBox(a).getOwner();
	}
	

	getBox(a) {
		return this.boxes.get(a);
	}



	iterator() {
		 return this.boxes.values();
	}


	getFilledBoxesCount() {

		return this.box_count;
	}


	getBoxesCount() {
		return this.boxes.size;
	}

	

	

}
