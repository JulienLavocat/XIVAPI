export class ItemUICategory {
	id: string;
	name: string;

	constructor(obj: any) {
		this.id = obj.ID;
		this.name = obj.Name;
	}
}