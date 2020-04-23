import { IIndexable } from "../iindexable";

const idToName = (id: number): string => {

	switch (id) {
		case 1: return "strength";
		case 2: return "dexerity";
		case 3: return "vitality";
		case 4: return "intelligence";
		case 5: return "mind";
		case 27: return "criticalHitRate";
		case 44: return "determination";
		case 22: return "directHitRate";
		case 21: return "defense";
		case 24: return "magicDefense";
		case 20: return "attackPower";
		case 45: return "skillSpeed";
		case 33: return "attackMagicPotency";
		case 34: return "healingMagicPotency";
		case 46: return "spellSpeed";
		case 19: return "tenacity";
		case 6: return "piety";
		case 7: return "hp";
		case 8: return "mp";
		default: return "unknownAttributeId";
	}

}

export class Attributes implements IIndexable {

	strength!: number;
	dexterity!: number;
	vitality!: number;
	intelligence!: number;
	mind!: number;

	criticalHitRate!: number;
	determination!: number;
	directHitRate!: number;

	defense!: number;
	magicDefense!: number;

	attackPower!: number;
	skillSpeed!: number;

	attackMagicPotency!: number;
	healingMagicPotency!: number;
	spellSpeed!: number;

	tenacity!: number;
	piety!: number;

	hp!: number;
	mp!: number;

	constructor(obj: any) {
		obj.forEach((e: any) => {
			const attributeName: string = idToName(e.Attribute.ID);
			Object.assign(this, {[attributeName]: e.Value});
		});
	}

}