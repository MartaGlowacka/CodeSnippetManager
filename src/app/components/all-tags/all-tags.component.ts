import { SnippetsService } from "./../../services/snippets.service";
import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "all-tags",
  templateUrl: "./all-tags.component.html",
  styleUrls: ["./all-tags.component.scss"]
})
export class AllTagsComponent implements OnInit {
  allTags;

  constructor(
    private snippetService: SnippetsService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getAllTags();
  }

  async getAllTags() {
    await this.snippetService.getTags().subscribe(
      response => {
        this.allTags = response;
      },
      error => {
        console.error("Cant make req", error);
      }
    );
  }

  showTagColor(e, tag) {
    this.renderer.setStyle(e, "background", tag.color);
  }

  backToInitialColor(e) {
    this.renderer.setStyle(e, "background", "wheat");
  }
}