import { HTTPUtils } from "./http";
import { SearchResults } from "../structures/searchResults";
import { transformers } from "../structures/content/transformers";


export class Content<T> {

	name: string;
	private http: HTTPUtils;
	private type: any;

	constructor(http: HTTPUtils, name: string, type: any) {
		this.http = http;
		this.name = name;
		this.type = type;
	}

	async list(limit = 100, ids: number[] = []) {
		const queryPath = `/${this.name}?limit=${limit}&ids=${ids}`;
		return this.http.get(queryPath)
			.then(r => new SearchResults<T>(this.http, queryPath, this.type, r));
	}

	async get(id: number) {
		return this.http.get(name + "/" + id);
	}

}