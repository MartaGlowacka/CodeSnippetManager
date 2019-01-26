import { ISnippet } from "./../../interfaces/snippet";
import { SnippetFormComponent } from "./../snippet-form/snippet-form.component";
import {
  Component,
  OnInit,
  HostListener,
  AfterViewChecked
} from "@angular/core";
import { SnippetsService } from "src/app/services/snippets.service";

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
  filteredSnippets: ISnippet[] = [];

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
    this.filteredSnippets = [];

    if (e == "All") {
      return;
    }

    this.allSnippets.forEach(snippet => {
      snippet.tags.forEach(tag => {
        if (tag["name"] == e) {
          this.filteredSnippets.push(snippet);
        }
      });
    });

    this.allSnippetsBuffor = this.filteredSnippets;
  }
}
