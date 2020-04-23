export class CharacterSearch {

	avatar: any;
	feastMatches: any;
	id: any;
	lang: any;
	name: any;
	rank: any;
	rankIcon: any;
	server: any;

	constructor(obj: any) {
		this.avatar = obj.Avatar;
		this.feastMatches = obj.FeastMatches;
		this.id = obj.ID;
		this.lang = obj.Lang;
		this.name = obj.Name;
		this.rank = obj.Rank;
		this.rankIcon = obj.RankIcon;
		this.server = obj.Server;
	}

}