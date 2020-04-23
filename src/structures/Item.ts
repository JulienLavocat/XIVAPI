import { APIResource } from "./APIResource";
import { ClassJobCategory } from "./character/ClassJobCategory";

export class Item extends APIResource {

	classJobCategory: ClassJobCategory;
	itemUICategory: ItemUICategory;
	levelEquip: number;
	levelItem: number;
	rarity: number;

	constructor(obj: any) {
		super(obj);

		this.classJobCategory = new ClassJobCategory(obj.ClassJobCategory);
		this.itemUICategory = new ItemUICategory(obj.ItemUICategory);
		this.levelEquip = obj.LevelEquip;
		this.levelItem = obj.LevelItem;
		this.rarity = obj.Rarity;
	}

}

export class ItemUICategory {
	id: string;
	name: string;

	constructor(obj: any) {
		this.id = obj.ID;
		this.name = obj.Name;
	}
}