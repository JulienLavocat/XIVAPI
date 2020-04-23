export class APIResource {

	id: number;
	name: string;
	icon: string | null;
	url: string | null;

	constructor(obj: any) {
		this.id = obj.ID;
		this.name = obj.Name;
		this.icon = obj.Icon ? "https://xivapi.com" + obj.Icon : null;
		this.url = obj.Url ? "https://xivapi.com" + obj.Url : null;
	}
}