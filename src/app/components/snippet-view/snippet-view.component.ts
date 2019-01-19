import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer2
} from "@angular/core";
import * as CodeMirror from "codemirror";
import { PARAMETERS } from "@angular/core/src/util/decorators";

@Component({
  selector: "snippet-view",
  templateUrl: "./snippet-view.component.html",
  styleUrls: ["./snippet-view.component.scss"]
})
export class SnippetViewComponent implements OnInit, AfterViewInit {
  @ViewChild("codeeditor") codeEditor;
  @ViewChild("param") param;

  tags = ["typescript", "angular", "animation"];
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

  constructor(private renderer: Renderer2) {
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
    console.log(this.snippetDesc);
  }

  ngAfterViewInit() {
    const editor = this.codeEditor.codeMirror;
    const doc = editor.getDoc();

    editor.options.value = this.content;
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
      this.getEditedDescription();
    }
  }

  // potrzebna metoda http
  getEditedDescription() {
    let description = this.param.nativeElement.innerText;
    this.snippetDesc = description;

    // let dupa = localStorage.getItem(this.param.nativeElement);
  }
}
