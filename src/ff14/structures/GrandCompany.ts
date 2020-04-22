export class GrandCompany {

	rank: number;
	name: number;

	constructor(obj: any) {
		this.rank = obj["RankID"];
		this.name = obj["NameID"];
	}

}