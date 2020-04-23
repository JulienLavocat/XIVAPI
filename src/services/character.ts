import { HTTPUtils } from "./http";
import { Character } from "../structures/character/character";
import { SearchResults } from "../structures/searchResults";
import { CharacterSearch } from "../structures/character/characterSearch";

export class Characters {

	private http: HTTPUtils;

	constructor(http: HTTPUtils) {
		this.http = http;
	}

	async get(id: string | number): Promise<Character> {
		return this.http.get("/character/" + id + "?data=CJ&extended=true")
			.then(r => this.toCharacter(r));
	}

	async search(name: string, params: CharacterSearchParams = {server: "", page: 1}): Promise<any> {

		if(!params.server)
			params.server = "";
		if(!params.page)
			params.page = 1;

		const queryPath = `/character/search?name=${name}&server=${params.server}&page=${params.page}`;

		return this.http.get(queryPath)
			.then(r => new SearchResults<CharacterSearch>(this.http, queryPath, CharacterSearch, r));
	}

	private toCharacter(response: any): Character {
		return new Character(response.Character);
	}

}

interface CharacterSearchParams {
	server?: string;
	page?: number;
}