import { ISnippet } from "./../../interfaces/snippet";
import { TagComponent } from "./../tag/tag.component";
import { AllTagsComponent } from "./../all-tags/all-tags.component";
import { SnippetFormComponent } from "./../snippet-form/snippet-form.component";
import { SnippetsService } from "src/app/services/snippets.service";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Renderer2
} from "@angular/core";
import { inject } from "@angular/core/testing";

@Component({
  selector: "search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  @Output() searchByTag = new EventEmitter();
  @Output() searchByText = new EventEmitter();
  allTags: string[];
  allSnippets: ISnippet[] = [];
  service: SnippetsService;

  constructor(private snippetService: SnippetsService) {}

  ngOnInit() {
    this.getAllTags();
  }

  async getAllTags() {
    this.snippetService.getTags().subscribe(response => {
      this.allTags = response;
    });
  }

  onChange(e) {
    this.searchByTag.emit(e.target.value);
  }

  onType(e) {
    if (e.target.value != "") {
      this.searchByText.emit(e.target.value);
    } else {
      this.searchByText.emit();
    }
  }
}
