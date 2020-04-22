export class Addon {

	id: string;
	icon: string;
	name: string;
	url: string;

	constructor(obj: any) {
		this.id = obj.ID;
		this.icon = obj.Icon;
		this.name = obj.Name;
		this.url = obj.Url;
	}

}