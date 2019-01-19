import { Component, OnInit } from "@angular/core";

@Component({
  selector: "all-snippets",
  templateUrl: "./all-snippets.component.html",
  styleUrls: ["./all-snippets.component.scss"]
})
export class AllSnippetsComponent implements OnInit {
  public description =
    "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.";

  tags = ["js", "animation", "transition"];

  constructor() {}

  ngOnInit() {}
}
