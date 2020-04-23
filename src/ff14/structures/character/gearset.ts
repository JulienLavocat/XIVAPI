import { Attributes } from "./attributes";
import { Gears } from "./gears";
import { ClassJobData } from "./ClassJobData";

export class GearSet {

	attributes: Attributes;
	class: ClassJobData;
	gear: Gears;
	gearKey: string;
	job: ClassJobData;
	level: string;

	constructor(obj: any) {
		this.attributes = new Attributes(obj.Attributes);
		this.class = new ClassJobData(obj.Class);
		this.gear = new Gears(obj.Gear);
		this.gearKey = obj.GearKey;
		this.job = new ClassJobData(obj.Job);
		this.level = obj.Level;
	}
}