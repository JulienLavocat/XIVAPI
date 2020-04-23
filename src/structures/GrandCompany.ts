import { APIResource } from "./APIResource";

export class GrandCompany {

	rank: APIResource;
	company: APIResource;

	constructor(obj: any) {
		this.rank = new APIResource(obj.Rank);
		this.company = new APIResource(obj.Company);
	}

}