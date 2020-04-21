export class Gear {

	creator: string;
	dye: string;
	id: string;
	materia: any[];
	mirage: string;

	constructor(obj: any) {
		this.creator = obj["Creator"];
		this.dye = obj["Dye"];
		this.id = obj["ID"];
		this.materia = obj["Materia"];
		this.mirage = obj["Mirage"];
	}

}