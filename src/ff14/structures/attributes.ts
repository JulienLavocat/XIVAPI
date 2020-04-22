export class Attributes {

	//1 Strength
	//2 Dexerity
	//3 Vitality
	//4 Inteligence
	//5 Mind
	//27 critical hit rate
	//44 Determination
	//22 direct hit rate
	//21 Defense
	//24 Magic defense
	//20 Attack power
	//19 Skill speed
	//33 Attack magic potency
	//34 Healing magic potency
	//46 Spell speed
	//45 Tenacity
	//6 Piety
	//7 HP
	//8 MP

	strength: number; 				//1
	dexterity: number; 				//2
	vitality: number; 				//3
	intelligence: number; 			//4
	mind: number; 					//5

	criticalHitRate: number; 		//27
	determination: number; 			//44
	directHitRate: number; 			//22

	defense: number; 				//21
	magicDefense: number;			//24

	attackPower: number; 			//20
	skillSpeed: number; 			//19

	attackMagicPotency: number; 	//33
	healingMagicPotency: number; 	//34
	spellSpeed: number; 			//46

	tenacity: number;				//45
	piety: number; 					//6

	hp: number; 					//7
	mp: number; 					//8

	constructor(obj: any) {
		this.strength 				= obj["1"];
		this.dexterity 				= obj["2"];
		this.vitality 				= obj["3"];
		this.intelligence 			= obj["4"];
		this.mind 					= obj["5"];
		this.criticalHitRate 		= obj["27"];
		this.determination 			= obj["44"];
		this.directHitRate 			= obj["22"];
		this.defense 				= obj["21"];
		this.magicDefense 			= obj["24"];
		this.attackPower 			= obj["20"];
		this.skillSpeed 			= obj["19"];
		this.attackMagicPotency 	= obj["33"];
		this.healingMagicPotency 	= obj["34"];
		this.spellSpeed 			= obj["46"];
		this.tenacity 				= obj["45"];
		this.piety 					= obj["6"];
		this.hp 					= obj["7"];
		this.mp 					= obj["8"];
	}

}