import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import * as CodeMirror from "codemirror";

@Component({
  selector: "snippet-view",
  templateUrl: "./snippet-view.component.html",
  styleUrls: ["./snippet-view.component.scss"]
})
export class SnippetViewComponent implements OnInit, AfterViewInit {
  @ViewChild("codeeditor") codeEditor;

  tags = ["typescript", "angular", "animation"];

  isExpanded: boolean = false;

  content: string =
    "export function averages (numbers:number[]) : number[]" +
    " {" +
    "\n" +
    " return numbers; " +
    "\n" +
    "}";

  codeMirrorOptions;

  languageModes;
  selectedMode: string = "javascript";

  constructor() {
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

  ngOnInit() {}

  ngAfterViewInit() {
    const editor = this.codeEditor.codeMirror;
    const doc = editor.getDoc();

    editor.options.value = this.content;
  }
}
