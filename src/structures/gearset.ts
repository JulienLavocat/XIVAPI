import { Attributes } from "./attributes";
import { Gears } from "./gears";

export class GearSet {

	attributes: Attributes;
	classId: string;
	gear: Gears;
	gearKey: string;
	jobId: string;
	level: string;

	constructor(obj: any) {
		this.attributes = new Attributes(obj.Attributes);
		this.classId = obj["ClassID"];
		this.gear = new Gears(obj["Gear"]);
		this.gearKey = obj["GearKey"];
		this.jobId = obj["JobID"];
		this.level = obj["Level"];
	}
}