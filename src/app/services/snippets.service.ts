import { ISnippet } from "./../interfaces/snippet";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SnippetsService {
  baseUrl = "http://localhost:3000/snippets/";
  tagsUrl = "http://localhost:4001/tags/";

  constructor(private httpClient: HttpClient) {}

  getAllSnippets() {
    return this.httpClient.get<ISnippet[]>(this.baseUrl);
  }

  getSnippetById(snippetId?: number) {
    return this.httpClient.get<ISnippet>(this.baseUrl + snippetId);
  }

  editSnippet(snippetId: number, body: object) {
    return this.httpClient.patch(this.baseUrl + snippetId, body);
  }

  getTags() {
    return this.httpClient.get<any>(this.tagsUrl);
  }

  addNewTag(newTag) {
    return this.httpClient.post<any>(this.tagsUrl, newTag);
  }

  editTag(tagId: number, body: object) {
    return this.httpClient.patch<any>(this.tagsUrl + tagId, body);
  }
}
