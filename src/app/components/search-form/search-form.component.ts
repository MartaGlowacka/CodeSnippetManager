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
  allTags: string[];
  service: SnippetsService;

  tags;

  constructor() {}

  ngOnInit() {
    this.getAllTags();
  }

  async getAllTags() {}

  onChange(e) {
    this.searchByTag.emit(e.target.value);
  }
}
