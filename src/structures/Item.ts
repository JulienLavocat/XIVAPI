import { APIResource } from "./APIResource";
import { ClassJobCategory } from "./character/ClassJobCategory";
import { ItemUICategory } from "./ItemUICategory";

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