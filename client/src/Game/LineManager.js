
import Line from './Line'
import Dot from './Dot'
/**
 * Classe LineManagerMap, implementa l'interfaccia LineManager utilizzando una TreeMap
 * come struttura dati per l'insieme di linee del campo da gioco
 * 
 * @author Loccions
 */
export default class LineManager{
	
	/**  map di linee. */
	lines;
	
	/**
	 * Instanzia un nuovo LineManager e genera automaticamente le linee
	 *
	 * @param h altezza campo
	 * @param w larghezza campo
	 */
	constructor(h,w)
	{
		this.lines = new Map();
		this.generateHor(h,w);
		this.generateVer(h,w);
		
	}

	getSize()
	{
		return this.lines.size;
	}
	
	/**
	 * genera le linee orizzontali presenti nel campo da gioco di dimensioni h e w
	 *
	 * @param h altezza campo
	 * @param w larghezza campo
	 */
	generateHor(h,w)
	{
		for(var y = 0; y < h ; y++)
		{
			for(var x = 0; x < w-1 ; x++)
			{
				var a = new Dot(x,y);
				var b = new Dot(x+1,y);
				var l = new Line(a,b);
				this.lines.set(l.toString(), l);
			}
		}
	}
	
	/**
	 * genera le linee verticali presenti nel campo da gioco di dimensioni h e w
	 *
	 * @param h altezza campo
	 * @param w larghezza campo
	 */
	generateVer(h,w)
	{
      
		for(var y = 0; y <h-1 ; y++)
		{
			for(var x = 0; x < w ; x++)
			{
				var a = new Dot(x,y);
				var b = new Dot(x,y+1);
				var l = new Line(a,b);
				this.lines.set(l.toString(),l);
			}
		}
	}
	

	draw(line,player) {
		this.lines.get(line).draw(player);
	}

	contains(line) {
	
		return this.lines.has(line.toString());
	}
	
	getAvailable() {
		
		var to_return = [];
		this.lines.forEach((value,key)=>{
			if(!value.check())
			{
				to_return.push(value);
			}
		})
		return to_return;
	}

	
	getLineStatus(line) {
		var l= this.lines.get(line.toString());
		if(l!=null)return l.check()===true;
		else
			return false;
	}


	getLineOwner(id)
	{
		var l= this.lines.get(id);
		return l.getPlayer();
	}

	
	iterator()
	{
		return this.lines.values();
	}

	

}
