import { ISnippet } from "./../../interfaces/snippet";
import { SnippetFormComponent } from "./../snippet-form/snippet-form.component";
import { Component, OnInit } from "@angular/core";
import { SnippetsService } from "src/app/services/snippets.service";
import { SlicePipe } from "@angular/common";

@Component({
  selector: "all-snippets",
  templateUrl: "./all-snippets.component.html",
  styleUrls: ["./all-snippets.component.scss"]
})
export class AllSnippetsComponent implements OnInit {
  public description =
    "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.";

  tags = ["js", "animation", "transition"];

  allSnippets: ISnippet[];
  allSnippetsBuffor: ISnippet[];
  filteredSnippetsByTag: ISnippet[] = [];
  filteredSnippetsBytext: ISnippet[] = [];

  constructor(private snippetService: SnippetsService) {}

  ngOnInit() {
    this.getAllSnippets();
  }

  async getAllSnippets() {
    await this.snippetService.getAllSnippets().subscribe(
      response => {
        this.allSnippets = response;
        this.allSnippetsBuffor = this.allSnippets.slice();
      },
      error => {
        console.log("Cant make req", error);
      }
    );
  }

  searchByTag(e: string) {
    this.allSnippetsBuffor = this.allSnippets.slice();
    this.filteredSnippetsByTag = [];

    if (e == "All") {
      return;
    }

    let tableToFilter = this.filteredSnippetsBytext.length
      ? this.filteredSnippetsBytext
      : this.allSnippets;

    tableToFilter.forEach(snippet => {
      snippet.tags.forEach(tag => {
        if (tag["name"] == e) {
          this.filteredSnippetsByTag.push(snippet);
        }
      });
    });

    this.allSnippetsBuffor = this.filteredSnippetsByTag;
  }

  searchByText(e: string) {
    this.allSnippetsBuffor = this.allSnippets.slice();
    this.filteredSnippetsBytext = [];

    let tableToFilter = this.filteredSnippetsByTag.length
      ? this.filteredSnippetsByTag
      : this.allSnippets;

    tableToFilter.forEach(snippet => {
      if (
        snippet.title.toLowerCase().includes(e) ||
        snippet.description.toLowerCase().includes(e)
      ) {
        this.filteredSnippetsBytext.push(snippet);
      }
    });

    if (e == undefined && this.filteredSnippetsByTag.length) {
      this.allSnippetsBuffor = this.filteredSnippetsByTag;
    } else if (e == undefined) {
      this.allSnippetsBuffor = this.allSnippets.slice();
    } else {
      this.allSnippetsBuffor = this.filteredSnippetsBytext;
    }
  }
}
