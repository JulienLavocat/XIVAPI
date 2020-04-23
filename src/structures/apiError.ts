export class XIVAPIError extends Error {

	ex: string;
	hash: string;
	subject: string;

	constructor(obj: any) {
		super(obj.Message);

		this.name = "XIVAPI Error";
		this.subject = obj.Subject;
		this.ex = obj.Ex;
		this.hash = obj.Hash;
	}

}