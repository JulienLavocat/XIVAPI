import { HTTPUtils } from "../services/http";

export class SearchResults<T> {

	currentPage!: number;
	pageTotal!: number;
	resultsOnPage!: number;
	resultsPerPage!: number;
	resultsTotal!: number;
	results!: T[];

	private path: string;
	private type: any;
	private http: HTTPUtils;

	constructor(http: HTTPUtils, path: string, type: any, obj: any) {
		this.path = path;
		this.type = type;
		this.http = http;
		this.updateObject(obj);
	}

	public next(): Promise<SearchResults<T>> {
		return this.goTo(this.currentPage + 1);
	}

	public previous(): Promise<SearchResults<T>> {
		return this.goTo(this.currentPage - 1);
	}

	public async goTo(page: number): Promise<SearchResults<T>> {
		const res = await this.http.get(this.path + "&page=" + page);
		this.updateObject(res);
		return this;
	}

	private updateObject(obj: any) {
		const pagination = obj.Pagination;

		this.currentPage = pagination.Page;
		this.pageTotal = pagination.PageTotal;
		this.resultsOnPage = pagination.Results;
		this.resultsPerPage = pagination.ResultsPerPage;
		this.resultsTotal = pagination.ResultsTotal;

		this.results = this.type ? obj.Results.map((e: any) => new this.type(e)) : obj.Results;
	}

}