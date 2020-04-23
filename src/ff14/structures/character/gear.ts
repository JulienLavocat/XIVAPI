import { Item } from "../Item";

export class Gear {

	creator: string;
	dye: string;
	item: Item;
	materia: any[];
	mirage: string;

	constructor(obj: any) {
		this.creator = obj.Creator;
		this.dye = obj.Dye;
		this.item = new Item(obj.Item);
		this.materia = obj.Materia;
		this.mirage = obj.Mirage;
	}

}