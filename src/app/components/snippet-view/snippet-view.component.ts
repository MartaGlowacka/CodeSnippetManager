import { ISnippet } from "./../../interfaces/snippet";
import { HttpClient } from "@angular/common/http";
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer2
} from "@angular/core";
import * as CodeMirror from "codemirror";
import { PARAMETERS } from "@angular/core/src/util/decorators";
import { HttpObserve } from "@angular/common/http/src/client";
import { Observable } from "rxjs";
import { SnippetsService } from "src/app/services/snippets.service";

@Component({
  selector: "snippet-view",
  templateUrl: "./snippet-view.component.html",
  styleUrls: ["./snippet-view.component.scss"]
})
export class SnippetViewComponent implements OnInit, AfterViewInit {
  @ViewChild("codeeditor") codeEditor;
  @ViewChild("param") param;

  modalVisible: boolean = false;

  tags;
  editMode: boolean = false;
  isExpanded: boolean = false;
  content: string =
    "export function averages (numbers:number[]) : number[]" +
    " {" +
    "\n" +
    " return numbers; " +
    "\n" +
    "}";

  snippetDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam  it deserunt iusto possimus ducimus nulla? Nemo similiqu t, distinctio voluptatum amet quo quis corrupti impedit at ores. veritatis hic eaque debrrupti impedit atque veniam eve";

  codeMirrorOptions;

  languageModes;
  selectedMode: string = "javascript";

  snippet = {};

  constructor(
    private renderer: Renderer2,
    private snippetService: SnippetsService
  ) {
    this.codeMirrorOptions = {
      lineNumbers: true,
      theme: "midnight",
      mode: this.selectedMode,
      lineWrapping: true,
      scrollbarStyle: "simple"
    };

    this.languageModes = [
      "javascript/typescript",
      "css/sass/less",
      "html",
      "c/c++/c#",
      "java",
      "python",
      "kotlin",
      "coffescript",
      "ruby",
      "scala",
      "php",
      "ceylon",
      "livescript"
    ];
  }

  ngOnInit() {
    this.snippet["id"] = 1;
  }

  ngAfterViewInit() {
    const editor = this.codeEditor.codeMirror;
    const doc = editor.getDoc();

    editor.options.value = this.content;

    this.getSnippet();
  }

  async getSnippet() {
    await this.snippetService.getSnippetById(2).subscribe(res => {
      this.snippet = res;
      this.tags = res.tags;
    });
  }

  editModeOnOff() {
    this.editMode = !this.editMode;

    if (this.editMode) {
      this.renderer.setAttribute(
        this.param.nativeElement,
        "contenteditable",
        "true"
      );
      this.param.nativeElement.focus();
    } else {
      this.renderer.removeAttribute(
        this.param.nativeElement,
        "contenteditable"
      );
      this.editDescription();
    }
  }

  async editDescription() {
    let description = this.param.nativeElement.innerText;

    await this.snippetService
      .editSnippetDescription(this.snippet["id"], { description: description })
      .subscribe(res => {
        console.log(res);
        this.snippet = res;
      });
  }
}
