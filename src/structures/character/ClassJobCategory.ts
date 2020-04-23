export class ClassJobCategory {
	id: number;
	name: string;

	constructor(obj: any) {
		this.id = obj.ID;
		this.name = obj.Name;
	}

}