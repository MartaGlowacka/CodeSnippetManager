import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  languages = [
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

  constructor() {}

  ngOnInit() {}
}
