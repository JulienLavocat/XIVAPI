import { ClassJobCategory } from "./ClassJobCategory";
import { APIResource } from "../APIResource";

export class ClassJobData extends APIResource {

	abbreviation: string;
	classJobCategory: ClassJobCategory | null;

	constructor(obj: any) {
		super(obj);
		this.abbreviation = obj.Abbreviation;
		this.classJobCategory = obj.ClassJobCategory ? new ClassJobCategory(obj.ClassJobCategory) : null;
	}

}