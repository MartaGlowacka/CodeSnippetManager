import { SnippetsService } from "./../../services/snippets.service";
import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  HostListener
} from "@angular/core";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";

@Component({
  selector: "all-tags",
  templateUrl: "./all-tags.component.html",
  styleUrls: ["./all-tags.component.scss"]
})
export class AllTagsComponent implements OnInit {
  @ViewChild("f") form;

  allTags;
  createdTagName;
  createdTagColor;
  editMode: boolean = false;
  editedElement;

  tagToEdit;

  @HostListener("click", ["$event.currentTarget"])
  onClickOutside() {
    if (!this.editMode && !this.editedElement) {
      return;
    } else if (
      this.editedElement != event.target &&
      event.target["localName"] != "input"
    ) {
      this.renderer.addClass(this.editedElement, "shake-horizontal");

      setTimeout(() => {
        this.renderer.removeClass(this.editedElement, "shake-horizontal");
      }, 800);
    }
  }

  constructor(
    private snippetService: SnippetsService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getAllTags();
  }

  getHeader() {
    if (!this.editMode) {
      return "Create new tag";
    } else {
      return "Edit tag";
    }
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

  async addNewTag() {
    let newTag = {
      name: this.createdTagName,
      color: this.createdTagColor
    };

    if (!this.editMode) {
      await this.snippetService.addNewTag(newTag).subscribe(() => {
        this.getAllTags();
      });
    } else {
      await this.snippetService
        .editTag(this.tagToEdit.id, {
          name: this.createdTagName,
          color: this.createdTagColor
        })
        .subscribe(() => {
          this.getAllTags();
        });
    }

    this.form.reset();
    this.editMode = false;
  }

  editModeOn(tag, e) {
    let tagsElements = document.querySelectorAll(".tag-container");

    if (e.currentTarget.classList[1] != "editMode") {
      this.renderer.addClass(e.currentTarget, "editMode");
      this.editedElement = e.currentTarget;

      for (let i = 0; i < tagsElements.length; i++) {
        if (!tagsElements[i].classList[1]) {
          this.renderer.addClass(tagsElements[i], "disableOnEdit");
        }
      }
    } else {
      this.renderer.removeClass(e.currentTarget, "editMode");
      this.editedElement = undefined;

      for (let i = 0; i < tagsElements.length; i++) {
        this.renderer.removeClass(tagsElements[i], "disableOnEdit");
      }
    }

    this.editMode = !this.editMode;
    this.tagToEdit = tag;

    if (!this.editMode) {
      this.form.reset();
    } else {
      this.createdTagColor = tag.color;
      this.createdTagName = tag.name;
    }
  }
}
