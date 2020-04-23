import { ClassJobData } from "./ClassJobData";

export class ClassJob {

	class: ClassJobData;
	expLevel: number;
	expLevelMax: number;
	expLevelTogo: number;
	isSpecialised: boolean;
	job: ClassJobData;
	level: number;
	name: string;

	constructor(obj: any) {
		this.class = new ClassJobData(obj.Class);
		this.expLevel = obj.ExpLevel;
		this.expLevelMax = obj.ExpLevelMax;
		this.expLevelTogo = obj.ExpLevelTogo;
		this.isSpecialised = obj.IsSpecialised;

		this.job = new ClassJobData(obj.Job);
		this.level = obj.Level;
		this.name = obj.Name;
	}


}