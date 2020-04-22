import { Gear } from "./gear"

export class Gears {

	body: Gear;
	bracelets: Gear;
	earrings: Gear;
	feet: Gear;
	hands: Gear;
	head: Gear;
	legs: Gear;
	mainHand: Gear;
	necklace: Gear;
	ring1: Gear;
	ring2: Gear | null;
	soulCrystal: Gear;
	waist: Gear;

	constructor(obj: any) {

		this.body = new Gear(obj["Body"]);
		this.bracelets = new Gear(obj["Bracelets"]);
		this.earrings = new Gear(obj["Earrings"]);
		this.feet = new Gear(obj["Feet"]);
		this.hands = new Gear(obj["Hands"]);
		this.head = new Gear(obj["Head"]);
		this.legs = new Gear(obj["Legs"]);
		this.mainHand = new Gear(obj["MainHand"]);
		this.necklace = new Gear(obj["Necklace"]);
		this.ring1 = new Gear(obj["Ring1"]);
		this.ring2 = obj["Ring2"] ? new Gear(obj["Ring2"]) : null;
		this.soulCrystal = new Gear(obj["SoulCrystal"]);
		this.waist = new Gear(obj["Waist"]);
	}

}