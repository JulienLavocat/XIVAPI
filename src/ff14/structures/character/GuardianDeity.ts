import { APIResource } from "../APIResource";

export class GuardianDeity extends APIResource {

	guardianDeity: string | null;


	constructor(obj: any) {
		super(obj);
		this.guardianDeity = obj.GuardianDeity;	//TODO
	}


}