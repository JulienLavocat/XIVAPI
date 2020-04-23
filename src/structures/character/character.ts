import { GearSet } from "./gearset";
import { GrandCompany } from "../GrandCompany";
import { ClassJob } from "./ClassJob";
import { GuardianDeity } from "../GuardianDeity";
import { APIResource } from "../APIResource";

export class Character {
	activeClassJob: ClassJob;
	avatar: string;
	bio: string;
	classJobs: ClassJob[];
	dc: string;
	freeCompanyId: string;
	gender: number;
	genderId: number;
	grandCompany: GrandCompany;
	gearset: GearSet;
	guardianDeity: GuardianDeity;
	id: number;
	lang: string;
	minions: any[]; //TODO MINIONS
	minionsCount: number;
	minionsProgress: number;
	minionsTotal: number;
	mounts: any; //TODO MOUNTS
	mountsCount: number;
	mountsProgress: number;
	mountsTotal: number;
	name: string;
	nameday: string;
	parseDate: Date;
	portrait: string;
	pvpTeamId: number;
	race: APIResource;
	server: string;
	title: APIResource;
	titleTop: boolean;
	town: APIResource;
	tribe: APIResource;

	constructor(obj: any) {
		this.activeClassJob = new ClassJob(obj.ActiveClassJob);
		this.avatar = obj.Avatar;
		this.bio = obj.Bio;
		this.classJobs = obj.ClassJobs.map((e: any) => new ClassJob(e));
		this.dc = obj.DC;
		this.freeCompanyId = obj.FreeCompanyId;
		this.gender = obj.Gender;
		this.genderId = obj.GenderID;
		this.grandCompany = new GrandCompany(obj.GrandCompany);
		this.gearset = new GearSet(obj.GearSet);
		this.guardianDeity = new GuardianDeity(obj.GuardianDeity);
		this.id = obj.ID;
		this.lang = obj.Lang;
		this.minions = obj.Minions;
		this.minionsCount = obj.MinionsCount;
		this.minionsProgress = obj.MinionsProgress;
		this.minionsTotal = obj.MinionsTotal;
		this.mounts = obj.Mounts;
		this.mountsCount = obj.MountsCount;
		this.mountsProgress = obj.MountsProgress;
		this.mountsTotal = obj.MountsTotal;
		this.name = obj.Name;
		this.nameday = obj.Nameday;
		this.parseDate = new Date(obj.ParseDate * 1000);
		this.portrait = obj.Portrait;
		this.pvpTeamId = obj.PvPTeamId;
		this.race = new APIResource(obj.Race);
		this.server = obj.Server;
		this.title = new APIResource(obj.Title);
		this.titleTop = obj.TitleTop;
		this.town = new APIResource(obj.Town);
		this.tribe = new APIResource(obj.Tribe);
	}

	async loadAchievements() {}

	async loadMinionsAndMounts() {}

	async loadClassJobs() {}

	async loadFriends() {}

	async loadFreeCompany() {}

	async loadFreeCompanyMembers() {}

	async loadPvPTeam() {}
}
