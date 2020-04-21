import { GearSet } from "./gearset";
import { GrandCompany } from "./GrandCompany";

export class Character {

	activeClassJob: string;
	avatar: string;
	bio: string;
	classJobs: any[];
	dc: string;
	freeCompanyId: string;
	gender: number;
	grandCompany: GrandCompany;
	gearset: GearSet;
	guardianDeity: number;
	id: string;
	lang: string;
	minions: any[];	//TODO MINIONS
	mounts: any;	//TODO MOUNTS
	name: string;
	nameday: string;
	parseDate: Date;
	portrait: string;
	pvpTeamId: number;
	race: number;
	server: string;
	title: number;
	titleTop: boolean;
	town: number;
	tribe: number;

	constructor(obj: any) {
		this.activeClassJob = obj["ActiveClassJob"];
		this.avatar = obj["Avatar"];
		this.bio = obj["Bio"];
		this.classJobs = obj["ClassJobs"];
		this.dc = obj["DC"];
		this.freeCompanyId = obj["FreeCompanyId"];
		this.gender = obj["Gender"];
		this.grandCompany = new GrandCompany(obj["GrandCompany"]);
		this.gearset = new GearSet(obj["GearSet"]);
		this.guardianDeity = obj["GuardianDeity"];	//TODO
		this.id = obj["ID"];
		this.lang = obj["Lang"];
		this.minions = obj["Minions"];	//TODO
		this.mounts = obj["Mounts"];
		this.name = obj["Name"];
		this.nameday = obj["Nameday"];
		this.parseDate = new Date(obj["ParseDate"] * 1000);
		this.portrait = obj["Portrait"];
		this.pvpTeamId = obj["PvPTeamId"];
		this.race = obj["Race"];
		this.server = obj["Server"];
		this.title = obj["Title"];
		this.titleTop = obj["TitleTop"];
		this.town = obj["Town"];
		this.tribe = obj["Tribe"];
	}

}