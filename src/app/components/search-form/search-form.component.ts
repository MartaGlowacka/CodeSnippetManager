import { SnippetsService } from "src/app/services/snippets.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  @Output() searchByTag = new EventEmitter();
  allTags: string[];

  constructor(private snippetService: SnippetsService) {}

  ngOnInit() {
    this.getAllTags();
  }

  async getAllTags() {
    await this.snippetService.getTags().subscribe(
      response => {
        this.allTags = response;
      },
      e => {
        console.error("Cant make req.", e);
      }
    );
  }

  onChange(e) {
    this.searchByTag.emit(e.target.value);
  }
}
