import { Component, OnInit } from "@angular/core";

@Component({
  selector: "last-added-snippets",
  templateUrl: "./last-added-snippets.component.html",
  styleUrls: ["./last-added-snippets.component.scss"]
})
export class LastAddedSnippetsComponent implements OnInit {
  public description =
    "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.";

  tags = ["js", "animation", "transition"];

  constructor() {}

  ngOnInit() {}
}
