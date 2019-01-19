import { Component, OnInit } from "@angular/core";

@Component({
  selector: "snippet-form",
  templateUrl: "./snippet-form.component.html",
  styleUrls: ["./snippet-form.component.scss"]
})
export class SnippetFormComponent implements OnInit {
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
}
